import { defineComponent } from 'vue'
import '@/styles/index.css'

import logo from '@/assets/vue.svg'

console.log(logo)

const Test = defineComponent({
    render() {
        return (<div class="title">
            你好啊，Vite jsx
            <img src={ logo} alt="" />
        </div>)
    }
})
export { Test }