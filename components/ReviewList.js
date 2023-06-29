const ReviewList = {
	template: `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} starts.
                <br>
                {{ review.name }} {{ review.recommend === 'y' ? 'would': "wouldn't" }} recommend this product.
                <br>
                "{{ review.review }}"
            </li>
        </ul>
    </div>
    `,
	props: {
		reviews: Array,
	},
	setup(props) {
		return {
			reviews: props.reviews,
		};
	},
};
