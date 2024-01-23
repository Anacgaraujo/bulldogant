import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Boost your online presence</h1>
        <p className={styles.desc}>
          Online marketing is no longer exclusive for big companies
        </p>
        <p className={styles.descTwo}>
          In today&apos;s digital landscape, the power of online marketing is no
          longer a privilege reserved for the giants of the business world. <br/><br/> At
          <span style={{fontWeight: "400"}}>The Bulldog Ant</span>, we firmly believe that the digital realm is an equal
          playing field where <span style={{fontWeight: "400"}}>small businesses can stand tall and make a
          significant impact.</span><br/><br/>Our tailored online marketing strategies are
          designed to prove that size is no barrier to success. Leveraging
          <span style={{fontWeight: "400"}}>cutting-edge tools and creative tactics</span>, we empower businesses of all
          sizes to harness the vast potential of the internet, ensuring that
          even the smallest companies can be <span style={{fontWeight: "400"}}>&apos;Bulldog Tough&apos;</span> in their digital
          presence.
        </p>
        {/* <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div> */}
        {/* <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image src="/thebulldogantlogoqithsloganWHITETransparent.png" alt="The Bulldog Ant Logo - a half bulldog and half ant mascot to symmbolize strenght in small packages" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
