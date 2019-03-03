<template>
<div>
  <h1>Ajouter un évèvement</h1>

    <div>{{ message }}</div>

    <label for="nameEvent">Nom de l'évèvement</label>
    <input type="text" id="nameEvent" v-model="nameEvent"/>
    <label for="descEvent">Description de l'évèvement</label>
    <input type="text" id="descEvent" v-model="descEvent"/>
    <label for="dateEvent">Date de l'évèvement</label>
    <input type="date" id="dateEvent" v-model="dateEvent"/>

    <button type="button" @click="submitNewEvent">Ajouter</button>
</div>

</template>

<script>
import axios from 'axios'

export default{
  name: 'eventAdd',
  data () {
    return {
      message: '',
      nameEvent: '',
      descEvent: '',
      dateEvent: ''
    }
  },
  methods: {
    submitNewEvent () {
      const params = new URLSearchParams()
      params.set('newName', this.nameEvent)
      params.set('newDesc', this.descEvent)
      params.set('newDate', this.dateEvent)
      axios.post('http://localhost:5000/events/add', params, {withCredential: true})
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
