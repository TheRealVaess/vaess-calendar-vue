<template>
  <div>
    <h1>Details event</h1>
    <event :eventId="event.eventId" :eventName="event.eventName" :eventDesc="event.eventDesc" :eventDate="event.eventDate" ></event>
  </div>
</template>

<script>
import axios from 'axios'
import event from '@/components/event'

export default{
  name: 'eventDetails',
  components: {
    event
  },
  data () {
    return {
      event: []
    }
  },
  created () {
    axios.get('http://localhost:5000/events/' + this.$route.params.eventId, {}, {withCredential: true})
      .then((response) => {
        console.log(response.data)
        this.event = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
