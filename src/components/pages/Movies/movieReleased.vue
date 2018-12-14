<template>
    <div class="movieReleased">
        <section class="movie-description" ref="bsWrapper">
            <ul>
                <router-link class="movie-list-block" v-for="value in moviesReleasedList"
                             :to="`/pages/movies/movieDetails/${value.id}`" tag="li">
                    <section class="image">
                        <img :src="value.img"
                             :alt="value.nm"/>
                    </section>
                    <section class="description-purchase-block">
                        <section class="description">
                            <h2 class="title">
                                {{value.nm}}
                                <!--<span class="version">{{value.ver}}</span>-->
                            </h2>
                            <span v-if="value.globalReleased===false"
                                  class="wish-count"><span>{{value.wish}}</span>人想看</span>
                            <span v-if="value.globalReleased===true&&value.sc!==0" class="score">
                                        猫眼分数
                                    <span>{{value.sc}}</span>
                                </span>
                            <span v-if="value.sc===0">暂无分数</span>
                            <span class="cast">{{value.desc}}</span>
                            <span class="show-info">{{value.showInfo}}</span>
                        </section>
                        <section class="ticket-purchase">
                            <router-link class="on-sale" v-if="value.globalReleased===true" to="/">购票</router-link>
                            <router-link class="pre-sale" v-if="value.globalReleased===false" to="/">预售
                            </router-link>
                        </section>
                    </section>
                </router-link>
                <li class="loading-text" v-show="loading">正在加载...</li>
                <li class="bottom-text" v-show="atBottom">--已经到底了--</li>
            </ul>
        </section>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import BScroll from 'better-scroll'

    export default {
        name: "moviesReleased",
        data() {
            return {
                moviesReleasedList: [],  //正在上映电影列表
                loading: null,
                page: 1,//判断页码
                atBottom: false //判断是否到达底部(服务器返回数据为空)
            }
        },
        components: {},
        created() {
            this.loading = true
        },
        computed: {},
        methods: {
            ...mapActions(['getMovieReleased']),
            //初始化better-scroll
            initScroll() {
                let that = this
                let options = {click: true, probeType: 3}
                options.pullDownRefresh = {
                    threshold: 50,  // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                    stop: 20        // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                },
                    options.pullUpLoad = {
                        threshold: -20, // 在上拉到超过底部 20px 时，触发 pullingUp 事件
                    },
                    //初始化scroll对象,提供触发下拉事件的参数
                    that.scroll = new BScroll(that.$refs.bsWrapper, options)
            },

            //下拉刷新
            pullDownRefresh() {
                let that = this;
                that.scroll.on('pullingDown', () => {
                    that.loading = true;
                    // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
                    that.getMovieReleased({page: that.page}).then((res) => {
                        if (res.status === 1 && res.msg === 'ok') {
                            that.moviesReleasedList = res.data;
                            that.loadingText = '正在刷新...';
                            setTimeout(() => {
                                that.loading = false
                            }, 1000)
                        } else {
                            console.log('获取失败')
                        }
                        that.scroll.finishPullDown()    // 在刷新数据完成之后，调用 finishPullDown 方法，回弹到顶部
                    })
                })
            },
            //上拉加载
            pullUpGetData() {
                let that = this
                this.scroll.on('pullingUp', () => {
                    that.loadingText = '正在加载更多...';
                    that.loading = true;
                    setTimeout(() => {
                        that.page++;
                        that.getMovieReleased({page: that.page}).then(res => {
                            console.log(res)
                            if (res.status === 1 && res.msg == 'ok') {
                                const data = res.data.map(x => {
                                    that.moviesReleasedList.push(x)
                                })
                            } else {
                                if (res.status === 1 && res.msg === 'empty') {
                                    that.atBottom = true //显示已经到达底部
                                }
                            }
                        })
                        that.scroll.finishPullUp();
                        that.loading = false
                    }, 1000)
                })
            },
        },
        mounted() {
            let that = this
            that.$nextTick(() => {
                that.loading = false
                if (!that.scroll) {
                    that.initScroll()
                    that.pullDownRefresh()
                    that.pullUpGetData()
                } else {
                    that.scroll.refresh()
                }
            })
            //DOM挂载完毕,渲染数据
            that.getMovieReleased({page: that.page}).then(res => {
                that.moviesReleasedList = res.data
            })
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/common.stylus"
    .movieReleased
        width 100%
        padding 0 1.25rem
        .movie-description
            height 600px
            overflow hidden
            .loading-text
                margin .5rem 0
                text-align center
                font-size 14px
            .bottom-text
                margin .5rem 0
                text-align center
                font-size 14px
                letter-spacing .25rem
                color #999
            .movie-list-block
                display grid
                grid auto / 24% 76%
                padding 0.92rem 0
                .image
                    grid-column 1
                    grid-row auto
                    justify-items center
                    text-align center
                    img
                        width 3.67rem
                        height 5.42rem
                .description-purchase-block
                    grid-column 2
                    grid-row auto
                    display flex
                    flex-direction row
                    border-bottom 1px solid #eee
                    .description
                        display flex
                        flex-direction column
                        width 75%
                        padding-bottom 1rem
                        h2.title
                            font-size 1rem
                            margin-bottom 0.67rem
                            overflow hidden
                            white-space nowrap
                            text-overflow ellipsis
                        span
                            font-size 0.8rem
                            margin .1rem 0
                        span.cast
                            white-space nowrap
                            text-overflow ellipsis
                            overflow hidden
                        span.score > span,
                        span.wish-count > span
                            color #ffb400
                            margin 0 0.2rem
                    .ticket-purchase
                        width 25%
                        padding 0 0 1rem 1rem
                        display flex
                        justify-content center
                        align-items center
                        a
                            display flex
                            justify-content center
                            align-items center
                            width 3rem
                            height 1.5rem
                            text-align center
                            font-size 0.8rem
                            color white
                            border-radius 0.2rem
                            background $themeBgColor
                            -webkit-box-shadow 10px 10px 13px -12px rgba(0, 0, 0, 0.75)
                            -moz-box-shadow 10px 10px 13px -12px rgba(0, 0, 0, 0.75)
                            box-shadow 10px 10px 13px -12px rgba(0, 0, 0, 0.75)
                        .on-sale
                            background $themeBgColor
                        .pre-sale
                            background $themeBgColorPrimary

</style>