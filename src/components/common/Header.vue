<template>
    <div class="header">
        <Search />
    </div>
</template>

<script>
    import Search from '@/components/common/header/Search.vue';

    export default {
        name: 'Header',
        data() {
            return {
                
            }
        },
        components: {
            Search
        },
    }
</script>

<style scoped lang="scss">
    .header {
        background-color: black;
        height: 70px;
        width: 100%;
        line-height: 70px;
        font-size: 14px;
        font-family: 'Roboto Condensed', sans-serif;
        padding: 15px 10px;
        display: flex;
        justify-content: center;
    }
</style>