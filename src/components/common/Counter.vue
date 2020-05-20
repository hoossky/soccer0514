<template>
    <div>
        <h1>회원 수</h1>
    <div>{{ count }}</div>
    <button @click="increment" class="btn operator"><img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Like-2-icon.png" style="width:50px;height:50px">
    </button>

        <button @click="clear" class="btn operator">Clear</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {

                this.count++
            },
            clear() {
                this.count = 0
            }
        }
    }
</script>

<style scoped>

</style>