const baseUrl = "https://unexcityactive-001-site1.etempurl.com/Admin/";

export const APIS = {
  AUTH: {
    SIGNIN: `${baseUrl?.replace('Admin', 'Account/Login')}`,
    REGISTER: `${baseUrl?.replace('Admin', 'Account/Register')}`,
  },
  PRODUCTS: {
    LIST: `${baseUrl}Products`,
    GET: (id) => `${baseUrl}Products/${id}`,
    filter: `${baseUrl}Products/filter`,
    byCat: (id) => `${baseUrl}Products/getbycategoryid?categoryid=${id}`,
    newArrival: `${baseUrl}Products/getbydate`,
    sale: `${baseUrl}Products/getonsale`,
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
