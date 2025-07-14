import styles from './IconLink.module.scss';

interface Props {
  href: string;
  children?: React.ReactNode;
}

const faviconEndpoint = (url: string): string =>
  `https://icons.duckduckgo.com/ip4/${new URL(url).hostname}.ico`;

const IconLink = ({ href, children }: Props) =>
  children ? (
    <span className={styles.link}>
      <img height="100%" width="auto" src={faviconEndpoint(href)}></img>
      <a target="_blank" href={href}>
        {children}
      </a>
    </span>
  ) : (
    <a target="_blank" href={href} className={styles.image}>
      <img height="100%" width="auto" src={faviconEndpoint(href)}></img>
    </a>
  );

export default IconLink;
