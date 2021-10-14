// import { defineConfig } from 'vite'
import devConfig from './config/dev.vite.config'
import testConfig from './config/test.vite.config'
import prodConfig from './config/prod.vite.config'

let viteConfig = prodConfig;
// 根据环境变量加载配置文件
switch(process.env.NODE_ENV) {
  case 'development': {
    viteConfig = devConfig;
    break;
  }
  case 'test': {
    viteConfig = testConfig;
    break;
  }
  case 'production': {
    viteConfig = prodConfig;
    break;
  }
}

console.log('---viteConfig---:', JSON.stringify(viteConfig))
// https://vitejs.dev/config/
export default viteConfig;
