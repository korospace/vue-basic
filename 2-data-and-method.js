let codeJs2 = `const vm = new Vue({
    el   : '#myApp',
    data : {
        myName : 'Abdullah'
    },
    methods: {
        showName : (name) => {
            console.log(\`Hi, my name is \${name}\`);
        }
    }
});

console.log( vm.myName ); // Abdullah
vm.showName("Ibrahim");   // Hi, my name is Ibrahim
`;

const vm2 = new Vue({
    el   : '#main-data-and-method',
    data : {
        subTitle : 'data and method',
        codeJs   : codeJs2,
        documentation: 'https://vuejs.org/v2/api/#data'
    }
});

headerVm.allSubTitle.push(vm2.subTitle);
