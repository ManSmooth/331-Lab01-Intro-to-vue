const { createApp, ref, computed } = Vue;
createApp({
	setup() {
		const cart = ref(0);
		const onSale = ref(true);
		const brand = ref("SE 331");
		const product = ref("Boots");
		const selectedVariant = ref(0);
		const variants = ref([
			{
				id: 2234,
				color: "green",
				image: "./assets/images/socks_green.jpg",
				quantity: 50,
			},
			{
				id: 2235,
				color: "blue",
				image: "./assets/images/socks_blue.jpg",
				quantity: 0,
			},
		]);
		return {
			product,
			brand,
			product_desc: ref("Boots are like shoes but different."),
			image: computed(() => variants.value[selectedVariant.value].image),
			camt_url: ref("https://www.camt.cmu.ac.th"),
			inStock: computed(
				() => variants.value[selectedVariant.value].quantity > 0
			),
			inventory: computed(
				() => variants.value[selectedVariant.value].quantity
			),
			onSale,
			details: ref(["50% cotton", "30% wool", "20% polyester"]),
			variants,
			sizes: ref(["S", "M", "L"]),
			cart,
			AddToCart: () => cart.value++,
			UpdateVariant: (index) => (selectedVariant.value = index),
			SetInventory: (amnt) => {
				variants.value[selectedVariant.value].quantity = amnt;
			},
			title: computed(() => {
				return `${brand.value} ${product.value} ${
					onSale.value ? "is on sale" : ""
				}`;
			}),
		};
	},
}).mount("#app");
