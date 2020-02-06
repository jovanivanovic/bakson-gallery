<template>
    <div class="grid-view">
        <GridItem v-for="item in items" 
            :key="item.id" 
            :image="item.image_url" 
            :title="item.author" 
            :width="item.width" 
            :height="item.height" 
            :url="item.url"
        />
    </div>
</template>

<script>
    import GridItem from '@/components/common/grid/GridItem.vue';

    export default {
        name: 'GridView',
        components: {
            GridItem
        },
        props: [
            'items'
        ]
    }
</script>

<style scoped lang="scss">
    .grid-view {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;

        @media screen and (min-width: 768px) { 
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (min-width: 992px) { 
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>