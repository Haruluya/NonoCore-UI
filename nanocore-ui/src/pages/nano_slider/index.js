import nano_slider from "./src/nano_slider.vue";

nano_slider.install = function(Vue) {
  Vue.component(nano_slider.name, nano_slider);
};

export default nano_slider;
