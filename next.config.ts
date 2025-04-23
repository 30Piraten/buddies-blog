import nextMdx from "@next/mdx"
// import rehypeHighlight from "rehype-highlight";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    // rehypePlugins : [[rehypeHighlight, {}]],
  },
})

const nextConfig = withMdx({
  transpilePackages: ['next-mdx-remote'],
  // turbopack: {
  //   // enabled: true,
  // },

  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
})

export default nextConfig;
