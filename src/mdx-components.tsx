import { MDXComponents  } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        // Your components here
        inlineCode: ({children}) => <code>{children}</code>,
        
    }
}