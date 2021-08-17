let codeHtml7 = `&lt;!-- html -->
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

let codeJs7 = `/* js */
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

const vm7 = new Vue({
    el   : '#main-conditional-rendering',
    data : {
        subTitle  : 'conditional rendering',
        dataInput : '',
        codeHtml  : codeHtml7,
        codeJs    : codeJs7,
        documentation: 'https://vuejs.org/v2/guide/conditional.html'
    },
    methods: {
        insertValueDataInput : function(event) {
            this.dataInput = event.target.value;
        }
    }
});

headerVm.allSubTitle.push(vm7.subTitle);
