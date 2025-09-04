import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(false)
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    updateDocumentClass()
  }
  
  const updateDocumentClass = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }
  
  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      isDark.value = prefersDark
    }
    
    updateDocumentClass()
  }
  
  onMounted(() => {
    initTheme()
  })
  
  return { 
    isDark, 
    toggleTheme, 
    initTheme 
  }
}
