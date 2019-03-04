<template>
<div>
  <h1>Bienvenue</h1>
  <div v-if="!token">
    <button @click="showConnexion = true">Se connecter</button>
    <button @click="showSignUp = true">S'inscrire</button>
    <login class="modal" v-if="showConnexion" @close="showConnexion = false"></login>
    <signUp class="modal" v-if="showSignUp" @close="showSignUp = false"></signUp>
  </div>
  <div v-else>
    <router-link to="/events">Vos évènements</router-link>
    <router-link to="/eventAdd">Ajouter évènement</router-link>
    <router-link to="/modifyUserName">Modifier nom</router-link>
    <router-link to="/modifyPassWord">Modifier mot de passe</router-link>
    <router-link to="/deleteAccount">Supprimer compte</router-link>
  </div>
</div>

</template>

<script>
import login from '@/components/Login'
import signUp from '@/components/SignUp'
import { EventBus } from './event-bus'

export default{
  name: 'home',
  components: {
    login,
    signUp
  },
  data () {
    return {
      token: true,
      showConnexion: false,
      showSignUp: false
    }
  },
  beforeMount () {
    this.token = localStorage.getItem('token')
  },
  mounted () {
    EventBus.$on('token-change', () => {
      this.token = true
    })
  }
}
</script>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}
</style>
