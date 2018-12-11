<template>
  <section
    @mousedown="down"
    @mouseleave="leave"
    @mouseup="up"
    @mousemove="move"
    ref="slider"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      isDown: false,
      startX: null,
      scrollLeft: null
    }
  },
  methods: {
    unFocus() {
      if (document.selection) {
        document.selection.empty()
      } else {
        window.getSelection().removeAllRanges()
      }
    },

    down(event) {
      this.isDown = true
      // intial position of mouse on click
      this.startX = event.pageX - this.$refs.slider.offsetLeft
      this.scrollLeft = this.$refs.slider.scrollLeft
    },

    leave() {
      this.isDown = false
    },

    up() {
      this.unFocus()
      this.isDown = false
    },

    move(event) {
      if (!this.isDown) return
      event.preventDefault()

      this.unFocus()

      // postion of mouse on move
      const x = event.pageX - this.$refs.slider.offsetLeft

      // calculate how far mouse has moved from intial position
      const walk = (x - this.startX) * 2

      this.$refs.slider.scrollLeft = this.scrollLeft - walk
    }
  }
}
</script>

<style scoped>

</style>
