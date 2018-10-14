<template>
    <div id="swiper">
        <Swiper v-if="true" v-for="(item,index) in $store.state.carousel" :key="index">
            <Slide v-for="(value,index2) in item">
                <a href=""><img width="100%" height="100px" :src="value.image" alt=""></a>
            </Slide>
        </Swiper>
    </div>

</template>

<script>


    import {Swiper, Slide} from 'vue-swiper-component';

    export default {
        name: "carousel",
        components: {
            Swiper,
            Slide
        },
        data() {
            return {}

        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    #swiper img
        height 10.2rem
</style>