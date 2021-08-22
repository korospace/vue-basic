// 1-component-registration
let codeHtml12 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;my-component-a>&lt;/my-component-a>
    &lt;my-component-b>&lt;/my-component-b>
&lt;/div>`;

let codeJs12 = `/* js */

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
    codeHtml : codeHtml12,
    codeJs   : codeJs12,
    codeCss  : '',
    content  : '',
    linkdocs : 'https://vuejs.org/v2/guide/components-registration.html'
});

// 2-reusable-component
let codeHtml13 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-toggle>&lt;/x-toggle>
    &lt;x-toggle>&lt;/x-toggle>
    &lt;x-toggle>&lt;/x-toggle>
    &lt;x-toggle>&lt;/x-toggle>
&lt;/div>`;

let codeJs13 = `/* js */
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

let codeCss13 = `/* css */
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

let content13 = `<img class="result" loading="lazy" src="asset/media/13-reusable-component.gif">`;

master.lesson.vcomponent.push({
    subTitle : 'reusable component',
    codeHtml : codeHtml13,
    codeJs   : codeJs13,
    codeCss  : codeCss13,
    content  : content13,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Reusing-Components'
});

// 3-passing-data-with-props
let codeHtml14 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-list :datastudent="students">&lt;/x-list>
&lt;/div>`;

let codeJs14 = `/* js */
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

let content14 = `<img class="result" src="asset/media/14-passing-data-with-props.png">`;

master.lesson.vcomponent.push({
    subTitle : 'passing data with props',
    codeHtml : codeHtml14,
    codeJs   : codeJs14,
    codeCss  : '',
    content  : content14,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props'
});

// 4-emitting-value-using-$emit 
let codeHtml15 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-result :datanum="num">&lt;/x-result>
    &lt;x-btncount @do-count="num++">&lt;/x-btncount>
&lt;/div>`;

let codeJs15 = `/* js */
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

let content15 = `<img class="result" loading="lazy" src="asset/media/15-emitting-value-using-emit.gif">`;

master.lesson.vcomponent.push({
    subTitle : 'emitting value with dollar emit',
    codeHtml : codeHtml15,
    codeJs   : codeJs15,
    codeCss  : '',
    content  : content15,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event'
});

// 5-special-property-(event) 
let codeHtml16 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-result :datamsg="message">&lt;/x-result>
    &lt;x-input @changemsg="message = $event">&lt;/x-inp>
&lt;/div>`;

let codeJs16 = `/* js */
Vue.component('x-result',{
    props: ['datamsg'],
    template: \`&lt;h1>message: {{datamsg}}&lt;/h1>\`
})

Vue.component('x-input',{
    template: \`&lt;input type="text" @keyup="$emit('changemsg',$event.target.value)">\`
})

let vm = new Vue({
    el: '#myApp',
    data: {
        message:''
    }
})`;

let content16 = `<img class="result" loading="lazy" src="asset/media/16-event-is-special-property.gif">`;

master.lesson.vcomponent.push({
    subTitle : 'dollar event in emit',
    codeHtml : codeHtml16,
    codeJs   : codeJs16,
    codeCss  : '',
    content  : content16,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event'
});

// 17-form-submit
let codeHtml17 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;x-form @insert-data="insertData($event)">&lt;/x-form>
    &lt;hr>
    &lt;div style="display: flex;">
        &lt;div v-for="w of wallpapers" style="margin-right: 10px;">
            &lt;img :src="w.imgsrc" width="200">
            &lt;p>{{ w.caption }}&lt;/p>
        &lt;/div>
    &lt;/div>
&lt;/div>`;

let codeJs17 = `/*js*/
Vue.component('x-form',{
    data(){
        return{
            imgpreview:'https://learningvue.netlify.app/asset/media/vuewallpaper1.jpeg',
            validation: {
                wallpaper: '',
                caption: '',
            }
        }
    },
    methods:{
        changePreview(event){
            this.imgpreview = URL.createObjectURL(event.target.files[0]);
        },
        resetValidation(){
            this.validation.wallpaper  = "";
            this.validation.caption    = "";
        },
        resetInput(){
            this.imgpreview = "https://learningvue.netlify.app/asset/media/vuewallpaper1.jpeg";
            this.$refs.wallpaper.value = "";
            this.$refs.caption.value   = "";
        },
        doValidation(){
            let submitData = true;
            this.resetValidation();
            if(this.$refs.wallpaper.value == ''){
                submitData = false;
                this.validation.wallpaper = 'wallpaper is required';
            }
            if(this.$refs.caption.value == ''){
                submitData = false;
                this.validation.caption = 'caption is required';
            }
            return submitData;
        },
        submitForm(event){
            if(this.doValidation()){
                this.$emit('insert-data',event);
                this.resetInput();
            }
        }
    },
    template:\`&lt;form @submit.prevent="submitForm" enctype="multipart/form-data">
        &lt;img :src="imgpreview" width="200"/>
        &lt;div>
            &lt;input id="wallpaper" name="wallpaper" ref="wallpaper" type="file" @change="changePreview">    
            &lt;small v-if="validation.wallpaper" style="display:block;color:red;">
                {{validation.wallpaper}}
            &lt;/small>
        &lt;/div>
        &lt;div>
            &lt;textarea id="caption" name="caption" ref="caption" placeholder="caption here">&lt;/textarea>
            &lt;small v-if="validation.caption" style="display:block;color:red;">
                {{validation.caption}}
            &lt;/small>
        &lt;/div>
        &lt;button name="submit" type="submit">submit&lt;/button>
    &lt;/form>\`
})

const vm = new Vue({
    el   : '#myApp',
    data : {
        wallpapers : []
    },
    methods : {
        insertData(event){
            let myForm = new FormData(event.target);

            this.wallpapers.push({
                imgsrc : URL.createObjectURL(myForm.get('wallpaper')),
                caption: myForm.get('caption')
            })
        }
    }
});`;

let content17 = `<video class="result" controls>
    <source src="asset/media/17-form-submit.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`;

master.lesson.vcomponent.push({
    subTitle : 'form submit',
    codeHtml : codeHtml17,
    codeJs   : codeJs17,
    codeCss  : '',
    content  : content17,
    linkdocs : 'https://vuejs.org/v2/guide/forms.html#Text'
});