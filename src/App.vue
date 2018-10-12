<template>
    <div id="app">
        <!--主体-->
        <main id="main">
            <router-view></router-view>
        </main>
        <!--底部导航组件-->
        <FooterNav></FooterNav>
    </div>
</template>
<script>
    //底部导航组件
    import FooterNav from './components/common/FooterNav'

    export default {
        name: 'App',
        components: {
            FooterNav
        }
    }
</script>
<style lang="stylus">
    @import "./assets/css/lib/common.stylus"
</style>
