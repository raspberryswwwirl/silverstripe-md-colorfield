<template>
    <component :is="tag" :wrap="wrap" :gutters="gutters" :scale="scale"><slot>{{ label }}</slot></component>
</template>

<script>
export default {
    name: "MDText",
    props: {
        label: {
            type: String,
            default() {
                return 'Untitled';
            }            
        },
        wrap: {
            type: Boolean,
            default() {
                return true;
            }
        },
        gutters: {
            type: Number,
            default() {
                return 0;
            }
        },
        scale: {
            type: String,
            default() {
                return 'Body1'
            }
        },
        tag: {
            type: String,
            default() {
                return 'mdtext'
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/material/mdtext.scss';
</style>
