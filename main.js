const { createApp, ref } = Vue;
createApp({
	setup() {
		return {
			product: ref("Boots"),
			product_desc: ref("Boots are like shoes but different."),
			image: ref("./assets/images/socks_green.jpg"),
			camt_url: ref("https://www.camt.cmu.ac.th"),
		};
	},
}).mount("#app");
