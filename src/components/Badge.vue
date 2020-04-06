<template>
    <div class="box">
        <div class="badgeArea">
           
        </div>
        <SonComponent :detaildata="sondata"></SonComponent>
    </div>
</template>

<script>
import request from './../../system/api';
import axios from "axios";
import SonComponent from "./model/SonComponent";
export default {
    name: 'Badge',

    data(){
      return {
          title: "test badge",
          userId: 120058,
          achieveList: [],
          challengeList: [],
          sondata: {
              num: 0,
              name: "xiaoming",
          }
      }
    },
    components:{SonComponent},
    created() {
        // this.userId = this.getUrlparams(this.userId)? this.getUrlparams(this.userId):120058;
        // this.getBadge(this.userId);
        // this.testapi()
        setInterval(()=>{
           this.sondata.num += 1;
        },2000)
    },
    methods: {
        getBadge(){
           var url = "/reward/badges/get-summary";
           var params = {
               userId: this.userId,
               ownedBadgeWall:true,
           };
           request(url,params,'get').then((res)=>{
               this.achieveList = res.achievement;
               this.challengeList = res.challenge;
            //    console.log(this.achieveList);
            })
        },
        testapi(){
            axios.request({
                url:'http://10.40.16.20:2080/reward/badges/get-summary',
                method: 'GET',
                params:{
                    userId: 120058,
                    ownedBadgeWall:true,
                }
            }).then(function(response){
                console.log(response.data);
            }).catch(function(error){
                console.log(error);
            })
        },
        getUrlparams(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    },
}
</script>

<style scoped>
   .box{
       width: 3.75rem;
       overflow: hidden;
   }
   .badgeArea{
    width: 100%;
}
.badgeTitle {
    height: 0.34rem;
    line-height: 0.34rem;
    margin-top: 0.1rem;
    font-size: 14px;
    color: rgb(176, 176, 187);
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: bolder;
    /* background: yellow; */
    width: 3.45rem;
    margin:0 auto;
    /* padding-left: 0.15rem; */
    text-align: left;
}
.badgeUl{
    width: 3.6rem;
    margin: 0 auto;
    overflow: hidden;
}
.badgeLi{
    width: 1.2rem;
    height: 1.4rem;
    float: left;
    text-align: center;
}
.badgeIcon{
    width: 0.88rem;
    height: 0.88rem;
    /* background: red; */
    margin-top: 0.1rem;
}
.textDetail{
    height: 20px;
    width: 100%;
    line-height: 20px;
    font-size: 10px;
    color: rgb(44,44,48);
    font-family: Roboto, Helvetica, sans-serif;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.otherText{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: rgb(171,173,187);
    font-family: Roboto, Helvetica, sans-serif;
}
</style>

