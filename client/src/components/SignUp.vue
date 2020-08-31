<template>
  <div class="container">
    <h1>SignUp</h1>
    <form @submit.prevent="signUp">
      <div class="form-group">
        <label for="email">email</label>
        <input type="text" id="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="text" id="password" v-model="form.password" />
      </div>
      <button id="create" :class="{disable: msgs.length > 0 || okMsgs.length > 0 }" :disabled="msgs.length > 0 || okMsgs.length > 0 ">create</button>
    </form>
    <transition name="fade">
      <div v-if="msgs.length" class="msgs">
        <div v-for="error in msgs" :key="error">
          <p>{{error}}</p>
        </div>

        <button class="close" @click="closeErr">X</button>
      </div>
      <div v-if="okMsgs.length" class="Okmsg">
        <div v-for="msg in okMsgs" :key="msg">
          <p>{{msg}}</p>
        </div>
        <button class="close" @click="closeErr">X</button>
      </div>
    </transition>
  </div>
</template>

<script>
import AuthService from '../services/auth-service';

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      msgs: [],
      okMsgs: [],
    };
  },
  methods: {
    async signUp() {
      AuthService.signup(this.form)
        .then(result => {
          this.okMsgs.push("user created!");
          console.log(this.okMsgs)
          // this.$router.push('/')
        })
        .catch(err => {
          if (err.response.data.message.length > 5) {
            this.msgs.push(err.response.data.message);
            return;
          } else {
            console.log(err.response.data.message);
            this.msgs = err.response.data.message;
            return;
          }
        });
        return
    },
    closeErr() {
      this.msg = '';
      this.msgs = [];
      this.okMsgs = [];
    },
  },
};
</script>

<style lang="scss" >
@import './forms.scss';
</style>