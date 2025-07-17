import Content from '../components/Content';
import IconLink from './IconLink';
import styles from './Card.module.scss';

const Keywords = ({ keywords }: { keywords: string[] }) => (
  <ul className={styles.keywords}>
    {keywords.map((keyword, i) => (
      <li key={i}>{keyword}</li>
    ))}
  </ul>
);

const Links = ({ links }: { links: string[] }) => (
  <ul className={styles.links}>
    {links.map((link, i) => (
      <li key={i}>
        <IconLink href={link}>{link}</IconLink>
      </li>
    ))}
  </ul>
);

interface Props {
  title: string;
  keywords?: string[];
  links?: string[];
  target?: string;
  order?: number;
  body?: string;
}

const Card = ({ title, keywords, links, target, order = 0, body }: Props) => {
  return (
    <div className={styles.container} style={{ order }}>
      <header>
        <h1 className={styles.title}>{title}</h1>
        {keywords ? <Keywords keywords={keywords} /> : null}
      </header>

      <article className={styles.article}>
        <Content body={body} target={target} />
      </article>

      {links ? (
        <footer>
          <Links links={links} />
        </footer>
      ) : null}
    </div>
  );
};

export default Card;
