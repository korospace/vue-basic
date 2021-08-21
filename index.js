// X-HEADER
let xheader = {
    props: ['title','logo'],
    template: `<header>
        <img :src="logo" width="120px">
        <h1 class="title">{{ title }}</h1>
    </header>`
}

// X-BTNUP
let xbtnup = {
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
    template: `<a 
    href="#" 
    :class="{show: scrollpx > 100,'btn-up':true}" 
    @click="$emit('changecid', '')"
    >
        up
    </a>`
}
// X-TOC
let xtoc = {
    props: {
        objmain: '',
        cid: ''
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
    template: `<div class="table-of-content">
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
}

// X-MAIN
let xmain = {
    props: ['objmain'],
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
            <div :class="{'btn-copy':true}" @click="copyCode(objmain.codeHtml,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeHtml" class="language-html"></code></pre>
        </div>
        <div class="code-wraper" v-if="objmain.codeJs !== ''">
            <div :class="{'btn-copy':true}" @click="copyCode(objmain.codeJs,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeJs" class="language-javascript"></code></pre>
        </div>
        <div class="code-wraper" v-if="objmain.codeCss !== ''">
            <div :class="{'btn-copy':true}" @click="copyCode(objmain.codeCss,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeCss" class="language-css"></code></pre>
        </div>
        
        <div class="result-wraper" v-if="objmain.content!==''">
            <small class="small-text">result</small>
            <span v-html="objmain.content"></span>
        </div>

        <a class="link-docs" target="_blank" :href="objmain.linkdocs">{{objmain.subTitle+' docs'}}</a>
    </main>`        
}

// vue basic page
const vbasic =  { 
    props: ['logo','title','currentid','lesson'],
    components: {
        'x-header': xheader,
        'x-btnup' : xbtnup,
        'x-toc'   : xtoc,
        'x-main'  : xmain,
    },
    mounted: function() {
        hljs.highlightAll();
    },
    template: `<section class="app">
        <x-header :title="title.vbasic" :logo="logo" ></x-header>
        <x-btnup @changecid="$emit('changecurrid',$event)"></x-btnup>
        <x-toc @changecid="$emit('changecurrid',$event)" :cid="currentid" :objmain="lesson.vbasic"></x-toc>
        <template v-for="obj of lesson.vbasic">
            <x-main :objmain="obj"></x-main>
        </template>
    </section>` 
}

// vue component page
const vcomponent = { 
    props: ['logo','title','currentid','lesson'],
    components: {
        'x-header': xheader,
        'x-btnup' : xbtnup,
        'x-toc'   : xtoc,
        'x-main'  : xmain,
    },
    mounted: function() {
        hljs.highlightAll();
    },
    template: `<section class="app">
        <x-header :title="title.vcomponent" :logo="logo" ></x-header>
        <x-btnup @changecid="$emit('changecurrid',$event)"></x-btnup>
        <x-toc @changecid="$emit('changecurrid',$event)" :cid="currentid" :objmain="lesson.vcomponent"></x-toc>
        <template v-for="obj of lesson.vcomponent">
            <x-main :objmain="obj"></x-main>
        </template>
    </section>` 
}

const routes = [
  { path: '/', component: vbasic },
  { path: '/component', component: vcomponent }
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
    },
    methods: {
        changeCurrUrl: function() {
            let arrUrl  = window.location.href.split('/');
            this.currentUrl = arrUrl[arrUrl.length-1];
        },
    },
    created: function(){
        this.changeCurrUrl();
    },
});
