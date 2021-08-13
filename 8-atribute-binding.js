let codeHtml8 = `&lt;!-- html -->
&lt;img id="jumbotron" :src="wallpaper" width="500">
&lt;div id="thumbnail-wraper">
    &lt;img src="asset/vuewallpaper1.jpeg" width="100" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper1.jpeg')}">
    &lt;img src="asset/vuewallpaper2.png" width="100" @click="changeWallpaper" :class="{clicked: srcCheck('vuewallpaper2.png')}">
&lt;/div>`;

let codeJs8 = `/* js */
const vm = new Vue({
    el   : '#main-atribute-binding', 
    data : {
        wallpaper: 'asset/vuewallpaper1.jpeg',
    },
    methods : {
        srcCheck : function(src) {
            let srcSplited = this.wallpaper.split('/');
            return src === srcSplited[srcSplited.length-1];
        },
        changeWallpaper : function(event) {
            this.wallpaper = event.target.src;
        },
    },
});`;

let codeCss8 = `/* css */
#main-atribute-binding #thumbnail-wraper{
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 60px;
}
#main-atribute-binding #thumbnail-wraper img{
    cursor: pointer;
    opacity: 0.7;
    margin-left: 4px;
}
#main-atribute-binding #thumbnail-wraper img.clicked{
    cursor: default;
    opacity: 1;
    transform: scale(0.9);
}`;

const vm8 = new Vue({
    el   : '#main-atribute-binding',
    data : {
        dataId    : 'atribute-binding',
        subTitle  : 'atribute binding',
        wallpaper: 'asset/vuewallpaper1.jpeg',
        codeHtml  : codeHtml8,
        codeJs    : codeJs8,
        codeCss   : codeCss8,
        documentation: 'https://vuejs.org/v2/guide/security.html#Injecting-URLs'
    },
    methods : {
        srcCheck : function(src) {
            let srcSplited = this.wallpaper.split('/');
            return src === srcSplited[srcSplited.length-1];
        },
        changeWallpaper : function(event) {
            this.wallpaper = event.target.src;
        },
    },
});

mainVm.allId.push({id:vm8.dataId,subTitle:vm8.subTitle});
