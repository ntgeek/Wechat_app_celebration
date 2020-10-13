<script>
import login from "./components/login"
export default {
  name: 'App',
  components:{
    "v-login":login,
  },
}
</script>
<template>
  <DIV>
  <router-view/>
  </DIV>
</template>

<style>
</style>
