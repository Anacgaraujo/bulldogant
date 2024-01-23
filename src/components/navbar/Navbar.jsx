import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <span className={styles.logo}>The Bulldog Ant</span>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
