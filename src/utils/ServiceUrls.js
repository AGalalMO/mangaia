const baseUrl = "http://hagarfreetr-001-site1.atempurl.com/api/";
export const APIS = {
  AUTH: {
    SIGNIN: `${baseUrl}account/login`,
    REGISTER: `${baseUrl}account/register`,
  },
  PRODUCTS: {
    
  },
  CATEGORIES: {
    LIST: `${baseUrl}category/getall`,
  },
  SUBCATEGORIES: {
    LIST: `${baseUrl}subcategory/getall`,
  },
  UTILS: {
    LINKS: `${baseUrl}redirections/get`,
  },
};
