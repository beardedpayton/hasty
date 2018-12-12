<template>
  <div class="hasty-card" :style="size">
    <div v-if="img != null">
      <img class="hasty-card_img" :src="img" alt="">
    </div>
    <div class="hasty-card_body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h-card',
  props: {
    size: {
      type: Object,
      default: () => {
        return {
          width: '280px',
          height: 'auto'
        }
      }
    },
    img:{
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.hasty-card {
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 100%;
  border: 1px solid rgba(0,0,0,.125);
  background-color: #fff;
  border-radius: 5px;
}

.hasty-card_img {
  max-width: 100%;
}

.hasty-card_body {
 padding: 15px 15px;
}
</style>
