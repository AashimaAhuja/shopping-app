const DOMAIN_NAME = `https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1`;
const PRODUCT_API_URL = `${DOMAIN_NAME}/products`;

export function getProductList() {
  return fetch(PRODUCT_API_URL).then((res) => res.json());
}
