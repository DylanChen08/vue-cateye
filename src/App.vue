<template>
    <div id="app">
        <!--主体-->
        <main id="main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </main>
        <!--底部导航组件-->
        <FooterNav v-show="$route.meta.showBottomBar"></FooterNav>
    </div>
</template>
<script>
    //底部导航组件
    import FooterNav from './components/common/FooterNav'

    export default {
        name: 'App',
        components: {
            FooterNav
        },

    }
</script>
<style lang="stylus">
    @import "./assets/css/lib/common.stylus"
</style>
