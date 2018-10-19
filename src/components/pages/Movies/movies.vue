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
    import moviesReleased from './moviesReleased'
    import moviesPreShows from './moviesPreShows'

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
                this.enterAnimate='animated fadeInLeft'
                this.leaveAnimate='animated fadeOutRight'
            },
            preShow() {
                this.view = 'moviesPreShows'
                this.enterAnimate='animated fadeInRight'
                this.leaveAnimate='animated fadeOutLeft'
            }

        }

    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/animate.css";
    #movies
        position absolute
        top 10%;
        left 0
        padding 0 0 6rem 0
</style>