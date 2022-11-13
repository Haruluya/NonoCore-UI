


export default{

    setupSlider:(slider, options)=>{

        //let vue component effective.
          // var parent = document.getElementById(divId);
          if (!slider) {
            console.log("Slider ref not fount!")
            return;
          }
          return createSlider(slider, options); 
    },

    createSlider:(parent, options)=>{


        var precision = options.precision || 0;
        var min = options.min || 0;
        var step = options.step || 1;
        var value = options.value || 0;
        var max = options.max || 1;
        var fn = options.slide;
        var name = gopt["ui-" + options.name] || options.name;
        var uiPrecision = options.uiPrecision === undefined ? precision : options.uiPrecision;
        var uiMult = options.uiMult || 1;
    
        min /= step;
        max /= step;
        value /= step;
        var valueElem = parent.$refs.sliderValue;
        var sliderElem = parent.$refs.sliderSlider;

        function updateValue(value) {
          valueElem.textContent = (value * step * uiMult).toFixed(uiPrecision);
        }
    
        updateValue(value);
    
        function handleChange(event) {
         
          var value = parseInt(event.target.value);
    
          updateValue(value);
          fn(event, { value: value * step });
        }
    
        sliderElem.addEventListener('input', handleChange);
        sliderElem.addEventListener('change', handleChange);
    
        return {
          elem: parent,
          updateValue: (v) => {
            v /= step;
            sliderElem.value = v;
            updateValue(v);
          },
        };
    },

    setupColorInput:(colorRef,options)=>{
        colorRef.$refs.input.onchange = (event)=>{
          let ui = {value:event.target.value};
          options.callback(event,ui);
        };
    },

    setupSliderVector:(vectorRef,options)=>{
      vectorRef.$refs.container.addEventListener("slider_vector_change",(event)=>{
        let ui = {value:event.detail.sliderValue};
        options.callback(event,ui)
      })
    }
}