<template>
    <form class="search" @submit="search">
        <input v-model="query" type="search" placeholder="Search for artist, event or venue" ref="searchInput" />
        <button type="submit" class="button">
            <img src="@/assets/icons/search.svg" title="Search" />
        </button>
    </form>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search(e) {
                e.preventDefault();

                this.$refs.searchInput.blur();
                this.$root.$emit('search:Query', this.query);
            }
        }
    }
</script>

<style scoped lang="scss">
    .search {
        width: 100%;
        height: 40px;
        border-radius: 3px;
        overflow: hidden;

        @media screen and (min-width: 768px) { 
            width: 340px;
        }

        input[type="search"] {
            width: calc(100% - 70px);
            height: 100%;
            float: left;
            background-color: white;
            outline: unset;
            border: unset;
            padding: 0 10px;
            line-height: 40px;

            &::placeholder {
                color: rgba(0, 0, 0, 0.4);
            }
        }

        .button {
            width: 70px;
            height: 100%;
            float: left;
            background-color: #ca0088;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .1s ease-in-out all;
            cursor: pointer;
            outline: unset;
            border: unset;

            img {
                height: 20px;
            }

            &:active {
                background-color: #990066;
            }
        }
    }
</style>