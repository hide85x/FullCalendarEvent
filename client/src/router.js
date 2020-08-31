import  Router  from 'vue-router';
import Vue from 'vue'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'


Vue.use(Router);
export default new Router({
    mode:"history",
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            name: "home",
            component: Home
        },
        {
            path:"/login",
            name:"login",
            component: Login
        },
        {
            path:"/signUp",
            name:"signUp",
            component: SignUp
        }
    ]
})