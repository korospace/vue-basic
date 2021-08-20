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
            <pre><code v-html="objmain.codeHtml" class="language-markup"></code></pre>
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