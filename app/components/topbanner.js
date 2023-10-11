import styles from "../../app/page.module.css";
import { Link, Text } from "@chakra-ui/react";

export default function TopBanner() {
  return (
    <div className={styles.box}>
      <Text>
        Strength isn&rsquo;t always about size.{" "}
        <Link color="teal.500" href="#"></Link>
      </Text>
    </div>
  );
}
