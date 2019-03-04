<template>
<div>
  <h1>Supprimer votre compte</h1>
  <div>{{ message }}</div>
  <button type="button" @click="submitDeleteAccount">Supprimer </button>
</div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'login',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    submitDeleteAccount () {
      axios({
        method: 'get',
        url: 'https://vaess-calendar-node.herokuapp.com/deleteAccount'
      })
        .then((response) => {
          this.message = response.data
          localStorage.removeItem('token')
          this.tokenExists = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
