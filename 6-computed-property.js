let codeHtml6 = `&lt;!-- html -->
&lt;input v-model="numVal" type="text">
&lt;p v-html="numCheck">&lt;/p>`;

let codeJs6 = `/* js */
const vm = new Vue({
    el   : '#myApp', 
    data : {
        numVal : '',
    },
    computed: {
        numCheck : function() {
            // if insert is empty
            if(this.numVal === ""){
                return '&lt;span style="color:red;font-style:italic;">*please, insert number&lt;/span>';
            }
            // if insert contains character
            else if(!/^\\d+$/.test(this.numVal)){
                return '&lt;span style="color:red;font-style:italic;">*only number allowed&lt;/span>';
            }
            else{
                let message = "";
                if(this.numVal%2 === 0){
                    message = "this is an 'even' number";
                }
                else{
                    message = "this is an 'odd' number";
                }
                return \`&lt;span style="color:green;">\${message}&lt;/span>\`;
            }
        }
    }
});`;

const vm6 = new Vue({
    el   : '#main-computed', //root component
    data : {
        dataId   : 'computed-property',
        subTitle : 'computed property',
        numVal   : '',
        codeHtml : codeHtml6,
        codeJs   : codeJs6,
        documentation: 'https://vuejs.org/v2/guide/computed.html'
    },
    computed: {
        numCheck : function() {
            if(this.numVal === ""){
                return '<span style="color:red;font-style:italic;">*please, insert number</span>';
            }
            else if(!/^\d+$/.test(this.numVal)){
                return '<span style="color:red;font-style:italic;">*only number allowed</span>';
            }
            else{
                let message = "";
                if(this.numVal%2===0){
                    message = "this is an 'even' number";
                }
                else{
                    message = "this is an 'odd' number";
                }
                return `<span style="color:green;">${message}</span>`;
            }
        }
    }
});

mainVm.allId.push({id:vm6.dataId,subTitle:vm6.subTitle});
