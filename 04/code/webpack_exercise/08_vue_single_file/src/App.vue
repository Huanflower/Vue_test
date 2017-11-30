<template>
    <div>
            {{text}}
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '我是app.vue'
            }
        }
    }
</script>

<style scoped>
div {
    background-color: hotpink;
}
</style>