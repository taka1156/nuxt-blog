<template>
    <div class="ArticleList">
        <div class="list-group">
            <div v-for="(Article, index) in Articledata" :key="index">
                <article v-if="!Article.draft">
                    <div class="m-2 bg-color text-left list-group-item list-group-item-action flex-column align-items-start" @click="jump(Article.created_at, Article.subpath)">
                         <small>
                                <i class="material-icons ">event_note</i>
                                作成日:{{Article.created_at}}~更新日:{{Article.updated_at}}
                        </small>
                        <div class="border" />
                        <div class="d-flex justify-content-between">
                            <h3 class="h4 mb-1">{{Article.title}}</h3>
                        </div>
                        <p class="mb-1">
                            {{Article.summary}}
                        </p>
                        <div class="border" />
                        <div class="d-flex flex-row">
                            タグ:&nbsp;
                            <p v-for="(tagdata, index) in Article.tag" :key="index">
                                {{tagdata}},&nbsp;
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Articledata:null
    },
    methods:{
        jump(date, subpath){
            this.$router.push(`post/${date}/${subpath}`);
        }
    }
}
</script>
