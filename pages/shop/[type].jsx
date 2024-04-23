import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PageHeader from "~/src/components/features/page-header";
import ShopListOne from "~/src/components/partials/shop/list/shop-list-one";
import axiosInstance from "~/src/utils/axios/axiosInstance";
import { APIS } from "~/src/utils/ServiceUrls";
import { BreadCrumb } from "~/src/components/partials/shop/list/components/BreadCrumb";
import { ToolBox } from "~/src/components/partials/shop/list/components/ToolBox";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "~/src/components/layout";
import { useTranslation } from "next-i18next";
import SideBar from "~/src/components/partials/shop/sidebar/SideBar";

function ShopGrid ({ products, categories }) {

  const [bannerData, setBannerData] = useState([])
  const getBanners = async () => {
    let banners = await axiosInstance.get(APIS.UTILS.LINKS, {
      headers: {
        common: {
          "accept-language": locale ?? "en",
        },
      },
    });
    setBannerData(banners?.data)
  }


  const router = useRouter();
  const { locale } = useRouter()
  const { t } = useTranslation(["shop", "common"]);
  const type = router.query.type;
  const query = router.query;
  const [toggle, setToggle] = useState(false);
  const totalCount = products?.length;
  const [filtered, setFiltered] = useState(products);
  const [colors, setColors] = useState([]);

  const reFilter = async () => {
    let filteredProducts = []
    if (query.filter) {
      if (query.filter == "newarrival") {
        filteredProducts = await axiosInstance.get(APIS.PRODUCTS.LIST, {
          headers: {
            common: {
              "accept-language": locale ?? "en",
            },
          },
        });
      } else {
        filteredProducts = await axiosInstance.get(APIS.PRODUCTS.LIST, {
          headers: {
            common: {
              "accept-language": locale ?? "en",
            },
          },
        });
      }
    } else {
      if (query.cat) {
        filteredProducts = await axiosInstance.get(
          APIS.PRODUCTS.LIST,
          {
            headers: {
              common: {
                "accept-language": locale ?? "en",
              },
            },
          }
        );
      }
      else {
        filteredProducts = await axiosInstance.get(APIS.PRODUCTS.LIST, {
          headers: {
            common: {
              "accept-language": locale ?? "en",
            },
          },
        });
      }
    }

    setFiltered(filteredProducts.data.data);
  }
  useEffect(() => {
    reFilter()
  }, [router.query])

  useEffect(() => {
    getBanners()
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle () {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);
    else setToggle(false);
  }
  const Sort = (type) => {
    let sortedProducts = [...products];
    if (type == 2) {
      sortedProducts.sort((p1, p2) =>
        p1?.product?.price < p2?.product?.price
          ? 1
          : p1?.product?.price > p2?.product?.price
            ? -1
            : 0
      );
    } else if (type == 1) {
      sortedProducts.sort((p1, p2) =>
        p1?.product?.price > p2?.product?.price
          ? 1
          : p1?.product?.price < p2?.product?.price
            ? -1
            : 0
      );
    }

    setFiltered([...sortedProducts]);
  };
  const onChange = async (filters) => {
    console.log("fukterrr", filters)
    
    const filteredProducts = []
    products?.map((item))
    // const response = await axiosInstance.get(APIS.PRODUCTS.filter, {
    //   params: filters,
    // });
    // setFiltered(response.data);
  };

  return (
    <Layout>
      <main className='main shop'>
        <PageHeader title={"UNEX"} subTitle={t("SHOP")} />
        <BreadCrumb query={query} pageTitle={""} />
        <div className='page-content'>
          <div className='container'>
            <div className='row skeleton-body'>
              <div className={`col-lg-9 skel-shop-products ${"loaded"}`}>
                <ToolBox Sort={(type) => Sort(type)} type={type} />
                <ShopListOne products={filtered} bannerData={bannerData} perPage={10} loading={false} />
              </div>
              <SideBar
                onChange={onChange}
                categories={categories}
                toggle={toggle}
                colors={colors}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ShopGrid;

export async function getServerSideProps (ctx) {
  const { locale, query } = ctx;
  let products = [];

  if (query.filter) {
    if (query.filter == "newarrival") {
      products = await axiosInstance.get(APIS.PRODUCTS.newArrival, {
        headers: {
          common: {
            "accept-language": locale ?? "en",
          },
        },
      });
    } else {
      products = await axiosInstance.get(APIS.PRODUCTS.sale, {
        headers: {
          common: {
            "accept-language": locale ?? "en",
          },
        },
      });
    }
  } else {
    if (query.cat) {
      products = await axiosInstance.get(APIS.PRODUCTS.byCat(query?.cat), {
        headers: {
          common: {
            "accept-language": locale ?? "en",
          },
        },
      });
    }
    else {
      products = await axiosInstance.get(APIS.PRODUCTS.LIST, {
        headers: {
          common: {
            "accept-language": locale ?? "en",
          },
        },
      });
    }
  }
  let categories = await axiosInstance.get(APIS.CATEGORIES.LIST, {
    headers: {
      common: {
        "accept-language": locale ?? "en",
      },
    },
  });


  return {
    props: {
      categories: categories?.data?.data,
      products: products.data?.data,
      ...(await serverSideTranslations(locale, ["common", "shop"])),
    },
  };
}
