import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";
import { GetServerSideProps } from "next";

import { stripe } from "../lib/stripe";
import * as SuccessStyles from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessStyles.SuccessContainer>
        <SuccessStyles.SuccessContent>
          {products.map((product) => (
            <SuccessStyles.ImageContainer key={product.id}>
              <Image src={product.imageUrl} width={120} height={120} alt="" />
            </SuccessStyles.ImageContainer>
          ))}
        </SuccessStyles.SuccessContent>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{products.length}</strong> camiseta(s) já estão a caminho da
          sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessStyles.SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const products = session.line_items?.data.map((lineItem) => {
    const product = lineItem.price?.product as Stripe.Product;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
