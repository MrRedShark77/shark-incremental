const ICONS = {
    'radioactive' : '&#xe000;',
    'biohazard' : '&#xe001;',
    'benzene' : '&#xe002;',
    'virus' : '&#xe003;',
    'up-arrow' : '&#xe004;',
    'down-arrow' : '&#xe005;',
    'luck' : '&#xe006;',
    'heart' : '&#xe007;',
}

function icon(id) { return `<icon>${ICONS[id]}</icon>` }