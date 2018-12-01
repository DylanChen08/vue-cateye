<template>
    <div id="movies">
        <fixedTopBar @toHotShow="released" @toPreShow="preShow" :view="view"
                     :statusBarOffset="statusBarOffset"></fixedTopBar>
        <transition name="component-fade" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <components v-bind:is="view" v-swiper></components>
        </transition>
    </div>
</template>

<script>
    import fixedTopBar from '../../common/fixedTopBar'
    import movieReleased from './movieReleased'
    import moviePreShows from './moviePreShows'

    export default {
        name: "movies",
        components: {
            fixedTopBar,
            movieReleased,
            moviePreShows,
        },
        created() {

        },
        data() {
            return {
                view: 'movieReleased',
                enterAnimate: '',
                leaveAnimate: '',
                statusBarOffset: 32
            }
        },
        methods: {
            released() {
                this.view = 'movieReleased'
                this.$router.push({path: '/pages/movies/movieReleased'});
                this.enterAnimate = 'animated fadeInLeft'
                this.leaveAnimate = 'animated fadeOutRight'
                this.statusBarOffset = 32
                // console.log(this)
            },
            preShow() {
                this.view = 'moviePreShows'
                this.$router.push({path: '/pages/movies/moviePreShows'});
                this.enterAnimate = 'animated fadeInRight'
                this.leaveAnimate = 'animated fadeOutLeft'
                // this.enterAnimate = 'animated fadeInLeft'
                // this.leaveAnimate = 'animated fadeOutRight'
                this.statusBarOffset = 59.3608
            },

            checkCurrentRoute() {
                if (this.view === 'movieReleased') {
                    this.$router.push({path: '/pages/movies/movieReleased'});
                } else {
                    this.$router.push({path: '/pages/movies/moviePreShows'});
                }
            },


            convertStatusBarRate(ele, rawDistance) {
                let _this = ele.componentInstance.$parent.$vnode.componentInstance; //绑定当前Vue实例
                let data = -rawDistance
                let converted = data / 1024 * 100

                if (_this.view !== 'movieReleased') {
                    //右滑动
                    _this.statusBarOffset = 59.3608 - converted
                    console.log(Math.abs(converted))
                    if (Math.abs(converted) < 16) {
                        // _this.statusBarOffset = 32
                        // _this.enterAnimate = 'animated fadeInLeft'
                        // _this.leaveAnimate = 'animated fadeOutRight'
                        _this.$router.push({path: '/pages/movies/moviePreShows'}, () => {
                            // _this.preShow()
                        });
                    }
                } else {
                    //左滑动
                    if (_this.view !== 'moviePreShows') {
                        _this.statusBarOffset = 32 + Math.abs(converted)
                        // console.log('左滑动转化后百分率', converted)
                        if (Math.abs(converted) > 16) {
                            _this.statusBarOffset = 59.3608
                            _this.enterAnimate = 'animated fadeInRight'
                            _this.leaveAnimate = 'animated fadeOutLeft'
                            _this.$router.push({path: '/pages/movies/moviePreShows'}, () => {
                                _this.preShow()
                            });
                        }
                    }
                }
            }
        },
        mounted() {
            //获取当前路由并渲染
            this.checkCurrentRoute()
        },

        directives: {
            swiper: {
                bind: function (element, binding, el) {
                    let isTouchMove, startTx, startTy
                    element.addEventListener('touchstart', function (e) {
                        let touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        isTouchMove = false;
                    }, false);
                    element.addEventListener('touchmove', function (e) {
                        let touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;


                        if (distanceX < 0) { //右滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (Math.abs(distanceX) > 20) {
                                    // console.log(element)
                                    // console.log('右滑')
                                    // console.log('右滑',distanceX)
                                    let _this = el.componentInstance.$parent.$vnode.componentInstance
                                    if (_this.view !== 'movieReleased') {
                                        element.style.position = 'absolute'
                                        element.style.left = -distanceX + "px"
                                        // _this.statusBarOffset = -distanceX
                                        _this.convertStatusBarRate(el, distanceX)//调用转化函数
                                        if (Math.abs(distanceX) > 220) {
                                            // _this.enterAnimate = 'animated fadeInLeft'
                                            // _this.leaveAnimate = 'animated fadeOutRight'
                                            // console.log('_this.view', _this.view)
                                            _this.$router.push({path: '/pages/movies/movieReleased'}, () => {
                                                _this.released()
                                            });
                                        }
                                    } else {
                                        return;
                                    }
                                }
                            }
                        } else { //左滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (distanceX > 20) {
                                    e.preventDefault()
                                    // console.log('左滑', distanceX)
                                    // element.style.transition = "0.3s"
                                    // element.style.left = 0 + "px"
                                    let _this = el.componentInstance.$parent.$vnode.componentInstance
                                    if (_this.view !== 'moviePreShows') {
                                        element.style.position = 'absolute'
                                        element.style.right = distanceX + "px"
                                        _this.convertStatusBarRate(el, distanceX)//调用转化函数
                                        if (distanceX > 220) {
                                            _this.enterAnimate = 'animated fadeInRight'
                                            _this.leaveAnimate = 'animated fadeOutLeft'
                                            _this.$router.push({path: '/pages/movies/moviePreShows'}, () => {
                                                _this.preShow()
                                            });
                                        }
                                    } else {
                                        return;
                                    }

                                }
                            }
                        }
                    }, false);
                    element.addEventListener('touchend', function (e) {
                        if (!isTouchMove) {
                            return;
                        }
                        let touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy,
                            isSwipe = false
                        if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                            if (distanceX < 0) {
                                return;
                            }
                            if (Math.abs(distanceX) < 1000) {
                                isSwipe = true
                                // element.style.transition = "0.3s"
                                // element.style.marginLeft = 0 + "px"
                                element.style.transition = "0.3s"
                                element.style.position = 'absolute'
                                element.style.right = 0 + "px"
                                element.style.left = 0 + "px"
                                _this.statusBarOffset = distanceX

                            } else {
                                // element.style.transition = "0.3s"
                                // element.style.marginLeft = "-156px"
                            }
                        }
                    }, false);
                }
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
        /*padding 0 0 6rem 0*/
</style>
