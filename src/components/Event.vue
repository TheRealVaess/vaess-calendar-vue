<template>
  <div>
    <div> {{ eventName }} </div>
    <div> {{ eventDesc }} </div>
    <div> {{ eventDate }} </div>
    <div> <button @click="modifyEvent">Modifier</button> </div>
    <div> <button @click="deleteEvent">Supprimer</button> </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'event',
  props: [
    'eventId',
    'eventName',
    'eventDesc',
    'eventDate'
  ],
  methods: {
    modifyEvent () {
      this.$router.push({
        name: 'eventModify',
        params: {
          eventId: this.eventId
        }
      })
    },
    deleteEvent () {
      axios.post('https://vaess-calendar-node.herokuapp.com/events/delete/' + this.eventId, {}, {withCredential: true})
        .then((response) => {
          this.message = response.data
          alert('Evènement bien supprimé')
          this.$router.push({
            name: 'events',
            params: {
              eventId: this.eventId
            }
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
