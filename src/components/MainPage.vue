<template>
  <div class="mainbox">
    <h1>mainpage</h1>
    <p>信息选择页面</p>
    <router-link to="/main/home">mainhome</router-link>
    <router-link to="/main/profile">mainprofile</router-link>
    <router-view></router-view>
    <!-- <div class="hell">hello</div> -->
  </div>
</template>

<script>
import Info from './info.vue'


export default {
  name: 'HelloWorld',
  components:{
    Info
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'xiongben',
      agenum:25,
      mess:'成都，带不走的只有你，和我在成都的街头走一走',
      mes:true,
      input:''
    }
  },
  methods:{
    getinfo(){
      console.log(this.name);
    },
    changeMess(){
      this.mes=!this.mes;
      this.mess=this.mes?'我要去烂漫的土耳其啊啊啊啊啊啊':'i want to balama';
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .mainbox{
   width:100%;
   height:1000px;
   border-bottom: 5px solid blue;
   display: flex;
   flex-direction: column;
   align-items: center;
 }

</style>
