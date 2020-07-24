<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>master</h3>
    <p>下一站遇到你</p>
    <h2>test</h2>
    <!-- <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in">apple login</div> -->
    <button @click="apple">apple</button>
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
    document.addEventListener('AppleIDSignInOnSuccess', (data) => {
              //handle successful response
              console.log(data)
          });
          //Listen for authorization failures
          document.addEventListener('AppleIDSignInOnFailure', (error) => {
              //handle error.
              console.log(error)
          });
  },
  methods:{
    getinfo(){
      console.log(this.name);
      console.log("测试过程中");
    },
    changeMess(){
      this.mes=!this.mes;
      this.mess=this.mes?'我要去烂漫的土耳其啊啊啊啊啊啊':'i want to balama';
    },
    apple() {
       AppleID.auth.init({
        clientId : "com.login.loops",
        response_type: "code",
        response_mode: "query",
        // scope : '',
        redirectURI : 'https://www-test.loopslive.com/web-loops/pay-return/apple.html',
        // state : '',
        // nonce : '',
        usePopup : false //or false defaults to false
      });
      try {
          const data =  AppleID.auth.signIn()
          console.log(data)
          //Listen for authorization success
          
      } catch ( error ) {
        console.log(error)
          //handle error.
      }
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
