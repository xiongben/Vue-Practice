<template>
  <div class="model" v-show="modelshow">
    <button @click="hide()">close</button>
  </div>
</template>

<script>

export default {
  name: 'EditModel',
  props:['modelshow'],
  data () {
    return {
      

    }
  },
  methods:{
    hide(){
      this.$emit('update:modelshow',false)
      console.log(this.modelshow)
    },
    test(){
       console.log("test888888");
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .model{
     width:600px;
     height:600px;
     border:1px solid red;
     /* border:1px solid blue; */
   }

</style>