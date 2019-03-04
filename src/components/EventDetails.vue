<template>
  <div>
    <h1>Details event</h1>
    <div v-if="message === 'Pas d\'évènement disponible'">
      <p>{{ message }}</p>
    </div>
    <event v-else :eventId="event.eventId" :eventName="event.eventName" :eventDesc="event.eventDesc" :eventDate="event.eventDate" ></event>
  </div>
</template>

<script>
import axios from 'axios'
import event from './event'

export default{
  name: 'eventDetails',
  components: {
    event
  },
  data () {
    return {
      message: '',
      event: []
    }
  },
  created () {
    axios.get('https://vaess-calendar-node.herokuapp.com/events/' + this.$route.params.eventId, {}, {withCredential: true})
      .then((response) => {
        if (response.data) {
          this.event = response.data
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
