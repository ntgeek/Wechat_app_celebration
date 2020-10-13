
const  Mock =require("mockjs")
const  Random = Mock.Random

const produceNewsData =function () {
   let articles=[]
  for (let i=0; i<100;i++){
   let newArticleObject ={
     title:Random.csentence(5,30), //随机句子//生成随机的图片
     author_name:Random.cname(),//随机生成一个中文句子
     data: Random.date()+" "+Random.time() //Random.data()
   }
   articles.push(newArticleObject)
  }
  return{
    data:articles
  }
}

Mock.mock('/new/index','get',produceNewsData)
