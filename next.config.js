/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exclude Payload CMS server packages from being bundled
  serverExternalPackages: [
    'payload',
    '@payloadcms/db-sqlite',
    '@payloadcms/drizzle',
    'drizzle-kit',
    'drizzle-orm',
    'better-sqlite3',
    'sharp',
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude Payload CMS server packages from bundling
      config.externals = [
        ...config.externals,
        'payload',
        '@payloadcms/db-sqlite',
        '@payloadcms/drizzle',
        'drizzle-kit',
        'drizzle-orm',
        'better-sqlite3',
      ]
    }

    return config
  },
}

module.exports = nextConfig
