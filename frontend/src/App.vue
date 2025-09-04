<template>
  <div id="app">
    <Navigation :isDark="isDark" :toggleTheme="toggleTheme" />
    <Hero @openContactModal="openContactModal" />
    <Services :services="services" />
    <Team :team="team" />
    <Contact :contactInfo="contactInfo" />
    <Footer />
    <ContactModal 
      :show="showContactModal" 
      @close="closeContactModal"
      @submitted="handleFormSubmitted"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Team from './components/Team.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ContactModal from './components/ContactModal.vue'
import { useData } from './composables/useData.js'
import { useTheme } from './composables/useTheme.js'

export default {
  name: 'App',
  components: {
    Navigation,
    Hero,
    Services,
    Team,
    Contact,
    Footer,
    ContactModal
  },
  setup() {
    const { services, team, contactInfo } = useData()
    const { isDark, toggleTheme } = useTheme()
    const showContactModal = ref(false)

    const openContactModal = () => {
      showContactModal.value = true
    }

    const closeContactModal = () => {
      showContactModal.value = false
    }

    const handleFormSubmitted = () => {
      // Additional logic after form submission if needed
      console.log('Contact form submitted successfully')
    }

    return {
      services,
      team,
      contactInfo,
      showContactModal,
      openContactModal,
      closeContactModal,
      handleFormSubmitted,
      isDark,
      toggleTheme
    }
  }
}
</script>
