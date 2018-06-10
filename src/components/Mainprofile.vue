<template>
  <div class="hello">
    <h1>个人信息填写界面</h1>
    <div class="box">
      <el-form :model="userform" label-width="80px">
        <el-form-item label="name">
          <el-input v-model="userform.name"></el-input>
        </el-form-item>
        <el-form-item label="name">
          <el-input v-model="userform.name"></el-input>
        </el-form-item>
        <el-form-item label="name">
          <el-input v-model="userform.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-col :span="10">
            <el-select v-model="userform.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="userform.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="userform.desc"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userform:{
         name:'',
         region:'',
         type:'',
         desc:''
      },
    }
  },
  methods:{
    tohomepage(){
       this.$router.push({path:'home',query:{id:123}});
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .box{
     width:600px;
     border:1px solid blue;
   }

</style>
