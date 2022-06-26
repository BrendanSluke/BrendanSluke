import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./header.module.css";
import Image from "next/image";

export function Header({ name, home }: { name: string; home: boolean }) {
  const profilePictureImageSrcPath =
    "/images/mercedes-and-brendan-one-world-trade-center-observatory.png";

  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src={profilePictureImageSrcPath}
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src={profilePictureImageSrcPath}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
  );
}
