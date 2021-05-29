import React, { useState, useCallback, useEffect } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import ProductsTitle from "./components/ProductsTitle";
import { getProductList } from "./services/productService";
import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showSoldItems, setShowSoldItems] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    getProductList()
      .then(setProductList)
      .catch((e) => {
        console.log("Error occured");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (showSoldItems) {
      setVisibleProducts(productList);
    } else {
      let filteredProducts = visibleProducts.filter((product) => !product.sold);
      setVisibleProducts(filteredProducts);
    }
  }, [productList, showSoldItems]);

  const onToggleSoldItems = useCallback(() => {
    setShowSoldItems((showSoldItems) => !showSoldItems);
  }, []);

  const onProductLike = useCallback(
    (id) => {
      let likedProduct = visibleProducts.find((product) => product.id == id);
      likedProduct.isLiked = !likedProduct.isLiked;
      setVisibleProducts([...visibleProducts]);
    },
    [visibleProducts]
  );

  return (
    <div className="App">
      <Header visibleProducts={visibleProducts} />
      {isLoading && <div>Loading</div>}
      {!isLoading && visibleProducts.length > 0 && (
        <main>
          <ProductsTitle
            productsCount={visibleProducts.length}
            onToggleSoldItems={onToggleSoldItems}
            showSoldItems={showSoldItems}
          />
          <CardList products={visibleProducts} onProductLike={onProductLike} />
        </main>
      )}
    </div>
  );
}

export default App;
