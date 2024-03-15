AUTH: {
     `account/login`,
         `account/register`,
  },
PRODUCTS: {
    LIST: `product/getall`,
        GET: (id) => `product/getbyid?id=${id}`,
            filter: `product/filter`,
                byCat: (id) => `product/getbycategoryid?categoryid=${id}`,
                    newArrival: `product/getbydate`,
                    sale: `product/getonsale`,
  },
CATEGORIES: {
    LIST: `category/getall`,
  },
SUBCATEGORIES: {
    LIST: `subcategory/getall`,
  },
UTILS: {
    LINKS: `redirections/get`,
        DELIVERY_CITIES: `order/Getcities`,
            CONTACT: `contact/sendMessage`,
  },
CART: {
    ADD: `cart/add`,
        GET: `cart/getuser`,
            DELETE: `cart/delete`,
                UPDATE: `cart/update`,
  },
ORDER: {
    PLACE_ORDER: `order/makeorder`,
        get: `order/getuser`,
            CANCEL: `order/cancel`,
  },
};