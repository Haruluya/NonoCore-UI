import nano_button from "./nano_button";
import nano_menu from "./nano_menu";
import nano_slider from "./nano_slider";
import nano_items_menu from "./nano_items_menu";
import nano_link_card from "./nano_link_card";
import nano_footer from "./nano_footer";
import nano_webgl_des_panel from "./nano_webgl_des_panel";
import nano_canvas from "./nano_canvas";

import nano_process_button_line from "./nano_process_button_line";
import nano_totop_button from "./nano_totop_button";

import nano_effect_bg_starry from "./nano_effect_bg_starry";
import nano_effect_bg_snow from "./nano_effect_bg_snow";
import nano_effect_bg_video from "./nano_effect_bg_video";


import nano_param_widget from "./nano_param_widget";
import nano_param_slider from "./nano_param_slider";
import nano_param_panel from "./nano_param_panel";
import nano_param_output_panel from "./nano_param_output_panel";
import nano_param_color from "./nano_param_color";
import nano_param_slot from "./nano_param_slot";
import nano_param_slider_vectorn from "./nano_param_slider_vectorn";


import nano_widget_menu_tab from "./nano_widget_menu_tab";


import style from "./index.less"

const components = [
    nano_button,
    nano_menu,
    nano_slider,
    nano_items_menu,
    nano_link_card,
    nano_footer,
    nano_canvas,
    nano_webgl_des_panel,
    nano_effect_bg_starry,
    nano_process_button_line,
    nano_totop_button,
    nano_effect_bg_snow,
    nano_effect_bg_video,
    nano_param_slider,
    nano_param_panel,
    nano_param_output_panel,
    nano_param_color,
    nano_param_widget,
    nano_param_slot,
    nano_param_slider_vectorn,
    nano_widget_menu_tab,
];




const install = function(Vue) {
  components.map((component) => Vue.component(component.name, component));
};



if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}



export {
    install,
    nano_button,
    nano_menu,
    nano_slider,
    nano_items_menu,
    nano_link_card,
    nano_footer,
    nano_webgl_des_panel,
    nano_canvas,
    nano_effect_bg_starry,
    nano_process_button_line,
    nano_totop_button,
    nano_effect_bg_snow,
    nano_effect_bg_video,
    nano_param_slider,
    nano_param_panel,
    nano_param_output_panel,
    nano_param_color,
    nano_param_widget,
    nano_param_slot,
    nano_param_slider_vectorn,
    nano_widget_menu_tab,
    style
};


export default {
    install,
    nano_button,
    nano_menu,
    nano_slider,
    nano_items_menu,
    nano_link_card,
    nano_footer,
    nano_webgl_des_panel,
    nano_canvas,
    nano_effect_bg_starry,
    nano_process_button_line,
    nano_totop_button,
    nano_effect_bg_snow,
    nano_effect_bg_video,
    nano_param_slider,
    nano_param_panel,
    nano_param_output_panel,
    nano_param_color,
    nano_param_widget,
    nano_param_slot,
    nano_param_slider_vectorn,
    nano_widget_menu_tab,
    style
};
