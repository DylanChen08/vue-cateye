<template>
    <div id="swiper">
        <Swiper v-if="true">
            <Slide v-for="(item,index) in carouselList" :key="index">
                <a href=""><img width="100%" height="100px" :src="item.image" alt=""></a>
            </Slide>
        </Swiper>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {Swiper, Slide} from 'vue-swiper-component';

    export default {
        name: "carousel",
        components: {
            Swiper,
            Slide
        },
        data() {
            return {
                carouselList: ''
            }

        },
        methods: {},
        computed: {
            ...mapActions(['getCarousel'])
        },
        mounted() {
            console.log('xxx2')
            this.getCarousel.then(res => {
                console.log(685)
                console.log(res)
                this.carouselList = res
            })
        }

    }
</script>

<style lang="stylus" scoped>
    #swiper img
        height 10.2rem
</style>