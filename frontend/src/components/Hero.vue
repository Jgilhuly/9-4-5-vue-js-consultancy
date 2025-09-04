<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">
          Transform Your Business with 
          <span class="text-primary">AI Solutions</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 mx-auto">
          We help enterprises unlock the power of artificial intelligence through strategic consulting, 
          custom AI development, and intelligent automation solutions.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="$emit('openContactModal')">Get Started</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  emits: ['openContactModal']
}
</script>
