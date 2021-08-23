// 12-component-registration
let codeHtml12 = `<div id="myApp">spasi
    <my-component-a></my-component-a>spasi
    <my-component-b></my-component-b>spasi</div>`;

// let codeJs12 = `// Global RegistrationspasiVue.component('my-component-a',{spasi
//     template: `<div>spasi
//         <h1>hello component A</h1>spasi
//     </div>`spasi})spasispasi// Local Registrationspasilet mycomponentb = {spasi
//     template: `<div>spasi
//         <h1>hello component B</h1>spasi
//     </div>`spasi}spasispasilet vm = new Vue({spasi
//     el: '#myApp',spasi
//     components: {spasi
//         'my-component-b' : mycomponentbspasi
//     }spasi})`;

master.lesson.vcomponent.push({
    subTitle : 'component registration',
    codeHtml : codeHtml12.replace(/</g,'&lt;'),
    codeJs   : codeJs12.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : `<img class="result" loading="lazy" src="asset/media/12-component-registration.png">`,
    linkdocs : 'https://vuejs.org/v2/guide/components-registration.html'
});

// 13-reusable-component
let codeHtml13 = `<div id="myApp">
    <x-toggle></x-toggle>
    <x-toggle></x-toggle>
    <x-toggle></x-toggle>
    <x-toggle></x-toggle>
</div>`;

let codeJs13 = `Vue.component('x-toggle',{
    data(){
        return{
            isClicked: false
        }
    },
    template: \`<div class="toggle-wraper" @click="isClicked=!isClicked">
        <div :class="{toggle:true,on:isClicked}"></div>
    </div>\`
})

let vm = new Vue({
    el: '#myApp',
})`;

let codeCss13 = `.toggle-wraper{
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

master.lesson.vcomponent.push({
    subTitle : 'reusable component',
    codeHtml : codeHtml13.replace(/</g,'&lt;'),
    codeJs   : codeJs13.replace(/</g,'&lt;'),
    codeCss  : codeCss13,
    content  : `<video class="result" controls>
        <source src="asset/media/13-reusable-component.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Reusing-Components'
});

// 14-passing-data-with-props
let codeHtml14 = `<div id="myApp">
    <x-list :datastudent="students"></x-list>
</div>`;

let codeJs14 = `Vue.component('x-list',{
    props: ['datastudent'],
    template: \`<ul>
        <li v-for="s in datastudent">
            name:{{ s.name }} 
            <br>
            age:{{ s.age }}    
        </li>    
    </ul>\`
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

master.lesson.vcomponent.push({
    subTitle : 'passing data with props',
    codeHtml : codeHtml14.replace(/</g,'&lt;'),
    codeJs   : codeJs14.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : `<img class="result" src="asset/media/14-passing-data-with-props.png">`,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props'
});

// 15-emitting-value-using-$emit 
let codeHtml15 = `<div id="myApp">
    <x-result :datanum="num"></x-result>
    <x-btncount @do-count="num++"></x-btncount>
</div>`;

let codeJs15 = `Vue.component('x-result',{
    props: ['datanum'],
    template: \`<h1>result count: {{datanum}}</h1>\`
})

Vue.component('x-btncount',{
    template: \`<button @click="$emit('do-count')">
        do count
    </button>\`
})

let vm = new Vue({
    el: '#myApp',
    data: {
        num:0
    }
})`;

master.lesson.vcomponent.push({
    subTitle : 'emitting value with dollar emit',
    codeHtml : codeHtml15.replace(/</g,'&lt;'),
    codeJs   : codeJs15.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/15-emitting-value-using-emit.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event'
});

// 16-dollar-event-in-emit 
let codeHtml16 = `<div id="myApp">
    <x-result :datamsg="message"></x-result>
    <x-input @changemsg="message = $event"></x-inp>
</div>`;

let codeJs16 = `Vue.component('x-result',{
    props: ['datamsg'],
    template: \`<h1>message: {{datamsg}}</h1>\`
})

Vue.component('x-input',{
    template: \`<input type="text" @keyup="$emit('changemsg',$event.target.value)">\`
})

let vm = new Vue({
    el: '#myApp',
    data: {
        message:''
    }
})`;

master.lesson.vcomponent.push({
    subTitle : 'dollar event in emit',
    codeHtml : codeHtml16.replace(/</g,'&lt;'),
    codeJs   : codeJs16.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/16-dollar-event-in-emit.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event'
});

// 17-form-submit
let codeHtml17 = `<div id="myApp">
    <x-form @insert-data="insertData($event)"></x-form>
    <hr>
    <div style="display: flex;">
        <div v-for="w of wallpapers" style="margin-right: 10px;">
            <img :src="w.imgsrc" width="200">
            <p>{{ w.caption }}</p>
        </div>
    </div>
</div>`;

let codeJs17 = `/*js*/
Vue.component('x-form',{
    data(){
        return{
            imgpreview:'https://vuecheatsheet.netlify.app/asset/media/vuewallpaper1.jpeg',
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
            this.imgpreview = "https://vuecheatsheet.netlify.app/asset/media/vuewallpaper1.jpeg";
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
    template:\`<form @submit.prevent="submitForm" enctype="multipart/form-data">
        <img :src="imgpreview" width="200"/>
        <div>
            <input id="wallpaper" name="wallpaper" ref="wallpaper" type="file" @change="changePreview">    
            <small v-if="validation.wallpaper" style="display:block;color:red;">
                {{validation.wallpaper}}
            </small>
        </div>
        <div>
            <textarea id="caption" name="caption" ref="caption" placeholder="caption here"></textarea>
            <small v-if="validation.caption" style="display:block;color:red;">
                {{validation.caption}}
            </small>
        </div>
        <button name="submit" type="submit">submit</button>
    </form>\`
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

master.lesson.vcomponent.push({
    subTitle : 'form validation',
    codeHtml : codeHtml17.replace(/</g,'&lt;'),
    codeJs   : codeJs17.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/17-form-validation.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : ''
});

// 18-component-in-component 
let codeHtml18 = `<div id="myApp">
    <x-container></x-container>
</div>`;

let codeJs18 = `let xheader = {
    template: \`<div style="padding:20px 0;background-color:red;">
        header
    </div>\`
}

let xmain = {
    template: \`<div style="padding:40px 0;background-color:green;">
        main
    </div>\`
}

let xfooter = {
    template: \`<div style="padding:20px 0;background-color:blue;">
        footer
    </div>\`
}

Vue.component('x-container',{
    components:{
        'x-header' : xheader,
        'x-main'   : xmain,
        'x-footer' : xfooter
    },
    template: \`<section style="width:300px;text-align:center;">
        <x-header></x-header>
        <x-main></x-main>
        <x-footer></x-footer>
    </section>\`
})

let vm = new Vue({
    el: '#myApp',
})`;

master.lesson.vcomponent.push({
    subTitle : 'component in component',
    codeHtml : codeHtml18.replace(/</g,'&lt;'),
    codeJs   : codeJs18.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : `<img class="result" loading="lazy" src="asset/media/18-component-in-component.png">`,
    linkdocs : ''
});