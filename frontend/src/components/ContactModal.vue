<template>
  <div v-if="show" class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3 class="text-2xl font-bold text-gray-900">Contact Us</h3>
        <button class="modal-close" @click="$emit('close')">&times;</button>
      </div>
      
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required 
            placeholder="Enter your full name"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required 
            placeholder="Enter your email address"
          />
        </div>
        
        <div class="form-group">
          <label for="company">Company</label>
          <input 
            type="text" 
            id="company" 
            v-model="form.company" 
            placeholder="Enter your company name"
          />
        </div>
        
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="form.phone" 
            placeholder="Enter your phone number"
          />
        </div>
        
        <div class="form-group">
          <label for="service">Service Interest</label>
          <select id="service" v-model="form.service">
            <option value="">Select a service</option>
            <option value="ai-strategy">AI Strategy Consulting</option>
            <option value="ml-development">Machine Learning Development</option>
            <option value="automation">Process Automation</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required 
            rows="4"
            placeholder="Tell us about your project or how we can help"
          ></textarea>
        </div>
        
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import axios from 'axios'

export default {
  name: 'ContactModal',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close', 'submitted'],
  setup(props, { emit }) {
    const isSubmitting = ref(false)
    const form = ref({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    })

    const resetForm = () => {
      form.value = {
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      }
    }

    const submitForm = async () => {
      isSubmitting.value = true
      try {
        const response = await axios.post('/api/contact/consultation', {
          name: form.value.name,
          email: form.value.email,
          company: form.value.company,
          message: form.value.message,
          serviceInterest: form.value.service || 'General inquiry'
        })
        
        alert('Thank you for your message! We\'ll get back to you within 24 hours.')
        emit('submitted')
        resetForm()
        emit('close')
      } catch (error) {
        console.error('Error submitting form:', error)
        if (error.response?.data?.message) {
          alert(`Error: ${error.response.data.message}`)
        } else {
          alert('There was an error sending your message. Please try again.')
        }
      } finally {
        isSubmitting.value = false
      }
    }

    watch(() => props.show, (newVal) => {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
        resetForm()
      }
    })

    return {
      form,
      isSubmitting,
      submitForm
    }
  }
}
</script>
