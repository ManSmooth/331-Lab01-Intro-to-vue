const { createApp, ref, computed } = Vue;
const app = createApp({
	setup() {
		const cart = ref([]);
		const premium = ref(true);
		return {
			cart,
			cartAmount: computed(() => cart.value.length),
			cartItem: computed(() =>
				cart.value.reduce((acc, curr) => {
					if (acc[curr]) {
						acc[curr]++
					} else {
						acc[curr] = 1
					}
					return acc
				}, {})
			),
			premium,
			TogglePremium: () => (premium.value = !premium.value),
			AddToCart: (id) => cart.value.push(id),
			RemoveFromCart: (id) => {
				var index = cart.value.indexOf(id);
				if (index !== -1) {
					cart.value.splice(index, 1);
				}
			},
		};
	},
});
app.component("product-display", ProductDisplay);
app.component("product-detail", ProductDetail);
app.mount("#app");
