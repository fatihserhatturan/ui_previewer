<template>
  <div class="min-h-screen bg-white dark:bg-black p-8 transition-colors duration-300">
    <!-- Tab Buttons -->
    <div class="flex justify-end mb-4">
      <div class="inline-flex rounded-md shadow-sm">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors duration-300 border-y border-blue-500/30 first:border-l last:border-r first:rounded-l-md last:rounded-r-md',
            index !== 0 ? '-ml-px' : '',
            activeTab === tab.id
              ? 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500 z-10'
              : 'bg-white/50 dark:bg-black/30 text-gray-600 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:z-10'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-8 h-[80vh]">
      <!-- Code Input Section -->
      <div v-show="activeTab === 'input'" class="bg-gray-50/80 dark:bg-gray-950/50 rounded-lg border border-blue-500/30 flex flex-col overflow-hidden backdrop-blur-md transition-colors duration-300">
        <div class="h-[72px] px-6 flex items-center bg-white/60 dark:bg-black/40 border-b border-blue-500/30 transition-colors duration-300">
          <div class="flex items-center">
            <h2 class="text-lg font-mono text-blue-600 dark:text-blue-400 flex items-center">
              <span class="text-blue-400/50 dark:text-blue-500/50 mr-2">&gt;</span>
              <font-awesome-icon icon="fa-code" class="text-blue-600 dark:text-blue-400 text-xl" />
              <span class="ml-3">INPUT_SECTION</span>
            </h2>
            <div class="flex space-x-2 ml-6">
              <button
                v-for="framework in frameworks"
                :key="framework.id"
                @click="selectFramework(framework.id)"
                :class="[
                  'w-24 h-8 flex items-center justify-center rounded border transition-colors duration-300 text-sm font-mono uppercase tracking-wider',
                  selectedFramework === framework.id
                    ? 'bg-blue-500/10 dark:bg-blue-500/20 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'bg-white/50 dark:bg-black/30 border-blue-500/30 text-gray-600 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
                ]"
              >
                {{ framework.label }}
              </button>
            </div>
          </div>
          <div class="ml-auto flex space-x-4">
            <button @click="clearCode"
              class="w-10 h-10 flex items-center justify-center rounded border border-red-500/30 bg-white/50 dark:bg-black/30 text-red-600/70 dark:text-red-500/70 hover:bg-red-500/10 dark:hover:bg-red-500/20 hover:border-red-500 transition-colors duration-300">
              <font-awesome-icon icon="fa-trash" class="text-lg" />
            </button>
            <button @click="runCode"
              class="w-10 h-10 flex items-center justify-center rounded border border-emerald-500/30 bg-white/50 dark:bg-black/30 text-emerald-600/70 dark:text-emerald-500/70 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 hover:border-emerald-500 transition-colors duration-300">
              <font-awesome-icon icon="fa-play" class="text-lg" />
            </button>
          </div>
        </div>
        <div class="flex-1 p-3 relative">
          <div class="absolute inset-0 overflow-auto">
            <textarea ref="codeEditor" v-model="codeInput" @input="updateHighlight"
              placeholder="// Enter your code here..."
              class="w-full h-full p-4 bg-transparent font-mono text-sm text-gray-800 dark:text-blue-400 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none transition-colors duration-300 absolute top-0 left-0 z-10"
              spellcheck="false"></textarea>
            <pre class="w-full h-full p-4 bg-white/30 dark:bg-black/30 font-mono text-sm text-gray-800 dark:text-gray-400 rounded m-0 absolute top-0 left-0 transition-colors duration-300">
              <code ref="highlightCode" class="html hljs language-html" v-html="highlightedCode"></code>
            </pre>
          </div>
        </div>
      </div>

      <!-- Preview Section -->
      <div v-show="activeTab === 'preview'" class="bg-gray-50/80 dark:bg-gray-950/50 rounded-lg border border-blue-500/30 flex flex-col overflow-hidden backdrop-blur-md transition-colors duration-300">
        <div class="h-[72px] px-6 flex items-center bg-white/60 dark:bg-black/40 border-b border-blue-500/30 transition-colors duration-300">
          <h2 class="text-lg font-mono text-blue-600 dark:text-blue-400 flex items-center">
            <span class="text-blue-400/50 dark:text-blue-500/50 mr-2">&gt;</span>
            <font-awesome-icon :icon="['fas', 'desktop']" class="text-blue-600 dark:text-blue-400 text-xl" />
            <span class="ml-3">PREVIEW_SECTION</span>
          </h2>
        </div>
        <div id="embed-container" class="flex-1 bg-white/30 dark:bg-black/30 p-3 rounded m-3 transition-colors duration-300"></div>
      </div>
    </div>
  </div>
</template>
<script>
import componentLogic from './CanvasComponent.js';
import '@/assets/base.css';

export default componentLogic;
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-900 transition-colors duration-300;
}

::-webkit-scrollbar-thumb {
  @apply bg-blue-500/20 dark:bg-blue-500/30 rounded transition-colors duration-300;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-blue-500/30 dark:bg-blue-500/50 transition-colors duration-300;
}
</style>
