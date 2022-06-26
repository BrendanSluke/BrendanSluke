import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function JoanneSlukeBBQRecipe() {
  const title = "Joanne Sluke's BBQ Recipe";
  const description =
    "Grandma Jo made the best BBQs, here is her original recipe for the best BBQs.";

  return (
    <Layout home={false}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>

      <article>
        <Link href="#in-loving-memory-of-joanne-sluke">
          ❤️ In Loving Memory of Joanne Sluke
        </Link>
        <h1 className={utilStyles.headingXl}>
          Joanne Sluke's Homemade BBQ Recipe
        </h1>
        <p>{description}</p>

        <Image
          src="/images/recipes/joanne-sluke-bbq-recipe-card.jpg"
          alt="Joanne Sluke's BBQ Recipe Card"
          width={1159}
          height={744}
          layout="responsive"
          objectFit="contain"
        ></Image>

        <p>
          Some people call this meal <i>Sloppy Joes</i>, but in our family (and
          most of the upper midwest) we call them <i>BBQs</i>.
        </p>

        <p>
          For the longest time I thought that my mom always made the best BBQs,
          but it turns out she was using my Grandma Jo's recipe!
        </p>

        <p>
          I personally have never made the full portion of the original recipe,
          we usually just do{" "}
          <Link href="#smaller-portion-recipe">
            1/3rd of the original recipe
          </Link>{" "}
          which feeds about 2 or 3 people.
        </p>

        <h2>Grandma Jo's Original Recipe For BBQs</h2>
        <p>
          <b>Bar-B-Q - Joanne Sluke</b>
        </p>
        <hr />
        <ul>
          <li>Brown 3 lb. ground beef + onion (drain)</li>
          <li>
            Add:
            <ul>
              <li>1 cup Ketchup</li>
              <li>2 T. Brown Sugar</li>
              <li>2 T. Vinegar</li>
              <li>2 T. Mustard</li>
              <li>1 t. salt</li>
              <li>1 15oz. canned tomato sauce</li>
            </ul>
          </li>
          <li>Simmer for 1/2 hour - better if let stand longer</li>
        </ul>

        <h2 id="smaller-portion-recipe">
          Smaller Portion Recipe: 1/3rd of the Original Recipe
        </h2>
        <p>
          The original recipe makes a hefty portion of BBQs - Grandma had 5 boys
          to feed!
        </p>
        <p>
          When my wife and I make these we typically do 1/3rd of the original
          recipe and only use 1 LB of ground beef.
        </p>
        <p>
          This can feed around 3 people (or just us 2 with a BBQ or 2 for
          leftovers).
        </p>
        <p>
          For the smaller portion, we just take 1/3rd of all of the ingredients
          (e.g. 2 Tablespoons turns into 2 Teaspoons)
        </p>
        <p>
          <b>Smaller Portion Recipe</b>
        </p>
        <hr />
        <ul>
          <li>Brown 1 lb. ground beef + onion (drain)</li>
          <li>
            Add:
            <ul>
              <li>1/3 cup Ketchup</li>
              <li>2 t. Brown Sugar</li>
              <li>2 t. Vinegar</li>
              <li>2 t. Mustard</li>
              <li>1/4 t. salt</li>
              <li>1 8oz. canned tomato sauce</li>
              <li>
                <i>Note:</i> A true 1/3rd of the original recipe would be 5 oz.
                of tomato sauce but most cans I see come in 8 oz. so I just go
                with that.
              </li>
            </ul>
          </li>
          <li>Simmer for 1/2 hour - better if let stand longer</li>
        </ul>

        <h2 id="in-loving-memory-of-joanne-sluke">
          ❤️ In Loving Memory of Joanne Sluke
        </h2>
        <div style={{ textAlign: "center" }}>
          {" "}
          <Image
            src="/images/family/joanne-sluke.jpg"
            alt="Joanne Sluke"
            width={143}
            height={185}
          ></Image>
        </div>
        <p>I posted this recipe in loving memory of my wonderful Grandma Jo.</p>
        <p>She was an amazing woman that loved unconditionally.</p>
        <p>Our family has many beautiful memories of Grandma Jo. </p>
        <p>
          From hosting all of the uncles and cousins during hunting season to
          hosting the <i>entire</i> Sluke family during Christmas at the Sluke
          farm in Fordville, North Dakota.
        </p>
        <p>She is missed dearly and will be forever in our hearts ❤️</p>
      </article>
    </Layout>
  );
}
