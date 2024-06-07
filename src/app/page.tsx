import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>
        ЖОПА
      </Button>
    </main>
  );
}
