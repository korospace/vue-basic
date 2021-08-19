
// X-BTNUP
Vue.component('x-btnup', {
    data() {
        return {
          scrollpx: 0
        };
    },
    created() {
      window.addEventListener('scroll', () => {
        this.scrollpx = window.scrollY;
      });
    },
    template: `<a id="btn-up" href="#" :class="{show: scrollpx > 100}">up</a>`
})

// X-SUBTITLE
Vue.component('x-subtitle', {
    props: ['subtitle'],
    methods: {
        subTitleDash: (data) => {
            return data.replace(/ /g,'-');
        }
    },
    template: `<h1 class="sub-title" :id="subTitleDash(subtitle)">{{ subtitle }}</h1>`
})

// X-DOCS
Vue.component('x-docs', {
    props: ['link','subtitle'],
    template: `<a class="link-docs" target="_blank" :href="link">{{subtitle+' docs'}}</a>`
})

// X-CODE
Vue.component('x-code', {
    props: ['lang','code'],
    methods: {
        copyCode: function(code,event){
            event.target.nextElementSibling.innerHTML = code.replace(/&lt;/g,'<');
            event.target.nextElementSibling.select();
            document.execCommand("copy");
            event.target.innerText = 'copied!';
            setTimeout(() => {
                event.target.innerText = 'copy';
            }, 1200);
        }
    },
    template: `<div class="code-wraper" v-if="code!==''">
        <div :class="{'btn-copy':true}" @click="copyCode(code,$event)">copy</div>
        <textarea class="temp-textarea"></textarea>
        <pre v-if="lang == 'html'"><code v-html="code" class="language-markup"></code></pre>
        <pre v-if="lang == 'js'"><code v-html="code" class="language-javascript"></code></pre>
        <pre v-if="lang == 'css'"><code v-html="code" class="language-css"></code></pre>
    </div>`        
})

// X-MAIN
Vue.component('x-main', {
    props: ['objmain'],
    methods: {
        subTitleDash: (data) => {
            return data.replace(/ /g,'-');
        },
        insertHtml  : (data,selector) => {
            console.log(document.querySelector('span.'+selector.replace(/ /g,'-')));
            // document.querySelector('#'+selector.replace(/ /g,'-')).innerHTML = data;
        }
    },
    template: `<main>
    <x-subtitle :subtitle="objmain.subTitle"></x-subtitle>

    <x-code lang="html" :code="objmain.codeHtml"></x-code>
    <x-code lang="js" :code="objmain.codeJs"></x-code>
    <x-code lang="css" :code="objmain.codeCss"></x-code>
    
    <div class="result-wraper" v-if="objmain.content!==''">
        <small class="small-text">result</small>
        <span v-html="objmain.content"></span>
    </div>
    <x-docs :link="objmain.linkdocs" :subtitle="objmain.subTitle"></x-docs>
</main>`        
})

const vm = new Vue({
    el: '#app',
    data: {
        logo      : 'asset/vue-logo.svg',
        title     : 'learning basic of vuejs',
        currentId : '',
        allMain   : [],
        // 3-directive
        testVOnce : 'this is an unalterable text',
        testVText : '<span style="color:red;">like innerText</span>',
        testVHtml : '<span style="color:red;">like innerHTML</span>',
        // 4-event-handling
        age       : 22,
        author    : 'korospace',
        // 6-two-ways-data-binding
        arrayTag  : [],
        // 7-computed-property
        numVal   : '',
        // 8-conditional-rendering
        dataInput : '',
    },
    methods: {
        subTitleDash: (data) => {
            return data.replace(/ /g,'-');
        },
        // 4-event-handling
        editAuthor : function() {
            this.author  = prompt("new author's name");
            if(this.author === "" || this.author === null){
                this.author  = 'korospace';
                return alert('insert something!');
            }
            this.age  = parseInt(prompt("new author's age"));
        },
        // 5-event-modifier
        warn: function(message) {
            alert(message);
        },
        // 6-two-ways-data-binding
        tagMaker : function() {
            let el = '';
            this.arrayTag.forEach(e => {
                el += `<span class="tag-span">${e}</span>`;
            });
            return el;
        },
        // 8-conditional-rendering
        insertValueDataInput : function(event) {
            this.dataInput = event.target.value;
        }
    },
    computed: {
        // 7-computed-property
        numCheck : function() {
            if(this.numVal === ""){
                return '<span class="danger">*please, insert number</span>';
            }
            else if(!/^\d+$/.test(this.numVal)){
                return '<span class="danger">*only number allowed</span>';
            }
            else{
                let message = "";
                if(this.numVal%2===0){
                    message = "this is an 'even' number";
                }
                else{
                    message = "this is an 'odd' number";
                }
                return `<span class="success">${message}</span>`;
            }
        }
    }
});

