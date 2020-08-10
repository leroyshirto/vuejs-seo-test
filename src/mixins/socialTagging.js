export default {
  methods: {
    createMetaTag (metaKey, metaKeyValue, content) {
      const meta = document.createElement('meta')
      meta.setAttribute(metaKey, metaKeyValue)
      meta.setAttribute('content', content)
      document.getElementsByTagName('head')[0].appendChild(meta)
    },
    updateMetaTag (metaKey, metaKeyValue, content) {
      const metaTag = document.querySelector(`meta[${metaKey}="${metaKeyValue}"]`)
      if (metaTag) {
        metaTag.setAttribute('content', content)
      } else {
        this.createMetaTag(metaKey, metaKeyValue, content)
      }
    },
    updateSocialTags (socialData) {
      const {
        title = 'Vue SEO test',
        description = '',
        image = '',
        imageAlt = 'Vue SEO test',
        url = 'url',
        siteName = 'Vue SEO test'
      } = socialData

      document.title = title
      // Essential META Tags
      // <meta property="og:title" content="European Travel Destinations">
      // <meta property="og:description" content="Offering tour packages for individuals or groups.">
      // <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
      // <meta property="og:url" content="http://euro-travel-example.com/index.htm">
      // <meta name="twitter:card" content="summary_large_image"></meta>
      this.updateMetaTag('property', 'og:title', title)
      this.updateMetaTag('property', 'og:description', description)
      this.updateMetaTag('property', 'og:image', image)
      this.updateMetaTag('property', 'og:url', url)
      this.updateMetaTag('name', 'twitter:card', 'summary_large_image')

      // Non-Essential, But Recommended

      // <meta property="og:site_name" content="European Travel, Inc.">
      // <meta name="twitter:image:alt" content="Alt text for image"></meta>
      this.updateMetaTag('property', 'og:site_name', siteName)
      this.updateMetaTag('name', 'twitter:image:alt', imageAlt)
    }
  }
}
