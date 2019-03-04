<template>
  <div>
    <h1>S'inscrire</h1>

    <div v-if="message">
      <p>
        {{ message }}
      </p>
    </div>

    <label for="username">Pseudo</label>
    <input type="text" id="username" v-model="username"/>
    <label for="password">Mot de passe</label>
    <input type="password" id="password" v-model="password"/>

    <button type="button" @click="submitInscription">Se connecter</button>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'signup',
  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    submitInscription () {
      console.log(this.username, this.password)
      const params = new URLSearchParams()
      params.set('name', this.username)
      params.set('password', this.password)
      axios.post('http://localhost:5000/sign-in', params, {withCredentials: true})
        .then((response) => {
          this.message = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
