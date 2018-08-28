<template>
  <div class="box">
    <div class="minbox">
      <p>{{mess}}</p>
      <p>{{title}}</p>
    </div>
    <div class="a1"></div>
    <el-button type="success" @click="send">send to F</el-button>
  </div>
</template>

<script>
export default {
  name: 'InfoModel',
  props:['age','title'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'xiongben',
      mess:'成都，带不走的只有你，和我在成都的街头走一走'
    }
  },
  methods:{
    changeMess(){
       this.mess = "我喜欢你，就像风走了八万里，不问归期";
    },
    send() {
      this.$emit('changetest');
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .box{
    width:100%;
    
    background: yellowgreen;
    text-align: center;
  }
  .minbox{
    width:3.75rem;
    height:1rem;
    background: gray;
  }
  .a1{
    width:1.875rem;
    height:1rem;
    background: yellow;
  } */
</style>
