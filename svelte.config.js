const autoPreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: autoPreprocess({
    typescript: {
      tsconfigFile: './tsconfig.json',
    }
  })
}
