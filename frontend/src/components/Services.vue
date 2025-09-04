<template>
  <section id="services" class="py-20 bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
        <p class="text-xl text-gray-600">Comprehensive AI solutions tailored to your business needs</p>
      </div>
      
      <div class="grid grid-3">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="card hover-shadow"
        >
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  props: {
    services: {
      type: Array,
      required: true
    }
  }
}
</script>
