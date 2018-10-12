<template>
    <div id="footer-nav">
        <router-link to="/pages/index" tag="dl">
            <dt>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-buoumaotubiao45"></use>
                </svg>
            </dt>
            <dd>首页</dd>
        </router-link>

        <router-link to="/pages/movies" tag="dl">
            <dt>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-movie"></use>
                </svg>
            </dt>
            <dd>电影</dd>
        </router-link>

        <router-link to="/pages/cinemas" tag="dl">
            <dt>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-cinema"></use>
                </svg>
            </dt>
            <dd>影院</dd>
        </router-link>

        <router-link to="/pages/shows" tag="dl">
            <dt>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-ticket"></use>
                </svg>
            </dt>
            <dd>演出</dd>
        </router-link>

        <router-link to="/pages/personal-center" tag="dl">
            <dt>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-my"></use>
                </svg>
            </dt>
            <dd>我的</dd>
        </router-link>


    </div>
</template>

<script>
    export default {
        name: "FooterNav"
    }
</script>
