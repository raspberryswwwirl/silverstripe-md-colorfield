import tinycolor from 'tinycolor2'

export default class Swatch {
    constructor(props) {
        this.__key = 'key' in props ? props.key : null
        this.__value = 'value' in props ? this.validate( props.value ) : null
        this.__color = {
            light: tinycolor('#eef0f4'),
            dark: tinycolor('#303b4d'),
        }
        this.__id = `Swatch-${this.__key}-${this.__value.toHex()}`
    }

    get key() {
        return this.__key
    }

    set key( value ) {
        this.__key = value
    }

    get value() {
        return this.__value
    }

    set value( value ) {
        this.__value = value
    }

    validate( value ) {
        let c = tinycolor(value)
        return c.isValid() ? c : false
    }

    accessibility() {
        let backgroundColor = this.__value.isDark() ? this.__color.light : this.__color.dark
        let foregroundColor = this.__value
        let score           = tinycolor.isReadable(foregroundColor,backgroundColor)
        return !score ? 'poor' : null
    }

    isBaseColor() {
        return this.__key == '500'
    }

    toID() {
        return this.__id
    }

    toString() {
        return !!this.__value ? this.__value.toHexString() : null
    }

    toStyle() {
        return {
            backgroundColor:  this.toString(),
            color: this.__value.isDark() ? this.__color.light.toHexString() : this.__color.dark.toHexString()
        }
    }
}
