import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const currencies = [
  {
    value: "",
    label: "Бүгд",
  },
  {
    value: "0",
    label: "Эрэгтэй",
  },
  {
    value: "1",
    label: "Эмэгтэй",
  },
  {
    value: "2",
    label: "Гутал",
  },
  {
    value: "3",
    label: "Гоёл чимэглэл",
  },
];

const Marketplace = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            marginLeft: "150px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-select-currency"
            select
            label="Ангилал"
            value={currency}
            onChange={handleChange}
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <div className="w-full flex justify-center flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Marketplace;
