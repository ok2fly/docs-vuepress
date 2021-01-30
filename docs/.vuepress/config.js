module.exports = {
  title: 'typescript',
  themeConfig: {
    logo: '/assets/img/logo.png',
    // navbar: false,
    displayAllHeaders: true, // 默认值：false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/aa' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Chinese', link: '/language/chinese/' },
          {
            text: 'Group1',
            items: [
              { text: 'Japanese', link: '/language/japanese/' },
              { text: 'Japanese', link: '/language/japanese/' },
              { text: 'Japanese', link: '/language/japanese/' },
            ],
          },
          {
            text: 'Group2',
            items: [
              { text: 'Japanese', link: '/language/japanese/' },
              { text: 'Japanese', link: '/language/japanese/' },
            ],
          },
        ],
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/about/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
