<template>
    <div id="fixedTopBar">
        <template v-if="$route.path === '/pages/movies'">
            <!--在电影页面的显示-->
            <div class="movie">
                <section class="area">
                    CN
                </section>
                <section class="middle-title movies">
                    <span @click="onHotShow">正在热映</span>
                    <span @click="onPreShow">即将热映</span>
                </section>
                <section class="search-icon">xxx</section>
            </div>

        </template>
        <template v-if="$route.path === '/pages/cinemas'">
            <!--在影院页面的显示-->
            <div class="cinema">
                <section class="area">
                    CN
                </section>
                <section>
                    <span>影院</span>
                </section>
                <section class="search-icon">xxx</section>
            </div>

        </template>
        <template v-if="$route.path === '/pages/shows'">
            <!--在演出页面的显示-->
            <div class="shows">
                <section class="area">
                    CN
                </section>
                <section>
                    <span>演出</span>
                </section>
                <section class="search-icon">xxx</section>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "fixedTopBar",
        props: ['view'],
        data() {
            return {
                val: ''
            }
        },
        created() {
            this.val = this.view
        },
        methods: {
            onHotShow() {
                this.$emit('toHotShow', this.val)
            },
            onPreShow() {
                this.$emit('toPreShow', this.val)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../assets/css/lib/common.stylus"
    #fixedTopBar
        position fixed
        top 0
        left 0
        width 100%
        border 1px solid red
        background $themeBgColor
        z-index 10000
        .movie,
        .cinema,
        .show
            display grid
            grid auto / 3.75rem auto 2.5rem
            .area, .middle-title, .search-icon
                padding 1rem 0
                justify-items center
                text-align center
                color white
            .area
                border 1px solid red
                grid-row 1
                grid-column 1

            .middle-title
                border 1px solid red
                grid-row 1
                grid-column 2
            .middle-title.movies span
                font-size 0.9375rem
            /*针对电影页*/
            .middle-title.movies span
                position relative
                margin 0 0.8rem
                font-size 0.9375rem
                padding-bottom 1.06rem
            .middle-title.movies span::after
                content ''
                position absolute
                bottom 0
                left 36%
                width 1.5rem
                height 0.1rem
                background white
            .search-icon
                border 1px solid red
                grid-row 1
                grid-column 3

</style>