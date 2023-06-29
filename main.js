const { createApp, ref } = Vue;
createApp({
    setup(){
        return {
            product: ref('Boots'),
            product_desc: ref('Boots are like shoes but different.')
        }
    }
}).mount('#app')
