<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>test</h2>
   
    <router-link to="/login">login</router-link>
    <router-link to="/main">mainpage</router-link>
    <router-link to="/praccss">css</router-link>
    <router-link to="/badge">badge</router-link>
    <div class="slot">
       <Xb>
          <h2>this is parent dom title</h2>
          <div class="slot1" slot="slot1">
            <h3>this is slot 1</h3>
          </div>
          <div class="slot1" slot="slot2">
            <h3>this is slot 2</h3>
          </div>
          <div class="slot1" slot="slot3">
            <h3>this is slot 3</h3>
          </div>
       </Xb>
    </div>
  </div>
</template>

<script>
import Info from './info.vue'
import Xb from './model/Xb.vue'
var jwt = require('jsonwebtoken');
export default {
  name: 'hello',
  components:{
    Info,
    Xb
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
  mounted(){
    //  var aa = this.getRandom(10)
    //  console.log(aa)
  },
  methods:{
    getinfo(){
      console.log(this.name);
      console.log("测试过程中");
    },
    getRandom(num){
    var random = Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1));
    return random
    },
    changeMess(){
      this.mes=!this.mes;
      this.mess=this.mes?'我要去烂漫的土耳其啊啊啊啊啊啊':'i want to balama';
    },
    testfn(){
       console.log("add for test 3");
    },
    
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
.slot{
  width: 300px;
  height: 300px;
  background: yellow;
}
.slot1{
  background: blue;
}
</style>
