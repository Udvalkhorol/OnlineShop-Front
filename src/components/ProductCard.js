import React, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import { UserContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { ctxUserId } = useContext(UserContext);
  let navigate = useNavigate();

  const addToCart = () => {
    if (!ctxUserId) {
      navigate("/login");
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <Link href={`/product/${product.prodId}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <div className="flex justify-between text-black">
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {product.price} MNT
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={() => addToCart()}>
          Сагсанд хийх
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
