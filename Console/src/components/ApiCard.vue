<template>
    <a :href="'/#/' + name" class="card">
        <img :src="getImageSource(name)" :alt="name">
        <h3>{{ name }}</h3>
    </a>
</template>

<script>

export default {
    name: 'ApiCard',
    props: {
        name: { type: String }
    },
    data() {
        return {
            imageSrc: null
        };
    },
    components: {},
    methods: {
        getImageSource(name) {
            try {
                return require('@/assets/images/' + name + '.png');
            } catch (error) {
                return require('@/assets/images/default-image.png');
            }
        }
    }
}
</script>

<style scoped>
.card {
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: .5rem;
    cursor: pointer;
    background: #3fffef;
}

.card img {
    height: 200px;
    width: 300px;
    object-fit: contain;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    margin-top: .5rem;
}
</style>