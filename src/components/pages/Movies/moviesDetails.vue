<template>
    <div class="movies-details">
        <!--背景遮罩-->
        <div class="filter-bg"><img :src="moviesDetails.img" alt=""></div>
        <div class="movies-details-topBar">
            <template>
                <div class="primary">
                    <router-link class="back" to='/pages/movies'><</router-link>
                    <span class="title"><h5>电影</h5></span>
                    <router-link class="share" to="/">分享</router-link>
                </div>
            </template>
            <template v-if="false">
                <div class="fixed">
                    <router-link class="back" to='/pages/movies'>返回</router-link>
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
            <section class="rate-block">
                <div class="band">xxx</div>
                <div class="rate-percentage">
                    <div class="rate-percentage-wrapper">
                        <div class="title">9-10分</div>
                        <div class="progress-bar">
                            <el-progress :percentage="100"></el-progress>
                        </div>
                    </div>
                    <div class="rate-percentage-wrapper">
                        <div class="title">9-10分</div>
                        <div class="progress-bar">
                            <el-progress :percentage="100"></el-progress>
                        </div>
                    </div>
                    <div class="rate-percentage-wrapper">
                        <div class="title">9-10分</div>
                        <div class="progress-bar">
                            <el-progress :percentage="100"></el-progress>
                        </div>
                    </div>

                </div>
                <div class="rate-star">

                </div>
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
                tags: ''
            }
        },
        created() {


        },
        computed: {},
        methods: {
            ...mapActions(['getMovieId'])
        },
        mounted() {
            let movieId = this.$route.params.movieId
            console.log('sending movie`s ID request')
            this.getMovieId({movieId}).then(res => {
                console.log('res', res)
                this.moviesDetails = res.data[0]
                this.tags = this.moviesDetails.ver    //防止处理模板变量时,报错undefined
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .movies-details
        .filter-bg
            display grid
            grid 15rem / 1fr
            color #fff
            width 100%
            position absolute
            top 0
            left 0
            z-index -1
            border 1px solid green
            overflow hidden
            filter blur(.8rem)
            opacity .8
            img
                width 100%
                height 100%
                grid-column 1 / auto
                grid-row 1
                border 1px solid red
        .movies-details-topBar
            position fixed
            top 0
            right 0
            width 100%
            z-index 9999
            .primary
                display grid
                grid 3rem / 3rem auto 3rem
                border 1px solid red
                .back
                    grid-column 1
                    grid-row 1
                    display flex
                    justify-content center
                    align-items center
                    border 1px solid red
                    color white
                .title
                    grid-column 2
                    grid-row 1
                    display flex
                    justify-content center
                    align-items center
                    border 1px solid red
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
                    border 1px solid red
                    color white

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
                border 1px solid red
                img
                    width 100%
                    height 100%
                    border 1px solid red
            .details-list
                padding-left.75rem
                grid-column 2
                grid-row 1
                border 1px solid red
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
            border 1px solid red
            .band
                border 1px solid red
                width 12%
            .rate-percentage
                border 1px solid red
                width 60%
            .rate-percentage-wrapper
                display flex
                flex-direction row
                .title
                    width 30%
                .progress-bar
                    width 70%
            .rate-star
                width 26%

</style>