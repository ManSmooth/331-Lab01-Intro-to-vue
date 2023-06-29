const { createApp, ref } = Vue
createApp({
	setup() {
        const cart = ref(0)
        const image = ref("./assets/images/socks_green.jpg")
        const inventory = ref(10)
		return {
			product: ref("Boots"),
			product_desc: ref("Boots are like shoes but different."),
			image,
			camt_url: ref("https://www.camt.cmu.ac.th"),
			inStock: ref(true),
			inventory,
			onSale: ref(true),
			details: ref(["50% cotton", "30% wool", "20% polyester"]),
            variants: ref([
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]),
            sizes: ref(['S', 'M', 'L']),
            cart,
            AddToCart: () => cart.value++,
            UpdateImage: (imgUrl) => image.value = imgUrl,
            SetInventory: (amnt) => inventory.value = amnt,
		};
	},
}).mount("#app");
