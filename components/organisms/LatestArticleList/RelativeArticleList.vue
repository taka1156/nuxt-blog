<template>
  <div class="relative-article-list">
    <div>
      <base-heading id="anchor_relative" h-lv="2">
        関連記事: {{ category.name }}
      </base-heading>
    </div>
    <div v-if="relatedBlogs.length !== 0" class="relative-article-list__box">
      <div v-for="relatedBlog in relatedBlogs" :key="relatedBlog.id">
        <base-link
          :route-to="{ name: 'article-id', params: { id: relatedBlog.id } }"
        >
          <base-heading h-lv="3">{{ relatedBlog.title }}</base-heading>
        </base-link>
      </div>
    </div>
    <div v-else>
      <base-text>関連記事は、まだありません。</base-text>
    </div>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';
import BaseHeading from '../../atoms/BaseHeading/BaseHeading';
import BaseLink from '../../atoms/BaseLink/BaseLink';

export default {
  name: 'RelativeArticleList',
  components: {
    BaseText,
    BaseHeading,
    BaseLink
  },
  props: {
    /**
     * 関連記事カテゴリー
     */
    category: {
      type: Object,
      required: true
    },
    /**
     * 関連記事一覧
     */
    relatedBlogs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-heading2--extend {
  padding: 0.4em 0.5em;
  color: #494949;
  text-align: left;
  background: #f4f4f4;
  border-left: 3px solid #28a745;
}

::v-deep .base-heading3--extend {
  color: rgb(40, 167, 69);
  text-align: left;
  border-bottom: 1px solid #eaecef;
}

::v-deep .base-text--extend {
  margin-left: 5px;
  text-align: left;
}

.relative-article-list {
  margin-bottom: 30px;
}

.relative-article-list__box {
  display: flex;
  flex-direction: column;
}
</style>
