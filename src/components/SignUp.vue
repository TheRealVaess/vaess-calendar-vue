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

    <button type="button" @click="submitInscription">S'inscrire</button>
    <button @click="$emit('close')">Fermer</button>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'signUp',
  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    submitInscription () {
      const params = new URLSearchParams()
      params.set('name', this.username)
      params.set('password', this.password)
      axios.post('https://vaess-calendar-node.herokuapp.com/sign-in', params, {withCredentials: true})
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
