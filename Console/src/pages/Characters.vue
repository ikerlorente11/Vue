<template>
  <TableComponent :headers="headers" :objects="characters" :loading="loading" />
</template>

<script>
import marvelApi from '@/api/marvelApi';
import TableComponent from '../components/TableComponent.vue';

export default {
  name: 'CharactersList',
  components: {
    TableComponent
  },
  data() {
    return {
      loading: true,
      headers: ['id', 'name', 'description'],
      characters: []
    };
  },
  created() {
    marvelApi.getCharacters().then(response => {
      this.characters = response.data.data.results
      this.loading = false;
    })
      .catch(error => {
        console.error(error);
        this.loading = false;
      });
  },
}
</script>

<style scoped>
  .container{
    margin-top: 1rem;
  }
</style>