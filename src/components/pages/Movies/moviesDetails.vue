<template>
    <div class="movies-details">
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
            <div class="image-video-wrapper">
                <img :src="moviesDetails.img" :alt="moviesDetails.nm">
            </div>
            <ul class="details-list">
                <li class="title">
                    <h3>{{moviesDetails.nm}}</h3>
                </li>
                <li class="alias-title">
                    <h4>war</h4>
                </li>
                <li class="tags">xxx</li>
                <li class="region-duration">xxx</li>
                <li class="released-time">xxx</li>
                <li class="wish-count">xxx</li>
            </ul>
        </section>

    </div>
</template>

<script>
    // import {mapGetters} from 'vuex'
    import getData from '../../../api/getData'
    export default {
        name: "moviesDetails",
        data() {
            return {
                moviesDetails: ''
            }
        },
        created(){
            let movieId = this.$route.params.movieId
            console.log('sending movie`s ID request')

            getData.getMoviesDetails({movieId}).then(res=>{
                console.log(res)
                this.moviesDetails = res.data[0]
                console.log('moviesDetails')
                console.log(this.moviesDetails)

            })
        },
        computed: {
            // ...mapGetters(['getMoviesReleased'])
        },
        mounted() {
            // this.getMoviesReleased.then(res => {
            //     console.log(991)
            //     console.log(res)
            //     this.moviesDetails = res
            // })


        }
    }
</script>

<style lang="stylus" scoped>
    .movies-details
        .movies-details-topBar
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
                .title
                    grid-column 2
                    grid-row 1
                    display flex
                    justify-content center
                    align-items center
                    border 1px solid red
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

        .details-block
            display grid
            grid 8rem / 5.8rem auto
            .image-video-wrapper
                grid-column 1
                grid-row 1
                border 1px solid red
                img
                    width 100%
                    height 100%
                    border 1px solid red
            .details-list
                grid-column 2
                grid-row 1
                border 1px solid red

</style>