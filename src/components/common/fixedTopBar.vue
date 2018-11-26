<template>
    <div id="fixedTopBar">
        <template
                v-show="$route.path === '/pages/movies' && $route.path==='/pages/movies/movieReleased'&&$route.path==='/pages/movies/moviePreShows'">
            <!--在电影页面的显示-->
            <div class="movie">
                <section class="area">
                    CN
                </section>
                <section class="middle-title movies">
                    <span class="hot-show" :class="[view ==='movieReleased'?'active':'']"
                          @click="onHotShow">正在热映</span>
                    <span class="pre-show" :class="[view !=='movieReleased'?'active':'']"
                          @click="onPreShow">即将热映</span>
                    <div class="active-bar" :style="{left:statusBarOffset+'%'}"></div>
                </section>
                <section class="search-icon">&</section>
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
        props: ['view', 'statusBarOffset'],
        data() {
            return {
                val: '',
                currentPath: '',
                statusBarOffsetVal: ''
            }
        },
        created() {
            this.val = this.view
            this.statusBarOffsetVal = this.statusBarOffset
        },
        methods: {
            onHotShow() {
                this.$emit('toHotShow', [this.val, this.statusBarOffsetVal]);
                this.$router.push({path: '/pages/movies/movieReleased'});
                this.statusBarOffsetVal = 32
                console.log(this.view)
            },
            onPreShow() {
                this.$emit('toPreShow', [this.val, this.statusBarOffsetVal]);
                this.statusBarOffsetVal = 59
                this.$router.push({path: '/pages/movies/moviePreShows'});
            },
        },
        watch: {
            statusBarOffset() {
                return this.statusBarOffsetVal
            }
        },
        mounted() {
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
        background $themeBgColor
        z-index 10000
        .movie,
        .cinema,
        .show
            display grid
            grid auto / 12% 76% 12%
            .area, .middle-title, .search-icon
                padding 1rem 0
                justify-items center
                text-align center
                color white
            .area
                grid-row 1
                grid-column 1

            .middle-title
                grid-row 1
                grid-column 2
                position relative
            .middle-title .active-bar
                position absolute
                bottom 0
                left 32%
                width 1.5rem
                height 00.21rem
                background #fff
            .middle-title.movies span
                font-size 0.9375rem
            /*针对电影页*/
            .middle-title.movies span
                /*position relative*/
                margin 0 0.8rem
                font-size 0.9375rem
                padding-bottom 1.06rem
                color #f1b3b1
                transition all .2s
            .middle-title.movies span.hot-show.active,
            .middle-title.movies span.pre-show.active
                color white
            .search-icon
                grid-row 1
                grid-column 3

</style>