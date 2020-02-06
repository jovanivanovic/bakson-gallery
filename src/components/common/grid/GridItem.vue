<template>
    <a class="grid-item" :href="url" target="_blank">
        <div class="header">
            <div class="image" :style="`background-image: url('${image}')`"></div>
            <span class="title">{{ title }}</span>
        </div>
        <div class="body">
            <div class="line">
                <span class="icon">
                    <img src="@/assets/icons/height.svg" />
                </span>
                <span class="text">
                    Height: {{ height }}
                </span>
            </div>
            <div class="line">
                <span class="icon">
                    <img src="@/assets/icons/width.svg" />
                </span>
                <span class="text">
                    Width: {{ width }}
                </span>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: 'GridItem',
        props: [
            'image', 'title', 'width', 'height', 'url'
        ]
    }
</script>

banana
peach
cherry

<style scoped lang="scss">
    .grid-view {
        .grid-item {
            border: 1px solid rgba(176, 176, 181, 0.3);
            box-shadow: 0 1px 3px rgba(176, 176, 181, 0.6);
            border-radius: 3px;
            overflow: hidden;
            cursor: pointer;
            transition: all .5s;
            color: black;

            &:hover {
                .header {
                    .image {
                        transform: scale(1.2);
                    }
                }

                box-shadow: 0 0 5px rgba(121, 121, 164, 0.7);
            }

            .header {
                position: relative;
                height: 175px;
                width: 100%;
                overflow: hidden;

                @media screen and (min-width: 768px) { 
                    height: 125px;
                }

                .image {
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                    position: absolute;
                    transition: all .5s;
                    width: 100%;
                    height: 100%;
                }

                .title {
                    position: absolute;
                    padding: 10px;
                    bottom: 0;
                    left: 0;
                    color: white;
                    font-weight: 700;
                    font-size: 16px;
                    text-shadow: 0 0 2px rgba(176, 176, 181, 0.9);
                    width: 100%;
                    text-align: left;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
                }
            }

            .body {
                padding: 10px;
                opacity: 0.9;

                .line {
                    display: block;
                    width: 100%;
                    overflow: hidden;
                    padding: 2px 0;
                    font-size: 14px;

                    .icon {
                        float: left;
                        margin-right: 10px;
                        
                        img {
                            height: 14px;
                        }
                    }

                    .text {
                        float: left;
                        line-height: 14px;
                    }
                }
            }
        }
    }
</style>