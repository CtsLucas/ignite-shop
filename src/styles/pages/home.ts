import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",

  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) /2))",
  marginLeft: "auto",
  minHeight: 656,
  overflow: "hidden",
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",

  position: "relative",
  overflow: "hidden",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    height: "auto",
  },

  img: {
    objectFit: "cover",
    height: "auto",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "2rem",
    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    "& .product__details": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",

      strong: {
        fontSize: "$lg",
        color: "$gray100",
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },

    button: {
      marginTop: "auto",
      background: "$green500",
      border: 0,
      borderRadius: 8,
      padding: "0.75rem",
      color: "$white",
      fontSize: "$md",
      fontWeight: "bold",
      cursor: "pointer",

      "&:disabled": {
        opaticy: 0.6,
        cursor: "not-allowed",
      },

      "&:not(:disabled):hover": {
        background: "$green300",
      },

      "& svg": {
        color: "$white",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
