import { styled } from "..";

export const ProductContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  alignItems: "stretch",
  justifyContent: "space-evenly",
  gap: "1rem",

  maxWidth: 1180,
  margin: "0 auto",

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 520,
  height: 656,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",

  img: {
    objectFit: "cover",
    height: "auto",
  },

  "@media (max-width: 768px)": {
    maxWidth: 300,
    height: 300,
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: " 0 2rem",

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

    "@media (max-width: 768px)": {
      marginTop: "2rem",
    },
  },
});
