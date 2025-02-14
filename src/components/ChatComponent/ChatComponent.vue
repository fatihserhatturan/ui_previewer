<template>
    <div class="h-full bg-white dark:bg-black pt-12 transition-colors duration-300">
      <!-- Header Section -->
      <div class="flex justify-between items-center h-[72px] px-6 border-b border-blue-500/30">
        <h2 class="text-lg font-mono text-blue-600 dark:text-blue-400 flex items-center">
          <span class="text-blue-400/50 dark:text-blue-500/50 mr-2">&gt;</span>
          <font-awesome-icon icon="fa-comments" class="text-blue-600 dark:text-blue-400 text-xl" />
          <span class="ml-3">CHAT_SECTION</span>
        </h2>
        <button
          class="px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors duration-300 border border-blue-500/30 rounded-md bg-white/50 dark:bg-black/30 text-gray-600 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Clear Chat
        </button>
      </div>

      <!-- Chat Messages Section -->
      <div class="h-[calc(100%-144px)] flex flex-col">
        <div class="flex-1 p-3 overflow-auto">
          <div class="space-y-4">
            <div v-for="(message, index) in messages" :key="index"
              :class="[
                'flex',
                message.type === 'user' ? 'justify-end' : 'justify-start'
              ]"
            >
              <div
                :class="[
                  'max-w-[70%] p-3 rounded-lg transition-colors duration-300',
                  message.type === 'user'
                    ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800/40 dark:text-gray-200'
                ]"
              >
                {{ message.content }}
              </div>
            </div>
          </div>
        </div>

        <!-- Input Section -->
        <div class="h-[72px] border-t border-blue-500/30 bg-gray-50/80 dark:bg-black/40 px-6 py-4 transition-colors duration-300">
          <div class="flex space-x-4 h-full">
            <!-- File Upload Button -->
            <button
              class="w-10 h-10 flex items-center justify-center rounded border border-blue-500/30 bg-white hover:bg-blue-50 dark:bg-black/30 dark:hover:bg-blue-500/10 text-blue-600/70 dark:text-blue-400/70 hover:border-blue-500 transition-colors duration-300"
            >
              <font-awesome-icon icon="fa-paperclip" class="text-lg" />
            </button>

            <!-- Text Input -->
            <div class="flex-1 relative">
              <input
                v-model="messageInput"
                type="text"
                placeholder="Type your message..."
                class="w-full h-10 px-4 bg-white dark:bg-black/30 rounded-md border border-blue-500/30 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-colors duration-300"
              />
            </div>

            <!-- Send Button -->
            <button
              @click="sendMessage"
              class="w-10 h-10 flex items-center justify-center rounded border border-emerald-500/30 bg-white hover:bg-emerald-50 dark:bg-black/30 dark:hover:bg-emerald-500/10 text-emerald-600/70 dark:text-emerald-400/70 hover:border-emerald-500 transition-colors duration-300"
            >
              <font-awesome-icon icon="fa-paper-plane" class="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'ChatComponent',
    data() {
      return {
        messageInput: '',
        messages: [
          { type: 'bot', content: 'Hello! How can I help you today?' },
          { type: 'user', content: 'Hi there!' },
          { type: 'user', content: 'hello' }
        ],
      }
    },
    methods: {
      sendMessage() {
        if (this.messageInput.trim()) {
          this.messages.push({
            type: 'user',
            content: this.messageInput
          });
          this.messageInput = '';
        }
      }
    }
  }
  </script>

  <style scoped>
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-blue-500/20 dark:bg-blue-400/20 rounded;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-blue-500/30 dark:bg-blue-400/30;
  }
  </style>
