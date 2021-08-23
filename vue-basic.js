
// 1-installation
let codeHtml1 = `<html>spasi
<body>spasi
    <div id="myApp"></div>spasispasi

    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>spasi
    <script>spasi
        const vm = new Vue({spasi
            el : '#myApp', //root elementspasi
        })spasi
    </script>spasi
</body>spasi</html>`

master.lesson.vbasic.push({
    subTitle : 'installation',
    codeHtml : codeHtml1.replace(/</g,'&lt;'),
    codeJs   : '',
    codeCss  : '',
    content  : '',
    linkdocs : 'https://vuejs.org/v2/guide/installation.html#CDN'
});

// 2-data-method
let codeJs2 = `const vm = new Vue({spasi
    el   : '#myApp',spasi
    data : {spasi
        myName : 'Abdullah'spasi
    },spasi
    methods: {spasi
        showName : (name) => {spasi
            console.log(\`Hi, my name is \${name}\`);spasi
        }spasi
    }spasi});`

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
let codeHtml3 = `<div id="myApp">spasi
    <p v-once>{{ testVOnce }}</p>spasi
    <p v-text="testVText"></p>spasi
    <p v-html="testVHtml"></p>spasi</div>`;

let codeJs3 = `const vm = new Vue({spasi
    el   : '#myApp',spasi
    data : {spasi
        testVOnce : 'this is an unalterable text',spasi
        testVText : '<span style="color:red;">like innerText</span>',spasi
        testVHtml : '<span style="color:red;">like innerHTML</span>',spasi
    },spasi});spasispasi// v-once atribute make your value is unalterablespasivm.testVOnce = "edit variable testVOnce";`;

master.lesson.vbasic.push({
    subTitle : 'directive',
    codeHtml : codeHtml3.replace(/</g,'&lt;'),
    codeJs   : codeJs3.replace(/</g,'&lt;'),
    codeCss  : '',
    content  : `<img class="result" src="asset/media/3-directive.png">`,
    linkdocs : 'https://vuejs.org/v2/api/#Directives'
});

// 4-event-handling
let codeHtml4 = `<div id="myApp">spasi
    <p>Author-name: {{ author }}</p>spasi
    <p>Author-age : {{ age }}</p>spasi
    <button v-on:click="editAuthor()">edit</button>spasi</div>`;

let codeJs4 = `const vm = new Vue({spasi
    el   : '#myApp',spasi
    data : {spasi
        author : 'korospace',spasi
        age : 22,spasi
    },spasi
    methods : {spasi
        editAuthor : function() {spasi
            this.author = prompt("new author's name");spasi
            this.age    = parseInt(prompt("new author's age"));spasi
        }spasi
    },spasi})`;

master.lesson.vbasic.push({
    subTitle : 'event handling',
    codeHtml : codeHtml4.replace(/</g,'&lt;'),
    codeJs   : codeJs4,
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/4-event-handling.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Listening-to-Events'
});

// 5-event-modifier
let codeHtml5 = `<div id="myApp">spasi
    <a href="" @click="warn('be carefull')">without prevent</a>spasi
    <a href="" @click.prevent="warn('be carefull')">with prevent</a>spasi</div>`;

let codeJs5 = `const vm = new Vue({spasi
    el   : '#myApp',spasi
    methods : {spasi
        warn: function(message) {spasi
            alert(message);spasi
        }spasi
    },spasi});`;

master.lesson.vbasic.push({
    subTitle : 'event modifier',
    codeHtml : codeHtml5.replace(/</g,'&lt;'),
    codeJs   : codeJs5,
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/5-event-modifier.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Event-Modifiers'
});

// 6-dollar-event
let codeHtml6 = `<div id="myApp">spasi
    <button @click="testing1">testing 1</button>spasi
    <button @click="testing2('hello world',$event)">testing 2</button>spasi</div>`;

let codeJs6 = `const vm = new Vue({spasi
    el   : '#myApp',spasi
    methods : {spasi
        testing1: function(event){spasi
            console.log(event.target); // &lt;button>spasi
        },spasi
        testing2: function(message,event){spasi
            console.log(message);      // hello worldspasi
            console.log(event.target); // &lt;button>spasi
        }spasi
    }spasi});`;

master.lesson.vbasic.push({
    subTitle : 'dollar event',
    codeHtml : codeHtml6.replace(/</g,'&lt;'),
    codeJs   : codeJs6,
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/6-dollar-event.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/events.html#Event-Modifiers'
});

