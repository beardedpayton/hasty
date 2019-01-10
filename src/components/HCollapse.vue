<template>
  <div class="hasty-collapse_wrapper">
    <div 
      @click="toggleCollapse()" 
      class="hasty-collapse_item">
      <div class="hasty-collapse_header">
        <h3 class="hasty-collapse_title">{{ title }}</h3>
        <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div 
        class="hasty-collapse_content" 
        :class="classes"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h-collapse',
  props: {
    title: {
      type: String,
      default: 'Section 1'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleCollapse() {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    classes() {
      return {'hasty-collapse_content_open': this.isOpen}
    }
  }
}
</script>

<style scoped>
.hasty-collapse_wrapper {
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 0px;
}

.hasty-collapse_header {
  display: flex;
  justify-content: space-between;
  /* padding: 15px 0; */
}

.hasty-collapse_item  {
  border-bottom: 1px solid rgb(234, 234, 234);
}

.hasty-collapse_header h3 {
  margin: 0;
}

.hasty-collapse_content {
  height: 0;
  opacity: 0;
  visibility: hidden;
  padding-top: 20px;
}

.hasty-collapse_content_open {
  display: block;
  height: auto;
  opacity: 1;
  visibility: visible;
}

/* .hasty-collapse_transition-enter-active,
.hasty-collapse_transition-leave-active {
  transition: height 0.3s ease;
}

.hasty-collapse_transition-enter,
.hasty-collapse_transition-leave-active {
  height: 0;
} */

</style>
