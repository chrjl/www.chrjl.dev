import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

const Markdown = ({ children }: { children: string }) => (
  <ReactMarkdown
    rehypePlugins={[rehypeRaw, [rehypeExternalLinks, { target: '_blank' }]]}
  >
    {children}
  </ReactMarkdown>
);

export default Markdown;
