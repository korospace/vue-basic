// SUB-TITLE
Vue.component('sub-title', {
    props: ['subtitle'],
    methods: {
        subTitleParse: (data) => {
            return data.replace(/ /g,'-');
        }
    },
    template: `<h1 class="sub-title" :id="subTitleParse(subtitle)">{{ subtitle }}</h1>`
})

// LINK-DOCUMENTATION
Vue.component('linkdocs', {
    props: ['link','subtitle'],
    template: `<a class="link-docs" target="_blank" :href="link">{{subtitle+' docs'}}</a>`
})

// CODE BLOCK
Vue.component('thecode', {
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
    template: `<div class="code-wraper">
        <div :class="{'btn-copy':true}" @click="copyCode(code,$event)">copy</div>
        <textarea class="temp-textarea"></textarea>
        <pre v-if="lang == 'html'"><code v-html="code" class="language-markup"></code></pre>
        <pre v-if="lang == 'js'"><code v-html="code" class="language-javascript"></code></pre>
        <pre v-if="lang == 'css'"><code v-html="code" class="language-css"></code></pre>
    </div>`        
})

const headerVm = new Vue({
    el: '#header',
    data: {
        title       : 'learning basic of vuejs',
        allSubTitle : [],
        logo        : 'asset/vue-logo.svg',
        currentId   : ''
    },
    methods: {
        subTitleParse: (data) => {
            return data.replace(/ /g,'-');
        }
    },
});

window.addEventListener('load',() => {
    document.querySelector('#loading-page').classList.add('hide');
});

window.addEventListener("scroll", function() {
    let mainInstallation = document.querySelector('#main-installation');
    if(this.scrollY > mainInstallation.offsetTop-200){
        document.querySelector('#btn-up').classList.add('show');
    }else{
        document.querySelector('#btn-up').classList.remove('show');
    }
});