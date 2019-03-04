<template>
<header>
  <h1>Vaess and Mornyan event lister</h1>
  {{ tokenExists }}
  <router-link v-if="this.tokenExists" to="/">
    <span @click="disconnect()">
      Déconnexion
    </span>
  </router-link>
</header>
</template>

<script>
import { EventBus } from './event-bus'

export default {
  name: 'Header',
  data () {
    return {
      tokenExists: true
    }
  },
  methods: {
    disconnect () {
      localStorage.removeItem('token')
      this.tokenExists = false
    }
  },
  beforeMount () {
    if (localStorage.getItem('token')) {
      this.tokenExists = true
    } else {
      this.tokenExists = false
    }
  },
  mounted () {
    EventBus.$on('token-change', () => {
      this.tokenExists = true
    })
  }
}
</script>

<style scoped>

</style>
