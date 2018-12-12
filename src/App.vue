<template>
  <div id="app">
    <h1>hello world</h1>
    <button @click="openModal('hastyModal')">Button Component</button>
    <h-modal ref="hastyModal" title="hello world">
      <div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </h-modal> 
    <!-- <h-gallery-grab>
      <h-card class="card">
        <p>test</p>
      </h-card>
      <h-card 
        v-for="n in 8" 
        :key="n" 
        img="https://via.placeholder.com/280x150.png"
        class="card"
      >
        <h2>Title</h2>
        <p>Content</p>
        <button>Go</button>
      </h-card>
    </h-gallery-grab> -->
    <!-- <h-card 
      img="https://via.placeholder.com/600x150.png"
      :size="cardSize"
    >
      <h2>Hello World</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
      <button>Learn More</button>
    </h-card> -->
    <h-stepper :steps="steps" :currentStep="currentStep"/>
    <button @click="increaseStep()">Continue</button>
  </div>
</template>

<script>
import HBtn from './components/HBtn'
import HModal from './components/HModal'
import HStepper from './components/HStepper'
import HGalleryGrab from './components/HGalleryGrab'
import HCard from './components/HCard'
export default {
  name: "app",
  components: {
    HBtn,
    HModal,
    HStepper,
    HGalleryGrab,
    HCard
  },
  data() {
    return {
      openState: false,
      steps: 4,
      currentStep: 1,
      cardSize: {
        width: '600px',
        height: '400px'
      }
    }
  },
  methods: {
    openModal(ref) {
      this.$refs[ref].open()
    },
    increaseStep(){
      this.currentStep++
    }
  }
};
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  background-color: #333;
  margin-left: 10px;
}
.card {
  margin-right: 10px;
}
</style>
