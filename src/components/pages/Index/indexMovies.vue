<template>
    <div id="indexMovies">
        <!--正在上映-->
        <div class="hot-show">
            <section class="hot-show-title">
                <span>正在热映</span>
                <router-link to="/pages/movies/movieReleased"> 全部{{releasedList.length}}部>></router-link>
            </section>
            <ul class="hot-show-block-wrapper">
                <li class="hot-show-block" v-for="(item,index) in releasedList" :key="item.id" v-if="index<12">
                    <img :src="item.img" :alt="item.title"/>
                    <router-link :to="`/pages/movies/movieDetails/${item.id}`" class="hot-show-block-mask"
                                 tag="section">
                        <div class="tags-head">
                            <span class="version">
                            {{item.ver.slice(0,8).replace('/',' ')}}
                            </span>
                            <span class="version">
                            {{item.ver.slice(10,15).replace('/','')}}
                        </span>
                        </div>
                        <div class="tags-end">
                            <span v-if="item.globalReleased" class="rate">猫眼评分{{item.sc}}</span>
                            <span v-if="!item.globalReleased" class="view-count">{{item.wish}}人想看</span>
                        </div>
                    </router-link>
                    <h3 class="title">{{item.title}}</h3>
                    <router-link class="buy" to="/">购票</router-link>
                </li>
                <!--显示更多-->
                <li class="hot-show-block-end">
                    <router-link to="/pages/movies/movieReleased" class="hot-show-block-mask-end">
                        <section class="inner-text">
                            <span>查看全部</span>
                            <span>{{releasedList.length}}部</span>
                        </section>
                    </router-link>
                </li>

            </ul>
        </div>
        <!--即将上映-->
        <div class="pre-show">
            <section class="pre-show-title">
                <span>即将上映</span>
                <router-link to="/pages/movies/moviePreShows"> 全部{{previewList.length}}部>></router-link>
            </section>
            <ul>
                <li class="hide-scroll-bar">
                    <ul class="pre-show-block-wrapper">
                        <li class="pre-show-block" v-for="(value,index) in previewList" :key="value.id" v-if="index<12">
                            <img :src="value.img" :alt="value.title"/>
                            <router-link :to="`/pages/movies/movieDetails/${value.id}`" class="hot-show-block-mask"
                                         tag="section">
                                <div class="tags-head">
                                    <span class="version">
                                    {{value.ver.slice(0,8).replace('/',' ')}}
                                    </span>
                                    <span class="version">
                                    {{value.ver.slice(10,15).replace('/','')}}
                                    </span>
                                </div>
                                <div class="tags-end">
                                    <span v-if="value.showRate" class="rate">猫眼评分{{value.score}}</span>
                                    <span v-if="!value.showRate" class="view-count">{{value.viewCount}}人想看</span>
                                </div>
                            </router-link>
                            <h3 class="title">{{value.title}}</h3>
                            <h5>{{convertDate(value.pubDate)}}</h5>
                        </li>
                        <!--显示更多-->
                        <li class="hot-show-block-end">
                            <router-link to="/pages/movies/moviePreShows" class="hot-show-block-mask-end">
                                <section class="inner-text">
                                    <span>查看全部</span>
                                    <span>{{previewList.length}}部</span>
                                </section>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "indexMovies",
        data() {
            return {
                releasedList: '',
                previewList: '',
                tags: '',
            }
        },
        computed: {...mapActions(['getMovieReleasedListAll', 'getMoviePreviewAll'])},
        mounted() {
            this.getMovieReleasedListAll.then(res => {
                // console.log("res333",res.data.length)
                this.releasedList = res.data
            }).catch(e => {
                console.log(e)
            })

            this.getMoviePreviewAll.then(res => {
                // console.log("res333",res)
                this.previewList = res.data
                console.log('首页', res)
            }).catch(e => {
                console.log(e)
            })
        },


    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/common.stylus"
    #indexMovies
        padding 0.88rem 0.88rem 10rem
        .hot-show, .pre-show
            margin-top .6rem
        section.hot-show-title, section.pre-show-title
            display flex
            justify-content space-between
            span
                font-size 0.93rem
                font-weight bold
            a
                font-size 0.81rem
                color $themeColorLighter

    .hot-show-block-wrapper, .pre-show-block-wrapper
        white-space nowrap
        overflow-x auto
        padding 0.75rem 0

    .hot-show-block-end, .pre-show-block-end
        position relative
        display inline-block
        margin-right 0.6rem
        width 5.75rem
        height 170px
        .hot-show-block-mask-end, .pre-show-block-mask-end
            position absolute
            left 0
            top 2%
            width 100%
            height 8.25rem
            background #f0f0f0
            display flex
            justify-content center
            align-items center
            section
                display flex
                flex-direction column
                span
                    text-align center
                    margin .5rem 0
                    color #bcbcbc

    .hot-show-block, .pre-show-block
        position relative
        display inline-block
        margin-right 0.6rem
        width 5.75rem
        img
            width 100%
            height 8.04rem
            border-radius 0.2rem
        .hot-show-block-mask, .pre-show-block-mask
            position absolute
            left 0
            top 0
            width 100%
            height 8.04rem
            .tags-head
                position absolute
                left 0
                top 0
                display flex
                flex-wrap wrap
                width 43%
                span
                    padding .2rem
                    font-weight bold
                    font-size .5rem
                    color #b3afb0
                    opacity .9
                    background #38383e
                span + span
                    margin-top .1rem
            .tags-end
                position absolute
                left 0
                bottom 0
                span
                    padding .2rem
                    font-weight bold
                    font-size .7rem
                    color #faaf00
        h3.title
            padding .6rem 0
            font-size .8rem
        a.buy
            margin-bottom 1rem
            padding 0.3rem 1.05rem
            font-size 0.8rem
            background $themeBgColor
            color white
            border-radius .8rem


</style>