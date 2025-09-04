<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-content">
        <div class="nav-brand">NeuraLink AI</div>
        <div class="flex items-center">
          <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            @click="toggleTheme"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            class="theme-toggle"
            type="button"
          >
            <span v-if="isDark">☀️</span>
            <span v-else>🌙</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    isDark: {
      type: Boolean,
      required: true
    },
    toggleTheme: {
      type: Function,
      required: true
    }
  }
}
</script>
