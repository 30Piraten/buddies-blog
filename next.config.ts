import nextMdx from "@next/mdx"

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [],
  },
})

const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
})

export default nextConfig;
