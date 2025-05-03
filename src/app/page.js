import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/layouts/Navbar/Navbar";
import datasetimg from "../../public/images/dataset.png";

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
        <p>
          <ul>
            <li>
              Rank - The country's position based on its overall happiness
              score.
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
              Freedom - Indicates how free people feel to make life choices,
              such as careers or personal paths.{" "}
            </li>
            <li>
              Trust - Measures citizens' trust in their government, influenced
              by corruption and performance.{" "}
            </li>
            <li>
              Generosity - Shows how willing citizens are to help others or give
              to charitable causes.
            </li>
          </ul>
        </p>

        <h5>Dataset Used</h5>
        <p>
          The World Happiness Report ranks countries based on how happy their
          people are, using data on things like health, income, and social
          support.
        </p>
        <Image src={datasetimg} width={1080} height={400} alt='dataset' />
      </div>
    </div>
  );
}
