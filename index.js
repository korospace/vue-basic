// X-HEADER
Vue.component('x-header',{
    props: ['title','logo','isdark'],
    template: `<header :class="{darkmode:isdark == 'true'}">
        <img :src="logo">
        <h1 class="title">{{ title }}</h1>
        <div class="toggle-dark-wraper" @click="$emit('change-isdark');">
            <div :class="{'toggle-dark':true,darkmode:isdark == 'true'}">
                <img v-if="isdark == 'false'" src="asset/media/sun.png" width="100%" height="100%"/>
                <img v-if="isdark == 'true'" src="asset/media/moon.png" width="40%" height="90%"/>
            </div>
        </div>
    </header>`
})

Vue.component('x-btnup',{
    props: ['isdark'],
    data() {
        return {
          scrollpx: 0
        };
    },
    created() {
      window.addEventListener('scroll', () => {
        this.scrollpx = window.scrollY
      });
    },
    methods: {
        goToTop: function() {
            window.scrollTo({
                top: document.querySelector('nav').offsetTop,
                behavior: "smooth"
            })
        },
    },
    template: `<a 
    href="" 
    :class="{show: scrollpx > 100,'btn-up':true,darkmode:isdark == 'true'}" 
    @click.prevent="$emit('changecid', ''),goToTop()"
    >
        up
    </a>`
})

// X-TOC
Vue.component('x-toc',{
    props: {
        objmain: '',
        cid: '',
        isdark: ''
    },
    methods: {
        subTitleDash: (data) => {
            return data.replace(/ /g,'-');
        },
        goToLesson: function(subTitle) {
            window.scrollTo({
                top: document.querySelector('#'+this.subTitleDash(subTitle)).offsetTop,
                behavior: "smooth"
            })
        },
    },
    template: `<div :class="{'table-of-content':true,darkmode:isdark == 'true'}">
        <template v-for="(obj,i) of objmain">    
            <a 
            href=""
            :class="{hrefSub:true,clicked:cid == subTitleDash(obj.subTitle)}" 
            @click.prevent="goToLesson(obj.subTitle),$emit('changecid', subTitleDash(obj.subTitle))"
            >
                {{i+1+'. '}}{{obj.subTitle}}
            </a>
        </template>
    </div>`
})

// X-MAIN
Vue.component('x-main',{
    props: ['objmain','isdark'],
    methods: {
        subTitleDash: (data) => {
            return data.replace(/ /g,'-');
        },
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
    template: `<main>
        <h1 class="sub-title" :id="subTitleDash(objmain.subTitle)">{{ objmain.subTitle }}</h1>

        <div class="code-wraper" v-if="objmain.codeHtml !== ''">
            <div :class="{'btn-copy':true,darkmode:isdark=='true'}" @click="copyCode(objmain.codeHtml,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeHtml" :class="{'language-html':true}"></code></pre>
        </div>
        <div class="code-wraper" v-if="objmain.codeJs !== ''">
            <div :class="{'btn-copy':true,darkmode:isdark=='true'}" @click="copyCode(objmain.codeJs,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeJs" :class="{'language-javascript':true}"></code></pre>
        </div>
        <div class="code-wraper" v-if="objmain.codeCss !== ''">
            <div :class="{'btn-copy':true,darkmode:isdark=='true'}" @click="copyCode(objmain.codeCss,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeCss" :class="{'language-css':true}"></code></pre>
        </div>
        
        <div :class="{'result-wraper':true,darkmode:isdark=='true'}" v-if="objmain.content!==''">
            <small class="small-text">result</small>
            <span v-html="objmain.content"></span>
        </div>

        <a class="link-docs" target="_blank" v-if="objmain.linkdocs" :href="objmain.linkdocs">{{objmain.subTitle+' docs'}}</a>
    </main>`        
})

// vue basic page
const vbasic = { 
    props: ['logo','title','currentid','lesson','darkon'],
    mounted(){
        hljs.configure({ ignoreUnescapedHTML: true })
        hljs.highlightAll();
        let arrUrl  = window.location.href.split('/');
        this.$emit('changecurrurl',arrUrl[arrUrl.length-1]);
    },
    template: `<section :class="{app:true,darkmode:darkon === 'true'}">
        <x-header :title="title.vbasic" :logo="logo" :isdark="darkon" @change-isdark="$emit('change-darkon')"></x-header>
        <x-btnup @changecid="$emit('changecurrid',$event)" :isdark="darkon"></x-btnup>
        <x-toc @changecid="$emit('changecurrid',$event)" :cid="currentid" :objmain="lesson.vbasic" :isdark="darkon"></x-toc>
        <template v-for="obj of lesson.vbasic">
            <x-main :objmain="obj" :isdark="darkon"></x-main>
        </template>
    </section>` 
}

// vue component page
const vcomponent = { 
    props: ['logo','title','currentid','lesson','darkon'],
    mounted(){
        hljs.configure({ ignoreUnescapedHTML: true })
        hljs.highlightAll();
        let arrUrl  = window.location.href.split('/');
        this.$emit('changecurrurl',arrUrl[arrUrl.length-1]);
    },
    template: `<section :class="{app:true,darkmode:darkon === 'true'}">
        <x-header :title="title.vcomponent" :logo="logo" :isdark="darkon" @change-isdark="$emit('change-darkon')"></x-header>
        <x-btnup @changecid="$emit('changecurrid',$event)"></x-btnup>
        <x-toc @changecid="$emit('changecurrid',$event)" :cid="currentid" :objmain="lesson.vcomponent" :isdark="darkon"></x-toc>
        <template v-for="obj of lesson.vcomponent">
            <x-main :objmain="obj" :isdark="darkon"></x-main>
        </template>
    </section>` 
}

let notfpage = {
    props: ['logo','darkon'],
    data(){
        return{
            path: ''
        }
    },
    mounted(){
        this.path = this.$route.path
    },
    template: `<section  :class="{app:true,darkmode:darkon === 'true'}">
        <x-header :title="path+' not found'" :logo="logo" :isdark="darkon" @change-isdark="$emit('change-darkon')"></x-header>
    </section>` 
}

const routes = [
  { path: '/', component: vbasic },
  { path: '/component', component: vcomponent },
  { path: '*', component: notfpage },
]

const router = new VueRouter({
    // mode: 'history',
    routes,
})

const master = new Vue({
    el: '#master',
    router,
    data: {
        title     : {
            vbasic    : 'learning basic of vuejs',
            vcomponent: 'learning vue component'
        },
        logo      : 'asset/media/vue-logo.svg',
        currentId : '',
        currentUrl: '',
        lesson    : {
            vbasic     : [],
            vcomponent : []
        },
        darkOn: localStorage.getItem('darkOn') || 'false'
    },
    methods: {
        changeDarkOn: function() {
            hljs.configure({ ignoreUnescapedHTML: true })
            hljs.highlightAll();
            this.darkOn = (this.darkOn == 'false') ? 'true' : 'false';
            localStorage.setItem('darkOn',this.darkOn);
        },
    },
    created(){
        hljs.configure({ ignoreUnescapedHTML: true })
        hljs.highlightAll();
        let arrUrl  = window.location.href.split('/');
        this.currentUrl = arrUrl[arrUrl.length-1];
    },
});
