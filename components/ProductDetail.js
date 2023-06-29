const ProductDetail = {
	template: `
    <ul class="details-container">
        <li v-for="detail of details">{{ detail }}</li>
    </ul>
    `,
    props: {
        details: Array
    },
    setup(props) {
        return {
            details: props.details
        }
    }
};
