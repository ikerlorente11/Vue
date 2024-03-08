<template>
  <TableComponent :headers="headers" :objects="users" :loading="loading" />
</template>

<script>
import fakeApi from '@/api/fakeApi';
import TableComponent from '../components/TableComponent.vue';

export default {
  name: 'UsersList',
  components: {
    TableComponent
  },
  data() {
    return {
      loading: true,
      headers: ['id', 'firstName', 'lastName', 'email', 'country'],
      users: []
    };
  },
  mounted() {
    fakeApi.getUsers().then(response => {
      this.users = response.data;
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