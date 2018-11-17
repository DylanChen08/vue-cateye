<template>
    <div class="movie-details">
        <!--背景遮罩-->
        <div class="filter-bg"><img :src="moviesDetails.img" alt=""></div>
        <div class="movie-details-topBar">
            <template>
                <div class="primary">
                    <p class="back" @click="backToPrevious"><</p>
                    <span class="title"><h5>电影</h5></span>
                    <router-link class="share" to="/">分享</router-link>
                </div>
            </template>
            <template v-if="false">
                <div class="fixed">
                    <p class="back" @click="backToPrevious"><</p>
                    <section class="title-wrapper">
                        <h2>昨日青空</h2>
                        <h5>crystal sky of yesterday</h5>
                    </section>
                    <router-link class="share" to="/">分享</router-link>
                </div>
            </template>
        </div>
        <section class="details-block">
            <!--<div class="filter-bg"><img :src="moviesDetails.img" alt=""></div>-->
            <div class="details-block-layer">
                <div class="image-video-wrapper">
                    <img :src="moviesDetails.img" :alt="moviesDetails.nm">
                </div>
                <ul class="details-list">
                    <li class="title">
                        <h3>{{moviesDetails.nm}}</h3>
                    </li>
                    <li class="alias-title">
                        <h4></h4>
                    </li>
                    <li class="tags">
                        {{moviesDetails.cat}}
                        <span class="version">
                            {{tags.slice(0,8).replace('/',' ')}}
                        </span>
                        <span class="version">
                            {{tags.slice(10,15).replace('/','')}}
                        </span>
                    </li>
                    <li class="region-duration">{{moviesDetails.fra}}/{{moviesDetails.dur}}分钟</li>
                    <li class="released-time">{{moviesDetails.showTimeInfo}}</li>
                    <li class="wish-count"><span class="count">{{moviesDetails.wish}}</span>人想看</li>
                </ul>
            </div>
            <section class="rate-block" v-show="score!==0">
                <div class="band">
                    <figure>
                        <img src="http://maoyan.com/favicon.ico" width="30" height="30" alt="xxx">
                        <figcaption>
                            口碑
                        </figcaption>
                    </figure>
                </div>
                <div class="rate-percentage">
                    <div class="rate-percentage-wrapper">
                        <div class="title">9-10分</div>
                        <div class="progress-bar">
                            <el-progress :percentage="50" color="rgb(255,187,41)"></el-progress>
                        </div>
                    </div>
                    <div class="rate-percentage-wrapper">
                        <div class="title">9-10分</div>
                        <div class="progress-bar">
                            <el-progress :percentage="100" color="rgb(255,187,41)"></el-progress>
                        </div>
                    </div>
                    <div class="rate-percentage-wrapper">
                        <div class="title">9-10分</div>
                        <div class="progress-bar">
                            <el-progress :percentage="100" color="rgb(255,187,41)"></el-progress>
                        </div>
                    </div>

                </div>
                <router-link class="rate-star" :to="`/pages/movies/comments/${moviesDetails.id}`" tag="div">
                    <span class="title">猫眼评分</span>
                    <span class="score-star">
                        <span class="sc-num">{{rawScore}}</span>
                        <el-rate v-model="score" disabled show-score text-color="#ff9900"
                                 score-template="{value}"></el-rate>
                    </span>
                    <span class="comment-count">
                      100人>
                    </span>
                </router-link>
            </section>
            <section class="view-feedback-box">
                <router-link class="wish" to="/">想看</router-link>
                <router-link class="experienced" to="/">看过</router-link>
            </section>
        </section>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import getData from '../../../api/getData'


    export default {
        name: "moviesDetails",
        data() {
            return {
                moviesDetails: '',
                tags: '',
                rawScore: null, //原生分数
                score: null     //分值转换适合element-ui
            }
        },
        created() {


        },
        computed: {},
        methods: {
            ...mapActions(['getMovieDetails']),
            backToPrevious() {
                //返回上一级
                this.$router.go(-1)
            },
            showScore() {
                this.rawScore = this.moviesDetails.sc  //原生分数
                this.score = this.moviesDetails.sc / 2  //分值转换适合elementUI
            }
        },
        mounted() {
            let movieId = this.$route.params.movieId
            console.log('sending movie`s ID request')
            console.log(this.$route)
            this.getMovieDetails({movieId}).then(res => {
                console.log('res', res)
                this.moviesDetails = res.data[0]
                this.tags = this.moviesDetails.ver    //防止处理模板变量时,报错undefined
                this.showScore() //分数转换
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .movie-details
        padding 0 0.8rem 0.7rem
        .filter-bg
            display grid
            grid 20rem / 1fr
            color #fff
            width 100%
            position absolute
            top 0
            left 0
            z-index -1
            overflow hidden
            filter blur(1.5rem)
            opacity .9
            img
                width 100%
                height 100%
                grid-column 1 / auto
                grid-row 1
        .movie-details-topBar
            position fixed
            top 0
            right 0
            width 100%
            padding 0 0.8rem
            z-index 9999
            .primary
                display grid
                grid 3rem / 3rem auto 3rem
                .back
                    grid-column 1
                    grid-row 1
                    display flex
                    justify-content center
                    align-items center

                    color white
                .title
                    grid-column 2
                    grid-row 1
                    display flex
                    justify-content center
                    align-items center

                    color white
                    h5
                        padding .2rem .8rem
                        border-radius 1rem
                        font-size .8rem
                        font-weight lighter
                        background rgb(82, 89, 87)
                        opacity .3
                        color rgb(196, 198, 202)
                .share
                    grid-column 3
                    grid-row 1
                    display flex
                    justify-content center
                    align-items center
                    color white
                    text-align right
        .details-block
            z-index 10
            h5
                padding .2rem .8rem
                border-radius 1rem
                font-size .8rem
                font-weight lighter
                background rgb(82, 89, 87)
                opacity .3
                color rgb(196, 198, 202)
        .details-block-layer
            margin-top 3rem
            display grid
            grid 8rem / 5.8rem auto
            color #fff
            .image-video-wrapper
                grid-column 1
                grid-row 1
                img
                    width 100%
                    height 100%
            .details-list
                padding-left.75rem
                grid-column 2
                grid-row 1
                .title
                    color #fff
                    margin-top 0.25rem
                .tags
                .region-duration
                .released-time
                .wish-count
                    color #fff
                    opacity .8
                    font-size .85rem
                .region-duration
                .released-time
                .wish-count
                    margin-top 0.25rem
                .tags
                    margin-top 0.75rem
                    .version
                        padding .2rem .4rem
                        background #5f5d62
                        opacity .65
                        color #fff
                        font-size 0.65rem
                        margin-left .25rem
                        border-radius .15rem
                .wish-count .count
                    margin-right .35rem
                    color #fc0
                    font-size 1.2rem
        .rate-block
            display flex
            flex-direction row
            width 100%
            margin-top .7rem
            .band
                display flex
                justify-content center
                align-items center
                width 12%
                color #fff
                font-size .75rem
                background rgba(255, 255, 255, 0.2)
                border-right 1px solid #ddd
                border-top-left-radius .25rem
                border-bottom-left-radius .25rem
                figcaption
                    font-weight bold
                    font-size 0.85rem
                    letter-spacing .1rem
            .rate-percentage
                width 56%
                padding-top .25rem
                color #fff
                font-size .75rem
                background rgba(255, 255, 255, 0.2)
                border-top-right-radius 0.25rem
                border-bottom-right-radius 0.25rem
            .rate-percentage-wrapper
                display flex
                flex-direction row
                justify-content center
                align-items center
                margin .35rem .35rem .35rem .85rem
                color #fff
                .title
                    width 30%
                .progress-bar
                    width 70%
            .rate-star
                width 30%
                display flex
                flex-direction column
                justify-content center
                color #fff
                margin-left .6rem
                padding .4rem .7rem
                background rgba(255, 255, 255, 0.2)
                border-radius .25rem
                .title
                    font-weight bold
                    font-size .85rem
                .score-star
                    display flex
                    flex-direction row
                    flex-wrap nowrap
                    .sc-num
                        margin 5px 6px 0 0
                        color #ff9900
                .comment-count
                    font-size .75rem
                    font-weight 300
        .view-feedback-box
            display flex
            flex-direction row
            width 100%
            .wish, .experienced
                flex 1
                padding 0.8rem 0
                text-align center
                color #fff
                background rgba(255, 255, 255, 0.2)
                border-radius .25rem
            .wish
                margin 0.6rem 0.25rem 0 0
            .experienced
                margin 0.6rem 0 0 0.25rem
</style>