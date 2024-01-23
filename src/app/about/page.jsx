import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          <span style={{ fontWeight: "400", color: "var(--btn)" }}>
            Digital Marketing
          </span>{" "}
          - integrated approach to digital marketing, blending content
          development, online advertising, social media, SEO and website
          optimization to improve reach and revenue.
        </p>
        <p className={styles.desc}>
          <span style={{ fontWeight: "400", color: "var(--btn)" }}>
            Web Design and Develoment
          </span>{" "}
          - Unleash your digital potential with our bespoke Web Design and
          Development services, where creativity meets functionality.
        </p>
        <p className={styles.desc}>
          <span style={{ fontWeight: "400", color: "var(--btn)" }}>
            eCommerce Marketing
          </span>{" "}
          - Elevate your online sales with our targeted eCommerce Marketing
          strategies, designed to drive growth and maximize revenue.{" "}
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Special Service - Offshore Video Production</h1>
            <p>
              Shooting videos and photos in Brazil offers businesses an
              unmatched blend of quality and cost-effectiveness. With its
              diverse landscapes, vibrant cities, and rich cultural backdrops,
              Brazil provides a plethora of cinematic locations without the high
              price tags found in traditional media hubs. Combined with the
              country’s skilled local talent and competitive production costs,
              businesses can achieve premium visual content while significantly
              cutting expenses. Choosing Brazil for your next shoot not only
              elevates your visuals but also ensures your budget goes further.
            </p>
            <div className={styles.imgContainerbr}>
              <Image
                src="/picpegalanding.png"
                alt="About Image"
                fill
                className={styles.imgbr}
              />
            </div>
          </div>
          {/* <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div> */}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
