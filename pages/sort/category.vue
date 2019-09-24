<template>
    <div class="Category">
        <NaviBar />
        <div class="container bg-color mt-6">
            <h2>
                カテゴリー
            </h2>
            <div class="border" />
            <ul class="list-group">
                <div v-for="(tag, index) in tagList" :key="index">
                    <div class="m-2 list-group-item list-group-item-action flex-column align-items-start" @click="jump(tag)">
                        <div class="d-flex w-100 justify-content-between">
                            <h2 class="h3">{{tag}}</h2>
                            <img :src="require(`static/${imgList[index]}`)" height="10%" width="10%">
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import keydata from "~/post/KeyAndPath.json";

export default {
    name: 'Category',
    data(){
        return {
            tagList: keydata.tag,
            imgList: keydata.imgpath
        }
    },
    methods:{
        jump(tag){
            console.log(tag);
            console.log()
            this.$router.push(`result/${tag}`);
        }
    }
}
</script>
