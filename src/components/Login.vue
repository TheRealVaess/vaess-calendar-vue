<template>
  <div>
    <h1>Se connecter</h1>

    <div>{{ message }}</div>

    <label for="username">Pseudo</label>
    <input type="text" id="username" v-model="username"/>
    <label for="password">Mot de passe</label>
    <input type="password" id="password" v-model="password"/>

    <button type="button" @click="submitLogin">Se connecter</button>
  </div>
</template>

<script>
import axios from 'axios'
import { EventBus } from './event-bus'

export default{
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    submitLogin () {
      const params = new URLSearchParams()
      params.set('name', this.username)
      params.set('password', this.password)
      axios.post('http://localhost:5000/login', params, {withCredentials: true})
        .then((response) => {
          var responseData = response.data
          if (responseData !== 'Erreur : Nom ou mdp incorrect.' && responseData !== 'Erreur : Informations manquantes !') {
            this.message = 'Connexion établie'
            localStorage.setItem('token', response.data)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data
            EventBus.$emit('token-change', true)
          } else {
            this.message = responseData
            console.log(response.data)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
