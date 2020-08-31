import Vue from 'vue'
import Vuex from 'vuex'
import VueSwal from 'vue-swal'

import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex, VueSwal);

const getDefaultState = () => {
    return {
        token: '',
        user: {}
    };
};

export default new Vuex.Store({
    state: getDefaultState(),
    getters: {
        isLoggedIn: state=> {
            return state.token
        },
        getUser: state => {
            return state.user
        }
    },
    mutations: {
        SET_TKN: (state, token) =>{
            state.token = token
        },
        SET_USER: (state, user)=> {
            state.user= user
        },
        RESET: (state) => {
            Object.assign(state, getDefaultState()) // nadpisujemy obiekt state pustym state i pusty userem
        }
    },
    // actions return promise
    actions: {
        login: ({commit, dispatch}, {token, user})=> {
            commit('SET_TKN', token)
            commit('SET_USER', user)

            //set authHeader
            Axios.defaults.headers.common['Authorization']= `Bearer ${token}`
        },
        logout: ({commit})=> {
            commit("RESET", '')
        }
    },
    modules: {
        
    }
})
