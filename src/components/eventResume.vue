<template>
  <tr>
    <td> {{ eventName }} </td>
    <td> {{ eventDate }} </td>
    <td> <button @click="$emit('delete-event')">Supprimer</button> </td>
    <td> <button @click="seeMore">Voir plus</button> </td>
  </tr>
</template>

<script>
export default {
  name: 'eventResume',
  props: [
    'eventId',
    'eventName',
    'eventDate'
  ],
  methods: {
    seeMore () {
      console.log(this.eventId)
      this.$router.push({
        name: 'eventDetails',
        params: {
          eventId: this.eventId
        }
      })
    }
  }
}
</script>
