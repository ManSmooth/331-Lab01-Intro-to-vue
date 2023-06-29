const ReviewForm = {
	template: `
    <form class="review-form" @submit.prevent="onSubmit" style="display: flex;flex-direction: column; gap: 0.5rem;">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="form.name" required />
        <label for="review">Review:</label>
        <textarea id="review" v-model.trim="form.review" required />
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="form.rating" required>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <label for="recommended">Would you recommend this product?</label>
        <div style="display:flex; gap:1rem;" id="recommended">
            <div style="display:flex; gap:1rem; align-items: center;">
                <input type="radio" name="recommend" id="yes" value="y" v-model.number="form.recommend" required/>
                <label for="yes">Yes</label>
            </div>
            <div style="display:flex; gap:1rem; align-items: center;">
                <input type="radio" name="recommend" id="no" value="n" v-model.number="form.recommend" required/>
                <label for="no">No</label>
            </div>
        </div>
        <input class="button" type="submit" value="Submit" />
    </form>
    `,
	emits: ["review-submit"],
	setup(props, { emit }) {
		const form = reactive({
			name: "",
			review: "",
			rating: null,
			recommend: null,
		});
		return {
			form,
			onSubmit: () => {
				const productReview = {
					name: form.name,
					review: form.review,
					rating: form.rating,
					recommend: form.recommend,
				};
				emit("review-submit", productReview);
				form.name = "";
				form.review = "";
				form.rating = null;
				form.recommend = null;
			},
		};
	},
};
