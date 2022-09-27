import App from './App'
import i18n from './lang/i18n'
import uView from '@/uni_modules/uview-ui'


// #ifndef VUE3
import Vue from 'vue'
Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	return {app}
}
// #endif
