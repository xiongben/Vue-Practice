<template>
    <div class="box">
        <div class="badgeArea">
           <SonComponent :detaildata="sondata"></SonComponent>
           
           
           <DetailBox3></DetailBox3>
           <button @click="show = !show">
                Toggle render
            </button>
            <div class="testan">
           <transition name="slide-fade">
                <DetailBox1 v-if="show"></DetailBox1>
                <DetailBox2 v-if="!show"></DetailBox2>
            </transition>
            
            </div>
            <div class="testan">
                <DetailBox1 class="testmovebox"></DetailBox1>
                <DetailBox2></DetailBox2>
            </div>
            <div class="box1">
                <div class="box2"></div>
                <div class="box3"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
import request from './../../system/api';
import axios from "axios";
import SonComponent from "./model/SonComponent";
import DetailBox1 from "./model/DetailBox1";
import DetailBox2 from "./model/DetailBox2";
import DetailBox3 from "./model/DetailBox3";
export default {
    name: 'Badge',

    data(){
      return {
          show: false,
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
    components:{SonComponent, DetailBox1, DetailBox2, DetailBox3},
    created() {
        this.userId = this.getUrlparams(this.userId)? this.getUrlparams(this.userId):120058;
        // this.getBadge(this.userId);
        this.testapi()

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
                url:'http://0.0.0.0:5000/',
                method: 'GET',
                withCredentials: true,
                params:{
                   
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
.box1{
    width: 200px;
    height: 50px;
    background: blue;
    overflow: hidden;
    position: relative;
}
.box2{
    width: 150px;
    height: 50px;
    background: yellow;
    position: absolute;
    z-index: 4;
    left: 0;
    top:0;
    animation: movetest 4s forwards;
}
.box3{
    width: 150px;
    height: 50px;
    background: red;
    position: absolute;
    z-index: 3;
    left: 150px;
    top:0;
}
.testan {
    width: 100%;
    height: 2.5rem;
    position: relative;
    overflow: hidden;
}
   .box{
       width: 100%;
       height: 100vh;
       overflow: hidden;
       background: pink;
   }
   .badgeArea{
    width: 100%;
   }
   .slide-fade-enter-active {
  transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(150px);
    opacity: 0;
    }
  
  .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  /* animation: bounce-in .5s reverse; */
  animation: bounce-in .5s ;
}
@keyframes bounce-in {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translate(100%);
  }
}

@keyframes bounce-out {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translate(100%);
  }
}

@keyframes movetest {
    0% {
    left: 0;
    top:0px;
  }
  50% {
    left: 50%;
    top:0px;
  }
  100% {
    left: 100%;
     top:0px;
  }
}

@keyframes example {
 0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:50%; top:0px;}
  50%  {background-color:blue; left:50%; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
.movebox{
    width: 100px;
    height: 100px;
  animation-name: example;
  animation-duration: 4s;
  position: relative;
}
.testmovebox {
  animation: movetest 4s forwards;
  
}
</style>

