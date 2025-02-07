<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
    <div class="container mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 p-8" style="max-width: 1920px;">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[90vh]">
        <!-- Kod Giriş Bölümü -->
        <div class="bg-white/90 rounded-3xl shadow-lg border border-gray-200 flex flex-col overflow-hidden backdrop-blur-md">
          <div class="px-6 py-5 border-b border-gray-200 flex items-center backdrop-blur-sm">
            <h2 class="text-lg font-semibold text-gray-800 flex items-center space-x-3">
              <font-awesome-icon icon="fa-code" class="text-blue-500" />
              <span>Kod Girişi</span>
            </h2>
            <div class="ml-auto flex space-x-4">
              <button
                @click="clearCode"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 text-gray-600 hover:text-white transition duration-300 shadow-sm hover:shadow-md border border-gray-300 hover:border-red-500"
              >
                <font-awesome-icon icon="fa-trash" class="text-lg" />
              </button>
              <button
                @click="runCode"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-emerald-500 text-gray-600 hover:text-white transition duration-300 shadow-sm hover:shadow-md border border-gray-300 hover:border-emerald-500"
              >
                <font-awesome-icon icon="fa-play" class="text-lg" />
              </button>
            </div>
          </div>
          <div class="flex-1 p-3 relative">
            <div class="absolute inset-0 overflow-auto">
              <textarea
                ref="codeEditor"
                v-model="codeInput"
                @input="updateHighlight"
                placeholder="Kodunuzu buraya girin..."
                class="w-full h-full p-4 bg-transparent font-mono text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none transition duration-300 absolute top-0 left-0 z-10"
                spellcheck="false"
              ></textarea>
              <pre
                class="w-full h-full p-4 bg-gray-50/90 font-mono text-sm text-gray-700 rounded-2xl m-0 absolute top-0 left-0"
              ><code ref="highlightCode" class="html hljs language-html" v-html="highlightedCode"></code></pre>
            </div>
          </div>
        </div>

        <!-- Önizleme Bölümü -->
        <div class="bg-white/90 rounded-3xl shadow-lg border border-gray-200 flex flex-col overflow-hidden backdrop-blur-md">
          <div class="px-6 py-5 border-b border-gray-200 backdrop-blur-sm">
            <h2 class="text-lg font-semibold text-gray-800 flex items-center space-x-3">
              <font-awesome-icon :icon="['fas', 'desktop']" class="text-blue-500" />
              <span>Önizleme</span>
            </h2>
          </div>
          <div
            id="embed-container"
            class="flex-1 bg-gray-50 p-3 rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import componentLogic from './MainPageComponent.js';
export default componentLogic;
</script>

<style>
.hljs {
  background: transparent !important;
  padding: 0 !important;
}
textarea {
  background: transparent !important;
  color: transparent !important;
  caret-color: #374151 !important;
}
</style>
