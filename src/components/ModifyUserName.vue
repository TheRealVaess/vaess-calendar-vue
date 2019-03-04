<template>
<div>
  <h1>Modifer votre pseudo</h1>
  <div>{{ message }}</div>
  <label for="username">Nouveau pseudo</label>
  <input type="text" id="username" v-model="username"/>

  <button type="button" @click="submitModifyUserName">Modifier</button>
</div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'modifyUserName',
  data () {
    return {
      message: '',
      username: ''
    }
  },
  methods: {
    submitModifyUserName () {
      const param = new URLSearchParams()
      param.set('newUserName', this.username)
      axios.post('https://vaess-calendar-node.herokuapp.com/modifyUserName', param, {withCredential: true})
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
