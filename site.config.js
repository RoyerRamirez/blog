const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Royer Ramirez Ruiz',
    image: '/avatar.jpg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Sr. DevOps Engineer @ Rivian',
    bio: 'Welcome to my technical blog where you can find my curated notes for everything DevOps.',
    email: 'info@royerramirez.com',
    linkedin: 'royerramirezruiz',
    github: 'https://github.com/royerramirez',
    instagram: '_royer',
    website: "https://royerramirez.com"
  },
  projects: [
    {
      name: `Camp CTL`,
      href: 'https://campctl.com'
    },
    {
      name: `Entegrity enForm`,
      href: 'https://apps.apple.com/us/app/enform/id1460769971'
    },
    {
      name: `Nature CTL`,
      href: 'https://naturectl.com'
    }
  ],
  // blog setting (required)
  blog: {
    title: "Royer's Technical Blog",
    description: "Welcome to Royer's blog!",
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://blog.royerramirez.com',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'royerramirez/blog',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' 
}
module.exports = CONFIG
