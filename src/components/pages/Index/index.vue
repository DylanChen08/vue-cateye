<template>
    <div>
        <!--轮播组件-->
        <carousel></carousel>
        <!--首页的顶部工具栏-->
        <indexTopFixBar></indexTopFixBar>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="电影" name="first">
                <!--首页/电影组件-->
                <indexMovies></indexMovies>
            </el-tab-pane>
            <el-tab-pane label="电视剧" name="second">
                <indexTvSeries></indexTvSeries>
            </el-tab-pane>
            <el-tab-pane label="综艺" name="third">
                <indexVarietyShows></indexVarietyShows>
            </el-tab-pane>
            <el-tab-pane label="书籍" name="fourth">
                <indexBooks></indexBooks>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    import carousel from './carousel'
    import indexMovies from './indexMovies'
    import indexTvSeries from './indexTvSeries'
    import indexTopFixBar from './indexTopFixBar'
    import indexSearch from './indexSearch'
    import indexBooks from './indexBooks'
    import indexVarietyShows from "./indexVarietyShows"

    export default {
        name: "index",
        data() {
            return {
                activeName: 'first'
            }
        },
        components: {
            carousel,
            indexMovies,
            indexTopFixBar,
            indexTvSeries,
            indexBooks,
            indexVarietyShows,
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },

    }
</script>

<style scoped>

</style>