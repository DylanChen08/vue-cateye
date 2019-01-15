<template>
    <div id="indexSearch">
        <section class="top-fix-bar">
            <div class="search-wrap">
                <span>
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-search"></use>
                    </svg>
                </span>
                <input type="text" placeholder="找影视剧、影院、影人、图书">
            </div>
            <span class="cancel"><router-link to="/">取消</router-link></span>
        </section>
        <section class="categories">
            <router-link to="/">
                <dt>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-caidanicondianyinghui"></use>
                    </svg>
                </dt>
                <dd>分类找片</dd>
            </router-link>
            <router-link to="/">
                <dt>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-my"></use>
                    </svg>
                </dt>
                <dd>影人</dd>
            </router-link>
            <router-link to="/">
                <dt>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-cinema"></use>
                    </svg>
                </dt>
                <dd>影院</dd>
            </router-link>
            <router-link to="/">
                <dt>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zixun"></use>
                    </svg>
                </dt>
                <dd>资讯</dd>
            </router-link>
        </section>
    </div>
</template>

<script>
    export default {
        name: "indexSearch"
    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/css/lib/common.stylus"
    #indexSearch
        background #fff
        section.top-fix-bar
            display flex
            flex-direction row
            background #fafafa
            .search-wrap
                width 85%
                padding calcOffset(0, 30) calcOffset(24, 0)
                white-space nowrap
                position relative
                span
                    width 10px
                    position absolute
                    left 6%
                    top 28%
                input
                    width 100%
                    -webkit-appearance none
                    background #ebebeb
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
            .cancel
                flex 1
                width 6%
                display flex
                justify-content center
                align-items center
                a
                    color $themeBgColor
                    font-size .85rem

        section.categories
            display flex
            flex-direction row
            justify-content space-between
            padding calcOffset(90, 0) calcOffset(0, 146)
            background #ffffff
            a
                width 20%
                display flex
                flex-direction column
                justify-content center
                align-items: center
                dt
                    box-shadow 0 0 8px #ddd
                    padding 0.625rem
                    border-radius 50%
                    margin-bottom .85rem
                    svg
                        font-size: 1.125rem
                        fill #333
                dd
                    font-size $smallFontSize
                    white-space nowrap
                    color #333
</style>