const baseUrl = "http://unexcityactive-001-site1.etempurl.com/Admin/";

export const APIS = {
  AUTH: {
    SIGNIN: `${baseUrl}account/login`,
    REGISTER: `${baseUrl}account/register`,
  },
  PRODUCTS: {
    LIST: `${baseUrl}Products`,
    GET: (id) => `${baseUrl}product/getbyid?id=${id}`,
    filter: `${baseUrl}product/filter`,
    byCat: (id) => `${baseUrl}product/getbycategoryid?categoryid=${id}`,
    newArrival: `${baseUrl}product/getbydate`,
    sale: `${baseUrl}product/getonsale`,
  },
  CATEGORIES: {
    //done
    LIST: `${baseUrl}Categories`,
  },
  SUBCATEGORIES: {
    LIST: `${baseUrl}SubCategories`,
  },
  UTILS: {
    LINKS: `${baseUrl}Banners`,
    DELIVERY_CITIES: `${baseUrl}order/Getcities`,
    CONTACT: `${baseUrl}contact/sendMessage`,
  },
  CART: {
    ADD: `${baseUrl}cart/add`,
    GET: `${baseUrl}cart/getuser`,
    DELETE: `${baseUrl}cart/delete`,
    UPDATE: `${baseUrl}cart/update`,
  },
  ORDER: {
    PLACE_ORDER: `${baseUrl}order/makeorder`,
    get: `${baseUrl}order/getuser`,
    CANCEL: `${baseUrl}order/cancel`,
  },
};
