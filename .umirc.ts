import { defineConfig } from "umi";
import routes from './src/routes';

export default defineConfig({
  routes,
  // 开启immer,
  plugins: [
    '@umijs/plugins/dist/dva',
    '@umijs/plugins/dist/initial-state', // 初始化数据
    '@umijs/plugins/dist/model',  // 配置model
  ],
  dva: {
    // immer: true,
  },
  // 配置插件
  initialState: {},
  model: {},
  npmClient: 'pnpm',
  // 别名映射
  alias: {
    ysj: '/ysj',
  },
  // css解析自动添加前缀
  autoprefixer: {
  },
  // 点击跳转到组件上下文
  clickToComponent: {
  },
  // 数据预加载
  clientLoader: {
  },
  // css压缩
  cssMinifier: 'esbuild',
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
  // 修复引入的全局变量导致的冲突
  esbuildMinifyIIFE: true,
  // favicons
  /*
  * HTML 中会生成 <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
  * */
  favicons: ['/assets/favicon.ico'],
  // 开启hash添加build后缀
  hash: true,
  // 开启https
  /*
  * { cert: string; key: string; hosts: string[]; http2?: boolean }
  * cert 和 key 分别用于指定 cert 和 key 文件。
  * hosts 用于指定要支持 https 访问的 host，默认是 ['127.0.0.1', 'localhost']。
  * http2 用于指定是否使用 HTTP 2.0 协议，默认是 true（使用 HTTP 2.0 在 Chrome 或 Edge 浏览器中中有偶然出现 ERR_HTTP2_PROTOCOL_ERRO报错，如有遇到，建议配置为 false）。
  * */
  // https: {
  //   hosts: ['127.0.0.1', 'localhost'],
  // },
  // 设置图片是否走base64编译 的阈值 单位字节 10000(10k)
  inlineLimit: 10000,
  // js压缩
  jsMinifier: 'esbuild',
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },
  // 生成metas标签
  metas: [
    { name: 'ysj', content: '云思绝' },
    { name: 'blog', content: '博客' },
  ],
  // 开启msfu热更
  mfsu: true,
  // 反向代理
  proxy: {
    '/thinking/api': {
      'target': 'http://localhost:8080/',
      'changeOrigin': true,
      'pathRewrite': { '^/thinking/api' : '' },
    }
  },
  // 配置网页title
  //title: '云思绝',
});
