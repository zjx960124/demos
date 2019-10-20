<template>
    <el-button type="default" @click="toFalls">瀑布流布局</el-button>
</template>

<script>
    export default {
        name: "index",
        methods:{
            toFalls() {
                let url = '/falls'
                this.routerLink(url)
            },
            routerLink(url) {
                if(!!url) this.$router.push(url)
            }
        }
    }
</script>

<style scoped>

</style>
