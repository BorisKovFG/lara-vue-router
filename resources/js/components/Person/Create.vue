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
            <input type="submit" @click.prevent="store" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import Router from "../../router";
import router from "../../router";
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
                    // console.log(res.data)
                    router.push({ name: 'person.index' })
                })
        }
    }
}
</script>

<style scoped>

</style>
