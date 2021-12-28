module.exports = {
  async redirects() {
    return [
      // Redirect Original tech Blogs and Tools to my new tech site (webdev.box33.net)
      // Blogs
      {
        source: '/blog/:slug*',
        destination: 'https://webdev.box33.net/blog/:slug*',
        permanent: true
      },
      // Tools
      {
        source: '/tools/:slug*',
        destination: 'https://webdev.box33.net/tools/:slug*',
        permanent: true
      }
    ]
  },
}
