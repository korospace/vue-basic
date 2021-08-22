
// 1-installation
let codeHtml1 = `<!-- html -->
<html>
<body>
    <div id="myApp"></div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script>
        const vm = new Vue({
            el : '#myApp', //root element
        })
    </script>
</body>
</html>`

master.lesson.vbasic.push({
    subTitle : 'installation',
    codeHtml : codeHtml1.replace(/</g,'&lt;'),
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

master.lesson.vbasic.push({
    subTitle : 'data and method',
    codeHtml : '',
    codeJs   : codeJs2,
    codeCss  : '',
    content  : '',
    linkdocs : 'https://vuejs.org/v2/api/#data'
});

// 3-directive
let codeHtml3 = `<!-- html -->
<div id="myApp">
    <p v-once>{{ testVOnce }}</p>
    <p v-text="testVText"></p>
    <p v-html="testVHtml"></p>
</div>`;

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

let componentRes3 = {
    data(){
        return{
            testVOnce : 'this is an unalterable text',
            testVText : '<span style="color:red;">like innerText</span>',
            testVHtml : '<span style="color:red;">like innerHTML</span>',
        }
    },
    template: codeHtml3
}

xmain.components.xcomres3 = componentRes3;
master.lesson.vbasic.push({
    subTitle : 'directive',
    codeHtml : codeHtml3.replace(/</g,'&lt;'),
    codeJs   : codeJs3,
    codeCss  : '',
    content  : 'xcomres3',
    linkdocs : 'https://vuejs.org/v2/api/#Directives'
});


// 4-event-handling
let codeHtml4 = `<!-- html -->
<div id="myApp">
    <p>Author-name: {{ author }}</p>
    <p>Author-age : {{ age }}</p>
    <button v-on:click="editAuthor()">edit</button>
</div>`

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

let componentRes4 = {
    data(){
        return{
            author : 'korospace',
            age : 22,
        }
    },
    methods : {
        editAuthor : function() {
            this.author = prompt("new author's name");
            this.age    = parseInt(prompt("new author's age"));
        }
    },
    template: codeHtml4
}

xmain.components.xcomres4 = componentRes4;
master.lesson.vbasic.push({
    subTitle : 'event handling',
    codeHtml : codeHtml4.replace(/</g,'&lt;'),
    codeJs   : codeJs4,
    codeCss  : '',
    content  : 'xcomres4',
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Listening-to-Events'
});

// 5-event-modifier
let codeHtml5 = `<!-- html -->
<div id="myApp">
    <a href="" @click="warn('be carefull')">without prevent</a>
    <br>
    <a href="" @click.prevent="warn('be carefull')">with prevent</a>
</div>`;

let codeJs5 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    methods : {
        warn: function(message) {
            alert(message);
        }
    },
});`;

let componentRes5 = {
    methods : {
        warn: function(message) {
            alert(message);
        }
    },
    template: codeHtml5
}

xmain.components.xcomres5 = componentRes5;
master.lesson.vbasic.push({
    subTitle : 'event modifier',
    codeHtml : codeHtml5.replace(/</g,'&lt;'),
    codeJs   : codeJs5,
    codeCss  : '',
    content  : 'xcomres5',
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Event-Modifiers'
});

// 6-dollar-event
let codeHtml6 = `<!-- html -->
<div id="myApp">
    <button @click="testing1">testing 1</button>
    <button @click="testing2('hello world',$event)">testing 2</button>
</div>`;

let codeJs6 = `/* js */
const vm = new Vue({
    el   : '#myApp',
    methods : {
        testing1: function(event){
            console.log(event.target); // &lt;button>
        },
        testing2: function(message,event){
            console.log(message);      // hello world
            console.log(event.target); // &lt;button>
        }
    }
});`;

let componentRes6 = {
    methods : {
        testing1: function(event){
            console.log(event.target); // &lt;button>
        },
        testing2: function(message,event){
            console.log(message);      // hello world
            console.log(event.target); // &lt;button>
        }
    },
    template: codeHtml6
}

xmain.components.xcomres6 = componentRes6;
master.lesson.vbasic.push({
    subTitle : 'dollar event',
    codeHtml : codeHtml6.replace(/</g,'&lt;'),
    codeJs   : codeJs6,
    codeCss  : '',
    content  : 'xcomres6',
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Event-Modifiers'
});

// 7-two-ways-data-binding
let codeHtml7 = `<!-- html -->
<div id="myApp">
    <div id="tag-wraper" v-html="tagMaker()"></div>

    <label for="react">
        <input id="react" v-model="arrayTag" type="checkbox" value="react">
        react
    </label>
    <label for="vue">
        <input id="vue" v-model="arrayTag" type="checkbox" value="vue">
        vue
    </label>