// 1-installation
let codeHtml1 = `&lt;!-- html -->
&lt;html>
&lt;body>
    &lt;div id="myApp">&lt;/div>

    &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js">&lt;/script>
    &lt;script>
        const vm = new Vue({
            el : '#myApp', //root element
        })
    &lt;/script>
&lt;/body>
&lt;/html>`

vm.allMain.push({
    subTitle : 'installation',
    codeHtml : codeHtml1,
    codeJs   : '',
    codeCss  : '',
    content  : '',
    linkdocs : 'https://vuejs.org/v2/guide/installation.html#CDN'
});

// 2-data-method
let codeJs2 = `// js
const vm = new Vue({
    el   : '#myApp',
    data : {
        myName : 'Abdullah'
    },
    methods: {
        showName : (name) => {
            console.log(\`Hi, my name is \${name}\`);
        }
    }
});

console.log( vm.myName ); // Abdullah
vm.showName("Ibrahim");   // Hi, my name is Ibrahim`;

vm.allMain.push({
    subTitle : 'data and method',
    codeHtml : '',
    codeJs   : codeJs2,
    codeCss  : '',
    content  : '',
    linkdocs : 'https://vuejs.org/v2/api/#data'
});

// 3-directive
let codeHtml3 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;p v-once>{{ testVOnce }}&lt;/p>
    &lt;p v-text="testVText">&lt;/p>
    &lt;p v-html="testVHtml">&lt;/p>
&lt/div>`;

let codeJs3 = `/* js */
const vm = new Vue({
    el   : '#myApp',
    data : {
        testVOnce : 'this is an unalterable text',
        testVText : '&lt;span style="color:red;">like innerText&lt;/span>',
        testVHtml : '&lt;span style="color:red;">like innerHTML&lt;/span>',
    },
});

// v-once atribute make your value is unalterable
vm.testVOnce = "edit variable testVOnce";`;

let content3 = `<p class="paragraph" v-once>{{ testVOnce }}</p>
<p class="paragraph" v-text="testVText"></p>
<p class="paragraph" v-html="testVHtml"></p>`;

vm.allMain.push({
    subTitle : 'directive',
    codeHtml : codeHtml3,
    codeJs   : codeJs3,
    codeCss  : '',
    content  : content3,
    linkdocs : 'https://vuejs.org/v2/api/#Directives'
});

// 4-event-handling
let codeHtml4 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;p>Author-name: {{ author }}&lt;/p>
    &lt;p>Author-age : {{ age }}&lt;/p>
    &lt;button v-on:click="editAuthor()">edit&lt;/button>
&lt;/div>`;

let codeJs4 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        author : 'korospace',
        age : 22,
    },
    methods : {
        editAuthor : function() {
            this.author = prompt("new author's name");
            this.age    = parseInt(prompt("new author's age"));
        }
    },
})`;

let content4 = `<p class="paragraph">Author-name: {{ author }}</p>
<p class="paragraph">Author-age : {{ age }}</p>
<button class="btn-green" @click="editAuthor()">edit</button>`;

vm.allMain.push({
    subTitle : 'event handling',
    codeHtml : codeHtml4,
    codeJs   : codeJs4,
    codeCss  : '',
    content  : content4,
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Listening-to-Events'
});

// 5-event-modifier
let codeHtml5 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;a href="" @click="warn('be carefull')">without prevent&lt;/a>
    &lt;a href="" @click.prevent="warn('be carefull')">with prevent&lt;/a>
&lt/div>`;

let codeJs5 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    methods : {
        warn: function(message) {
            alert(message);
        }
    },
});`;

let content5 = `<a href="" @click="warn('be carefull')" style="margin: 10px 0; display: block;">without prevent</a>
<a href="" @click.prevent="warn('be carefull')" style="margin: 10px 0 40px 0; display: block;">with prevent</a>`;

vm.allMain.push({
    subTitle : 'event modifier',
    codeHtml : codeHtml5,
    codeJs   : codeJs5,
    codeCss  : '',
    content  : content5,
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Event-Modifiers'
});

// 6-two-ways-data-binding
let codeHtml6 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;div id="tag-wraper" v-html="tagMaker">&lt;/div>

    &lt;label for="react">
        &lt;input id="react" v-model="arrayTag" type="checkbox" value="react">
        react
    &lt;/label>
    &lt;label for="vue">
        &lt;input id="vue" v-model="arrayTag" type="checkbox" value="vue">
        vue
    &lt;/label>
&lt;/div>`;

