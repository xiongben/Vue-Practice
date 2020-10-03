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
    <son-component :detaildata="sonInfo"></son-component>
  </div>
</template>

<script>
import Info from './info.vue'
import Xb from './model/Xb.vue'
import SonComponent from './model/SonComponent.vue'
var jwt = require('jsonwebtoken');
export default {
  name: 'hello',
  components:{
    Info,
    Xb,
    SonComponent
  },
  data () {
    return {
      msg: 'Welcome to Your project',
      name:'xiongben',
      agenum:25,
      mess:'成都，带不走的只有你，和我在成都的街头走一走99999',
      mes:true,
      input:'',
      sonInfo:{
       
      }
    }
  },
  mounted(){
    //  var aa = this.getRandom(10)
    //  console.log(aa)
  },
  created(){
     this.testfn();
     setTimeout(()=>{
        this.sonInfo = {
          name: "xiaoming",
          num: 50
        }
     },3000)
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
      // var str = "asdfff ffff xiongben hfhfhf xiongben  tom jack"
      // var str2 = str.replace(/xiongben/ig, "=")
      // console.log(str2)
      // var emailStr = "xiongbenwww@gmail.com"
      // var emailStr2 = "xiongben中国www@gmail.com"
      // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      // var reg2 = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
      // console.log(reg.test(emailStr))
      // console.log(reg2.test(emailStr2))

      var str3 = "?id=12&age=23&name=xiongben"
      var reg3 = /(\w+)=(\w+)/ig
      var paramsItem = "name"
      var reg4 = new RegExp("(^|&)" + paramsItem + "=([^&]*)(&|$)","i")                                                        
      var params = {}
      str3.replace(reg3, function(a,b,c){
        console.log(a,b,c)
        params[b] = c
      })
      console.log(params)

      var r = str3.match(reg4)
      console.log(r[2])

      // var reg5 = /(^|s)aa([A-Za-z]*)$/g
      // var reg55 = new RegExp("(^|s)aa([A-Za-z]*)$","ig")
      // var str5 = "saattaass"
      // var res5 = str5.match(reg55)
      // console.log(res5)

      // var reg6 = /aaa9?/g
      // var str6 = "a aab aaabbb "
      // var res6 = str6.match(reg6)
      // console.log(res6)

      //过滤html标签
      // var str7 = "<p>this is a html dom<span>red</span></p><div>666</div>"
      // var regx7 = /\<[^<>]*\>/g
      // var res7 = str7.match(regx7)
      // res7 = str7.replace(regx7,"")
      // console.log(res7)

      // //16进制颜色正则
      // var regx8 = /^\#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
      // var str8 = "#fff"
      // var res8 = str8.match(regx8)
      // console.log(res8)
      // console.log(regx8.test(str8))

      //url正则
      // var regx9 = /^((https?|ftp|file)\:\/\/)?([\da-z\.\-]+)\.([a-z\.]{2,6})([\/\w\.\-]*)*\/?$/                                                                    
      // var str9 = "https://www.baidu.com/page/one"
      // var res9 = str9.match(regx9)
      // console.log(res9)
      
      //千位分割
      // var regx10 = /\d{1,3}(?=(\d{3})+$)/g
      // var str10 = "123"
      // var res10 = str10.match(regx10)
      // res10 = str10.replace(regx10,"$&,")
      // console.log(res10)
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
