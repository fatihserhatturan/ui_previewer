<template>
  <div class="w-full h-screen flex">

    <div class="w-1/2 h-full bg-black">
      <ChatComponent/>
    </div>

    <div class="w-1/2 h-full">
      <CanvasComponent/>
    </div>
  </div>
</template>

<script>
import CanvasComponent from '@/components/CanvasComponent/CanvasComponent.vue';
import ChatComponent from '@/components/ChatComponent/ChatComponent.vue';

export default {
  name: 'MainPageComponent',
  components: {
    CanvasComponent,
    ChatComponent
  },
}
</script>
