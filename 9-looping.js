let codeHtml9 = `&lt;!-- html -->
&lt;input @keyup.enter="addItem('enter',$event)" type="text" placeholder="press enter to add">
&lt;div id="todo-wraper">
    &lt;div v-for="(item,i) of itemsTodo" class="itemList">
        &lt;b :class="{cross: crossCheck(item)}">{{ i+1 }}. {{ item }}&lt;/b>
        &lt;div class="btn-wraper">
            &lt;input :value="item" @click="addCrossItem" type="checkbox" :checked="(crossCheck(item)) ? 'checked' : ''">
            &lt;span :data-value="item" @click="deleteItem">x&lt;/span>
        &lt;/div>
    &lt;/div>
&lt;/div>`;

let codeJs9 = `/* js */
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

let codeCss9 = `/* css */
#main-looping .itemList{
    width: 205px;
    margin-top: 6px;
    background-color: #41B883;
    border-radius: 3px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
#main-looping b.cross{
    text-decoration: line-through;
    white-space: pre-wrap;
}
#main-looping .btn-wraper{
    min-width: 28px;
}
#main-looping .btn-wraper span{
    color: red;
    cursor: pointer;
}`;

const vm9 = new Vue({
    el   : '#main-looping', 
    data : {
        dataId    : 'looping',
        subTitle  : 'looping',
        itemsTodo : ['learning vue','hunting job'],
        crossItem : ['learning vue'],
        codeHtml  : codeHtml9,
        codeJs    : codeJs9,
        codeCss   : codeCss9,
        documentation: 'https://vuejs.org/v2/api/#v-model',
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
});

mainVm.allId.push({id:vm9.dataId,subTitle:vm9.subTitle});