<template>
    <div>
      <h1>this is box 3</h1>
      
    </div>
</template>
<script>
export default {
    name: 'DetailBox3',
    props: {
       detaildata: {},
    },
    data() {
        return {
            title: "box3"
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