/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ml.globenewswire.com",
      "editorial.aristeguinoticias.com",
      "www.howtogeek.com",
      "editorial.aristeguinoticias.com",
      "pyxis.nymag.com",
      "img.remediosdigitales.com",
      "c.biztoc.com",
      "s.yimg.com",
    ],
  },
};

module.exports = nextConfig;