let codeJs6 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        arrayTag  : [],
    },
    computed: {
        tagMaker : function() {
            let el = '';
            this.arrayTag.forEach(e => {
                el += \`&lt;span class="tag-span">\${e}&lt;/span>\`;
            });
            return el;
        }
    }
});`;

let codeCss6 = `/* css */
#tag-wraper{
    min-height: 24px;
    margin: 20px 0;
}
.tag-span{
    background-color: #41B883;
    margin-right: 6px;
    border-radius: 4px;
    padding: 4px 8px;
}`;

let content6 = `<div id="tag-wraper" v-html="tagMaker"></div>
<label for="react">
    <input id="react" v-model="arrayTag" type="checkbox" value="react">
    react
</label>
<label for="vue">
    <input id="vue" v-model="arrayTag" type="checkbox" value="vue">
    vue
</label>`;

vm.allMain.push({
    subTitle : 'two ways data binding',
    codeHtml : codeHtml6,
    codeJs   : codeJs6,
    codeCss  : codeCss6,
    content  : content6,
    linkdocs : 'https://vuejs.org/v2/api/#v-model'
});

// 7-computed-property
let codeHtml7 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;input v-model="numVal" type="text">
    &lt;p v-html="numCheck">&lt;/p>
&lt;/div>`;

let codeJs7 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        numVal : '',
    },
    computed: {
        numCheck : function() {
            // if insert is empty
            if(this.numVal === ""){
                return '&lt;span class="danger">*please, insert number&lt;/span>';
            }
            // if insert contains character
            else if(!/^\\d+$/.test(this.numVal)){
                return '&lt;span class="danger">*only number allowed&lt;/span>';
            }
            else{
                let message = "";
                if(this.numVal%2 === 0){
                    message = "this is an 'even' number";
                }
                else{
                    message = "this is an 'odd' number";
                }
                return \`&lt;span class="success">\${message}&lt;/span>\`;
            }
        }
    }
});`;

let content7 = `<input class="input-green" v-model="numVal" type="text">
<p v-html="numCheck"></p>`;

vm.allMain.push({
    subTitle : 'computed property',
    codeHtml : codeHtml7,
    codeJs   : codeJs7,
    codeCss  : '',
    content  : content7,
    linkdocs : 'https://vuejs.org/v2/guide/computed.html'
});

// 8-conditional-rendering
let codeHtml8 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;input type="text" placeholder="type something" v-on:keyup="insertValueDataInput">&lt;br>&lt;br>
    &lt;b>data type:&lt;/b>
    &lt;span id="span-wraper" v-show="dataInput !== ''">
        &lt;span v-if="/true|false/.test(dataInput)">boolean&lt;/span>
        &lt;span v-else-if="!/^\\d+$/.test(dataInput) && !/[^\\w\\s]/gi.test(dataInput)">string&lt;/span>
        &lt;span v-else-if="/{/g.test(dataInput) && /}/g.test(dataInput)">object&lt;/span>
        &lt;span v-else-if="/\\[/g.test(dataInput) && /\\]/g.test(dataInput)">array&lt;/span>
        &lt;span v-else-if="/^\\d+$/.test(dataInput)">number&lt;/span>
    &lt;/span>
&lt;/div>`;

let codeJs8 = `/* js */
const vm = new Vue({
    el   : '#myApp',
    data : {
        dataInput : '',
    },
    methods: {
        insertValueDataInput : function(event) {
            this.dataInput = event.target.value;
        }
    }
});`;

let content8 = `<input class="input-green" type="text" placeholder="type something" v-on:keyup="insertValueDataInput"><br><br>
<b>data type:</b>
<span id="span-wraper" v-show="dataInput !== ''">
    <span v-if="/true|false/.test(dataInput)">boolean</span>
    <span v-else-if="!/^\d+$/.test(dataInput) && !/[^\w\s]/gi.test(dataInput)">string</span>
    <span v-else-if="/{/g.test(dataInput) && /}/g.test(dataInput)">object</span>
    <span v-else-if="/\[/g.test(dataInput) && /\]/g.test(dataInput)">array</span>
    <span v-else-if="/^\d+$/.test(dataInput)">number</span>
</span>`;

vm.allMain.push({
    subTitle : 'conditional rendering',
    codeHtml : codeHtml8,
    codeJs   : codeJs8,
    codeCss  : '',
    content  : content8,
    linkdocs : 'https://vuejs.org/v2/guide/conditional.html'
});

// 9-attribute-binding
let codeHtml9 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;img id="jumbotron" :src="wallpaper" width="500">
    &lt;div id="thumbnail-wraper">
        &lt;img src="https://vuebasic.netlify.app/asset/vuewallpaper1.jpeg" width="100" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper1.jpeg')}">
        &lt;img src="https://vuebasic.netlify.app/asset/vuewallpaper2.png" width="100" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper2.png')}">
    &lt;/div>
&lt;/div>`;

let codeJs9 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        wallpaper: 'https://vuebasic.netlify.app/asset/vuewallpaper1.jpeg',
    },
    methods : {
        srcCheck : function(src) {
            let srcSplited = this.wallpaper.split('/');
            return src === srcSplited[srcSplited.length-1];
        },
        changeWallpaper : function(event) {
            this.wallpaper = event.target.src;
        },
    },
});`;

let codeCss9 = `/* css */
#jumbotron{
    width: 500px;
}
#thumbnail-wraper{
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 60px;
}
#thumbnail-wraper img{
    cursor: pointer;
    opacity: 0.7;
    margin-left: 4px;
}
#thumbnail-wraper img.clicked{
    cursor: default;
    opacity: 1;
    transform: scale(0.9);
}`;

let content9 = `<img id="jumbotron" :src="wallpaper" width="500">
<div id="thumbnail-wraper">
    <img src="asset/vuewallpaper1.jpeg" width="100" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper1.jpeg')}">
    <img src="asset/vuewallpaper2.png" width="100" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper2.png')}">
