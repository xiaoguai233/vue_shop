<template>
 <div>
     主页页面
     <el-button type="info" @click="logout">退出</el-button>
 </div>
</template>

<script>
 export default {
  name: 'home',
  data () {
   return {

   }
  },
  methods: {
    logout(){
        //清除token
        window.sessionStorage.clear()
        //跳转到login页面
        this.$router.push("/login")
    }
  },
  components: {

  }
 }
</script>

<style scoped>

 
</style>
