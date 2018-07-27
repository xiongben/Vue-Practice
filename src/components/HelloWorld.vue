<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/login">login</router-link>
    <router-link to="/main">mainpage</router-link>
  </div>
</template>

<script>
import Info from './info.vue'
export default {
  name: 'HelloWorld这是新的需要河滨的',
  components:{
    Info
  },
  data () {
    return {
      msg: 'Welcome to Your project',
      name:'xiongben',
      agenum:25,
      mess:'成都，带不走的只有你，和我在成都的街头走一走99999',
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button{
  height:100px;
  width:200px;
  border-radius: 50px;
  background: red;
  color:#fff;
  text-align: center;
  line-height:100px;
}
</style>
