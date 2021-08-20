// vue basic page
const vbasic = { 
    props: ['logo','title','currentid','lesson'],
    components: {
        'x-header': xheader,
        'x-btnup' : xbtnup,
        'x-toc'   : xtoc,
        'x-main'  : xmain,
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
        logo      : 'asset/vue-logo.svg',
        currentId : '',
        currentNav: '/',
        lesson    : {
            vbasic     : [],
            vcomponent : []
        },
    },
    methods: {
        updated: function () {
            this.$nextTick(function () {
              Prism.highlightAll();
            })
        }
    }
});
