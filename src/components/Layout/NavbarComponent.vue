<template>
  <nav class="fixed top-0 left-0 right-0 z-50">
    <div class="bg-gray-50/80 dark:bg-black/90 backdrop-blur-lg transition-colors duration-300">
      <div class="max-w-5xl mx-auto">
        <div class="relative px-4 py-3">
          <div class="absolute top-0 left-0 right-0 h-[1px] bg-blue-500/30 dark:bg-blue-400/30 animate-scan"></div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3 group relative">
              <div class="font-mono text-blue-600 dark:text-blue-400 animate-blink">&gt;</div>
              <div class="relative">
                <div class="w-9 h-9 rounded border border-blue-600/50 dark:border-blue-400/50 relative overflow-hidden bg-blue-50 dark:bg-gray-900 transition-colors duration-300">
                  <div class="absolute inset-0 matrix-bg opacity-20"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <font-awesome-icon icon="fa-code"
                      class="text-blue-600 dark:text-blue-400 text-base z-10 animate-glitch-1" />
                  </div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <font-awesome-icon icon="fa-code"
                      class="text-red-600/50 dark:text-red-400/50 text-base z-20 animate-glitch-2" />
                  </div>
                </div>
              </div>
              <div class="group relative">
                <h1 class="text-lg font-mono tracking-wider">
                  <span class="text-blue-600 dark:text-blue-400">AI</span>
                  <span class="inline-block w-[2px] h-4 bg-blue-600 dark:bg-blue-400 animate-blink"></span>
                  <span class="text-gray-700 dark:text-gray-300 typing-animation">UI_Generator</span>
                </h1>
                <div class="absolute -top-8 left-0 w-full text-[8px] font-mono text-blue-600/20 dark:text-blue-400/20 binary-rain">
                  01100101 01101110
                </div>
              </div>
            </div>
            <button @click="toggleDarkMode"
                    class="relative w-12 h-12 group perspective">
              <div class="relative preserve-3d transition-transform duration-700 w-full h-full"
                   :class="{'rotate-y-180': isDarkMode}">
                <div class="absolute inset-0 backface-hidden rounded-lg border border-blue-600/30 dark:border-blue-400/30 bg-blue-50/50 dark:bg-black/20 flex items-center justify-center transition-colors duration-300">
                  <div class="relative">
                    <font-awesome-icon icon="fa-sun"
                      class="text-amber-500 dark:text-yellow-500 text-sm animate-pulse" />
                    <div class="absolute inset-0 bg-amber-500/20 dark:bg-yellow-500/20 blur-sm animate-ping"></div>
                  </div>
                </div>
                <div class="absolute inset-0 backface-hidden rounded-lg border border-blue-600/30 dark:border-blue-400/30 bg-blue-50/50 dark:bg-black/20 flex items-center justify-center rotate-y-180 transition-colors duration-300">
                  <div class="relative">
                    <font-awesome-icon icon="fa-moon"
                      class="text-blue-600 dark:text-blue-400 text-sm animate-float" />
                    <div class="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 blur-sm animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-600/50 dark:border-blue-400/50 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
              <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-600/50 dark:border-blue-400/50 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
              <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-600/50 dark:border-blue-400/50 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
              <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-600/50 dark:border-blue-400/50 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isDarkMode: false
    }
  },
  mounted() {
    this.isDarkMode = document.documentElement.classList.contains('dark')
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.classList.toggle('dark')
      localStorage.setItem('darkMode', this.isDarkMode)
    }
  },
  created() {
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode) {
      this.isDarkMode = darkMode === 'true'
      document.documentElement.classList.toggle('dark', this.isDarkMode)
    }
  }
}
</script>


<style scoped>
.perspective {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

@keyframes scan {
  0%, 100% { transform: translateY(0); opacity: 0; }
  50% { transform: translateY(100vh); opacity: 0.5; }
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); opacity: 0.3; }
  25% { transform: translate(2px, 0); opacity: 0.4; }
  50% { transform: translate(-2px, 0); opacity: 0.2; }
  75% { transform: translate(0, 2px); opacity: 0.3; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

.animate-scan {
  animation: scan 2s linear infinite;
}

.animate-glitch-1 {
  animation: glitch-1 3s infinite;
}

.animate-glitch-2 {
  animation: glitch-2 3s infinite;
}

.animate-blink {
  animation: blink 1s step-start infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.matrix-bg {
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(0, 255, 255, 0.05) 50%,
    transparent 100%
  );
  background-size: 100% 20px;
  animation: matrix 1s linear infinite;
}

.binary-rain {
  animation: rain 10s linear infinite;
}

.typing-animation {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
  animation: typing 2s steps(12) 1;
}

@keyframes matrix {
  0% { background-position: 0 0; }
  100% { background-position: 0 20px; }
}

@keyframes rain {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
</style>
