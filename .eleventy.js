

// buat ngopi file css ke _site biar dibaca saat dirender
// karena gak otomatis
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
      passthroughFileCopy: true
    }
  }