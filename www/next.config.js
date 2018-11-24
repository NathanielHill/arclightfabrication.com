const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const fs = require('fs')
const nextOffline = require('next-offline')
const path = require('path')
const withPlugins = require('next-compose-plugins')

const copyFile = require('util').promisify(fs.copyFile)

const rootAssetPath = 'rootAssets'

const plugins = [[nextOffline, ['!', PHASE_DEVELOPMENT_SERVER]]]

if (typeof process.env.BUNDLE_ANALYZE !== 'undefined') {
  plugins.push([require('@zeit/next-bundle-analyzer'), {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: { browser: { analyzerHost: 'localhost' } }
  }])
}

module.exports = withPlugins(plugins,
  {
    publicRuntimeConfig: {
      NODE_ENV: process.env.NODE_ENV,
      ANALYTICS_TOKEN: process.env.ANALYTICS_TOKEN,
      INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
      RECAPTCHA_TOKEN: process.env.RECAPTCHA_TOKEN
    },
    webpack: config => {
      /*
        This allows us to directly import 'components/*' and 'lib/*' instead of
        annoying relative imports that make refactoring a pain. Also 'assets/*'
      */
      config.resolve.alias = {
        assets: path.resolve(__dirname, './assets'),
        components: path.resolve(__dirname, './components'),
        lib: path.resolve(__dirname, './lib')
      }
      config.module.rules.push({
        test: /\.(jpe?g|png|gif|svg|woff2?)$/,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name]-[hash].[ext]'
          }
        }]
      })
      return config
    },
    exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
      if (dev) {
        return defaultPathMap
      }
      fs.readdirSync(rootAssetPath).forEach(async file => copyFile(path.join(dir, rootAssetPath + '/' + file), path.join(outDir, file)))
      return defaultPathMap
    }
  }
)
