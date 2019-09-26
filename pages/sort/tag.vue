<template>
    <div class="TagList">
        <NaviBar />
        <div class="container-fluid bg-color mt-6">
            <h2>
                タグ
            </h2>
            <div class="border" />
            <ul class="list-group">
                <div v-for="(tag, index) in tagList" :key="index">
                    <div class="m-2 bg-color mx-auto list-group-item list-group-item-action flex-column align-items-start" @click="jump(tag)">
                        <div class="d-flex w-100 justify-content-between">
                            <h2 class="h3">{{tag}}</h2>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import { tag } from '~/post/KeyAndPath.json';

export default {
    name:'TagList',
    data(){
        return {
            tagList:tag
        }
    },
     methods:{
        jump(tag){
            this.$router.push(`result/${tag}`);
        }
    }
}
</script>>