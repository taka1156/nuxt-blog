<template>
    <div class="SortPage">
        <NaviBar />
        <div class="container mt-6">
            <ul class="list-group">
                <div v-for="(items, index) in SortData" :key="index">
                    <li class="list-group-item flex-column">
                        <h2 class="h3">{{items.title}}</h2>
                        <small class="text-muted">{{items.date}}</small>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import {fileMap} from "~/post/summary.json";

export default {
    name: 'SortPage',
    data(){
        return {
            SortData: [],
            
        }
    },
    validate({ query }) {
        return query.sortindex === "tag" || query.sortindex === "date";
    },
    computed(){
        Articlelist:{
            if( context.query.sortindex === "tag" ){
                fileMap.filter(function( value ) {

                })
            }
            if( context.query.sortindex === "data" ){
                fileMap.filter(function( item ) {
                    SortData.push(item.created_at);
                })
            }
        }
    }

}
</script>