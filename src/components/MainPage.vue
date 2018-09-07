<template>
  <el-container>
    <el-header>main</el-header>
    <el-row class="tac">
  <el-col :span="4">
    <h5>welcome to here!</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="tomodel">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="12">
    <h5>Detail</h5>
    <Info @changetest="changeTitle" ref="info" :title="sonTitle"></Info>
  </el-col>
</el-row>
      
      <!-- <router-link to="/main/home">mainhome</router-link>
      <router-link to="/main/profile">mainprofile</router-link>
      <router-link to="/main/wechat">聊天室</router-link>
      <router-view></router-view> -->
      
  </el-container>
</template>

<script>
import Info from "./info.vue";


export default {
  name: "HelloWorld",
  components: {
    Info
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: "xiongben",
      agenum: 25,
      mess: "成都，带不走的只有你，和我在成都的街头走一走",
      mes: true,
      input: "",
      sonTitle:"父组件给子组件的标题，拿好了",
      testobj: {
        obj1: {
          obj1_1:{
            obj1_1_1: {
              name: "obj1-1-1"
            },
            obj1_1_2: {
              name: "obj1_1_2"
            }
          },
          obj1_2: {
            obj1_2_1: {
              name: "obj1_2_1"
            }
          },
          obj1_3: {
            name: "obj1_3"
          }
        },
        obj2: {
          obj2_1:{
            obj2_1_1: {
              name: "obj2-1-1"
            },
            obj2_1_2: {
              name: "obj2_1_2"
            }
          },
          obj2_2: {
            obj2_2_1: {
              name: "obj2_2_1"
            }
          },
          obj2_3: {
            name: "obj2_3"
          }
        }
      },
    };
  },
  created() {
    console.log(process.env);
    this.callbackfn();
  },
  methods: {
    getinfo() {
      console.log(this.name);
    },
    changeTitle() {
      console.log("子组件调用父组件方法中");
    },
    changeMess() {
      this.mes = !this.mes;
      this.mess = this.mes
        ? "我要去烂漫的土耳其啊啊啊啊啊啊"
        : "i want to balama";
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    tomodel(){
      this.$refs.info.changeMess();
    },
    callbackfn() {
       var data = this.testobj;
       this.testfn(data);
    },
    testfn(data) {
      if(data instanceof Object){
        for(var key in data) {
          this.testfn(data[key]);
        }
      }else{
        console.log("this is " + data);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