</div>`;

let codeJs7 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        arrayTag  : [],
    },
    methods: {
        tagMaker : function() {
            let el = '';
            this.arrayTag.forEach(e => {
                el += \`<span class="tag-span">\${e}</span>\`;
            });
            return el;
        }
    }
});`;

let codeCss7 = `/* css */
#tag-wraper{
    min-height: 24px;
    margin: 10px 0 0 0;
}
.tag-span{
    background-color: #41B883;
    margin-right: 6px;
    border-radius: 4px;
    padding: 4px 8px;
}`;

let componentRes7 = {
    data () {
        return {
            arrayTag  : [],
        }
    },
    methods: {
        tagMaker : function() {
            let el = '';
            this.arrayTag.forEach(e => {
                el += `<span class="tag-span">${e}</span>`;
            });
            return el;
        }
    },
    mounted(){
        let tagHead  = document.head;
        if(tagHead.querySelector('style') == null){
            tagHead.insertBefore(document.createElement('style'),tagHead.firstElementChild);
        }
        tagHead.querySelector('style').innerHTML = tagHead.querySelector('style').innerHTML+codeCss7;
    },
    template: codeHtml7
}

xmain.components.xcomres7 = componentRes7;
master.lesson.vbasic.push({
    subTitle : 'two ways data binding',
    codeHtml : codeHtml7.replace(/</g,'&lt;'),
    codeJs   : codeJs7.replace(/</g,'&lt;'),
    codeCss  : codeCss7,
    content  : 'xcomres7',
    linkdocs : 'https://vuejs.org/v2/api/#v-model'
});

// 8-computed-property
let codeHtml8 = `<!-- html -->
<div id="myApp">
    <input v-model="numVal" type="text">
    <br>
    <small v-html="numCheck"></small>
</div>`;

