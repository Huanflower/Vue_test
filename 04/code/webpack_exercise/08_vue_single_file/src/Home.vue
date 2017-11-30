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
                text: '我是home组件'
            }
        }
    }
</script>

<style scoped>
div {
    background-color: yellowgreen;
}
</style>