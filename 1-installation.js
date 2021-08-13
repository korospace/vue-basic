let codeHtml1 = `&lt;html>
    &lt;body>
        &lt;div id="myApp">&lt;/div>

        &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js">&lt;/script>
        &lt;script>
            const vm = new Vue({
                el : '#myApp', //root element
            })
        &lt;/script>
    &lt;/body>
&lt;/html>`;

const vm1 = new Vue({
    el   : '#main-installation',
    data : {
        dataId   : 'installation',
        subTitle : 'installation',
        codeHtml : codeHtml1,
        documentation : 'https://vuejs.org/v2/guide/installation.html#CDN',
    },
});

mainVm.allId.push({id:vm1.dataId,subTitle:vm1.subTitle});