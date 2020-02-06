<template>
    <div class="loader" v-if="!loaded">
        <div class="loader-content">
            <div class="spinner"></div>
            <h3>Loading content</h3>
            <h3 class="alt">Please wait</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loader',
        data() {
            return {
                loaded: false
            }
        },
        mounted() {
            this.$root.$on('loader:Toggle', () => {
                this.loaded = !this.loaded;
            });
        }
    }
</script>

<style scoped lang="scss">
    .loader {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.99);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .loader-content {
            display: block;
            position: relative;
            text-align: center;
            color: white;
            text-transform: uppercase;
            font-family: 'Roboto Condensed', sans-serif;

            h3 {
                color: white;
                animation: change-color 2.2s infinite linear;

                @keyframes change-color {
                    0% {
                        color: white;
                    }
                    50% {
                        color: #ca0088;
                    }
                    100% {
                        color: white;
                    }
                }

                &.alt {
                    color: #ca0088;
                    animation: change-color-alt 2.2s infinite linear;

                    @keyframes change-color-alt {
                        0% {
                            color: #ca0088;
                        }
                        50% {
                            color: white;
                        }
                        100% {
                            color: #ca0088;
                        }
                    }
                }
            }

            .spinner {
                margin: 60px auto;
                font-size: 10px;
                position: relative;
                text-indent: -9999em;
                border-top: 1.1em solid rgba(255, 255, 255, 0.2);
                border-right: 1.1em solid rgba(255, 255, 255, 0.2);
                border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
                border-left: 1.1em solid #ffffff;
                -webkit-transform: translateZ(0);
                -ms-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-animation: spin 1.1s infinite linear;
                animation: spin 1.1s infinite linear;
                border-radius: 50%;
                width: 10em;
                height: 10em;

                &:after {
                    border-radius: 50%;
                    width: 10em;
                    height: 10em;
                }

                @keyframes spin {
                    0% {
                        -webkit-transform: rotate(0deg);
                        transform: rotate(0deg);
                    }
                    100% {
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }
</style>