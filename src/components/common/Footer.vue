<template>
    <div class="footer">
        Created by <a href="https://github.com/jovanivanovic" target="_blank">Jovan Ivanovic</a>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer {
        background-color: black;
        color: white;
        height: 40px;
        width: 100%;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        font-family: 'Roboto Condensed', sans-serif;

        a {
            color: #ca0088;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>