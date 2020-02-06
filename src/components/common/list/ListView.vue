<template>
    <div class="list-view">
        <ListItem v-for="item in items" 
            :key="item.id"
            :image="item.image_url"
            :dates="item.date ? item.date : item.dates"
            :width="item.width"
            :height="item.height"
            :author="item.author"
            :url="item.url"
        />
    </div>
</template>

<script>
    import ListItem from '@/components/common/list/ListItem.vue';

    export default {
        name: 'ListView',
        components: {
            ListItem
        },
        props: [
            'items'
        ]
    }
</script>

<style scoped lang="scss">
    .list-view {
        width: 100%;
        display: block;
    }
</style>

