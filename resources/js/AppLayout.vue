<template>
    <Header/>
    <router-view/>
    <Footer/>
    <Cookie/>
    <Search/>
    <NewsletterSubscription/>
</template>

<script setup>
    import Header from "./components/Partials/Header.vue";
    import Footer from "./components/Partials/Footer.vue";
    import Cookie from "./components/Partials/Cookie.vue";
    import Search from "./components/Partials/Search.vue";
    import NewsletterSubscription from "./components/Partials/NewsletterSubscription.vue";
</script>
