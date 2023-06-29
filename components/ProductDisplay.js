const ProductDisplay = {
	template: `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img
                    :src="image"
                    :class="{'out-of-stock-img': !inStock }" />
            </div>
        </div>
    </div>
    <div class="product-info">
        <h1><a :href="camt_url">{{ title }}</a></h1>
        <div
            style="
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: start;
            ">
            <p v-if="inventory > 10">In stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">
                Almost out of stock
            </p>
            <p v-else>Out of stock</p>
            <div style="display: flex; align-items: center">
                <button class="button" @click="SetInventory(100)">
                    In Stock
                </button>
                <button class="button" @click="SetInventory(10)">
                    Almost out of Stock
                </button>
                <button class="button" @click=" SetInventory(0)">
                    Out of Stock
                </button>
            </div>
            <p>Shipping: {{ shipping }}</p>
        </div>
        <p v-if="onSale">On Sale</p>
        <product-detail :details="details" />
        <div
            v-for="[index, variant] in variants.entries()"
            :key="variant.id"
            @mouseover="UpdateVariant(index)"
            class="color-circle"
            :style="{backgroundColor: variant.color}">
            {{ variant.color }}
        </div>
        <div
            style="
                display: flex;
                flex-direction: row;
                gap: 1rem;
                align-items: center;
            ">
            <p>Sizes:</p>
            <p v-for="size of sizes">{{ size }}</p>
        </div>
        <button
            class="button"
            @click="AddToCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}">
            Add to Cart
        </button>
        <p>{{ product_desc }}</p>
    </div>
    `,
	props: {
		premium: Boolean,
	},
	setup(props) {
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
			shipping: computed(() => {
				if (props.premium) {
					return "Free";
				} else {
					return 30;
				}
			}),
		};
	},
};
