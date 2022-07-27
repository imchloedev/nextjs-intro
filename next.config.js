// const API_KEY = "09cd6d519eaa550f9712a7241ec0b2b4";

// 환경 변수로 감추기

const API_KEY = process.env.API_KEY;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects () {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      }
    ]
  },

  async rewrites () {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      }
    ]
  }
}

module.exports = nextConfig


