<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[90vh]">
      <!-- Code Input Section -->
      <div class="bg-gradient-to-br from-white/40 to-white/30 rounded-3xl border-2 border-blue-200 flex flex-col overflow-hidden backdrop-blur-md">
        <div class="h-[72px] px-6 flex items-center backdrop-blur-sm bg-white/40 border-b-2 border-blue-200">
          <div class="flex items-center">
            <h2 class="text-lg font-semibold text-gray-800 flex items-center">
              <font-awesome-icon icon="fa-code" class="text-blue-500 text-xl" />
              <span class="ml-3">Kod Girişi : </span>
            </h2>
            <div class="flex space-x-2 ml-4">
              <button
                v-for="framework in frameworks"
                :key="framework.id"
                @click="selectFramework(framework.id)"
                :class="[
                  'w-20 h-8 flex items-center justify-center rounded-lg transition-all duration-300 text-sm font-medium relative overflow-hidden',
                  selectedFramework === framework.id
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white scale-105 border-none'
                    : 'bg-white/80 text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 backdrop-blur-sm hover:scale-105'
                ]"
              >
                {{ framework.label }}
              </button>
            </div>
          </div>
          <div class="ml-auto flex space-x-4">
            <button @click="clearCode"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 text-gray-600 hover:text-white transition duration-300 shadow-sm hover:shadow-md border border-gray-300 hover:border-red-500">
              <font-awesome-icon icon="fa-trash" class="text-lg" />
            </button>
            <button @click="runCode"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-emerald-500 text-gray-600 hover:text-white transition duration-300 shadow-sm hover:shadow-md border border-gray-300 hover:border-emerald-500">
              <font-awesome-icon icon="fa-play" class="text-lg" />
            </button>
          </div>
        </div>
        <div class="flex-1 p-3 relative">
          <div class="absolute inset-0 overflow-auto">
            <textarea ref="codeEditor" v-model="codeInput" @input="updateHighlight"
              placeholder="..."
              class="w-full h-full p-4 bg-transparent font-mono text-sm text-gray-800 placeholder-gray-400/70 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none transition-all duration-300 absolute top-0 left-0 z-10"
              spellcheck="false"></textarea>
            <pre class="w-full h-full p-4 bg-gradient-to-br from-white/40 to-white/30 font-mono text-sm text-gray-700 rounded-2xl m-0 absolute top-0 left-0">
              <code ref="highlightCode" class="html hljs language-html" v-html="highlightedCode"></code>
            </pre>
          </div>
        </div>
      </div>

      <!-- Preview Section -->
      <div class="bg-gradient-to-br from-white/40 to-white/30 rounded-3xl border-2 border-blue-200 flex flex-col overflow-hidden backdrop-blur-md">
        <div class="h-[72px] px-6 flex items-center backdrop-blur-sm bg-white/40 border-b-2 border-blue-200">
          <h2 class="text-lg font-semibold text-gray-800 flex items-center space-x-3">
            <font-awesome-icon :icon="['fas', 'desktop']" class="text-blue-500 text-xl" />
            <span class="ml-3">Önizleme</span>
          </h2>
        </div>
        <div id="embed-container" class="flex-1 bg-gradient-to-br from-white/40 to-white/30 p-3 rounded-2xl m-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import componentLogic from './MainPageComponent.js';
import './MainPageComponent.css';

export default componentLogic;
</script>
