<template>
<div>
  <h1>Modifer votre mot de passe</h1>
  <div>{{ message }}</div>
  <label for="oldPassword">Ancien mot de passe</label>
  <input type="password" id="oldPassword" v-model="oldPassword"/>
  <label for="newPassword">Nouveau mot de passe</label>
  <input type="password" id="newPassword" v-model="newPassword"/>

  <button type="button" @click="submitModifyPassWord">Modifier</button>
</div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'modifyPassWord',
  data () {
    return {
      message: '',
      newPassword: '',
      oldPassword: ''
    }
  },
  methods: {
    submitModifyPassWord () {
      const params = new URLSearchParams()
      params.set('newPassword', this.newPassword)
      params.set('oldPassword', this.oldPassword)
      axios.post('http://localhost:5000/modifyPassWord', params, {withCredential: true})
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
