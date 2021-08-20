
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

master.lesson.vbasic.push({
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

master.lesson.vbasic.push({
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

let content3 = `<img class="result" src="asset/media/3-directive.png">`;

master.lesson.vbasic.push({
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

let content4 = `<video class="result" controls>
    <source src="asset/media/4-event-handling.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`;

master.lesson.vbasic.push({
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
    &lt;br>
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

let content5 = `<video class="result" controls>
    <source src="asset/media/5-event-modifier.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`;

master.lesson.vbasic.push({
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

let content6 = `<img class="result" loading="lazy" src="asset/media/6-two-ways-data-binding.gif">`;


master.lesson.vbasic.push({
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

let content7 = `<img class="result" loading="lazy" src="asset/media/7-computed-property.gif">`;

master.lesson.vbasic.push({
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

let content8 = `<img class="result" loading="lazy" src="asset/media/8-conditional-rendering.gif">`;

master.lesson.vbasic.push({
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
        &lt;img src="https://vuebasic.netlify.app/asset/media/vuewallpaper1.jpeg" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper1.jpeg')}">
        &lt;img src="https://vuebasic.netlify.app/asset/media/vuewallpaper2.png" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper2.png')}">
    &lt;/div>
&lt;/div>>`;

let codeJs9 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        wallpaper: 'https://vuebasic.netlify.app/asset/media/vuewallpaper1.jpeg',
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

let content9 = `<img class="result" loading="lazy" src="asset/media/9-attribute-binding.gif">`;

master.lesson.vbasic.push({
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

let content10 = `<img class="result" loading="lazy" src="asset/media/10-looping.gif">`;

master.lesson.vbasic.push({
    subTitle : 'looping',
    codeHtml : codeHtml10,
    codeJs   : codeJs10,
    codeCss  : codeCss10,
    content  : content10,
    linkdocs : 'https://vuejs.org/v2/api/#v-model'
});