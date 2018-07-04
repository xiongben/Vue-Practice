<template>
  <div class="box">
    <div class="minbox"></div>
    <div class="a1"></div>
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
  }
</style>
