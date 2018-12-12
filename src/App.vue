<template>
  <div id="app">
    <h1>hello world</h1>
    <button @click="openModal('hastyModal')">Button Component</button>
    <h-modal ref="hastyModal" title="hello world">
      <div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </h-modal> 
  </div>
</template>

<script>
import HBtn from './components/HBtn'
import HModal from './components/HModal'
export default {
  name: "app",
  components: {
    HBtn,
    HModal
  },
  data() {
    return {
      openState: false
    }
  },
  methods: {
    openModal(ref) {
      this.$refs[ref].open()
    }
  }
};
</script>

<style>
</style>
