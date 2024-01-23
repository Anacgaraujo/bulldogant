import Image from "next/image";
import Link from "next/link";
import styles from "./clients.module.css"; // Make sure to create this CSS module file

export default function ClientsPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.clientsheader}>
      <h1>Our Esteemed Clients</h1>
      <p>
        At The Bulldog Ant, we take immense pride in the partnerships we&apos;ve
        nurtured and the diverse range of clients we&apos;ve served. From
        startups to established enterprises, our journey has been marked by
        collaborative successes and mutual growth. Here&apos;s a glimpse of the
        amazing clients we&apos;ve had the privilege to work with.
      </p>
      </div>
      <div className={styles.strides}>
        <div className={styles.stridestext}>
      <h2>Making Big Strides with Small Businesses</h2>
      <p>
        We&apos;ve empowered numerous small businesses to punch above their
        weight in the digital world. Our bespoke strategies have helped these
        agile and passionate companies carve out their own space in competitive
        markets.
      </p>
      </div>
      <div className={styles.stridesimg}>
      <Image
              src="/digitalmarketing.jpg"
              alt="Client's Business"
              width={400} 
              height={300} 
              layout="responsive"
            />
      </div>
      </div>

      <div className={styles.clientGrid}>
        {/* Repeat this block for each client */}
        <Link href="https://thecafecomleitephx.com" target="_blank">
          <div className={styles.clientLink}>
            <Image
              src="/cafecomleite.png"
              alt="Client's Business"
              width={300} // Set the correct width
              height={200} // Set the correct height
              layout="responsive"
            />
            <h3>Café com Leite</h3>
            <p>
              - P.O.S. Delivery and PickUp system setup <br />- Page
              Optimization
            </p>
          </div>
        </Link>
        <Link href="https://hue-chemist.com/" target="_blank">
          <div className={styles.clientLink}>
            <Image
              src="/huechemist.png"
              alt="Client's Business"
              width={300} // Set the correct width
              height={200} // Set the correct height
              layout="responsive"
            />
            <h3>Hue-Chemist</h3>
            <p>
              - Personalized plug-ins design and implementation <br />
              - SEO audit and On-page SEO <br />- Implementatio of third party
              plugins and appointment system setup
            </p>
          </div>
        </Link>
        <Link href="https://getmeout.vercel.app" target="_blank">
          <div className={styles.clientLink}>
            <Image
              src="/getmeout.png"
              alt="Client's Business"
              width={300} // Set the correct width
              height={200} // Set the correct height
              layout="responsive"
            />
            <h3>GetMeOut Now</h3>
            <p>
              - App development
              <br />
              - Landing page development <br />- SEO Global campaign
            </p>
          </div>
        </Link>
        <Link href="https://emilysfavoritebooks.com" target="_blank">
          <div className={styles.clientLink}>
            <Image
              src="/emilys.png"
              alt="Client's Business"
              width={300} // Set the correct width
              height={200} // Set the correct height
              layout="responsive"
            />
            <h3>Emily&apos;s Favorite Books</h3>
            <p>
              - Shopify Design and Development <br />
              - Third party product provider setup <br />
              - SEO <br />- Social Media Management
            </p>
          </div>
        </Link>
        <Link href="https://picpega.vercel.app" target="_blank">
          <div className={styles.clientLink}>
            <Image
              src="/picpega.png"
              alt="Client's Business"
              width={300} // Set the correct width
              height={200} // Set the correct height
              layout="responsive"
            />
            <h3>Pic Pega</h3>
            <p>
              - Website Design and Development
              <br />
              - SEO
              <br />- Social Media Management.
            </p>
          </div>
        </Link>
        <Link href="https://ornate-sfogliatella-603666.netlify.app"
              target="_blank">
          <div className={styles.clientLink}>
            <Image
              src="/cryptown.png"
              alt="Client's Business"
              width={300} // Set the correct width
              height={200} // Set the correct height
              layout="responsive"
            />
            <h3>Cryptown</h3>
            <p>
            - Website Design and Development<br />

- API implementation
            </p>
          </div>
        </Link>
      </div>

      <h2>Join Our Growing Family of Successful Clients</h2>
      <p>
        Ready to transform your digital presence? Be it enhancing your website,
        crafting a new digital marketing strategy, or optimizing your SEO, The
        Bulldog Ant is here to make your brand stand out.
      </p>
      <Link href="/contact">
        {/* <a className={styles.contactButton}>CONTACT US</a> */}
      </Link>
    </div>
  );
}
