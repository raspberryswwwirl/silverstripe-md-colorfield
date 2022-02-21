import { defineCustomElement } from 'vue'
import MaterialColorPicker from '@/components/MaterialColorPicker.ce.vue'
import '@/styles/main.scss';

/**
 * @link https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue
 */

export function register() {
    const MaterialColorPickerElement = defineCustomElement(MaterialColorPicker)
    customElements.define('md-vue-colorpicker',MaterialColorPickerElement)
}

register();
