<template>
    <div class="content1" onload="abc()">
      <button @click="created" class="change">更新数据</button>
      <div id="usertot" class="information">
        <span>用户总量</span>
        <span>{{articles[1].author_name}}</span>
      </div>
      <div id="userclick" class="information">
        <span>总点亮数</span><br>
        <span>{{articles[3].author_name}}</span>
      </div>
      <div  class="scol" style="overflow-y:scroll;height: 30vw;overflow-x:auto;">
        <p></p>
        <table border="1" class="table" >
          <tr><th>省份</th><th>点亮星星数</th><th>排行榜</th></tr>
          <tbody>
          <tr v-for="(item,index) in articles" :key="index">
            <td v-for="(val,index) in item" :key="index">{{val}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div  class="scol1" style="overflow-y:scroll;height: 30vw;overflow-x:auto;">
        <table  border="1" class="table">
          <tr>
            <td>姓名</td>
            <td>留言内容</td>
            <td>回复数</td>
            <td>日期</td>
          </tr>
          <tbody> <tr v-for="(item,index) in articles" :key="index">
            <td v-for="(val,index) in item" :key="index">{{val}}</td>
          </tr></tbody>
        </table>
      </div>
    </div>
</template>
<style scoped>
  .content1{
    width: 40vw;
    position: relative;
    left:33%;
  }

  aside ul li {
    list-style-type: none;
    text-align: center;
  }

  aside ul li a {
    width: 100%;
    height: 100%;
    text-decoration-line: none;
    display: block;
  }

  aside ul li a:hover {
    background: #d4d4d4;
  }
  .information{
    width: 10vw;
    height: 4.5vw;
    font-size: 1.5vw;
    border: 3px solid #d4d4d4;
    text-align: center;
    border-radius: 50%;
  }
  .information:hover{
    background-color: darkgray;cursor: pointer;
  }
  section {
    width: 100%;
    height: 100%;
    background: #d4d4d4;
    height: 1000px;
  }

  section h1 {
    text-align: center;
    border-bottom: 1px solid #fff;
  }
  #usertot{
    position: absolute;
    top: 3vw;
    right: -105%;
  }
  #userclick {
    position: absolute;
    top: 3vw;
    left: 30%;
  }
  .change{cursor: pointer;
    width: 15vw;position: absolute;left: 42vw;width: 7vw;font-size: 1.5vw;top: 7vw;
    width: 200px;
    padding:8px;
    background-color: #428bca;
    border-color: #357ebd;
    color: #fff;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px; /* future proofing */
    -khtml-border-radius: 10px; /* for old Konqueror browsers */
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-weight: 900;
    font-size:125%  }
  .scol1{width: 32vw;margin: 0;border-collapse: collapse;position: absolute;left: 130%;top: 13vw;height: 100px;overflow: scroll}
  table{width: 30vw}
  .scol{width: 32vw;margin: 0;border-collapse: collapse;position: absolute;left: 30%;top: 13vw;height: 100px;overflow: scroll}
  tr:nth-child(even){background-color: white;}
  td{text-align: center;}
  td:hover{background-color: darkgray;}
  span{font-family: STSong;position: relative;top: 0.23vw;color:darkgray;}
</style>
<script>

  export default {
    name: "content2",
    data(){
      return{
        articles:[]
      }
    },
    methods:{
      created() {
        this.$http.get('/new/index')
        .then(e =>{
          let data=e.data
          if (data.data && Array.isArray(data.data)){
            this.articles=data.data
          }
          console.log(this.articles)
        })
        .catch(err => {console.log(err)})
      }
    },
    watch:{
      "AAA":{
        immediate:true,
        deep:true,
        handler:function () {
          this.$http.get('/new/index')
            .then(e =>{
              let data=e.data
              if (data.data && Array.isArray(data.data)){
                this.articles=data.data
              }
              console.log(this.articles)
            })
            .catch(err => {console.log(err)})
        }
      }
    }
  }
</script>
