<template>
  <div class="hello">
    <el-container>
      <el-header>
        <p class="title">welcome to here!</p>
      </el-header>
      <el-main>
        <el-input v-model="username" placeholder="用户名" class="inputForm"></el-input>
        <!-- <el-input v-model="tel" placeholder="手机号" class="inputForm"></el-input> -->
        <el-input v-model="pass" placeholder="密码" class="inputForm"></el-input>
        <!-- <el-input v-model="age" placeholder="年龄" class="inputForm"></el-input> -->
        <el-button type="danger" class="inputForm" @click="submit()">登录</el-button>
        <el-button type="danger" class="inputForm" @click="createUser()">注册</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Info from './info.vue'
import axios from "axios";
import request from '../../system/api.js'
export default {
  name: 'HelloWorld',
  components:{
    Info
  },
  data () {
    return {
      username:'',
      tel:'',
      pass:'',
      age:''
    }
  },
  methods:{
      submit(){
        let params={
          username:this.username,
          password:this.pass,
        }
        request('/login/userlogin',params,'post').then((res)=>{
          console.log(res);
          let resCode=res.status;
          if(resCode === 0){
            this.$router.push({name:'MainPage',params:{userid:111}})
          }else{
            this.$message({
              message: res.data,
              type: 'warning'
            });
          }
        })
        
      },
      createUser(){
        let params={
          username:this.username,
          password:this.pass,
        };
        request('/login/adduser',params,'post').then((res)=>{
          let rescode=res.status;
          if(rescode === 0){
             this.$message({
              message: res.data,
              type: 'success'
            });
          }else{
            this.$message({
              message: res.data,
              type: 'warning'
            });
          }
        })
        
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    font-size:20px;
    color:blue;
  }
  .inputForm{
    width:400px;
    margin:20px 0;
    display: block;
  }
  .hell{
    width:734px;
    height:1000px;
    background: red;

  }
</style>
