import { useState } from 'react';

import Markdown from './ReactMarkdown';
import styles from './Content.module.scss';

const Details = ({
  summary,
  content,
}: {
  summary: string;
  content: string[];
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      event.preventDefault();
      setOpen((open) => !open);
    }
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <details className={styles.container} open={open}>
      <summary onClick={handleOpen}>
        <section>
          <Markdown>{summary}</Markdown>
        </section>

        {!open && (
          <div>
            <button className={styles.anchor}>Read more...</button>
          </div>
        )}
      </summary>

      <section className={styles['details-content']} onClick={handleClose}>
        {content.map((item, i) => (
          <Markdown key={i}>{item}</Markdown>
        ))}
      </section>
    </details>
  );
};

const Content = ({ body, target }: { body?: string; target?: string }) => {
  if (!body) {
    return;
  }

  const [summary, ...content] = body?.split('...');

  return content.length > 0 ? (
    <Details summary={summary} content={content} />
  ) : (
    <div className={styles.container}>
      <section>
        <Markdown>{summary}</Markdown>
      </section>

      {target ? (
        <div>
          <a target="_blank" href={target}>
            Read more...
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Content;
