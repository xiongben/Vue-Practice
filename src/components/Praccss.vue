<template>
  <div class="main">
    <!-- <div class="project">
       <div class="pro1">多重边框</div>
    </div>
    <div class="project">
      <h2>outline方案</h2>
      <div class="pro2"></div>
    </div>
    <div class="project">
      <div class="pro3"></div>
    </div>
    <div class="project">
       <div class="pro4">i am a happy element</div>
    </div> -->
    <div class="project">
       <div class="pro5"></div>
    </div>
    <div class="project">
       <div class="pro6">
         <div></div>
       </div>
    </div>      
  </div>
</template>

<script>
export default {
  name: 'Praccss',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created() {
    this.testfn();
  },
  methods:{
    testfn() {
      console.log("css");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
      width: 1200px;
      margin: 0 auto;
  }
  .project {
      width: 400px;
      height: 400px;
      float: left;
      padding: 50px;
      border: 1px solid red;
  }
  .pro1 {
      width: 100px;
      height: 100px;
      background: red;
      box-shadow: 0 0 0 10px blue,
                  0 0 0 20px pink,
                  15px 15px 15px 15px red
  }
  .pro2 {
    width: 50px;
    height: 50px;
    background: #FFF;
    border: 10px solid blue;
    border-radius: 10px;
    outline: 5px solid #000;
    margin-left: calc(50% - 25px);
    
  }
  .pro3 {
    width: 100%;
    height: 100%;
    padding: 10px;
    background: url('./../assets/bq4.png') no-repeat bottom right red;
    /* background-position: right 10px bottom 10px; */
    background-origin: content-box;
  }
  .pro4 {
    width: 200px;
    height: 200px;
    background: tan;
    border-radius: 10px;
    outline: 5px solid #655;
    box-shadow: 0 0 0 5px #655;
  }
  .pro5 {
    width: 200px;
    height: 200px;
    background: linear-gradient(#fb3,#58a);
  }
  .pro6 {
    width: 100%;
    height: 100%;
    background: blueviolet;
    position: relative;
  }
  .pro6 div {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>