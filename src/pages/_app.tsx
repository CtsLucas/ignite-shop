import type { AppProps } from "next/app";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { Cart } from "../components/Cart";
import { CartContextProvider } from "../contexts/CartContext";
import logoImg from "../assets/logo.svg";
import { globalStyles } from "../styles/global";
import * as AppStyles from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <CartContextProvider>
      <AppStyles.Container>
        <AppStyles.Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          {router.pathname !== "/success" && <Cart />}
        </AppStyles.Header>

        <Component {...pageProps} />
      </AppStyles.Container>
    </CartContextProvider>
  );
}
