<template>
    <div id="indexTopFixBar">
        <section class="region-wrapper">
            <span>▼</span>
            <span class="region-text">东莞</span>
        </section>
        <router-link to="/pages/index/indexSearch" class="search" tag="section">
            <span>☌</span>
            <input type="text" placeholder="搜索影视剧、影人、影院、演出、图书">
        </router-link>
        <section class="calendar">xxx</section>
    </div>
</template>

<script>
    export default {
        name: "indexTopFixBar"
    }
</script>

<style lang="stylus" scoped>
    #indexTopFixBar
        position fixed
        top 0
        left 0
        width 100%
        padding 1rem .8rem
        /*border 1px solid red*/
        z-index 9999
        display flex
        flex-direction row
        justify-content space-between
        color #ffffff
        section.region-wrapper
            width 16%
            /*border 1px solid red*/
            display flex
            .region-text
                border 1px solid white
        section.search
            width 68%
            /*border 1px solid red*/
            position relative
            span
                position absolute
                top 0
                left 0
                color #666
                z-index 1000
            input
                position absolute
                top 0
                left 0
                width 100%
                -webkit-appearance none
                background-color #fff
                background-image none
                border-radius 12px
                border 1px solid #dcdfe6
                box-sizing border-box
                color #606266
                font-size 13px
                display inline-block
                outline none
                padding 0.5rem 0.5rem 0.5rem 1.85rem;
                height 1.5rem
                line-height 1.5rem
                transition border-color .2s cubic-bezier(.645, .045, .355, 1)
        section.calendar
            width 8.4%
            border 1px solid red

</style>