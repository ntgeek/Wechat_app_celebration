<template>
<div class="form-wrapper" id="body">
  <p>校庆活动管理平台</p>
  <div class="input-wrapper">
    <div class="border-wrapper">
      <input type="text" name="username" class="border-item" placeholder="username" id="username">
    </div>
    <div class="border-wrapper">
      <input type="password" name="password" class="border-item" placeholder="password" id="password">
    </div>
  </div>
  <div class="action">
    <div class="btn" @click="summit">login</div>
  </div>
</div>
</template>
<style scoped>
  p{position: absolute;top: 30%;color: rgb(115,107,182);font-size: 1.5vw;left: 44%;}


#body {
  width: auto;
  height: 44vw;
  font-family: "agency fb";
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(41,45,62);
}

.form-wrapper {
  width: 300px;
  background-color: rgb(41, 45, 62);
  color: #fff;
  border-radius: 2px;
  padding: 50px;
}

.form-wrapper .header {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  line-height: 100px;
}

.form-wrapper .input-wrapper input {
  background-color: rgb(41, 45, 62);
  border: 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #fff;
  outline: none;
}

.form-wrapper .input-wrapper input::placeholder {
  font-family: "agency fb";
  text-transform: uppercase;
  color: rgb(41, 45, 62);
}

.form-wrapper .input-wrapper .border-wrapper {
  background-image: linear-gradient(to right, #e8198b, #0eb4dd);
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper .input-wrapper .border-wrapper .border-item {
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 30px;
}

  input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-text-fill-color: #ededed !important;
    -webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
    background-color:transparent;
    background-image: none;
    transition: background-color 50000s ease-in-out 0s;
  }
  input {
    background-color:transparent;
  }

.form-wrapper .action {
  display: flex;
  justify-content: center;
}

.form-wrapper .action .btn {
  width: 8%;
  text-transform: uppercase;
  border: 2px solid #0e92b3;
  text-align: center;
  line-height: 50px;
  border-radius: 30px;
  cursor: pointer;
}

.form-wrapper .action .btn:hover {
  background-color: #0e92b3;
}

.form-wrapper .icon-wrapper {
  text-align: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  border-top: 1px dashed rgb(146, 146, 146);
  padding: 20px;
}

.form-wrapper .icon-wrapper i {
  font-size: 20px;
  color: rgb(187, 187, 187);
  cursor: pointer;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 20px;
}
.btn{
  position: absolute;
  top: 74%;
  left: 46%;
}
</style>

<script>
  export default {
    data() {
      return {};
    },

    methods: {
    summit() {
    var name="guest"
    var password="892104576"
    var us=document.getElementById("username")
    var ps=document.getElementById("password")
    if (name==us) and (password==ps)
    {
      alert("登录成功");
      this.$router.push("tabbar");
    }
  }}};
</script>
