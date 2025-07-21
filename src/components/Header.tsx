import IconLink from './IconLink';
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
  return (
    <>
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

          {links?.length
            ? links.map(({ url, text }, i) => (
                <li key={i}>
                  <IconLink href={url}>{text || url}</IconLink>
                </li>
              ))
            : null}
        </ul>
      </h4>
    </>
  );
}
