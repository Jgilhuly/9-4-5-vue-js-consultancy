<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p class="text-xl text-gray-600">Let's talk about your AI needs</p>
      </div>
      
      <div class="flex justify-center items-center space-x-8">
        <div class="contact-item text-center">
          <div class="contact-icon">📞</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
          <p class="text-gray-600">{{ contactInfo.phone }}</p>
        </div>
        <div class="contact-item text-center">
          <div class="contact-icon">📍</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Location</h3>
          <p class="text-gray-600">{{ contactInfo.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    contactInfo: {
      type: Object,
      required: true
    }
  }
}
</script>
