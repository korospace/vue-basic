// 1-component-registration
let codeHtml11 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;my-component-a>&lt;/my-component-a>
    &lt;my-component-b>&lt;/my-component-b>
&lt;/div>`;

let codeJs11 = `/* js */

// Global Registration
Vue.component('my-component-a',{
    template: \`&lt;div>
        &lt;h1>hello component A&lt;/h1>
    &lt;/div>\`
})

// Local Registration
let mycomponentb = {
    template: \`&lt;div>
        &lt;h1>hello component B&lt;/h1>
    &lt;/div>\`
}

let vm = new Vue({
    el: '#myApp',
    components: {
        'my-component-b' : mycomponentb
    }
})`;

master.lesson.vcomponent.push({
    subTitle : 'component registration',
    codeHtml : codeHtml11,
    codeJs   : codeJs11,
    codeCss  : '',
    content  : '',
    linkdocs : 'https://vuejs.org/v2/guide/components-registration.html'
});

// 12-reusable-component
let codeHtml12 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-toggle>&lt;/x-toggle>
    &lt;x-toggle>&lt;/x-toggle>
    &lt;x-toggle>&lt;/x-toggle>
    &lt;x-toggle>&lt;/x-toggle>
&lt;/div>`;

let codeJs12 = `/* js */
Vue.component('x-toggle',{
    data(){
        return{
            isClicked: false
        }
    },
    template: \`&lt;div class="toggle-wraper" @click="isClicked=!isClicked">
        &lt;div :class="{toggle:true,on:isClicked}">&lt;/div>
    &lt;/div>\`
})

let vm = new Vue({
    el: '#myApp',
})`;

let codeCss12 = `/* css */
.toggle-wraper{
    width: 50px;
    height: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 4px 0px rgba(0, 0, 0, 0.4);
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
}
.toggle{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 0;
}
.toggle.on{
    background-color: green;
    left: auto;
    right: 0;
}`;

let content12 = `<img class="result" src="asset/media/12-reusable-component.gif">`;

master.lesson.vcomponent.push({
    subTitle : 'reusable component',
    codeHtml : codeHtml12,
    codeJs   : codeJs12,
    codeCss  : codeCss12,
    content  : content12,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Reusing-Components'
});

// 13-passing-data-with-props
let codeHtml13 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-list :datastudent="students">&lt;/x-list>
&lt;/div>`;

let codeJs13 = `/* js */
Vue.component('x-list',{
    props: ['datastudent'],
    template: \`&lt;ul>
        &lt;li v-for="s in datastudent">
            name:{{ s.name }} 
            &lt;br>
            age:{{ s.age }}    
        &lt;/li>    
    &lt;/ul>\`
})

let vm = new Vue({
    el: '#myApp',
    data: {
        students:[
            {name:'john' ,age:12},
            {name:'mark' ,age:10},
        ]
    }
})`;

let content13 = `<img class="result" src="asset/media/13-passing-data-with-props.png">`;

master.lesson.vcomponent.push({
    subTitle : 'passing data with props',
    codeHtml : codeHtml13,
    codeJs   : codeJs13,
    codeCss  : '',
    content  : content13,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props'
});

// 14-emitting-value-using-$emit 
let codeHtml14 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-result :datanum="num">&lt;/x-result>
    &lt;x-btncount @do-count="num++">&lt;/x-btncount>
&lt;/div>`;

let codeJs14 = `/* js */
Vue.component('x-result',{
    props: ['datanum'],
    template: \`&lt;h1>result count: {{datanum}}&lt;/h1>\`
})

Vue.component('x-btncount',{
    template: \`&lt;button @click="$emit('do-count')">
        do count
    &lt;/button>\`
})

let vm = new Vue({
    el: '#myApp',
    data: {
        num:0
    }
})`;

let content14 = `<img class="result" src="asset/media/14-emitting-value-using-emit.gif">`;

master.lesson.vcomponent.push({
    subTitle : 'emitting value using emit',
    codeHtml : codeHtml14,
    codeJs   : codeJs14,
    codeCss  : '',
    content  : content14,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event'
});