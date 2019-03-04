<template>
<div>
  <h1>Modifier l'évèvement</h1>

  <div v-if="message === 'Pas d\'évènement disponible'">
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <p>{{ message }}</p>

    <label for="nameEvent">Nom de l'évèvement</label>
    <input type="text" id="nameEvent" v-model="nameEvent"/>
    <label for="descEvent">Description de l'évèvement</label>
    <input type="text" id="descEvent" v-model="descEvent"/>
    <label for="dateEvent">Date de l'évèvement</label>
    <input type="date" id="dateEvent" v-model="dateEvent"/>

    <button type="button" @click="submitModifyEvent">Ajouter</button>
  </div>
</div>

</template>

<script>
import axios from 'axios'

export default{
  name: 'eventModify',
  data () {
    return {
      message: '',
      nameEvent: '',
      descEvent: '',
      dateEvent: ''
    }
  },
  methods: {
    submitModifyEvent () {
      const param = new URLSearchParams()
      param.set('newName', this.nameEvent)
      param.set('newDesc', this.descEvent)
      param.set('newDate', this.dateEvent)
      axios.post('http://localhost:5000/events/modify/' + this.$route.params.eventId, param, {withCredential: true})
        .then((response) => {
          this.message = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  beforeMount () {
    const param = new URLSearchParams()
    axios.get('http://localhost:5000/events/' + this.$route.params.eventId, param, {withCredentials: true})
      .then((response) => {
        if (response.data) {
          this.nameEvent = response.data.eventName
          this.descEvent = response.data.eventDesc
          this.dateEvent = response.data.eventDate
        } else {
          this.message = "Pas d'évènement disponible"
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
