<template>
    <div>
        <h1>Tous vos évènements dans une seule page</h1>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <event v-for="(event, key) in events" :eventId="event.eventId" :eventName="event.eventName" :eventDate="event.eventDate" :key="key" v-on:delete-event="deleteEvent(key, event.eventId)"></event>
          </tbody>
        </table>

    </div>
</template>

<script>
import event from './eventResume'
import axios from 'axios'

export default{
  name: 'events',
  components: {
    event
  },
  data () {
    return {
      events: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: 'https://vaess-calendar-node.herokuapp.com/events'
    })
      .then((response) => {
        this.events = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    deleteEvent (idTab, idEvent) {
      this.events.splice(idTab, 1)
      axios.post('https://vaess-calendar-node.herokuapp.com/events/delete/' + idEvent, {}, {withCredential: true})
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
