<template>
    <div class="TagList">
        <NaviBar />
        <div class="container-fluid bg-color mt-6">
            <h2>
                タグ
            </h2>
            <div class="border" />
            <ul class="list-group">
                <div v-for="(tag, index) in tags" :key="index">
                    <div class="m-2 bg-color mx-auto list-group-item list-group-item-action flex-column align-items-start" @click="jump(tag)">
                        <div class="d-flex w-100 justify-content-between">
                            <h2 class="h4">{{tag.fields.tag}}</h2>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';
import id from '~/plugins/key.js';

const client = createClient();

export default {
    name:'TagList',
    async asyncData ({ env }) {
        return await client.getEntries({
                'content_type': env.CF_BLOG_TAG_TYPE_ID,
                'fields.categoryflag':false,
                'order':'fields.id'
            }).then(entries => {
            return {
                tags: entries.items
            }
        }).catch(console.error);
    },
     methods:{
        jump(tag){
            id.TagID = tag.sys.id;
            this.$router.push(`../result/${tag.fields.slug}`);
        }
    }
}
</script>>