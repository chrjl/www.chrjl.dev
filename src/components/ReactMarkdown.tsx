import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';
import {
  remarkDefinitionList,
  defListHastHandlers,
} from 'remark-definition-list';

const Markdown = ({ children }: { children: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkDefinitionList]}
    rehypePlugins={[rehypeRaw, [rehypeExternalLinks, { target: '_blank' }]]}
    remarkRehypeOptions={{ handlers: defListHastHandlers }}
  >
    {children}
  </ReactMarkdown>
);

export default Markdown;
