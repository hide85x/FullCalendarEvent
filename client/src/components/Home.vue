<template>
  <div>
    <h1>Welcome Home {{email}}</h1>
    <button class="button" type="button" @click="getThemAll">GetThemAll</button>
    <button class="button" @click="logout">LogOut</button>
    <div>
      <h2 v-for="user in users" :key="user.id">{{user}}</h2>
    </div>
  </div>
</template>

<script>
import AuthService from '../services/auth-service';

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      users: [],
    };
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login');
    }
    this.email = this.$store.getters.getUser;
  },
  methods: {
    async getThemAll() {
      this.users = [];
      AuthService.getAllUsers()
      .then(results => {
        this.users.push(...results.data);
        console.log(this.users);
      })
      .catch(err => {
        this.$swal({
          text: "your token expired, login once again", 
          icon: "error",
          dangerMode: true})
        err
      })
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss">
@import './forms.scss';
.button {
  margin: auto 5px;
}
h2 {
  text-decoration: underline;
  color: dodgerblue;
}
</style>