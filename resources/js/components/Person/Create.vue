<template>
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
            <input :disabled="!isDisabled" type="submit" @click.prevent="store" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Create",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },
    methods: {
        store() {
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    console.log(res.data)
                    this.$router.push({ name: 'person.index' })
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
