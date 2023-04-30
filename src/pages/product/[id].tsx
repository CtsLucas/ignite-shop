import { useContext } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";

import { CartContext, ProductType } from "@/src/contexts/CartContext";
import { formatCurrency } from "@/src/utils/formatCurrency";
import { stripe } from "@/src/lib/stripe";
import * as ProductStyles from "@/src/styles/pages/product";

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  const { onAddToCart, isProductAlreadyInCart } = useContext(CartContext);

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductStyles.ProductContainer>
        <ProductStyles.ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ProductStyles.ImageContainer>

        <ProductStyles.ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatCurrency(product.price)}</span>

          <p>{product.description}</p>

          <button
            onClick={() => onAddToCart(product)}
            disabled={isProductAlreadyInCart(product.id)}
          >
            Comprar agora
          </button>
        </ProductStyles.ProductDetails>
      </ProductStyles.ProductContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId!, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: price.unit_amount,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_Ni3Lug6S7Odyht" } }],
    fallback: true,
  };
};
