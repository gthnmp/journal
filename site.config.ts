import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '1193256e03d34fe89689c490a5f9d53b',

  name: 'Public Journal',
  domain: 'journal.gathanmahesa.com',
  author: 'Gathan Mahesa',

  description: 'Gathan Mahesa personal public journal',

  twitter: 'gathanmahesa',
  github: 'gthnmp',
  linkedin: 'gathan',
  portfolio:'gathan.vercel.app',

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,

  isRedisEnabled: false,

  pageUrlOverrides: null,

  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
