// 整个包的入口
// 定义install方法，接受Vue作为参数。如果使用use注册插件，则所有组件都将被注册
import Button from './Button.vue'
import Dialog from './Dialog.vue'
import Input from './Input.vue'
import Switch from './Switch.vue'
import Radio from './Radio.vue'
import RadioGroup from './RadioGroup.vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'
import './icons/iconfont.css'
const components = [
    Button,
    Dialog,
    Input,
    Switch,
    Radio,
    RadioGroup,
    Form,
    FormItem
]
const install = function (Vue) {
    // 全局注册所有组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
// 判断是否是直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default install