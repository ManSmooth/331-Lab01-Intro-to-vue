const { createApp, ref, computed } = Vue;
const cart = ref(0);
const app = createApp({
	setup() {
		const premium = ref(true);
		return {
			cart,
			premium,
			TogglePremium: () => (premium.value = !premium.value),
		};
	},
});
app.component("product-display", ProductDisplay);
app.component("product-detail", ProductDetail);
app.mount("#app");
