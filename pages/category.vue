<template>
    <div class="Category">
        <NaviBar />
        <div class="container-fluid bg-color mt-6">
            <h2>
                カテゴリー
            </h2>
            <div class="border" />
            <ul class="list-group">
                <div v-for="(category, index) in categories" :key="index">
                    <div class="m-2 bg-color mx-auto list-group-item list-group-item-action flex-column align-items-start" @click="jump(category.fields.slug)">
                        <div class="d-flex w-100 justify-content-between">
                            <h2 class="h3">{{category.fields.tag}}</h2>
                            <img :src="require(`static/${category.fields.tag}.svg`)" height="12%" width="12%">
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';

const client = createClient();

export default {
    name: 'Category',
    async asyncData ({ env }) {
        return await client.getEntries({
                'content_type': env.CF_BLOG_TAG_TYPE_ID,
                'fields.categoryflag':true,
                'order':'fields.id'
            }).then(entries => {
            return {
                categories: entries.items
            }
        }).catch(console.error);
    },
    methods:{
        jump(category){
            this.$router.push(`../result/${category}`);
        }
    }
}
</script>
