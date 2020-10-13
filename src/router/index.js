import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/login"
import content1 from "../components/children/content1";
import content2 from "../components/children/content2";
import content3 from "../components/children/content3";
import content4 from "../components/children/content4";
import tabbar from "../components/tabbar";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component:tabbar,
      children:[
        {
          path:"/content1",
          name:content1,
          component:() =>
          import("../components/children/content1")},
        {
          path:"/content2",
          name:content2,
          component:() =>
          import("../components/children/content2")},
          {
          path:"/content3",
          name:content3,
          component:() =>
          import("../components/children/content3")},
         {
          path:"/content4",
          name:content4,
          component:() =>
          import("../components/children/content4")},
      ]
    },

  ]
})
