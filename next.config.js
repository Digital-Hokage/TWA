/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for shared/FTP hosting (no Node.js server on the host).
  // `next build` now produces a fully static site in the ./out folder.
  output: 'export',
  // Every route is emitted as <route>/index.html — required for clean URLs
  // on Apache/LiteSpeed shared hosting (see public/.htaccess).
  trailingSlash: true,
  images: {
    // The host cannot run Next.js' on-the-fly image optimizer, so serve images as-is.
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // NOTE: The previous async headers() block was removed — custom response
  // headers are NOT supported with `output: 'export'` (there is no server to
  // set them). Security + caching headers are now set in public/.htaccess,
  // which is copied into ./out and uploaded to the host.
}

module.exports = nextConfig
