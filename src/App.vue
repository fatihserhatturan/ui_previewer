<template>
  <div class="min-h-screen">
    <NavBar @toggle-dark-mode="toggleDarkMode" :isDarkMode="isDarkMode" />
    <div class="pt-16">
      <MainPageComponent/>
    </div>
  </div>
</template>

<script>
import MainPageComponent from './components/MainPageComponent/MainPageComponent.vue';
import NavBar from './components/Layout/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    MainPageComponent,
    NavBar
  },
  data() {
    return {
      isDarkMode: false
    }
  },
  created() {
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode !== null) {
      this.isDarkMode = darkMode === 'true'
      this.updateDarkMode(this.isDarkMode)
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.updateDarkMode(this.isDarkMode)
      localStorage.setItem('darkMode', this.isDarkMode)
    },
    updateDarkMode(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>

<style>
* {
  transition: background-color 0.3s, border-color 0.3s;
}
</style>
