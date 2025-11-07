var el_tooltips = new Map();

var tooltips, hover_tooltip, tooltip_div;

function updateTooltip(el_id, html) {
    var elem = el_id instanceof HTMLElement ? el_id : document.getElementById(el_id)

    if (elem) {
        if (!el_tooltips.has(elem)) {
            elem.onmouseenter = function() {
                hover_tooltip = elem
    
                updateTooltips()
            }
    
            elem.onmouseleave = function() {
                hover_tooltip = null
    
                updateTooltips()
            }
        }

        el_tooltips.set(elem, html)
    }
}

const TOOLTIP_CONFIG = {
    padding_x: 5,
    padding_y: 5,
    def_align: 'center',
    def_direction: 'vertical',
    def_text_align: 'center',
}

function updateTooltips() {
    let style = tooltip_div.style

    if (hover_tooltip) {
        let f = el_tooltips.get(hover_tooltip) ?? '';
        let attr_html = typeof f === 'function' ? f() : f;

        if (attr_html == '') {
            style.display = 'none';
            style.top = 0;
            style.left = 0;
        } else {
            style.display = 'block';

            let attr_align = hover_tooltip.getAttribute('tooltip-align') || TOOLTIP_CONFIG.def_align,
            attr_pos, attr_dir = hover_tooltip.getAttribute('tooltip-direction') || TOOLTIP_CONFIG.def_direction,
            text_align = hover_tooltip.getAttribute('tooltip-text-align') || TOOLTIP_CONFIG.def_text_align;

            tooltip_div.innerHTML = attr_html

            let ht_rect = hover_tooltip.getBoundingClientRect()
            let t_rect = tooltip_div.getBoundingClientRect()

            if (attr_dir == 'horizontal') attr_pos = ht_rect.left + (t_rect.width / 2) > window.innerWidth / 2 ? 'left' : 'right';
            else if (attr_dir == 'vertical') attr_pos = ht_rect.top + (t_rect.height / 2) > window.innerHeight / 2 ? 'top' : 'bottom';

            let [dx,dy] = [0,0]

            if (attr_pos == 'bottom') dy = ht_rect.bottom + 4
            else if (attr_pos == 'top') dy = ht_rect.top - t_rect.height - 4
            else if (attr_pos == 'left') dx = ht_rect.left - t_rect.width - 4
            else if (attr_pos == 'right') dx = ht_rect.right + 4

            if (attr_pos == 'left' || attr_pos == 'right') {
                if (attr_align == 'left' || attr_align == 'start') dy = ht_rect.top
                else if (attr_align == 'center') dy = ht_rect.top + (ht_rect.height - t_rect.height) / 2
                else if (attr_align == 'right' || attr_align == 'end') {
                    dy = ht_rect.bottom - t_rect.height
                }
            } else if (attr_pos == 'top' || attr_pos == 'bottom') {
                if (attr_align == 'left' || attr_align == 'start') dx = ht_rect.left
                else if (attr_align == 'center') dx = ht_rect.left + (ht_rect.width - t_rect.width) / 2
                else if (attr_align == 'right' || attr_align == 'end') {
                    dx = ht_rect.right - t_rect.width
                }
            }

            style.top = Math.max(TOOLTIP_CONFIG.padding_y,Math.min(window.innerHeight-t_rect.height-TOOLTIP_CONFIG.padding_y,dy)) + window.scrollY
            style.left = Math.max(TOOLTIP_CONFIG.padding_x,Math.min(window.innerWidth-t_rect.width-TOOLTIP_CONFIG.padding_x,dx)) + window.scrollX
            style['text-align'] = text_align
        }
    } else {
        style.display = 'none';
        style.top = 0;
        style.left = 0;
    }
}

function updateTooltipOnChange() {
    tooltips = document.getElementsByClassName('tooltip')

    for (let i = 0; i < tooltips.length; i++) {
        let tooltip = tooltips[i];

        tooltip.onmouseenter = function() {
            hover_tooltip = tooltip

            updateTooltips()
        }

        tooltip.onmouseleave = function() {
            hover_tooltip = null

            updateTooltips()
        }
    }
}

function setupTooltips() {
    tooltip_div = document.getElementById('tooltip-div')
}