<template>
  <div class="mainhome">
    <div id="mymap">
      <div id="map">
        
        <el-button type="success" @click="tochangsha()">长沙</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
 
    // this.$refs.xbmap.$mapPromise.then((map) => {
    //   map.panTo({lat: 28.21, lng: 113})
    // })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'xiongben',
      agenum:25,
      mess:'成都，带不走的只有你，和我在成都的街头走一走',
      mes:true,
      input:'',
      map:'',
      testArr:[1,2,3],
      markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        },{
          position:{lat:28.21,lng:113}
        },{
          position:{lat:1.2,lng:103.38}
        }],
      
    }
  },
  mounted(){
    if(Array.isArray(this.testArr) && this.testArr.length >2){
        console.log('chunzai')
    }else{
        console.log('buchunzai')
    }
  },
  created() {
    this.testfn();
  },
  methods:{
    getinfo(){
      console.log(this.name);
    },
    changeMess(){
      this.mes=!this.mes;
      this.mess=this.mes?'我要去烂漫的土耳其啊啊啊啊啊啊':'i want to balama';
    },
    tochangsha(){
      this.$refs.xbmap.$mapPromise.then((map) => {
      map.panTo({lat: 28.21, lng: 113})
    })
    },
    testfn() {
      
        
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainhome{
    display: flex;
    justify-content: center;
  }
  #mymap{
    width:1200px;
    height:800px;
    border:1px solid blue;
  }
</style>
