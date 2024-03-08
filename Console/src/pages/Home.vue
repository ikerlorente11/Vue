<template>
    <div class="api_cards">
        <ApiCard v-for="api in apis" :name="api" :key="api" />
    </div>
</template>

<script>
import ApiCard from '../components/ApiCard.vue'

export default {
    name: 'HomePage',
    components: {
        ApiCard
    },
    data() {
        return {
            apis: []
        };
    },
    mounted() {
        this.$router.options.routes.forEach(route => {
            if (route.path != '/') {
                let split = route.path.split('/')

                if (split.length == 2) {
                    this.apis.push(split[1])
                }
            }
        })
    }
}
</script>

<style scoped>
    .api_cards{
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1rem;
    }

    .api_cards .card{
        transition: all 200ms;
    }

    .api_cards .card:hover{
        transform: scale(1.1);
    }

    .api_cards:hover .card:not(:hover){
        transform: scale(.9);
        filter: blur(3px);
    }
</style>