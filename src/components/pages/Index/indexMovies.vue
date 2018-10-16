<template>
    <div id="indexMovies">
        <div class="hot-show">
            <section class="hot-show-title">
                <span>正在热映</span>
                <router-link to="/pages/Movies/moviesReleased"> 全部52部>></router-link>
            </section>
            <ul v-for="item in $store.state.pageIndex" :key="item.id">
                <li class="hide-scroll-bar" v-for="value in item">
                    <ul class="hot-show-block-wrapper">
                        <li class="hot-show-block" v-for="data in value.onshow">
                            <img :src="data.url" :alt="data.title"/>
                            <section class="hot-show-block-mask">
                                <div class="tags-head">
                                    <span v-if="data.doubleDimension" class="doubleDimension">2D IMAX</span>
                                    <span v-if="data.tripleDimension" class="tripleDimension">3D</span>
                                    <span class="cgs">CGS</span>
                                </div>
                                <div class="tags-end">
                                    <span v-if="data.showRate" class="rate">猫眼评分{{data.score}}</span>
                                    <span v-if="!data.showRate" class="view-count">{{data.viewCount}}人想看</span>
                                </div>
                            </section>
                            <h3 class="title">{{data.title}}</h3>
                            <router-link class="buy" to="/">购票</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="pre-show">
            <section class="pre-show-title">
                <span>即将上映</span>
                <router-link to="/pages/Movies/moviesReleased"> 全部191部>></router-link>
            </section>
            <ul v-for="item in $store.state.pageIndex" :key="item.id">
                <li class="hide-scroll-bar" v-for="value in item">
                    <ul class="pre-show-block-wrapper">
                        <li class="pre-show-block" v-for="data in value.preview">
                            <img :src="data.url" :alt="data.title"/>
                            <section class="pre-show-block-mask">
                                <div class="tags-head">
                                    <span v-if="data.doubleDimension" class="doubleDimension">2D IMAX</span>
                                    <span v-if="data.tripleDimension" class="tripleDimension">3D</span>
                                    <span class="cgs">CGS</span>
                                </div>
                                <div class="tags-end">
                                    <span v-if="data.showRate" class="rate">猫眼评分{{data.score}}</span>
                                    <span v-if="!data.showRate" class="view-count">{{data.viewCount}}人想看</span>
                                </div>
                            </section>
                            <h3 class="title">{{data.title}}</h3>
                            <h5>{{convertDate(data.date)}}</h5>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>


    export default {
        name: "indexMovies",

    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/common.stylus"
    #indexMovies
        padding 0.88rem 0.88rem 10rem
        border 1px solid red
        .hot-show,.pre-show
            margin-top .6rem
        section.hot-show-title,section.pre-show-title
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