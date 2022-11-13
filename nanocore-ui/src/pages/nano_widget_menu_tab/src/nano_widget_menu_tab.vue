<template>
    <div class='CompContainer'>
        <div class="logo" >
            <img :src="prop_logo"/>
        </div>
        <div class="line">

        </div>
        <div class="title">
            <span>{{prop_title}}</span>
        </div>
        <div class="menuBt">
            <svg t="1667465895911" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2510" width="32" height="32"><path d="M828.996915 430.121165l0 111.544469L717.447882 541.665634l0 111.542422L605.898842 653.208056l0 111.544469L494.350827 764.752525 494.350827 653.208069 382.801787 653.208069 382.801787 541.665647 271.253771 541.665647 271.253771 430.121178 159.704732 430.121178 159.704732 207.033263l111.549039 0 0 111.543446 111.548016 0 0 111.544469 111.549039 0 0 111.544469 111.548016 0L605.898842 430.121178l111.549039 0L717.447882 318.576709l111.549039 0L828.996921 207.033263l111.549039 0 0 223.087914L828.996921 430.121178z" p-id="2511" fill="#9f9a9d"></path></svg>
            <div class="menu">
                <div class="border"> </div>
                <div class="menuItem" v-for="(item,index) in prop_menu_data" :key="index">
                    <router-link :to="item.link">
                        <span>{{item.name}}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nano_widget_menu_tab',
    data() {
        return {

            
        }
    },
    methods: {

    },
    props:{
        prop_menu_data:{
            type:Array,
            default:[
                {name:"aa",link:""}
            ]
        },
        prop_logo:{
            type:String,
        },
        prop_title:{
            type:String,
        }
    }
}
</script>
<style lang='less' scoped>
@import './nano_widget_menu_tab.less';
</style>