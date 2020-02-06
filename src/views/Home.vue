<template>
    <div class="home">
        <BaseGridListView :items="items" default="grid" :max="6" title="Hot Tickets" />
        <BaseGridListView :items="reversedItems" default="list" :max="3" title="Upcoming Events" />
    </div>
</template>

<script>
    import BaseGridListView from '@/components/common/BaseGridListView.vue';

    import * as axios from 'axios';
    import * as faker from 'faker';

    export default {
        name: 'Home',
        data() {
            return {
                items: [],
                reversedItems: [],
                searchQuery: null
            }
        },
        components: {
            BaseGridListView
        },
        methods: {
            randomBoolean() {
                return Math.random() >= 0.5;
            }
        },
        computed: {
            
        },
        mounted() {
            axios.get('https://picsum.photos/v2/list')
                .then((response) => {
                    this.items = response.data;
                    this.reversedItems = response.data.slice().reverse();

                    this.items.map((x) => {
                        if (this.randomBoolean()) {
                            x.dates = [
                                faker.date.future(),
                                faker.date.future(),
                            ];

                            x.dates.sort((a, b) => {
                                return a - b;
                            });
                        } else {
                            x.date = faker.date.future();
                        }

                        x.size = x.width + x.height;
                        x.image_url = `https://i.picsum.photos/id/${x.id}/1280/720.jpg`;
                    });

                    this.$root.$emit('loader:Toggle');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
</script>
