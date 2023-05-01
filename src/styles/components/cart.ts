import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "..";

export const CartContainer = styled("div", {});

export const CartRoot = styled(Dialog.Root, {});

export const CartTrigger = styled(Dialog.Trigger, {
  marginTop: "auto",
  background: "$gray800",
  border: 0,
  borderRadius: 8,
  padding: "0.75rem",
  color: "$white",
  fontSize: "$md",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  position: "relative",

  "&:disabled": {
    opaticy: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    background: "$green500",

    svg: {
      color: "$white",
    },
  },

  svg: {
    color: "$gray500",
  },

  div: {
    position: "absolute",
    top: -10,
    right: -10,

    background: "$green300",
    color: "$white",
    fontSize: "$sm",
    fontWeight: 700,
    lineHeight: 1.6,
    borderRadius: "50%",
    width: 24,
    height: 24,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const CartPortal = styled(Dialog.Portal, {});

export const CartOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  inset: 0,
  animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
});

export const CartContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-start",

  width: 480,
  height: "100%",
  background: "$gray800",
  padding: 24,

  '@media (max-width: 768px)': {
    width: 'calc(100% - 1.25rem)',
  }
});

export const CartClose = styled(Dialog.Close, {
  background: "transparent",
  border: 0,

  svg: {
    color: "$gray500",

    "&:hover": {
      color: "$white",
      cursor: "pointer",
    },
  },
});

export const CartBody = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: 24,
});

export const CartTitle = styled("h2", {
  color: "$gray100",
  fontSize: "$lg",
  fontWeight: 700,
  lineHeight: 1.6,
});

export const CartList = styled("div", {
  marginTop: "2rem",

  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
});

export const CartItem = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "1.25rem",
});

export const CartImageContainer = styled("div", {
  width: "100%",
  maxWidth: 100,
  height: 94,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const CartDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h3: {
    color: "$gray300",
    fontSize: "$md",
    fontWeight: 400,
    lineHeight: 1.6,
  },

  strong: {
    color: "$gray100",
    fontSize: "$md",
    fontWeight: 700,
    lineHeight: 1.6,
  },

  button: {
    marginTop: "0.5rem",
    background: "transparent",
    border: 0,

    textAlign: "left",
    color: "$green500",
    fontWeight: 700,
    lineHeight: 1.6,

    "&:hover": {
      cursor: "pointer",
      color: "$green300",
    },
  },
});

export const CartFooter = styled("div", {
  marginTop: "auto",

  "& .cart-footer__quantity": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    span: {
      color: "$gray300",
      fontWeight: 400,
    },
  },

  "& .cart-footer__total": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "0.5rem",

    span: {
      color: "$gray100",
      fontSize: "$md",
      fontWeight: 700,
    },

    strong: {
      color: "$gray100",
      fontSize: "$xl",
      fontWeight: 700,
    },
  },

  button: {
    marginTop: "3.25rem",
    background: "$green500",
    border: 0,
    borderRadius: 8,
    width: "100%",
    padding: "1.25rem",
    color: "$white",
    fontSize: "$md",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",

    "&:disabled": {
      opaticy: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      background: "$green300",
    },
  },
});

export const CartEmpty = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  margin: "auto",

  strong: {
    color: "$gray100",
    fontSize: "$lg",
    fontWeight: 700,
    lineHeight: 1.6,

    marginTop: "1rem",
  },

  p: {
    color: "$gray300",
    fontWeight: 400,
    lineHeight: 1.6,
    textAlign: "center",

    marginTop: "0.5rem",
  },
});
