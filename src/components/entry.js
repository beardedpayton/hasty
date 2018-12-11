import Vue from 'vue'
import HAlert from './HAlert.vue'
import HBtn from './HBtn.vue'
import HCarousel from './HCarousel.vue'
import HCollapse from './HCollapse.vue'
import HGrabnMove from './HGrabnMove.vue'
import HModal from './HModal.vue'
import HProgress from './HProgress.vue'
import HSlider from './HSlider.vue'
import HStepper from './HStepper.vue'
import HTooltip from './HTooltip.vue'

const Components = {
  HAlert,
  HBtn,
  HCarousel,
  HCollapse,
  HGrabnMove,
  HModal,
  HProgress,
  HSlider,
  HStepper,
  HTooltip
}

Object.keys(Components).forEach(name => {
  // Globally Register Components
  Vue.component(Components, Components[name])
})

export default Components
