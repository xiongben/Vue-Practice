<template>
  <div class="box">
    <p>info compent {{age}}</p>
    <div @click="$emit('testfn')" class="changebutton">change</div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['age'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'xiongben',
      mess:'成都，带不走的只有你，和我在成都的街头走一走'
    }
  },
  methods:{
    changeName(){

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    width:100%;
    height:200px;
    background: yellowgreen;
    text-align: center;
  }
  .changebutton{
    width:100px;
    height:50px;
    border-radius: 25px;
    background: #666777;
  }
</style>
