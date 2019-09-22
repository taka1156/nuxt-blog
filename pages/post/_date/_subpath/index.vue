<template>
    <div class="Article">
        <div class="container mt-6">
            <!--記事のheader-->
            <div class="header border bg-info">
                <h1 class="text-muted" v-html="title" />
                <p class="text-muted">作成日{{created_at}}~更新日:{{updated_at}}</p>
                <div class="d-flex justify-content-center text-muted">
                    カテゴリ:<div v-for="(tag, index) in categories" :key="index">{{tag}},</div>
                </div>
            </div>

            <div class="text-left text-break" v-html="$md.render(bodyContent)" />
        </div>
    </div>
</template>

<script>
import {sourceFileArray} from "~/post/summary.json";

export default {
    name:'Artcle',
    validate({ params }) {
        return sourceFileArray.includes(`post/markdown/${params.date}-${params.subpath}.md`);
    },
    asyncData({ params }) {
      return Object.assign({}, require(`~/post/json/${params.date}-${params.subpath}.json`), { params });
    },
    head() {
        const url = `${this.url}/post/${this.params.date}-${this.params.subpath}/`;
    }
}
</script>

<style scoped>
    .container{
        width: 50%;

    }
</style>
