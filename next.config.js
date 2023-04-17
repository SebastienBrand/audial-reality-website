/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['soundscape-website.local', 'localhost', 'soundscapewebs.wpengine.com' ] // <== Domain name
  },
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
  async redirects() {
    return (process.env.ENVIORNMENT === "prod") ? [
               {
                   source: '/',
                   destination: '/join-us',
                   permanent: true,
                },
           ] : []
   },
}

module.exports = nextConfig
