<template>
    <div class="gridlist-view">
        <h2>
            {{ title }}
            
            <div class="view-options">
                <span @click="toggleSort()" class="option active">
                    <img v-if="sort == 'asc'" src="@/assets/icons/sort-asc.svg" title="Sort Descending" />
                    <img v-if="sort == 'desc'" src="@/assets/icons/sort-desc.svg" title="Sort Ascending" />
                </span>
                <span class="separator"></span>
                <span @click="toggleView('grid')" class="option" :class="currentView == 'grid' ? 'active' : ''">
                    <img src="@/assets/icons/grid.svg" title="Grid" />
                </span>
                <span @click="toggleView('list')" class="option" :class="currentView == 'list' ? 'active' : ''">
                    <img src="@/assets/icons/list.svg" title="List" />
                </span>
            </div>
        </h2>

        <component v-show="filteredItems.length > 0" :is="dynamicView" :items="filteredItems"></component>
        <p v-show="filteredItems.length == 0">Nothing to see here</p>
    </div>
</template>

<script>
    import GridView from '@/components/common/grid/GridView.vue';
    import ListView from '@/components/common/list/ListView.vue';

    import { sortDesc, sortAsc, search } from '@/utils/helpers';

    export default {
        name: 'BaseGridListView',
        data() {
            return {
                views: {
                    grid: GridView,
                    list: ListView
                },
                currentView: this.default ? this.default : 'grid',
                sort: 'desc',
                searchQuery: ''
            }
        },
        components: {
            GridView,
            ListView
        },
        props: [
            'title', 'items', 'default', 'max'
        ],
        methods: {
            toggleSort() {
                this.sort = this.sort == 'desc' ? 'asc' : 'desc';
            },
            toggleView(view = null) {
                if (!view) {
                    this.currentView = this.currentView == 'grid' ? 'list' : 'grid';
                } else {
                    this.currentView = view;
                }
            }
        },
        computed: {
            dynamicView() {
                return this.currentView == 'grid' ? this.views.grid : this.views.list
            },
            filteredItems() {
                let items = this.items.slice(0, this.max);

                if (this.searchQuery) {
                    items = items.filter(search(this.searchQuery));
                }

                if (this.sort == 'asc') {
                    return items.sort(sortAsc);
                } else {
                    return items.sort(sortDesc);
                }
            }
        },
        mounted() {
            this.$root.$on('search:Query', (query) => {
                this.searchQuery = query;
            });
        }
    }
</script>

<style scoped lang="scss">
    .gridlist-view {
        margin-bottom: 45px;

        &:last-of-type {
            margin-bottom: 0;
        }

        h2 {
            .view-options {
                float: right;
                overflow: hidden;
                height: 23px;

                .option {
                    height: 16px;
                    float: left;
                    margin-left: 5px;
                    opacity: .35;
                    cursor: pointer;
                    transition: .2s ease-in-out all;

                    img {
                        height: 100%;
                    }

                    &:hover,
                    &.active {
                        opacity: 1;
                    }
                }

                .separator {
                    height: 20px;
                    margin: 0 5px;
                    width: 1px;
                    background-color: rgba(0, 0, 0, 0.12);
                    float: left;
                }
            }
        }
    }
</style>