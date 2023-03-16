/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['soundscape-website.local', 'localhost' ] // <== Domain name
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
