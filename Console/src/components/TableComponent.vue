<template>
    <div class="container">
        <template v-if="loading">
            <LoaderComponent />
        </template>
        <template v-else>
            <table v-if="!empty">
                <thead>
                    <th v-for="header in headerList" :key="header">
                        {{ header }}
                    </th>
                </thead>
                <tbody>
                    <tr v-for="object in objectList" :key="object.id">
                        <td v-for="header in headerList" :key="object.id + header">
                            {{ object[header] }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h1 v-else>
                No hay datos disponibles
            </h1>
        </template>
    </div>
</template>

<script>
import LoaderComponent from '../components/LoaderComponent.vue';

export default {
    name: 'TableComponent',
    components: {
        LoaderComponent
    },
    props: {
        headers: Array,
        objects: Array,
        loading: Boolean,
    },
    data() {
        return {
            headerList: [],
            objectList: [],
            empty: true,
        };
    },
    watch: {
        headers: {
            immediate: true,
            handler(newVal) {
                this.headerList = newVal;
            }
        },
        objects: {
            immediate: true,
            handler(newVal) {
                this.objectList = newVal;
                this.empty = newVal.length === 0;
            }
        }
    }
}
</script>

<style scoped>
.container {
    position: relative;
}

table {
    background: #d5e4ff;
    border-radius: 1rem;
    border-collapse: collapse;
    overflow: hidden;
    margin: auto;
}

thead {
    background: #2f45ff;
    color: white;
    font-size: 1.2rem;
}

tr:nth-child(even) {
    background: #e8f1ff;
}

tr:hover {
    background: #b3ccff;
    cursor: pointer;
}

th {
    padding: .75rem .5rem;
    text-transform: capitalize;
}

td {
    padding: .5rem;
}

h1{
    text-align: center;
    font-size: 42px;
    font-weight: bold;
}

.loader{
    max-width: 200px;
    margin: auto;
}
</style>./LoaderComponent.vue