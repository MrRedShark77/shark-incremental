const ICONS = {
    'radioactive' : '&#xe000;',
    'biohazard' : '&#xe001;',
    'benzene' : '&#xe002;',
    'virus' : '&#xe003;',
}

function icon(id) { return `<icon>${ICONS[id]}</icon>` }