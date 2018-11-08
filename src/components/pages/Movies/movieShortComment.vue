<template>
    <div id="comment">
        <div class="comment-fix-top">
            <span class="back" @click="back"><</span>
            <h3>猫眼短评-飓风奇劫</h3>
            <router-link class="write-comment" to="/">写短评</router-link>
        </div>
        <template>
            <section class="comment-block" v-for="item in movieComments" :key="item.ocm.id">
                <div class="avatar"><img :src="item.ocm.avatarurl" alt="user"></div>
                <div class="comment-details-block">
                    <div class="info-msg-wrapper">
                        <section class="user-info">
                            <span class="nickname">{{item.ocm.nickName}}</span>
                            <span class="level">
                                LV{{item.ocm.userLevel}}
                            </span>
                            <span class="ticket">购票</span></section>
                        <div class="share-post">...</div>
                    </div>
                    <div class="rate">
                        <el-rate
                                v-model="score"
                                disableds
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                    <div class="content">
                        {{item.ocm.content}}
                    </div>
                    <div class="time-statistics">
                        <span class="time">{{item.ocm.time}}</span>
                        <div class="end-operation">
                            <span>{{item.ocm.approve}}赞</span>
                            <span>{{item.ocm.reply}}回复</span>
                        </div>
                    </div>
                </div>

            </section>
        </template>
    </div>

</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "movieShortComment",
        data() {
            return {
                movieComments: '',
                score: 10
            }
        },
        created() {
            console.log('this.$route.params')
            console.log(this.$route.params)
        },
        computed: {},

        methods: {
            ...mapActions(['getMovieComments']),
            back() {
                this.$router.go(-1)
            }
        },
        mounted() {
            let movieId = this.$route.params
            this.getMovieComments(movieId).then(res => {
                console.log('resxxx', res.data[0].group)
                this.movieComments = res.data[0].group
            }).catch(e => {
                console.log(e)
            })
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/common.stylus"
    #comment
        padding-top 4rem
        .comment-fix-top
            position fixed
            top 0
            left 0
            width 100%
            display grid
            grid auto / 14% 70% 16%
            padding 1rem 0
            background $themeBgColor
            color #fff
            z-index 999
            span.back
                grid-column 1
                grid-row 1
                display flex
                justify-content center
                align-items center
            h3
                grid-column 2
                grid-row 1
            .write-comment
                grid-column 3
                grid-row 1
                display flex
                justify-content center
                align-items center
                color #fff
        .comment-block
            display grid
            grid auto / 12% 88%
            padding 1rem 0.8rem 0 1.08rem
            div.avatar
                grid-column 1
                grid-row auto
                img
                    width 1.875rem
                    height 1.875rem
                    border-radius 50%
                    border 1px solid #eeeddc
            div.comment-details-block
                grid-column 2
                grid-row auto
                display flex
                flex-direction column
                padding-bottom 1.2rem
                border-bottom 1px solid #eee
                div.info-msg-wrapper
                    display flex
                    flex-direction row
                    flex-wrap nowrap
                    justify-content space-between
                    margin-bottom 0.52rem
                    section.user-info
                        display flex
                        flex-direction row
                        span + span
                            margin-left 0.33rem
                        .nickname
                            color #333
                            font-size .875rem
                            display flex
                            justify-content center
                            align-items center
                        .level
                            padding .125rem .16rem
                            color #7cc6f9
                            font-size .75rem
                            border-radius .3rem
                            border 1px solid #7cc6f9
                        .ticket
                            padding .16rem .2rem
                            color #7cc6f9
                            border 1px solid #7cc6f9
                            border-radius .3rem
                            font-size .75rem
                    .share-post
                        display flex
                        justify-content center
                        align-items center
                div.content
                    padding 0.8rem 0
                div.time-statistics
                    display flex
                    justify-content space-between
                    font-size .75rem
                    color #999
                    .end-operation span
                        padding 0.075rem 0.15rem
                        border-radius 10%
                        border 1px solid #999
                    .end-operation span + span
                        margin-left .5rem


</style>