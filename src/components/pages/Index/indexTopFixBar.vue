<template>
    <div id="indexTopFixBar">
        <section class="region-wrapper">
            <span class="region-text">东莞</span>
            <span class="region-icn">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-down"></use>
                </svg>
            </span>
        </section>
        <router-link to="/pages/index/indexSearch" class="search" tag="section">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-search"></use>
                </svg>
            </span>
            <input type="text" placeholder="搜影视剧、影人、影院、演出、图书">
        </router-link>
        <section class="calendar">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Calandar"></use>
            </svg>
        </section>
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
        z-index 9999
        display flex
        flex-direction row
        justify-content space-between
        color #ffffff
        section.region-wrapper
            width 16%
            background transparent
            color #fff
            display flex
            .region-text
                margin-right .25rem
            .region-icn svg
                font-size .75rem
        section.search
            width 68%
            position relative
            span
                position absolute
                top 16%
                left 2%
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
                font-size 12px
                display inline-block
                outline none
                padding 0.5rem 0.5rem 0.5rem 1.85rem;
                height 1.5rem
                line-height 1.5rem
                transition border-color .2s cubic-bezier(.645, .045, .355, 1)
        section.calendar
            width 8.4%
            display flex
            justify-content center
            align-items center
</style>