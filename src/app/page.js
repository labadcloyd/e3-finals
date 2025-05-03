import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/layouts/Navbar/Navbar";
import datasetimg from "../../public/images/dataset.png";
import worldhappiness from "../../public/images/worldhappiness.png";
import ph from "../../public/images/ph.png";
import top10 from "../../public/images/top10.png";
import worldmap from "../../public/images/worldmap.png";
import gdp from "../../public/images/gdp.png";
import freedom from "../../public/images/freedom.png";
import trust from "../../public/images/trust.png";
import family from "../../public/images/family.png";
import correlation from "../../public/images/correlation.png";
import Footer from "@/layouts/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <h5>Dataset Used</h5>
        <p>
          The World Happiness Report ranks countries based on how happy their
          people are, using data on things like health, income, and social
          support.
        </p>
        <p>
          The happiness scores and rankings come from data collected by the
          Gallup World Poll. Theyre based on responses to a key question called
          the Cantril ladder, where people are asked to rate their current life
          on a scale from 0 to 10—0 being the worst possible life and 10 being
          the best.
        </p>
        <Image src={datasetimg} width={1080} height={300} alt='dataset' />

        <h5>Dataset Content</h5>
        <ul>
          <li>
            Rank - The country's position based on its overall happiness score.
          </li>
          <li>Score - The happiness score given to each country.</li>
          <li>
            GDP - Represents the country's economic output (Gross Domestic
            Product).
          </li>
          <li>
            Family - Measures the level of social and family support available
            to individuals.
          </li>
          <li>
            Life Expectancy - Reflects the average health and lifespan of the
            population.
          </li>
          <li>
            Freedom - Indicates how free people feel to make life choices, such
            as careers or personal paths.{" "}
          </li>
          <li>
            Trust - Measures citizens' trust in their government, influenced by
            corruption and performance.{" "}
          </li>
          <li>
            Generosity - Shows how willing citizens are to help others or give
            to charitable causes.
          </li>
        </ul>

        <h5>Global Happiness Through 2015-2019</h5>
        <div className={styles.center}>
          <Image
            src={worldhappiness}
            width={680}
            height={500}
            alt='worldhappiness'
          />
        </div>

        <h5>Philippine Hapiness Through 2015-2019</h5>
        <div className={styles.center}>
          <Image src={ph} width={680} height={500} alt='ph' />
        </div>

        <h5>Happiness by Nation Through 2015-2019</h5>
        <div className={styles.center}>
          <Image src={top10} width={980} height={500} alt='top10' />
        </div>

        <h5>World Map Happiness Scores</h5>
        <div className={styles.center}>
          <Image src={worldmap} width={1080} height={500} alt='worldmap' />
        </div>

        <h5>Happiness Score vs. GDP</h5>
        <div className={styles.center}>
          <Image src={gdp} width={700} height={500} alt='gdp' />
        </div>

        <h5>Happiness Score vs. Freedom</h5>
        <div className={styles.center}>
          <Image src={freedom} width={700} height={500} alt='freedom' />
        </div>

        <h5>Happiness Score vs. Trust</h5>
        <div className={styles.center}>
          <Image src={trust} width={700} height={500} alt='trust' />
        </div>

        <h5>Happiness Score vs. Family</h5>
        <div className={styles.center}>
          <Image src={family} width={700} height={500} alt='family' />
        </div>

        <h5>Correlation Matrix</h5>
        <div className={styles.center}>
          <Image src={correlation} width={700} height={500} alt='correlation' />
        </div>
      </div>

      <Footer />
    </div>
  );
}
