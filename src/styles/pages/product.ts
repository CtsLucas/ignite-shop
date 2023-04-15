import { styled } from "..";

export const ProductContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray-300",
  },

  span: {
    fontSize: "$2xl",
    color: "$gray-300",
    marginTop: "1rem",
    display: "block",
  },

  p: {
    fontSize: "$md",
    color: "$gray-300",
    lineHeight: 1.6,
    marginTop: "2.5rem",
  },

  button: {
    marginTop: "auto",
    background: "$green500",
    border: 0,
    borderRadius: 8,
    padding: "1.25rem",
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
  },
});
