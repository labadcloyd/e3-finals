import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/layouts/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
    </div>
  );
}
