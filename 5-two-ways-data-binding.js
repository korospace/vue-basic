let codeHtml5 = `&lt;!-- html -->
&lt;div id="tag-wraper" v-html="tagMaker">&lt;/div>

&lt;label for="angular">
    &lt;input id="angular" v-model="arrayTag" type="checkbox" value="angular">
    angular
&lt;/label>
&lt;label for="react">
    &lt;input id="react" v-model="arrayTag" type="checkbox" value="react">
    react
&lt;/label>
&lt;label for="vue">
    &lt;input id="vue" v-model="arrayTag" type="checkbox" value="vue">
    vue
&lt;/label>
&lt;label for="tailwind">
    &lt;input id="tailwind" v-model="arrayTag" type="checkbox" value="tailwind">
    tailwind
&lt;/label>`;

let codeJs5 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        arrayTag  : [],
    },
    computed: {
        tagMaker : function() {
            let el = '';
            this.arrayTag.forEach(e => {
                el += \`&lt;span class="tag">\${e}&lt;/span>\`;
            });
            return el;
        }
    }
});`;

let codeCss5 = `/* css */
#main-two-ways-data-binding #tag-wraper{
    min-height: 24px;
    margin: 20px 0;
}
#main-two-ways-data-binding .tag-span{
    background-color: #41B883;
    margin-right: 6px;
    border-radius: 4px;
    padding: 4px 8px;
}`;

const vm5 = new Vue({
    el   : '#main-two-ways-data-binding', 
    data : {
        dataId    : 'two-ways-data-binding',
        subTitle  : 'two ways data binding',
        arrayTag  : [],
        codeHtml  : codeHtml5,
        codeJs    : codeJs5,
        codeCss   : codeCss5,
        documentation: 'https://vuejs.org/v2/api/#v-model',
    },
    computed: {
        tagMaker : function() {
            let el = '';
            this.arrayTag.forEach(e => {
                el += `<span class="tag-span">${e}</span>`;
            });
            return el;
        }
    }
});

mainVm.allId.push({id:vm5.dataId,subTitle:vm5.subTitle});