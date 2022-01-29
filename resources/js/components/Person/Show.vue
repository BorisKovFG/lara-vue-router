<template>
    <div v-if="person">
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Name: {{ person.age }}
        </div>
        <div>
            Name: {{ person.job }}
        </div>
        <div>
            <router-link :to="{ name: 'person.edit', params: { id: this.person.id } }">Edit</router-link>
        </div>
        <div>
            <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-outline-danger">Delete</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            person: null
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
            .then(res => {
                console.log(res);
                this.person = res.data.data
            })
        },
        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
            .then(res => {
                this.$router.push({ name: 'person.index'})
            })
        }
    }
}
</script>

<style scoped>

</style>
