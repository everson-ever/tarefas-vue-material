import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import { MdButton, MdContent, MdDatepicker, MdDialog, MdDrawer, MdField, MdIcon, MdList, MdToolbar } from 'vue-material/dist/components'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'
import './styles.css'



Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdField)
Vue.use(MdDatepicker)
Vue.use(MdDialog)



new Vue({
  render: h => h(App),
}).$mount('#app')
