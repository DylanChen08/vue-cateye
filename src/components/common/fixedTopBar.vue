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
                    <span class="hot-show" v-bind:class="[isActive1?'active':'']" @click="onHotShow">正在热映</span>
                    <span class="pre-show" v-bind:class="[isActive2?'active':'']" @click="onPreShow">即将热映</span>
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
                val: '',
                isActive1: true,
                isActive2: false

            }
        },
        created() {
            this.val = this.view
        },
        methods: {
            onHotShow() {
                this.$emit('toHotShow', this.val);
                this.isActive1 = true;
                this.isActive2 = false;
                this.$router.push({path: '/pages/movies/movieReleased'});
            },
            onPreShow() {
                this.$emit('toPreShow', this.val);
                this.isActive1 = false;
                this.isActive2 = true;
                this.$router.push({path: '/pages/movies/moviePreShows'});
            }
        },
        mounted() {
            //获取当前路由并渲染（电影页面）
            let currentLocation = this.$route.path;
            if (currentLocation === '/pages/movies/movieReleased') {
                this.$router.push({path: '/pages/movies/movieReleased'});
                this.isActive1 = true;
                this.isActive2 = false;
            }
            if (currentLocation === '/pages/movies/moviePreShows') {
                this.$router.push({path: '/pages/movies/moviePreShows'});
                this.isActive1 = false;
                this.isActive2 = true;
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
            grid auto / 12% 76% 12%
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
                color #f1b3b1
                transition all .2s
            .middle-title.movies span.hot-show.active,
            .middle-title.movies span.pre-show.active
                color white
            .middle-title.movies span.hot-show.active::after
                content ''
                position absolute
                bottom 0
                left 36%
                width 1.5rem
                height 0.1rem
                background white
            .middle-title.movies span.pre-show.active::after
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