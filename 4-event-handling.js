let codeHtmlA1 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;a href="" @click="warn('be carefull')">without prevent&lt;/a>
    &lt;a href="" @click.prevent="warn('be carefull')">with prevent&lt;/a>
&lt/div>`;

let codeJsA1 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    methods : {
        warn: function(message) {
            alert(message);
        }
    },
});`;

let codeHtmlB1 = `&lt;!-- html -->
&lt;div id="myApp">
    &lt;p>Author-name: {{ author }}&lt;/p>
    &lt;p>Author-age : {{ age }}&lt;/p>
    &lt;button v-on:click="editAuthor()">edit&lt;/button>
&lt;/div>`;

let codeJsB1 = `/* js */
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
});`;

const vm4 = new Vue({
    el   : '#main-event-handling', 
    data : {
        dataId    : 'event-handling',
        subTitle  : 'event handling',
        age       : 22,
        author    : 'korospace',
        codeHtmlA : codeHtmlA1,
        codeJsA   : codeJsA1,
        codeHtmlB : codeHtmlB1,
        codeJsB   : codeJsB1,
        documentation: 'https://vuejs.org/v2/guide/events.html#Listening-to-Events'
    },
    methods : {
        editAuthor : function() {
            this.author  = prompt("new author's name");
            if(this.author === "" || this.author === null){
                this.author  = 'korospace';
                return alert('insert something!');
            }
            this.age  = parseInt(prompt("new author's age"));
        },
        warn: function(message) {
            alert(message);
        }
    },
});

mainVm.allId.push({id:vm4.dataId,subTitle:vm4.subTitle});
