<template>
    <div>
        <!--轮播组件-->
        <carousel></carousel>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="电影" name="first">
                <!--首页/电影组件-->
                <indexMovies></indexMovies>
            </el-tab-pane>
            <el-tab-pane label="电视剧" name="second">电视剧</el-tab-pane>
            <el-tab-pane label="综艺" name="third">综艺</el-tab-pane>
            <el-tab-pane label="书籍" name="fourth">书籍</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import carousel from './carousel'
    import indexMovies from './indexMovies'
    export default {
        name: "index",
        data(){
            return{
                activeName: 'first'
            }
        },
        components:{
            carousel,
            indexMovies
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>