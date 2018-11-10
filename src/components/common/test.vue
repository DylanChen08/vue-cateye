<template>
    <div>
        <section class="test-fixed">
            <el-button type="success" icon="el-icon-check" circle></el-button>
        </section>
    </div>
</template>

<script>
    import request from '../../helpers/request'

    window.request = request
    export default {
        name: "test",
    }
</script>

<style lang="stylus" scoped>
    .test-fixed
        position fixed
        top 20%
        z-index 9999
</style>