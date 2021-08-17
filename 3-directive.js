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

const vm3 = new Vue({
    el   : '#main-directive',
    data : {
        dataId    : 'directive',
        subTitle  : 'directive',
        testVOnce : 'this is an unalterable text',
        testVText : '<span style="color:red;">like innerText</span>',
        testVHtml : '<span style="color:red;">like innerHTML</span>',
        codeHtml  : codeHtml3,
        codeJs    : codeJs3,
        documentation: 'https://vuejs.org/v2/api/#Directives'
    },
});

// v-once atribute make your value is unalterable
vm3.testVOnce = "edit variable testVOnce";

mainVm.allId.push({id:vm3.dataId,subTitle:vm3.subTitle});
