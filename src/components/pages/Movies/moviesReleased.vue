<template>
    <div class="movieReleased">
        <section class="movie-description">
            <ul>
                <li v-for="item in $store.state.movieReleasedList">
                    <ul>
                        <li class="movie-list-block" v-for="value in item.data.hot" :key="value.id">
                            <section class="image">
                                <img src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=70ccec74c495d143da76e3254bcbe53f/d1a20cf431adcbef44627e71a0af2edda3cc9f76.jpg"
                                     :alt="value.nm"/>
                            </section>

                            <section class="description">
                                <h2 class="title">
                                    {{value.nm}}
                                    <span class="version">{{value.ver}}</span>

                                </h2>
                                <span v-if="value.globalReleased===false" class="wish-count"><span>{{value.wish}}</span>想看</span>
                                <span v-if="value.globalReleased===true" class="wish-count">分数{{value.sc}}</span>
                                <span class="cast">{{value.desc}}</span>
                                <span class="show-info">{{value.showInfo}}</span>
                            </section>
                            <section class="ticket-purchase">
                                <router-link to="/">购票</router-link>
                            </section>


                        </li>
                    </ul>

                </li>
            </ul>

        </section>
        <section class="btn-buy">
            <router-link to="/"></router-link>
        </section>
    </div>
</template>

<script>
    export default {
        name: "moviesReleased"
    }
</script>

<style lang="stylus" scoped>
    .movieReleased
        padding 0 1.25rem
        .movie-list-block
            display grid
            grid auto / 5.6rem 11rem auto
            padding 0.92rem 0
            .image
                grid-column 1
                grid-row auto
                justify-items center
                text-align center
                img
                    width 3.67rem
                    height 5.42rem
            .description
                /*padding 0 9.7rem 0 0.6rem*/
                grid-column 2
                grid-row auto
            .ticket-purchase
                justify-items center
                grid-column 3
                grid-row auto
            .ticket-purchase > a
                display inline-block
        .description
            display flex
            flex-direction column
            h2.title
                font-size 1rem
                margin-bottom 0.67rem
            span
                font-size 0.8rem



</style>