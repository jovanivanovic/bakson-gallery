<template>
    <div id="app">
        <Header />

        <Container>
            <router-view/>
        </Container>

        <Footer />
        <Loader />
    </div>
</template>

<script>
    import Header from '@/components/common/Header.vue';
    import Container from '@/components/common/Container.vue';
    import Footer from '@/components/common/Footer.vue';
    import Loader from '@/components/common/Loader.vue';

    export default {
        name: 'App',
        data() {
            return {
                images: null,
                events: null
            }
        },
        components: {
            Header,
            Container,
            Footer,
            Loader
        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:300,400,500,700,900&display=swap');

    body {
        padding: 0;
        margin: 0;
        background-color: #69747c;
    }

    * {
        box-sizing: border-box;
    }

    #app {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        margin: 0 auto;
        background-color: white;

        @media screen and (min-width: 768px) { 
            width: 720px 
        }

        @media screen and (min-width: 992px) { 
            width: 960px 
        }
    }

    h2 {
        font-size: 20px;
        position: relative;
        text-align: left;
        padding-bottom: 15px;
        margin-bottom: 15px;
        font-weight: 700;

        &::after {
            content: '';
            width: 30px;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            background-color: #ca0088;
        }
    }
</style>
