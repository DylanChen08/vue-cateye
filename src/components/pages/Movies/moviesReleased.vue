<template>
    <div class="movieReleased">
        <section class="movie-description">
            <ul>
                <router-link class="movie-list-block" v-for="value in moviesReleasedList"
                             :to="`/pages/movies/moviesDetails/${value.id}`" tag="li">
                    <section class="image">
                        <img :src="value.img"
                             :alt="value.nm"/>
                    </section>
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
                </router-link>
            </ul>
        </section>
        <section class="btn-buy">
            <router-link to="/"></router-link>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    // import request from '../../../helpers/request'
    // import getData from '../../../api/getData'
    //
    // window.request = request;
    // console.log('xxx')
    // window.getData = getData;
    // console.log('xxx2')

    export default {
        name: "moviesReleased",
        data() {
            return {
                moviesReleasedList: ''
            }
        },
        computed: {
            ...mapGetters(['getMoviesReleased'])
        },
        mounted() {
            this.getMoviesReleased.then(res => {
                console.log(999)
                console.log(res)
                this.moviesReleasedList = res.data
            })
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/common.stylus"
    .movieReleased
        padding 0 1.25rem
        .movie-list-block
            display grid
            grid auto / 5.6rem 10rem auto
            padding 0.92rem 0
            .image
                grid-column 1
                grid-row auto
                justify-items center
                text-align center
                img
                    width 3.67rem
                    height 5.42rem
            .description
                /*padding 0 9.7rem 0 0.6rem*/
                grid-column 2
                grid-row auto
            .ticket-purchase
                justify-items center
                grid-column 3
                grid-row auto
                margin-left 1rem
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

        .description
            display flex
            flex-direction column
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


</style>