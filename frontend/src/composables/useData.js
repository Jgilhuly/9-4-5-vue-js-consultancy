import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useData() {
  const services = ref([])
  const team = ref([])
  const contactInfo = ref({})

  const fetchData = async () => {
    try {
      const [servicesRes, teamRes, contactRes] = await Promise.all([
        axios.get('/api/services'),
        axios.get('/api/team'),
        axios.get('/api/contact')
      ])
      
      services.value = servicesRes.data
      team.value = teamRes.data
      contactInfo.value = contactRes.data
    } catch (error) {
      console.error('Error fetching data:', error)
      // Fallback data in case API is not available
      services.value = [
        {
          id: 1,
          title: "AI Strategy Consulting",
          description: "Strategic roadmaps for AI adoption and digital transformation",
          icon: "🎯"
        },
        {
          id: 2,
          title: "Machine Learning Development",
          description: "Custom ML models and algorithms for your specific use cases",
          icon: "🤖"
        },
        {
          id: 3,
          title: "Process Automation",
          description: "Intelligent automation solutions to optimize your workflows",
          icon: "⚡"
        }
      ]
      
      team.value = [
        {
          id: 1,
          name: "Dr. Sarah Chen",
          role: "Chief AI Officer",
          bio: "PhD in Machine Learning, 10+ years in enterprise AI solutions",
          initials: "SC"
        },
        {
          id: 2,
          name: "Michael Rodriguez",
          role: "Lead Data Scientist",
          bio: "Expert in deep learning and computer vision applications",
          initials: "MR"
        },
        {
          id: 3,
          name: "Emily Johnson",
          role: "AI Solutions Architect",
          bio: "Specializes in scalable AI infrastructure and deployment",
          initials: "EJ"
        }
      ]
      
      contactInfo.value = {
        email: "contact@neuralink-ai.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA"
      }
    }
  }

  onMounted(fetchData)

  return {
    services,
    team,
    contactInfo
  }
}
