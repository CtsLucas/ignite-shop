import Image from "next/image";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useContext } from "react";

import { stripe } from "../lib/stripe";
import { CartContext, ProductType } from "../contexts/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import * as HomeStyles from "../styles/pages/home";

interface HomeProps {
  products: ProductType[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1.25,
          spacing: 24,
        },
      },
    },
  });

  const { onAddToCart, isProductAlreadyInCart } = useContext(CartContext);

  function handleAddCart(
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) {
    event.preventDefault();

    onAddToCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeStyles.HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <HomeStyles.Product className="keen-slider__slide">
                <Image
                  src={product.imageUrl}
                  alt=""
                  width={520}
                  height={480}
                  priority
                />

                <footer>
                  <div className="product__details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(event) => handleAddCart(event, product)}
                    disabled={isProductAlreadyInCart(product.id)}
                  >
                    <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </HomeStyles.Product>
            </Link>
          );
        })}
      </HomeStyles.HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  };
};
