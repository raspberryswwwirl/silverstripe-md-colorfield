import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const __production = () => {
    return !!(process.env.NODE_ENV === 'production')
}

const __ecma = '2015'

/**
 * @link https://terser.org/docs/api-reference#minify-options
 */
const __terserOptions = {
    compress: {
        defaults: false,
        drop_console: true,
        unused: false
    },
    mangle: {
        eval: true,
        module: true,
        toplevel: true,
        safari10: true,
        properties: false
    },
    ecma: __ecma,
    format: {
        ecma: __ecma,
        comments: false,
    }
}

// https://vitejs.dev/config/
// https://github.com/vitejs/vite/issues/378#issuecomment-789366197
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias : {
            '@': path.resolve(__dirname, './src')
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
        minify: __production() ? 'terser' : false,
        sourcemap: true,
        filenameHashing: false,
        lintOnSave: true,
        terserOptions: __terserOptions,
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
