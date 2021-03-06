module.exports = {
  'presets': [
    ['@babel/preset-env', {
      'modules': false
    }],
    ['@babel/preset-react']
  ],
  'plugins': [
    [
      '@babel/plugin-transform-runtime',
      {
        // Since Webpack know how to deal with the ES6 modules,
        // we don't transform it.
        'useESModules': true
      }
    ]
  ]
}