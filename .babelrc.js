module.exports = {
  env: {
    production: {
      presets: [
        'next/babel'
      ],
      plugins: [
        'babel-plugin-transform-inline-environment-variables',
        'babel-plugin-wildcard',
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: true,
            preprocess: false
          }
        ]
      ]
    },
    development: {
      presets: [
        'next/babel'
      ],
      plugins: [
        'babel-plugin-inline-dotenv',
        'babel-plugin-wildcard',
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: true,
            preprocess: false
          }
        ]
      ]
    },
    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        'babel-plugin-wildcard'
      ]
    }
  }
}
