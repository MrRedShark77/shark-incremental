function sumBase(x,a) {
    return Decimal.pow(a,x).sub(1).div(Decimal.sub(a,1))
}
function revSumBase(x,a) {
    return Decimal.mul(x,Decimal.sub(a,1)).add(1).log(a).floor()
}

Decimal.prototype.sumBase = function(a,rev=false) { return rev ? revSumBase(this,a) : sumBase(this,a) }

function powPO(x,b,rev=false) {
    if (Decimal.lt(b,1.4285714287176406e-8)) {
        return rev ? Decimal.ln(x).div(b) : Decimal.mul(x,b).exp();
    } else {
        return rev ? Decimal.log(x,Decimal.add(b,1)) : Decimal.add(b,1).pow(x);
    }
}

Decimal.prototype.powPO = function(x,rev) { return powPO(this,x,rev) }

function sumBasePO(x,a,rev=false) {
    if (Decimal.lte(a,0)) return x
    return rev ? Decimal.mul(x,a).add(1).powPO(a,true) : powPO(x,a).sub(1).div(a)
}

Decimal.prototype.sumBasePO = function(x,rev) { return sumBasePO(this,x,rev) }

function calcLevelBonus(l,l0,b) {
    var r = Decimal.div(l,l0).floor(), c = Decimal.sub(l,r.mul(l0))
    return sumBase(r,b,l0).add(Decimal.pow(b,r).mul(c))
}

function expPow(a,b) { return Decimal.lt(a,1) ? Decimal.pow(a,b) : Decimal.pow(10,Decimal.max(a,1).log10().add(1).pow(b).sub(1)) }
function revExpPow(a,b) { return Decimal.pow(10,Decimal.max(a,1).log10().add(1).root(b).sub(1)) }

Decimal.prototype.clone = function() {
    return this
}

Decimal.prototype.modular=Decimal.prototype.mod=function (other){
    other=E(other);
    if (other.eq(0)) return E(0);
    if (this.sign*other.sign==-1) return this.abs().mod(other.abs()).neg();
    if (this.sign==-1) return this.abs().mod(other.abs());
    return this.sub(this.div(other).floor().mul(other));
};

Decimal.prototype.softcap = function (start, power, mode, dis=false) {
    var x = this.clone()
    if (!dis&&x.gte(start)) {
        if ([0, "pow"].includes(mode)) x = x.div(start).max(1).pow(power).mul(start)
        if ([1, "mul"].includes(mode)) x = x.sub(start).div(power).add(start)
        if ([2, "exp"].includes(mode)) x = expPow(x.div(start), power).mul(start)
        if ([3, "log"].includes(mode)) x = x.div(start).log(power).add(1).mul(start)
    }
    return x
}

function overflow(number, start, power, meta=1){
    if(isNaN(number.mag))return new Decimal(0);
    start=Decimal.iteratedexp(10,meta-1,1.0001).max(start);
    if(number.gte(start)){
        let s = start.iteratedlog(10,meta)
        number=Decimal.iteratedexp(10,meta,number.iteratedlog(10,meta).div(s).pow(power).mul(s));
    }
    return number;
}

Decimal.prototype.overflow = function (start, power, meta) { return overflow(this.clone(), start, power, meta) }

function tetraflow(number,start,power) { // EXPERIMENTAL FUNCTION - x => 10^^((slog10(x)-slog10(s))*p+slog10(s))
    if(isNaN(number.mag))return new Decimal(0);
    start=E(start);
    if(number.gte(start)){
        let s = start.slog(10)
        // Fun Fact: if 0 < number.slog(10) - start.slog(10) < 1, such like overflow(number,start,power,start.slog(10).sub(1).floor())
        number=Decimal.tetrate(10,number.slog(10).sub(s).mul(power).add(s))
    }
    return number;
}

Decimal.prototype.addTP = function (val) {
    var e = this.clone()
    return Decimal.tetrate(10, e.slog(10).add(val))
}

function preventNaNDecimal(x,def) {
    return isNaN(x.mag) ? E(def ?? 0) : x
}

Math.logBase = function (x, base) {
    return Math.log(x) / Math.log(base)
}

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
        var m = Math.floor(num / lookup[i]);
        roman += i.repeat(m);
        num -= m*lookup[i];
    }
    return roman;
}