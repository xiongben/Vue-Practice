<template>
<el-container>
  <el-header>聊天室房间</el-header>
  <el-input
  
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
 </el-input>
 <el-input v-model="mess" placeholder="send mess"></el-input>
 <br/>
 <el-button type="success" @click="sendMess">send</el-button>
 <br/>
<el-button type="success" @click="disconnect">disconnect</el-button>
</el-container>
  
</template>

<script>
export default {
  name: 'Wechat',
  data () {
    return {
      textarea:'',
      mess:'',
    }
  },
  sockets: {
    connect: function() {
        console.log("connected,xiongben");
    },
    myResponse(val) {
        console.log(val);
        this.textarea += val.data;
        this.textarea += '\n';
    }
  },
  methods:{
    sendMess: function(val) {
        var params = {
            mess: this.mess,
            room: 1,
        };
        this.$socket.emit('my event', params);
    },
    disconnect: function() {
      console.log("disconnect");
      this.$socket.disconnect();
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
