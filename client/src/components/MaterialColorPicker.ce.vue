<template>
    <md-sheet :id="id" :title="title" class="md-sheet">
        <md-sheetbody>
            <md-sheettitle><MDText :label="title" scale="body2" tag="span" /></md-sheettitle>
            <input type="color" class="md-colorpicker" v-model="value">
            <template v-if="colorValues">
                <md-colorlist>
                    <label :for="swatch.toID()" class="md-swatch" v-for="(swatch, index) in colorValues" :key="index" :style="swatch.toStyle()" :contrast="swatch.accessibility()" :base="swatch.isBaseColor()"  :disabled="disabled(swatch.toString())">
                        <input type="checkbox" :id="swatch.toID()" :value="swatch.toString()" v-model="selectedValues" :disabled="disabled(swatch.toString())">
                        <md-swatchlabel><md-swatchkey>{{swatch.key}}</md-swatchkey><md-swatchvalue>{{swatch.toString()}}</md-swatchvalue></md-swatchlabel>
                    </label>
                </md-colorlist>
            </template>
        </md-sheetbody>
    </md-sheet>
</template>

<script>
import { computed, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import MDText from '@/components/MDText.vue'
import Swatch from '@/classes/swatch'
import tinycolor from 'tinycolor2'

export default {
    name: "MaterialColorPicker",
    components: {MDText},
    props: {
        id: {
            type: String,
            default() {
                return null
            }
        },
        title: {
            type: String,
            default() {
                return 'Untitled'
            }
        },
        value: {
            type: String,
            default() {
                return null
            }
        },
        selections: {
            type: String,
            default() {
                return null
            }
        },
        selectionsfield: {
            type: String,
            default() {
                return null
            }
        },
        field: {
            type: String,
            default() {
                return null
            }
        }
    },

    setup(props, {emit}) {
        const maxSelections         = 3
        const selectedValues        = ref([])
        const colorValues           = ref([])
        const targetField           = ref(null)
        const targetSelectionsField = ref(null)

        const fieldName = computed(() => {
            return props.field ?? null
        })

        const value = computed({
            get: () => {
                
                return props.value
            },
            set: ( value ) => {
                props.value = value // example write directly to property
                selectedValues.value = [] // Reset selections
                // if( !targetField.value ) {
                //     targetField.value = document.querySelector(`#${fieldName.value}`)
                // }

                targetField.value.value = value
                targetField.value.classList.add('dirty') // Mark the field as changed

                calculateColors()

                emit( 'update:value', value )
            }
        })

        const disabled = ( value ) => {
            return (selectedValues.value.length >= maxSelections && selectedValues.value.indexOf(value) == -1) ? true : null
        }

        // Component methods
        const multiply = (rgb1, rgb2) => {
            rgb1.b = Math.floor(rgb1.b * rgb2.b / 255)
            rgb1.g = Math.floor(rgb1.g * rgb2.g / 255)
            rgb1.r = Math.floor(rgb1.r * rgb2.r / 255)
            return tinycolor('rgb ' + rgb1.r + ' ' + rgb1.g + ' ' + rgb1.b)
        }

        const calculateColors = () => {
            if ( !props.value || !targetField.value ) return false

            // Prioritize the saved colour value as the base color to
            // deal with SilverStripe's field state/value not changing
            // after a save, which requires a re-save to reload the field
            let hex         = (targetField.value?.value != props.value ) ? targetField.value?.value ?? props.value : props.value
            
            let baseLight   = tinycolor('#ffffff')
            let baseDark    = multiply(tinycolor(hex).toRgb(), tinycolor(hex).toRgb())
            let baseTriad   = tinycolor(hex).tetrad()
            let swatches    = [
                new Swatch({key:'50', value: tinycolor.mix(baseLight, hex, 12)}),
                new Swatch({key:'100', value: tinycolor.mix(baseLight, hex, 30)}),
                new Swatch({key:'200', value: tinycolor.mix(baseLight, hex, 50)}),
                new Swatch({key:'300', value: tinycolor.mix(baseLight, hex, 70)}),
                new Swatch({key:'400', value: tinycolor.mix(baseLight, hex, 85)}),
                new Swatch({key:'500', value: tinycolor.mix(baseLight, hex, 100)}),
                new Swatch({key:'600', value: tinycolor.mix(baseDark, hex, 87)}),
                new Swatch({key:'700', value: tinycolor.mix(baseDark, hex, 70)}),
                new Swatch({key:'800', value: tinycolor.mix(baseDark, hex, 54)}),
                new Swatch({key:'900', value: tinycolor.mix(baseDark, hex, 25)}),
                new Swatch({key:'A100', value: tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(65)}),
                new Swatch({key:'A200', value: tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(55)}),
                new Swatch({key:'A400', value: tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(45)}),
                new Swatch({key:'A700', value: tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(40)})
            ];

            return colorValues.value = swatches
        }

        const serialize = () => {
            return targetSelectionsField.value.value = !!selectedValues.value ? JSON.stringify([
                ...selectedValues.value
            ]) : ''
        }

        const getColorByKey = ( key ) => {
            return colorValues.value.filter( item => item.key == key )
        }

        const init = () => {
            // Capture the SS field that will hold the output
            targetField.value = !targetField.value ? document.querySelector(`#${fieldName.value}`) : targetField.value

            // Capture the SS field that will hold the selections
            targetSelectionsField.value = !targetSelectionsField.value ? document.querySelector(`#${props.selectionsfield}`) : targetSelectionsField.value

            calculateColors()
            let baseColor = getColorByKey('50')

            // Only load selections if the base color of the calculated colors contain
            // the same value as the saved/initial color, otherwise clear the
            // selections and start the selection process over again
            if( !!baseColor && !baseColor.toString() == targetField.value?.value ) {
                selectedValues.value = JSON.parse( props.selections )
            }else{
                selectedValues.value = []
                value.value = (targetField.value?.value != props.value ) ? targetField.value?.value ?? props.value : props.value
            }

            // Do the same for selections
            if( targetSelectionsField.value?.value ) {
                selectedValues.value = JSON.parse( targetSelectionsField.value.value )
            }
        }

        // lifecycle hooks
        onBeforeMount( () => {
        })

        onMounted( () => {
            init();
        })

        onBeforeUpdate( () => {
        })

        onUpdated( () => {
            serialize()
        })

        return {
            fieldName,
            targetField,
            selectedValues,
            colorValues,
            disabled,
            value
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/material/mdcolorlist.scss";
</style>