</div>`;

vm.allMain.push({
    subTitle : 'attribute binding',
    codeHtml : codeHtml9,
    codeJs   : codeJs9,
    codeCss  : codeCss9,
    content  : content9,
    linkdocs : 'https://vuejs.org/v2/guide/security.html#Injecting-URLs'
});

// 10-looping
let codeHtml10 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;input @keyup.enter="addItem('enter',$event)" type="text" placeholder="press enter to add">
    &lt;div id="todo-wraper">
        &lt;div v-for="(item,i) of itemsTodo" class="itemList">
            &lt;b :class="{cross: crossCheck(item)}">{{ i+1 }}. {{ item }}&lt;/b>
            &lt;div class="btn-wraper">
                &lt;input :value="item" @click="addCrossItem" type="checkbox" :checked="(crossCheck(item)) ? 'checked' : ''">
                &lt;span :data-value="item" @click="deleteItem">x&lt;/span>
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div>`;

let codeJs10 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        itemsTodo : ['learning vue','hunting job'],
        crossItem : ['learning vue'],
    },
    methods : {
        addItem: function(inputType,event) {
            let newItem = '';
            (inputType == 'enter') ? newItem = event.target.value : newItem = event.target.previousElementSibling.value;
            (newItem !== '') ? this.itemsTodo.push(newItem) : '';
            (inputType == 'enter') ? event.target.value = '' : event.target.previousElementSibling.value = '';
        },
        addCrossItem : function(event) {
            let isExist  = false;
            let item     = event.target.value;
            let elementP = event.target.parentElement.previousElementSibling;

            this.crossItem.forEach(e => {
               if(e === item){
                   isExist = true;
               } 
            });

            if(!isExist){
                this.crossItem.push(item);
                elementP.classList.add('cross');
            }
            else{
                this.crossItem = this.crossItem.filter(e => e !== item);
                elementP.classList.remove('cross');
            }
        },
        crossCheck: function(item){
            let isExist = this.crossItem.find(e => e === item);
            return isExist;
        },
        deleteItem: function(event) {
            this.itemsTodo = this.itemsTodo.filter(e => e !== event.target.dataset.value);
        }
    }
});`;

let codeCss10 = `/* css */
.itemList{
    width: 205px;
    margin-top: 6px;
    background-color: #41B883;
    border-radius: 3px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
b.cross{
    text-decoration: line-through;
    white-space: pre-wrap;
}
.btn-wraper{
    min-width: 28px;
}
.btn-wraper span{
    color: red;
    cursor: pointer;
}`;

let content10 = `<input class="input-green" @keyup.enter="addItem('enter',$event)" type="text" placeholder="press enter to add">
<div id="todo-wraper">
    <div v-for="(item,i) of itemsTodo" class="itemList">
        <b :class="{cross: crossCheck(item)}">{{ i+1 }}. {{ item }}</b>
        <div class="btn-wraper">
            <input :value="item" @click="addCrossItem" type="checkbox" :checked="(crossCheck(item)) ? 'checked' : ''">
            <span :data-value="item" @click="deleteItem">x</span>
        </div>
    </div>
</div>`;

vm.allMain.push({
    subTitle : 'looping',
    codeHtml : codeHtml10,
    codeJs   : codeJs10,
    codeCss  : codeCss10,
    content  : content10,
    linkdocs : 'https://vuejs.org/v2/api/#v-model'
});