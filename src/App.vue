<template>
    <div id="app">
        <!--主体-->
        <main id="main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
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
        },
        watch:{
            '$route' (to, from) {
                // react to route changes...
                console.log("to")
                console.log(to)
                console.log("from")
                console.log(from)

                const toDepth = to.path.split('/')
                console.log(toDepth)
            }
        }
    }
</script>
<style lang="stylus">
    @import "./assets/css/lib/common.stylus"
</style>
