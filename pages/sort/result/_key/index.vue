<template>
 <div class="top">
   <NaviBar />
    <div class="container bg-color mt-6">
      <h2>
        {{$route.params.key}}
      </h2>
      <div class="border" />
      <ArticleList v-bind:Articledata="ArticleList" />
    </div>
  </div>
</template>

<script>
import keydata from "~/post/KeyAndPath.json";

export default {
    data(){
        return{
            dateList: keydata.date,
            tagList: keydata.tag,
        }
    },
    validate({ params }) {
      const taglist = ['vue', 'javascript', 'php', 'python', 'markdown', ];

      let checkflag
      for(let i = 0; i < taglist.length; i++){
        if(params.key === taglist[i]){
          checkflag = true;
          break;
        }
      }

      return checkflag;
      
    }
}
</script>