// 7-two-ways-data-binding
let codeHtml7 = `<div id="myApp">spasi
    <div id="tag-wraper" v-html="tagMaker()"></div>spasispasi

    <label for="react">spasi
        <input id="react" v-model="arrayTag" type="checkbox" value="react">spasi
        reactspasi
    </label>spasi
    <label for="vue">spasi
        <input id="vue" v-model="arrayTag" type="checkbox" value="vue">spasi
        vuespasi
    </label>spasi</div>`;

let codeJs7 = `const vm = new Vue({spasi
    el   : '#myApp', spasi
    data : {spasi
        arrayTag  : [],spasi
    },spasi
    methods: {spasi
        tagMaker : function() {spasi
            let el = '';spasi
            this.arrayTag.forEach(e => {spasi
                el += \`<span class="tag-span">${e}</span>\`;spasi
            });spasi
            return el;spasi
        }spasi
    }spasi});`;

let codeCss7 = `#tag-wraper{spasi
    min-height: 24px;spasi
    margin: 10px 0 0 0;spasi}spasi
.tag-span{spasi
    background-color: #41B883;spasi
    margin-right: 6px;spasi
    border-radius: 4px;spasi
    padding: 4px 8px;spasi}`;

master.lesson.vbasic.push({
    subTitle : 'two ways data binding',
    codeHtml : codeHtml7.replace(/</g,'&lt;'),
    codeJs   : codeJs7.replace(/</g,'&lt;'),
    codeCss  : codeCss7,
    content  : `<video class="result" controls>
        <source src="asset/media/7-two-ways-data-binding.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/api/#v-model'
});

// 8-computed-property
let codeHtml8 = `<div id="myApp">spasi
    <input v-model="numVal" type="text">spasi
    <p v-text="numCheck"></p>spasi</div>`;

let codeJs8 = `const vm = new Vue({spasi
    el   : '#myApp', spasi
    data : {spasi
        numVal : '',spasi
    },spasi
    computed: {spasi
        numCheck : function() {spasi
            // if insert is emptyspasi
            if(this.numVal === ""){spasi
                return '*please, insert number';spasi
            }spasi
            // if insert contains characterspasi
            else if(!/^\\d+$/.test(this.numVal)){spasi
                return 'only number allowed';spasi
            }spasi
            else{spasi
                if(this.numVal%2 === 0){spasi
                    return "this is an 'even' number";spasi
                }spasi
                else{spasi
                    return "this is an 'odd' number";spasi
                }spasi
            }spasi
        }spasi
    }spasi});`;

master.lesson.vbasic.push({
    subTitle : 'computed property',
    codeHtml : codeHtml8.replace(/</g,'&lt;'),
    codeJs   : codeJs8,
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/8-computed-property.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/computed.html'
});

// 9-conditional-rendering
let codeHtml9 = `<div id="myApp">spasi
    <input type="text" placeholder="type something" v-on:keyup="insertValueDataInput">spasi
    <br><br>spasi
    <b>data type:</b>spasi
    <span id="span-wraper" v-show="dataInput !== ''">spasi
        <span v-if="/true|false/.test(dataInput)">boolean</span>spasi
        <span v-else-if="!/^\\d+$/.test(dataInput) && !/[^\\w\\s]/gi.test(dataInput)">string</span>spasi
        <span v-else-if="/{/g.test(dataInput) && /}/g.test(dataInput)">object</span>spasi
        <span v-else-if="/\\[/g.test(dataInput) && /\\]/g.test(dataInput)">array</span>spasi
        <span v-else-if="/^\\d+$/.test(dataInput)">number</span>spasi
    </span>spasi</div>`;

let codeJs9 = `const vm = new Vue({spasi
    el   : '#myApp',spasi
    data : {spasi
        dataInput : '',spasi
    },spasi
    methods: {spasi
        insertValueDataInput : function(event) {spasi
            this.dataInput = event.target.value;spasi
        }spasi
    }spasi});`;

master.lesson.vbasic.push({
    subTitle : 'conditional rendering',
    codeHtml : codeHtml9.replace(/</g,'&lt;'),
    codeJs   : codeJs9,
    codeCss  : '',
    content  : `<video class="result" controls>
        <source src="asset/media/9-conditional-rendering.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/conditional.html'
});

// 10-attribute-binding
let codeHtml10 = `<div id="myApp">spasi
    <img id="jumbotron" :src="wallpaper" width="500">spasi
    <div id="thumbnail-wraper">spasi
        <img src="https://vuecheatsheet.netlify.app/asset/media/vuewallpaper1.jpeg" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper1.jpeg')}">spasi
        <img src="https://vuecheatsheet.netlify.app/asset/media/vuewallpaper2.png" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper2.png')}">spasi
    </div>spasi</div>`;

