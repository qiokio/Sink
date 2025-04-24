export default defineAppConfig({
  title: 'Sink',
  email: '/',
  github: 'https://github.com/qiokio/sink',
  twitter: '/',
  telegram: '/',
  mastodon: '/',
  blog: 'https://prooo.me',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics.',
  image: '/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
