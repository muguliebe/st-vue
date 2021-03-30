module.exports = {
  lintOnSave: false,
  outputDir: process.env.NODE_ENV === 'prd'
    ? '../www/stvue'
    : 'dist'
}
