<template>
  <transition name="hasty-modal_fade">
    <div v-if="isOpen" class="hasty-modal_wrapper">
      <div class="hasty-modal" :style="size" :class="classes">
        <div class="hasty-modal_header">
          <p>{{ title }}</p>
          <p @click="isOpen = false">
            <i class="fas fa-times-circle"></i>
          </p>
        </div>
        <div class="hasty-modal_content">
          <slot />
        </div>
      </div>
    <div @click="isOpen = false" :class="overlay"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'h-modal',
  props: {
    title: {
      type: String,
      default: 'Modal'
    },
    size: {
      type: Object,
      default: () => {
       return {width: '450px', height: 'auto'}
      }
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true
    }
  },
  computed: {
    classes() {
      return [
        { 'hasty-modal_is-open': this.isOpen  }
      ]
    },
    overlay() {
      return {'hasty-modal_overlay': this.isOpen }
    },
    transitionType() {
      return `hasty-modal_${this.transition}`
    }
  }
}
</script>

<style scoped>
.hasty-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  opacity: 0;
  max-width: 100%;
  max-height: 100%;
  background-color: #fff;
  overflow: scroll;
}

.hasty-modal_overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background-color: #000;
}

.hasty-modal_header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: #efeeea;
  height: 50px;
  padding: 0 15px;
}

.hasty-modal_content {
  padding: 10px 15px;
}

.hasty-modal_is-open {
  opacity: 100;
}

.hasty-modal_fade-enter-active,
.hasty-modal_fade-leave-active {
  transition: opacity .3s;
}

.hasty-modal_fade-enter,
.hasty-modal_fade-leave-to {
  opacity: 0;
}
</style>
