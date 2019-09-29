<template>
    <div class="ArticleList">
        <div class="list-group">
            <div v-for="(Article, index) in Articledata" :key="index">
                <article class="m-2 bg-color mx-auto text-left list-group-item list-group-item-action flex-column align-items-start" 
                @click="jump(Article.fields.subpath)">
                    <small>
                        <i class="material-icons ">event_note</i>
                        作成日:{{dateFormat(Article.fields.createdAt)}}~更新日:{{dateFormat(Article.fields.updatedAt)}}
                    </small>
                    <div class="border" />
                    <div class="d-flex justify-content-between">
                        <h3 class="h4 mb-1">{{Article.fields.title}}</h3>
                    </div>
                    <p>{{Article.fields.summary}}</p>
                    <div class="border" />
                    <div class="d-flex flex-row">
                        タグ:&nbsp;[
                        <p v-for="(tag, index) in Article.fields.tags" :key="index">
                            {{tag}},&nbsp;
                        </p>]
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import { match } from 'minimatch';
export default {
    props:{
        Articledata:null
    },
    methods:{
        jump(subpath){
            let path;
            if(this.$route.path.match('(result/*)')){
                path = `../../post/${subpath}`;
            }else {
                path = `post/${subpath}`;
            }
            this.$router.push(path);
        },
        dateFormat(date){
            if(date === undefined)return "--/--/--";
            return (new Date(date)).toLocaleDateString();
        },
    }
}
</script>
