'use strict';

module.exports = {
  theme: {
    slug: 'woolymar',
    name: 'Woolymar',
    author: 'Matthew Peters'
  },
  dev: {
    browserSync: {
      live: true,
      proxyURL: 'wprig:8888/',
      bypassPort: '8181'
    },
    browserslist: [
      // See https://github.com/browserslist/browserslist
      '> 1%',
      'last 2 versions'
    ],
    debug: {
      styles: true, // Render verbose CSS for debugging.
      scripts: false // Render verbose JS for debugging.
    }
  },
  export: {
    compress: true
  }
};
