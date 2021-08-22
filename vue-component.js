// 1-component-registration
let codeHtml12 = `<!-- html -->
<div id="myApp">
    <my-component-a></my-component-a>
    <my-component-b></my-component-b>
</div>`;

let codeJs12 = `/* js */

// Global Registration
Vue.component('my-component-a',{
    template: \`<div>
        <h1>hello component A</h1>
    </div>\`
})

// Local Registration
let mycomponentb = {
    template: \`<div>
        <h1>hello component B</h1>
    </div>\`
}

let vm = new Vue({
    el: '#myApp',
    components: {
        'my-component-b' : mycomponentb
    }
})`;

master.lesson.vcomponent.push({
    subTitle : 'component registration',
    codeHtml : codeHtml12.replace(/</g,'&lt;'),
    codeJs   : codeJs12.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : '',
    linkdocs : 'https://vuejs.org/v2/guide/components-registration.html'
});

// 2-reusable-component
let codeHtml13 = `<!-- html -->
<div id="myApp">
    <x-toggle></x-toggle>
    <x-toggle></x-toggle>
    <x-toggle></x-toggle>
    <x-toggle></x-toggle>
</div>`;

let codeJs13 = `/* js */
Vue.component('x-toggle',{
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
    background-color: #34495e;
    position: absolute;
    left: 0;
}
.toggle.on{
    background-color: #41b883;
    left: auto;
    right: 0;
}`;

let componentRes13 = {
    data () {
        return {
            isClicked: false,
        }
    },
    components:{
        'x-toggle':{
            data(){
                return{
                    isClicked: false
                }
            },
            template: `<div class="toggle-wraper" @click="isClicked=!isClicked">
                <div :class="{toggle:true,on:isClicked}"></div>
            </div>`
        }
    },
    mounted(){
        let tagHead  = document.head;
        if(tagHead.querySelector('style') == null){
            tagHead.insertBefore(document.createElement('style'),tagHead.firstElementChild);
        }
        tagHead.querySelector('style').innerHTML = tagHead.querySelector('style').innerHTML+codeCss13;
    },
    template: codeHtml13
}

xmain.components.xcomres13 = componentRes13;
master.lesson.vcomponent.push({
    subTitle : 'reusable component',
    codeHtml : codeHtml13.replace(/</g,'&lt;'),
    codeJs   : codeJs13.replace(/</g,'&lt;'),
    codeCss  : codeCss13,
    content  : 'xcomres13',
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Reusing-Components'
});

// 3-passing-data-with-props
let codeHtml14 = `<!-- html -->
<div id="myApp">
    <x-list :datastudent="students"></x-list>
</div>`;

let codeJs14 = `/* js */
Vue.component('x-list',{
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

let componentRes14 = {
    data () {
        return {
            students:[
                {name:'john' ,age:12},
                {name:'mark' ,age:10},
            ]
        }
    },
    components:{
        'x-list':{
            props: ['datastudent'],
            template: `<ul>
                <li v-for="s in datastudent">
                    name:{{ s.name }} 
                    <br>
                    age:{{ s.age }}    
                </li>    
            </ul>`
        }
    },
    mounted(){},
    template: codeHtml14
}

xmain.components.xcomres14 = componentRes14;
master.lesson.vcomponent.push({
    subTitle : 'passing data with props',
    codeHtml : codeHtml14.replace(/</g,'&lt;'),
    codeJs   : codeJs14.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : 'xcomres14',
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props'
});


// 4-emitting-value-using-$emit 
let codeHtml15 = `<!-- html -->
<div id="myApp">
    <x-result :datanum="num"></x-result>
    <x-btncount @do-count="num++"></x-btncount>
</div>`;

let codeJs15 = `/* js */
Vue.component('x-result',{
    props: ['datanum'],
    template: \`<p>result count: {{datanum}}</p>\`
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

let componentRes15 = {
    data () {
        return {
            num:0
        }
    },
    components:{
        'x-result':{
            props: ['datanum'],
            template: `<p>result count: {{datanum}}</p>`
        },
        'x-btncount':{
            template: `<button @click="$emit('do-count')">
                do count
            </button>`
        },
    },
    mounted(){},
    template: codeHtml15
}

xmain.components.xcomres15 = componentRes15;
master.lesson.vcomponent.push({
    subTitle : 'emitting value with dollar emit',
    codeHtml : codeHtml15.replace(/</g,'&lt;'),
    codeJs   : codeJs15.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : 'xcomres15',
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event'
});

// 5-special-property-(event) 
let codeHtml16 = `<!-- html -->
<div id="myApp">
    <x-result :datamsg="message"></x-result>
    <x-input @changemsg="message = $event"></x-inp>
</div>`;

let codeJs16 = `/* js */
Vue.component('x-result',{
    props: ['datamsg'],
    template: \`<p>message: {{datamsg}}</p>\`
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

let componentRes16 = {
    data () {
        return {
            message:''
        }
    },
    components:{
        'x-result':{
            props: ['datamsg'],
            template: `<p>message: {{datamsg}}</p>`
        },
        'x-input':{
            template: `<input type="text" @keyup="$emit('changemsg',$event.target.value)">`
        },
    },
    mounted(){},
    template: codeHtml16
}

xmain.components.xcomres16 = componentRes16;
master.lesson.vcomponent.push({
    subTitle : 'dollar event in emit',
    codeHtml : codeHtml16.replace(/</g,'&lt;'),
    codeJs   : codeJs16.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : 'xcomres16',
    linkdocs : 'https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event'
});


// 17-form-submit
let codeHtml17 = `<!-- html -->
<div id="myApp">
    <x-form @insert-data="insertData($event)"></x-form>
    <hr><br>
    <div style="display: flex;overflow:auto;">
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

let componentRes17 = {
    data () {
        return {
            wallpapers : []
        }
    },
    components:{
        'x-form':{
            data(){
                return{
                    imgpreview:'asset/media/vuewallpaper1.jpeg',
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
                    this.imgpreview = "asset/media/vuewallpaper1.jpeg";
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
            template:`<form @submit.prevent="submitForm" enctype="multipart/form-data">
                <img :src="imgpreview" width="200"/><br>
                <div>
                    <input id="wallpaper" name="wallpaper" ref="wallpaper" type="file" @change="changePreview">    
                    <small v-if="validation.wallpaper" style="display:block;color:red;">
                        {{validation.wallpaper}}
                    </small>
                </div><br>
                <div>
                    <textarea id="caption" name="caption" ref="caption" placeholder="caption here"></textarea>
                    <small v-if="validation.caption" style="display:block;color:red;">
                        {{validation.caption}}
                    </small>
                </div>
                <button name="submit" type="submit">submit</button><br><br>
            </form>`
        },
    },
    methods : {
        insertData(event){
            let myForm = new FormData(event.target);

            this.wallpapers.push({
                imgsrc : URL.createObjectURL(myForm.get('wallpaper')),
                caption: myForm.get('caption')
            })
        }
    },
    mounted(){},
    template: codeHtml17
}

xmain.components.xcomres17 = componentRes17;
master.lesson.vcomponent.push({
    subTitle : 'form validation',
    codeHtml : codeHtml17.replace(/</g,'&lt;'),
    codeJs   : codeJs17.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : 'xcomres17',
    linkdocs : 'https://vuejs.org/v2/guide/forms.html#Text'
});