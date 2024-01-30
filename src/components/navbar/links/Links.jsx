'use client'
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "Services",
    path: "/about",
  },
  {
    title: "Clients",
    path: "/clients",
  },
  {
    title: "Contact",
    path: "mailto:info@thebulldogant.com",
  }
  
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          link.path.startsWith("mailto:") ? (
            <a href={link.path} key={link.title} className={styles.link}>{link.title}</a>
          ) : (
            <NavLink item={link} key={link.title} />
          )
        ))}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            link.path.startsWith("mailto:") ? (
              <a href={link.path} key={link.title} className={styles.link}>{link.title}</a>
            ) : (
              <NavLink item={link} key={link.title} />
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
