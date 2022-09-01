import { defineComponent } from 'vue'
import '@/styles/index.css'

const url = new URL('./assets/vue.svg', import.meta.url)

const Test = defineComponent({
    render() {
        return (<div class="title">
            <img src={ url.href} alt="" />
            你好啊，Vite jsx
        </div>)
    }
})
export { Test }