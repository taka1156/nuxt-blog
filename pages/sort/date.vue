<template>
    <div class="DateSort">
        <NaviBar />
        <div class="container bg-color mt-6">
            <h2>
                日付順
            </h2>
            <div class="border" />
            <ul class="list-group">
                <div v-for="(date, index) in dateList" :key="index">
                    <div class="m-2 list-group-item list-group-item-action flex-column align-items-start" @click="jump(date)">
                        <div class="d-flex w-100 justify-content-between">
                            <h2 class="h3">{{date}}</h2>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import {date} from '~/post/KeyAndPath.json';

export default {
    name:'DateSort',
    data(){
        return {
            dateList:date
        }
    },
     methods:{
        jump(date){
            this.$router.push(`result/${date}`);
        }
    }
}
</script>>