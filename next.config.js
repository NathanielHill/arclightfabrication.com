const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const getRoutes = require('./routes')
const { ANALYZE } = process.env
const { EnvironmentPlugin } = require('webpack')
const { now: { env } } = require('./package.json')

module.exports = {
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    config.plugins.push(new EnvironmentPlugin(env))
    return config
  },
  exportPathMap: getRoutes,
  exportTrailingSlashes: false
}
