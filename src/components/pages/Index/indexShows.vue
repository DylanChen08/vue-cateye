<template>
    <div id="indexMovies">
        <!--正在上映-->
        <div class="hot-show">
            <section class="hot-show-title">
                <span>热播综艺</span>
                <router-link to="/pages/movies/movieReleased"> 全部{{showList.length}}部>></router-link>
            </section>
            <ul class="hot-show-block-wrapper">
                <li class="hot-show-block" v-for="(item,index) in showList" :key="item.id" v-if="index<12">
                    <img :src="item.img" :alt="item.nm"/>
                    <router-link :to="`/pages/shows/showDetails/${item.id}`" class="hot-show-block-mask"
                                 tag="section">
                        <div class="tags-end">
                            <span  class="rate">猫眼评分{{item.sc}}</span>
                            <!--<span v-if="!item.globalReleased" class="view-count">{{item.wish}}人想看</span>-->
                        </div>
                    </router-link>
                    <h3 class="title">{{item.nm}}</h3>
                    <router-link class="buy" :to="`/pages/shows/showDetails/${item.id}`">详情</router-link>
                </li>
                <!--显示更多-->
                <li class="hot-show-block-end">
                    <router-link to="/pages/movies/movieReleased" class="hot-show-block-mask-end">
                        <section class="inner-text">
                            <span>查看全部</span>
                            <span>{{showList.length}}部</span>
                        </section>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "indexShows",
        data() {
            return {
                showList: ''
            }
        },
        computed: {...mapActions(['getShows'])},
        mounted() {
            this.getShows.then(res => {
                this.showList = res.data
                console.log('index getShows res' , res.data)
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
                font-size $smallFontSize
                font-weight bold
            a
                font-size $smallestFontSize
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
        height 186px
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
            width 75px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            padding .6rem 0
            font-size $smallestFontSize
        a.buy
            margin-bottom 1rem
            padding 0.3rem 1.05rem
            font-size 0.8rem
            background $themeBgColor
            color white
            border-radius .8rem
</style>