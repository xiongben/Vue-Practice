<template>
    <div class="sbox">
      <h1>this is box 1</h1>
      <p class="text1">{{title}}</p>
    </div>
</template>
<script>
export default {
    name: 'DetailBox1',
    props: {
       detaildata: {},
    },
    data() {
        return {
            title: "box1"
        }
    },
    created() {
        
    },
    mounted() {
       
        
    },
    methods: {
        
    },
}
</script>
<style scoped>
   .sbox {
     width: 3.75rem;
     height: 2.5rem;
     background: palegreen;
     position: absolute;
     left: 0;
     top: 0;
   }
   .text1 {
      font-size: 18px;
   }
</style>