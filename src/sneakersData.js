export const sneakersImagesArr = [
  '/assets/sneakers/ozweego-img1.webp',
  '/assets/sneakers/ozweego-img2.webp',
  '/assets/sneakers/ozweego-img3.webp',
  '/assets/sneakers/ozweego-img4.webp',
  '/assets/sneakers/ozweego-img5.webp',
  '/assets/sneakers/ozweego-img6.webp',
  '/assets/sneakers/ozweego-img7.jpeg',
  '/assets/sneakers/ozweego-img8.webp',
];

export const SHOES = {
  id: 'price_1MWpF6KRK98X9KYipbaOKpQR',
  brand: 'adidas',
  name: 'OZWEEGO SHOES',
  description:
    "Push the boundaries of throwback style. These adidas OZWEEGO shoes mutate '90s DNA into something entirely new. Show off the high-volume, sculpted shape of this pair with shorts or cropped pants. Extra cushioning keeps you comfortable from dawn to dusk (or beyond).",
  originalPrice: 180,
  discountedPrice: 135,
  discount: '25%',
};

export const productsArray = [
  {
    id: 'price_1MWpF6KRK98X9KYipbaOKpQR',
    name: 'OZWEEGO SHOES',
    price: 135,
    thumbnail: sneakersImagesArr[0],
  },
];

export function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if (productData === undefined) {
    return;
  }

  return productData;
}
