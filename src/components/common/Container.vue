<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Container',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        margin: 0 auto;
        padding: 30px 10px;

        @media screen and (min-width: 768px) { 
            padding: 30px 75px;
        }

        @media screen and (min-width: 992px) { 
            padding: 30px 150px;
        }
    }
</style>