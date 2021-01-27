<template>
    <div>
      <h1>this is son component</h1>
      <p>name:{{detaildata.name}}</p>
      <p>num:{{resdata.num}}</p>
    </div>
</template>
<script>
export default {
    name: 'SonComponent',
    props: {
       detaildata: {},
    },
    data() {
        return {
            resdata: this.detaildata
        }
    },
    created() {
        
    },
    mounted() {
        console.log(this.detaildata);
        
    },
    methods: {
        
    },
}
</script>
<style scoped>

</style>