import {defineConfig, Terser} from 'vite'
import vue from '@vitejs/plugin-vue'
import bable from 'vite-babel-plugin'
import path from 'path'

const __path = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
// https://github.com/vitejs/vite/issues/378#issuecomment-789366197
export default defineConfig({
    plugins: [vue(), bable()],
    resolve: {
        alias : {
            '@': __path//path.resolve(__dirname, './src')
        },
    },
    css: {
        loaderOptions: {
            scss: {}
        },
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                charset: false,
                additionalData: `
                    @import './src/styles/abstracts/_functions.scss';
                    @import './src/styles/abstracts/_variables.scss';
                    @import './src/styles/abstracts/_mixins.scss';
                `
            }
        }
    },
    build: {
        target: 'esnext',
        minify: false,
        sourcemap: true,
        filenameHashing: false,
        lintOnSave: true,
        rollupOptions: {
            input: {
                'main': './src/main.js'
            },
            output: {
              entryFileNames: `assets/[name].js`,
              chunkFileNames: `assets/[name].js`,
              assetFileNames: `assets/[name].[ext]`
            }
        }        
    },
})
