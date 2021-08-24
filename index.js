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

// X-BTN UP
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

// X-TABLE OF CONTENT
Vue.component('x-table',{
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
        },
        checkContentType: function(data){
            if(/data:image/.test(data)){
                return 'image';
            }
            if(/data:video/.test(data)){
                return 'video';
            }
        }
    },
    template: `<main>
        <h1 class="sub-title" :id="subTitleDash(objmain.subTitle)">{{ objmain.subTitle }}</h1>

        <div class="code-wraper" v-if="objmain.codeHtml">
            <div :class="{'btn-copy':true,darkmode:isdark=='true'}" @click="copyCode(objmain.codeHtml,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeHtml" :class="{'language-html':true}"></code></pre>
            <span class="type">html</span>
        </div>
        <div class="code-wraper" v-if="objmain.codeJs">
            <div :class="{'btn-copy':true,darkmode:isdark=='true'}" @click="copyCode(objmain.codeJs,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeJs" :class="{'language-javascript':true}"></code></pre>
            <span class="type">js</span>
        </div>
        <div class="code-wraper" v-if="objmain.codeCss">
            <div :class="{'btn-copy':true,darkmode:isdark=='true'}" @click="copyCode(objmain.codeCss,$event)">copy</div>
            <textarea class="temp-textarea"></textarea>
            <pre><code v-html="objmain.codeCss" :class="{'language-css':true}"></code></pre>
            <span class="type">css</span>
        </div>
        
        <div :class="{'result-wraper':true,darkmode:isdark=='true'}" v-if="objmain.content">
            <small class="small-text">result</small>
            <img class="result" v-if="checkContentType(objmain.content)=='image'" :src="objmain.content">
            <video class="result" v-if="checkContentType(objmain.content)=='video'" controls>
                <source :src="objmain.content" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <a class="link-docs" target="_blank" v-if="objmain.linkdocs" :href="objmain.linkdocs">{{objmain.subTitle+' docs'}}</a>
    </main>`        
})

// X-SKELETON
Vue.component('x-skeleton',{
    props: ['hideskeleton','isdark'],
    template: `<div :class="{'skeleton-wraper':true,pulse:true}" v-if="hideskeleton == false">
        <div :class="{'skeleton-header':true}">
            <div :class="{'skeleton-logo':true,'skeleton-dark':isdark=='true'}"></div>
            <div :class="{'skeleton-title':true,'skeleton-dark':isdark=='true'}"></div>
            <div :class="{'skeleton-toggle':true,'skeleton-dark':isdark=='true'}"></div>
            <div :class="{'skeleton-table':true,'skeleton-dark':isdark=='true'}"></div>
        </div>
        <div v-for="i of [1,2]">
            <div :class="{'skeleton-subtitle':true,'skeleton-dark':isdark=='true'}"></div>
            <div :class="{'skeleton-code':true,'skeleton-dark':isdark=='true'}"></div>
            <div :class="{'skeleton-linkdocs':true,'skeleton-dark':isdark=='true'}"></div>
        </div>
    </div>`
});

// vue basic page
const vbasic = { 
    props: ['logo','title','currentid','lesson','darkon','skeletonoff'],
    mounted(){
        this.$emit('hljson');
        this.$emit('changecurrurl');
    },
    template: `<section :class="{app:true,darkmode:darkon === 'true'}">
        <x-skeleton :hideskeleton="skeletonoff"></x-skeleton>
        <x-header 
            v-if="skeletonoff"
            :title="title.vbasic" 
            :logo="logo" 
            :isdark="darkon" 
            @change-isdark="$emit('change-darkon')">
        </x-header>
        <x-btnup
            v-if="skeletonoff"
            :isdark="darkon"
            @changecid="$emit('changecurrid',$event)">
        </x-btnup>
        <x-table 
            v-if="skeletonoff"    
            :cid="currentid" 
            :objmain="lesson.vbasic" 
            :isdark="darkon" 
            @changecid="$emit('changecurrid',$event)">
        </x-table>
        <template v-if="skeletonoff" v-for="obj of lesson.vbasic">
            <x-main :objmain="obj" :isdark="darkon"></x-main>
        </template>
    </section>` 
}

// vue component page
const vcomponent = { 
    props: ['logo','title','currentid','lesson','darkon','skeletonoff'],
    mounted(){
        this.$emit('hljson');
        this.$emit('changecurrurl');
    },
    template: `<section :class="{app:true,darkmode:darkon === 'true'}">
        <x-skeleton 
            :isdark="darkon" 
            :hideskeleton="skeletonoff">
        </x-skeleton>
        <x-header 
            v-if="skeletonoff"
            :title="title.vcomponent" 
            :logo="logo" 
            :isdark="darkon" 
            @change-isdark="$emit('change-darkon')">
        </x-header>
        <x-btnup
            v-if="skeletonoff"
            :isdark="darkon"
            @changecid="$emit('changecurrid',$event)">
        </x-btnup>
        <x-table 
            v-if="skeletonoff"    
            :cid="currentid" 
            :objmain="lesson.vcomponent" 
            :isdark="darkon" 
            @changecid="$emit('changecurrid',$event)">
        </x-table>
        <template v-if="skeletonoff" v-for="obj of lesson.vcomponent">
            <x-main :objmain="obj" :isdark="darkon"></x-main>
        </template>
    </section>` 
}

let notfpage = {
    props: ['logo','darkon'],
    template: `<section  :class="{app:true,darkmode:darkon === 'true'}">
        <x-header :title="$route.path+' not found'" :logo="logo" :isdark="darkon" @change-isdark="$emit('change-darkon')"></x-header>
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
            vbasic: [],
            vcomponent: []
        },
        skeletonOff: false,
        darkOn: localStorage.getItem('darkOn') || 'false'
    },
    methods: {
        changeDarkOn() {
            this.hljsOn();
            this.darkOn = (this.darkOn == 'false') ? 'true' : 'false';
            localStorage.setItem('darkOn',this.darkOn);
        },
        hljsOn() {
            setTimeout(() => {
                hljs.configure({ ignoreUnescapedHTML: true })
                hljs.highlightAll();
            }, 0);
        },
        changeCurrUrl() {
            let arrUrl  = window.location.href.split('/');
            this.currentUrl = arrUrl[arrUrl.length-1];
        },
        renderLessons(items) {
            // push data to this.lessson
            items.val().forEach(l => {
                // if(this.lesson[l.title] == undefined){
                //     this.lesson[l.title] = [];
                // }
                this.lesson[l.title].push({
                    subTitle : l.subtitle,
                    codeHtml : (l.codeHtml) ? filterCode(l.codeHtml) : false,
                    codeJs   : (l.codeJs)   ? filterCode(l.codeJs)   : false,
                    codeCss  : (l.codeCss)  ? filterCode(l.codeCss)  : false,
                    content  : l.content,
                    linkdocs : l.linkdocs
                });
            });
            // filter HTML,Js,Css code
            function filterCode(data){
                return data.replace(/</g,'&lt;').replace(/spasi /g,'\n');;
            }
            // run highlght.js
            this.hljsOn();
            this.changeCurrUrl();
            this.skeletonOff = true;
        }
    },
    created(){
        lessonsTable.on('value',this.renderLessons,(error) => {
            console.log(error);
        });
    },
});