import styles from './Header.module.scss';

interface Props {
  title: string;
  subtitle?: string | null;
  subsubtitle?: string | null;
  description?: string | null;
  links?: {
    url: string;
    text?: string;
  }[];
}

export default function Header({
  title,
  subtitle,
  subsubtitle,
  description,
  links,
}: Props) {
  const linkItems = links?.map(({ url, text }, i) => (
    <>
      <img
        height="100%"
        width="auto"
        src={`https://icons.duckduckgo.com/ip4/${new URL(url).hostname}.ico`}
      ></img>
      <a target="_blank" href={url}>
        {text || url}
      </a>
    </>
  ));

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>

      {subtitle ? <h2 className={styles.subtitle}>{subtitle}</h2> : null}

      {subsubtitle ? (
        <h3 className={styles.subsubtitle}>{subsubtitle}</h3>
      ) : null}

      <h4 className={styles['abstract-responsive']}>
        <ul>
          {description ? (
            <li className={styles.description}>{description}</li>
          ) : null}

          {linkItems?.length
            ? linkItems.map((li, i) => (
                <li key={i} className={styles.link}>
                  {li}
                </li>
              ))
            : null}
        </ul>
      </h4>
    </header>
  );
}