let codeJs8 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        numVal : '',
    },
    computed: {
        numCheck : function() {
            // if insert is empty
            if(this.numVal === ""){
                return '*please, insert number';
            }
            // if insert contains character
            else if(!/^\\d+$/.test(this.numVal)){
                return '*only number allowed';
            }
            else{
                let message = "";
                if(this.numVal%2 === 0){
                    return "this is an 'even' number";
                }
                else{
                    return "this is an 'odd' number";
                }
                return \`<span class="success">\${message}</span>\`;
            }
        }
    }
});`;

let componentRes8 = {
    data () {
        return {
            numVal : '',
        }
    },
    computed: {
        numCheck : function() {
            // if insert is empty
            if(this.numVal === ""){
                return '*please, insert number';
            }
            // if insert contains character
            else if(!/^\d+$/.test(this.numVal)){
                return '*only number allowed';
            }
            else{
                if(this.numVal%2 === 0){
                    return "this is an 'even' number";
                }
                else{
                    return "this is an 'odd' number";
                }
            }
        }
    },
    mounted(){},
    template: codeHtml8
}

xmain.components.xcomres8 = componentRes8;
master.lesson.vbasic.push({
    subTitle : 'computed property',
    codeHtml : codeHtml8.replace(/</g,'&lt;'),
    codeJs   : codeJs8,
    codeCss  : '',
    content  : 'xcomres8',
    linkdocs : 'https://vuejs.org/v2/guide/computed.html'
});

// 9-conditional-rendering
let codeHtml9 = `<!-- html -->
<div id="myApp">
    <input type="text" placeholder="type something" v-on:keyup="insertValueDataInput"><br><br>
    <b>data type:</b>
    <span id="span-wraper" v-show="dataInput !== ''">
        <span v-if="/true|false/.test(dataInput.toLowerCase())">boolean</span>
        <span v-else-if="!/^\\d+$/.test(dataInput) && !/[^\\w\\s]/gi.test(dataInput)">string</span>
        <span v-else-if="/{/g.test(dataInput) && /}/g.test(dataInput)">object</span>
        <span v-else-if="/\\[/g.test(dataInput) && /\\]/g.test(dataInput)">array</span>
        <span v-else-if="/^\\d+$/.test(dataInput)">number</span>
    </span>
</div>`;

let codeJs9 = `/* js */
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

let componentRes9 = {
    data () {
        return {
            dataInput : '',
        }
    },
    methods: {
        insertValueDataInput : function(event) {
            this.dataInput = event.target.value;
        }
    },
    mounted(){},
    template: codeHtml9
}

xmain.components.xcomres9 = componentRes9;
master.lesson.vbasic.push({
    subTitle : 'conditional rendering',
    codeHtml : codeHtml9.replace(/</g,'&lt;'),
    codeJs   : codeJs9,
    codeCss  : '',
    content  : 'xcomres9',
    linkdocs : 'https://vuejs.org/v2/guide/conditional.html'
});


// 10-attribute-binding
let codeHtml10 = `<!-- html -->
<div id="myApp">
    <img id="jumbotron" :src="wallpaper" width="500">
    <div id="thumbnail-wraper">
        <img src="asset/media/vuewallpaper1.jpeg" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper1.jpeg')}">
        <img src="asset/media/vuewallpaper2.png" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper2.png')}">
    </div>
</div>`;

let codeJs10 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        wallpaper: 'asset/media/vuewallpaper1.jpeg',
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

let codeCss10 = `/* css */
#jumbotron{
    width: 200px;
    margin-bottom: 10px;
}
#thumbnail-wraper{
    display: flex;
    align-items: center;
}
#thumbnail-wraper img{
    cursor: pointer;
    opacity: 0.5;
    margin-right: 4px;
    width: 50px;
}
#thumbnail-wraper img.clicked{
    cursor: default;
    opacity: 1;
}`;

let componentRes10 = {
    data () {
        return {
            wallpaper: 'https://vuecheatsheet.netlify.app/asset/media/vuewallpaper1.jpeg',
        }
    },
    methods: {
        srcCheck : function(src) {
            let srcSplited = this.wallpaper.split('/');
            return src === srcSplited[srcSplited.length-1];
        },
        changeWallpaper : function(event) {
            this.wallpaper = event.target.src;
        },
    },
    mounted(){
        let tagHead  = document.head;
        if(tagHead.querySelector('style') == null){
            tagHead.insertBefore(document.createElement('style'),tagHead.firstElementChild);
        }
        tagHead.querySelector('style').innerHTML = tagHead.querySelector('style').innerHTML+codeCss10;
    },
    template: codeHtml10
}

xmain.components.xcomres10 = componentRes10;
master.lesson.vbasic.push({
    subTitle : 'attribute binding',
    codeHtml : codeHtml10.replace(/</g,'&lt;'),
    codeJs   : codeJs10,
    codeCss  : codeCss10,
    content  : 'xcomres10',
    linkdocs : 'https://vuejs.org/v2/guide/security.html#Injecting-URLs'
});


// 11-looping
let codeHtml11 = `<!-- html -->
<div id="myApp">
    <input @keyup.enter="addItem('enter',$event)" type="text" placeholder="press enter to add">
    <div id="todo-wraper">
        <div v-for="(item,i) of itemsTodo" class="itemList">
            <b :class="{cross: crossCheck(item)}">{{ i+1 }}. {{ item }}</b>
            <div class="btn-wraper">
                <input :value="item" @click="addCrossItem" type="checkbox" :checked="(crossCheck(item)) ? 'checked' : ''">
                <span :data-value="item" @click="deleteItem">x</span>
            </div>
        </div>
    </div>
</div>`;

let codeJs11 = `/* js */
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

let codeCss11 = `/* css */
.itemList{
    width: 195px;
    margin-top: 6px;
    background-color: #41B883;
    border-radius: 3px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
b{
    overflow: hidden;
}
b.cross{
    text-decoration: line-through;
    white-space: pre-wrap;
}
.btn-wraper{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: red;
    cursor: pointer;
}`;


let componentRes11 = {
    data () {
        return {
            itemsTodo : ['learning vue','hunting job'],
            crossItem : ['learning vue'],
        }
    },
    methods: {
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
    },
    mounted(){
        let tagHead  = document.head;
        if(tagHead.querySelector('style') == null){
            tagHead.insertBefore(document.createElement('style'),tagHead.firstElementChild);
        }
        tagHead.querySelector('style').innerHTML = tagHead.querySelector('style').innerHTML+codeCss11;
    },
    template: codeHtml11
}

xmain.components.xcomres11 = componentRes11;
master.lesson.vbasic.push({
    subTitle : 'looping',
    codeHtml : codeHtml11.replace(/</g,'&lt;'),
    codeJs   : codeJs11,
    codeCss  : codeCss11,
    content  : 'xcomres11',
    linkdocs : 'https://vuejs.org/v2/api/#v-model'
});