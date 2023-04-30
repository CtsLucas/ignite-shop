import Image from "next/image";
import { Handbag, X } from "phosphor-react";
import { useContext } from "react";

import * as CartStyles from "@/src/styles/components/cart";
import { CartContext } from "@/src/contexts/CartContext";
import { formatCurrency } from "@/src/utils/formatCurrency";
import emptyCartImage from "@/src/assets/empty-cart.svg";

export function Cart() {
  const { cartItems, cartSummary, onRemoveToCart, onConfirmOrder } =
    useContext(CartContext);

  return (
    <CartStyles.CartContainer>
      <CartStyles.CartRoot>
        <CartStyles.CartTrigger>
          <Handbag size={24} weight="bold" />
          {cartItems.length > 0 && <div>{cartItems.length}</div>}
        </CartStyles.CartTrigger>

        <CartStyles.CartPortal>
          <CartStyles.CartOverlay />

          <CartStyles.CartContent>
            <CartStyles.CartClose>
              <X size={24} weight="bold" />
            </CartStyles.CartClose>

            {cartItems.length > 0 ? (
              <CartStyles.CartBody>
                <CartStyles.CartTitle>Sacola de compras</CartStyles.CartTitle>

                <CartStyles.CartList>
                  {cartItems.map((item) => {
                    return (
                      <CartStyles.CartItem key={item.id}>
                        <CartStyles.CartImageContainer>
                          <Image
                            src={item.imageUrl}
                            width={94}
                            height={94}
                            alt=""
                          />
                        </CartStyles.CartImageContainer>

                        <CartStyles.CartDetails>
                          <h3>{item.name}</h3>
                          <strong>{formatCurrency(item.price)}</strong>

                          <button
                            type="button"
                            onClick={() => onRemoveToCart(item.id)}
                          >
                            Remover
                          </button>
                        </CartStyles.CartDetails>
                      </CartStyles.CartItem>
                    );
                  })}
                </CartStyles.CartList>

                <CartStyles.CartFooter>
                  <div className="cart-footer__quantity">
                    <span>Quantidade</span>
                    <span>
                      {cartItems.length === 1
                        ? `${cartItems.length} item`
                        : `${cartItems.length} itens`}
                    </span>
                  </div>

                  <div className="cart-footer__total">
                    <span>Valor Total</span>
                    <strong>{formatCurrency(cartSummary)}</strong>
                  </div>

                  <button type="button" onClick={onConfirmOrder}>
                    Finalizar Compra
                  </button>
                </CartStyles.CartFooter>
              </CartStyles.CartBody>
            ) : (
              <CartStyles.CartEmpty>
                <Image src={emptyCartImage} width={300} height={300} alt="" />
                <strong>Seu carrinho está vazio!</strong>
                <p>Parece que você ainda não adicionou nada ao carrinho.</p>
              </CartStyles.CartEmpty>
            )}
          </CartStyles.CartContent>
        </CartStyles.CartPortal>
      </CartStyles.CartRoot>
    </CartStyles.CartContainer>
  );
}
