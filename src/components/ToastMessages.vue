<template>
  <div class="toast-container position-fixed top-50 end-75 translate-middle-y z-index">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>
<style>
.z-index{
  z-index: 999;
  height: 100px;
}
</style>
<script>
import Toast from '@/components/Toast.vue'
import emitter from '../methods/emitter'

export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  methods: { emitter },
  inject: ['emitter'],
  mounted () {
    // 請自行補上 emitter 事件
    this.emitter.on('push-message', messages => {
      console.log(messages)
      const { style, title, content } = messages
      this.messages.push({ style, title, content })
    })
  }
}
</script>
