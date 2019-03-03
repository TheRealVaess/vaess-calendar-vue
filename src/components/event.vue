<template>
  <div>
    <div> {{ eventName }} </div>
    <div> {{ eventDesc }} </div>
    <div> {{ eventDate }} </div>
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
    deleteEvent () {
      axios.post('http://localhost:5000/events/delete/' + this.eventId, {}, {withCredential: true})
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
