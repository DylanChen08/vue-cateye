<template>
    <div id="movies">
        <fixedTopBar @toHotShow="released" @toPreShow="preShow"></fixedTopBar>
        <transition
                name="component-fade"
                :enter-active-class="enterAnimate"
                :leave-active-class="leaveAnimate"
        >
            <components class="xxx9" v-bind:is="view"></components>
        </transition>
    </div>

</template>

<script>
    import fixedTopBar from '../../common/fixedTopBar'
    import moviesReleased from './movieReleased'
    import moviesPreShows from './moviePreShows'

    export default {
        name: "movies",
        components: {
            fixedTopBar,
            moviesReleased,
            moviesPreShows
        },
        data() {
            return {
                view: 'moviesReleased',
                enterAnimate: '',
                leaveAnimate: ''
            }
        },
        methods: {
            released() {
                this.view = 'moviesReleased'
                this.$router.push({path: '/pages/movies/moviesReleased'});
                this.enterAnimate = 'animated fadeInLeft'
                this.leaveAnimate = 'animated fadeOutRight'
            },
            preShow() {
                this.view = 'moviesPreShows'
                this.$router.push({path: '/pages/movies/moviesPreShows'});
                this.enterAnimate = 'animated fadeInRight'
                this.leaveAnimate = 'animated fadeOutLeft'
            }

        },
        mounted(){
            //获取当前路由并渲染
            let currentLocation = this.$route.path;
            if(currentLocation === '/pages/movies/moviesReleased'){
                this.view = 'moviesReleased'
            }
            if(currentLocation === '/pages/movies/moviesPreShows'){
                this.view = 'moviesPreShows'
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/animate.css";
    #movies
        position absolute
        top 10%
        left 0
        width 100%
        padding 0 0 6rem 0
</style>