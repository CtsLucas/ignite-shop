import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,
  padding: "0 1rem",

  h1: {
    marginTop: "4rem",
    fontSize: "$2xl",
    color: "$gray-100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray-300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "4rem",
    display: "block",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const SuccessContent = styled("main", {
  display: "flex",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  padding: "0.25rem",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  "& + &": {
    marginLeft: "-2.5rem",
  },
});
