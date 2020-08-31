<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">email</label>
        <input type="text" id="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="text" id="password" v-model="form.password" />
      </div>
      <button
        id="login"
        :class="{disable: msgs.length > 0 || okMsgs.length > 0 }"
        :disabled="msgs.length > 0 || okMsgs.length > 0 "
      >login</button>
    </form>
    <!-- <div v-if="errorMsgs">
      <ErrorMsgs class="errorMsgs" :msg="msg" v-for="msg in errorMsgs" :key="msg.id" @close="closeMsgs" />
    </div>
    <div v-if="okMsgs">
      <OkMsgs class="okMsgs" :msg="msg" v-for="msg in okMsgs" :key="msg.id" @close="closeMsgs" />
    </div>-->
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
import axios from 'axios';
import AuthService from '../services/auth-service';

export default {
  name: 'FormComp',
  data() {
    return {
      msgs: [],
      okMsgs: [],
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      AuthService.login(this.form)
        .then(result => {
          this.okMsgs.push('User successfullly logged in');
          const token = result.data.access_tkn;
          const user = result.data.email;

          this.$store
            .dispatch('login', { token, user })
            .then(() => {
              this.$swal({
                text:'You have succesfully logged in Your ass!',
                icon: "success"});
              this.$router.push('/');
            })
            .catch(err => {
              console.log(err)
              this.msgs = err.response.data.message;
            });
        })
        .catch(err => {
          if (err.response.data.message.length > 5) {
            this.msgs.push(err.response.data.message);
            return;
          }
          this.msgs = err.response.data.message;
        });
    },

    closeErr() {
      this.msg = '';
      this.msgs = [];
      this.okMsgs = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
</style>
