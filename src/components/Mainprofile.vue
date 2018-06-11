<template>
  <div class="hello">
    <h1>个人信息填写界面</h1>
    <div class="box">
      <el-form :model="userform" label-width="80px">
        <el-form-item label="name">
          <el-input v-model="userform.name"></el-input>
        </el-form-item>
        <el-form-item label="tel">
          <el-input v-model="userform.tel"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="userform.email"></el-input>
        </el-form-item>
        <el-form-item label="address">
          <el-col :span="10">
            <el-select v-model="userform.region" placeholder="请选择活动区域">
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="北京" value="beijing"></el-option>
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
        <el-form-item label="mess">
          <el-input type="textarea" v-model="userform.mess"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="prefun()">submit</el-button>
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
         mess:'',
         tel:'',
         email:'',
      },
      openOcCommand:{
        excute:function(){
          console.log("打开空调");
        }
      },
      openTvCommand:{
        excute:function(){
          console.log("打开电视");
        }
      },
      openSoundCommand:{
        excute:function(){
          console.log("打开音响");
        }
      },

    }
  },
  methods:{
    tohomepage(){
       this.$router.push({path:'home',query:{id:123}});
    },
    MacroCommand(){
      return {
         commandsList:[],
         add:function(command){
           this.commandsList.push(command);
         },
         excute:function(){
           for(var i=0,command;command=this.commandsList[i++];){
              command.excute();
           }
         }
      }
    },
    prefun(){
      var macro1=this.MacroCommand();
      macro1.add(this.openOcCommand);
      macro1.add(this.openTvCommand);
      macro1.add(this.openSoundCommand);
      macro1.excute();
    },
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
