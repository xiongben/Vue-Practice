<template>
  <div class="hello">
    <h1>个人信息填写界面</h1>
    <div class="box">
      <el-form :model="userform" label-width="80px">
        <el-form-item label="name">
          <el-input v-model="userform.name"></el-input>
        </el-form-item>
        <el-form-item label="age">
          <el-input v-model="userform.age"></el-input>
        </el-form-item>
        <el-form-item label="tel">
          <el-input v-model="userform.tel"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="userform.email"></el-input>
        </el-form-item>
        <el-form-item label="address">
          <el-col :span="10">
            <el-select v-model="userform.address" placeholder="请选择活动区域">
              <el-option label="木叶" value="木叶村"></el-option>
              <el-option label="雾影村" value="雾影村"></el-option>
              <el-option label="沙影村" value="沙影村"></el-option>
              <el-option label="雷影村" value="雷影村"></el-option>
              <el-option label="极致地" value="极致地"></el-option>
            </el-select>
          </el-col>
          
        </el-form-item>
        <!-- <el-form-item label="活动性质">
          <el-checkbox-group v-model="userform.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <el-form-item label="skill">
          <el-input type="textarea" v-model="userform.skill"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submit()">submit</el-button>
        </el-form-item>
      </el-form>
    </div>
    <EditModel :modelshow.sync="showif" ref="model"></EditModel>
  </div>
</template>

<script>
import axios from "axios";
import request from '../../system/api.js'
import EditModel from './model/EditModel.vue';

export default {
  name: 'HelloWorld',
  components:{
     EditModel,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showif : false,
      userform:{                                                                                           
         name:'',
         region:'',
         type:'',
         skill:'',
         tel:'',
         email:'',
         address:'',
         age:'',
      },
      

    }
  },
  methods:{
    tohomepage(){
       this.$router.push({path:'home',query:{id:123}});
    },
    prefun(){
      this.showif = true;
      this.$refs.model.test();
    },
    submit(){
       let params=this.userform;
       request('User',params,'post').then((res)=>{
          console.log(res);
          
        })
    }
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .box{
     width:600px;
     /* border:1px solid blue; */
   }

</style>