let codeJs10 = `const vm = new Vue({spasi
    el   : '#myApp',spasi
    data : {spasi
        wallpaper: 'https://vuecheatsheet.netlify.app/asset/media/vuewallpaper1.jpeg',spasi
    },spasi
    methods : {spasi
        srcCheck : function(src) {spasi
            let srcSplited = this.wallpaper.split('/');spasi
            return src === srcSplited[srcSplited.length-1];spasi
        },spasi
        changeWallpaper : function(event) {spasi
            this.wallpaper = event.target.src;spasi
        },spasi
    },spasi});`;

let codeCss10 = `#jumbotron{spasi
    width: 300px;spasi
    margin-bottom: 10px;spasi}spasi
#thumbnail-wraper{spasi
    display: flex;spasi
    align-items: center;spasi}spasi
#thumbnail-wraper img{spasi
    cursor: pointer;spasi
    opacity: 0.5;spasi
    margin-right: 4px;spasi
    width: 148px;spasi}spasi
#thumbnail-wraper img.clicked{spasi
    cursor: default;spasi
    opacity: 1;spasi}`;

master.lesson.vbasic.push({
    subTitle : 'attribute binding',
    codeHtml : codeHtml10.replace(/</g,'&lt;'),
    codeJs   : codeJs10,
    codeCss  : codeCss10,
    content  : `<video class="result" controls>
        <source src="asset/media/10-attribute-binding.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/guide/security.html#Injecting-URLs'
});

// 11-looping
let codeHtml11 = `<div id="myApp">spasi
    <input @keyup.enter="addItem('enter',$event)" type="text" placeholder="press enter to add">spasi
    <div id="todo-wraper">spasi
        <div v-for="(item,i) of itemsTodo" class="itemList">spasi
            <b :class="{cross: crossCheck(item)}">{{ i+1 }}. {{ item }}</b>spasi
            <div class="btn-wraper">spasi
                <input :value="item" @click="addCrossItem" type="checkbox" :checked="(crossCheck(item)) ? 'checked' : ''">spasi
                <span :data-value="item" @click="deleteItem">x</span>spasi
            </div>spasi
        </div>spasi
    </div>spasi</div>`;

let codeJs11 = `const vm = new Vue({spasi
    el   : '#myApp', spasi
    data : {spasi
        itemsTodo : ['learning vue','hunting job'],spasi
        crossItem : ['learning vue'],spasi
    },spasi
    methods : {spasi
        addItem: function(inputType,event) {spasi
            let newItem = '';spasi
            (inputType == 'enter') ? newItem = event.target.value : newItem = event.target.previousElementSibling.value;spasi
            (newItem !== '') ? this.itemsTodo.push(newItem) : '';spasi
            (inputType == 'enter') ? event.target.value = '' : event.target.previousElementSibling.value = '';spasi
        },spasi
        addCrossItem : function(event) {spasi
            let isExist  = false;spasi
            let item     = event.target.value;spasi
            let elementP = event.target.parentElement.previousElementSibling;spasispasi

            this.crossItem.forEach(e => {spasi
               if(e === item){spasi
                   isExist = true;spasi
               }spasi
            });spasispasi

            if(!isExist){spasi
                this.crossItem.push(item);spasi
                elementP.classList.add('cross');spasi
            }spasi
            else{spasi
                this.crossItem = this.crossItem.filter(e => e !== item);spasi
                elementP.classList.remove('cross');spasi
            }spasi
        },spasi
        crossCheck: function(item){spasi
            let isExist = this.crossItem.find(e => e === item);spasi
            return isExist;spasi
        },spasi
        deleteItem: function(event) {spasi
            this.itemsTodo = this.itemsTodo.filter(e => e !== event.target.dataset.value);spasi
        }spasi
    }spasi});`;

let codeCss11 = `.itemList{spasi
    width: 195px;spasi
    margin-top: 6px;spasi
    background-color: #41B883;spasi
    border-radius: 3px;spasi
    padding: 5px;spasi
    display: flex;spasi
    justify-content: space-between;spasi}spasi
b{spasi
    overflow: hidden;spasi}spasi
b.cross{spasi
    text-decoration: line-through;spasi
    white-space: pre-wrap;spasi}spasi
.btn-wraper{spasi
    display:flex;spasi
    flex-direction:column;spasi
    justify-content:center;spasi
    align-items:center;spasi
    color: red;spasi
    cursor: pointer;spasi}`;

master.lesson.vbasic.push({
    subTitle : 'looping',
    codeHtml : codeHtml11.replace(/</g,'&lt;'),
    codeJs   : codeJs11,
    codeCss  : codeCss11,
    content  : `<video class="result" controls>
        <source src="asset/media/11-looping.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>`,
    linkdocs : 'https://vuejs.org/v2/api/#v-model'
});