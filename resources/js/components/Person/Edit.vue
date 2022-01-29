<template>
    <div>
        <div class="w-25">
            <div class="mb-3">
                <input type="text" placeholder="name" v-model="name" class="form-control">
            </div>
            <div class="mb-3">
                <input type="number" placeholder="age" v-model="age" class="form-control">
            </div>
            <div class="mb-3">
                <input type="text" placeholder="job" v-model="job" class="form-control">
            </div>
            <div class="mb-3">
                <input :disabled="!isDisabled" type="submit" @click.prevent="update" value="Update" class="btn btn-primary">
            </div>
        </div>
    </div>
</template>

<script>
// import router from "../../router"; change router.push on this.$router.push
export default {
    name: "Edit",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    mounted() {
        console.log(this.$route.params); //params from url in object
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`) //params from url in object attribute id
            .then(res => {
                this.name = res.data.data.name, this.age = res.data.data.age, this.job = res.data.data.job
            })
        },
        update() {
            axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job}).
            then(res => {
                this.$router.push({ name: 'person.show', params: { id: this.$route.params.id}})
            })
        }
    },
    computed: {
        isDisabled() {
            return this.name && this.age && this.job
        }
    }
}
</script>

<style scoped>

</style>
