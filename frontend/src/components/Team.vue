<template>
  <section id="team" class="py-20 bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p class="text-xl text-gray-600">Meet the team that makes it all happen</p>
  
        <div class="grid grid-3">
          <div 
            v-for="member in team" 
            :key="member.id"
            class="card hover-shadow"
          >
            <div class="team-avatar">{{ member.initials }}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  props: {
    team: {
      type: Array,
      required: true
    }
  }
}
</script>
