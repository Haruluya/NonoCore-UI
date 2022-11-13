<template>
    <div class="app">
        <nano_widget_menu_tab/>
        <nano_button/>
    </div>
  </template>
  
  <script>
import { nano_button,nano_widget_menu_tab } from './pages';


  
  
  export default {
    name: "App",
    data() {
        return {};
    },
    components: { nano_widget_menu_tab,nano_button}
}
  </script>
  
  <style lang="less">
  
  html{
      overflow-x: hidden !important; 
  }
  
  /*app */
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      .app-menu{
      }
      
      .app-content{
          margin-top: 10vh;
  
      }
      .app-footer{
          height: 40vh;
      }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  </style>
  