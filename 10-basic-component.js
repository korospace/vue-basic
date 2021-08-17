let codeHtml10 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;btn-onoff>&lt;/btn-onoff>
    &lt;btn-onoff>&lt;/btn-onoff>
    &lt;btn-onoff>&lt;/btn-onoff>
&lt;/div>`;

let codeJs10 = `/* js */
Vue.component('btn-onoff',{
    data: () => {
        return{
            isActive:false
        }
    },
    template: \`&lt;div class="btnOnOff-wraper">
        &lt;div @click="isActive = !isActive" :class="{btnOnOff:true,active:isActive}">
        &lt;/div>
    &lt;/div>\`
})

const vm = new Vue({
    el: '#myApp',
});`;

let codeCss10 = `/* css */
.btnOnOff-wraper{
    width: 50px;
    height: 20px;
    border-radius: 50px;
    background-color: rgb(255, 255, 255);
    -moz-box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.4);
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.btnOnOff{
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    background-color: red;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.4);
}
.btnOnOff.active{
    left: auto;
    right: 0;
    background-color: green;
}`;

Vue.component('btn-onoff',{
    data: () => {
        return{
            isActive:false
        }
    },
    template: `<div class="btnOnOff-wraper">
        <div @click="isActive = !isActive" :class="{btnOnOff:true,active:isActive}">
        </div>
    </div>`
})

const vm10 = new Vue({
    el: '#main-component',
    data: {
        subTitle: 'basic component',
        codeHtml  : codeHtml10,
        codeJs    : codeJs10,
        codeCss   : codeCss10,
        documentation: 'https://vuejs.org/v2/api/#v-model',
    }
});

headerVm.allSubTitle.push(vm10.subTitle);
