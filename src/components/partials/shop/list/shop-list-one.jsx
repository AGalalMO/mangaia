import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductNine from "~/src/components/features/products/product-nine";
import ProductEleven from "~/src/components/features/products/product-eleven";

function ShopListOne (props) {
  const { loading, products = [], perPage, bannerData = [] } = props;
  const router = useRouter();
  const [fakeArray, setFakeArray] = useState([]);
  const [gridClass, setGridClass] = useState("col-6");
  const type = router?.query?.type;

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < perPage; i++) {
      temp.push(i);
    }
    setFakeArray(temp);
  }, [perPage]);

  useEffect(() => {
    if (type === "list-2" || type === "2cols") setGridClass("col-6");
    if (type === "list") setGridClass("col-6 col-md-4 col-lg-4");
  }, [type]);

  return (
    <div className='products mb-3'>
      {products.length == 0 && !loading ? (
        <p className='no-results'>
          {router?.locale == "ar"
            ? "لا توجد منتجات مطابقة لاختيارك."
            : "No products matching your selection."}
        </p>
      ) : (
        <>
          {type == "list" ? (
            loading ? (
              fakeArray.map((item, index) => (
                <div className='skel-pro skel-pro-list' key={index}></div>
              ))
            ) : (
              products.map((product, index) => (
                <ProductEleven images={product?.productImages ?? []} product={product?.product} info={product?.productInfo} />
              ))
            )
          ) : (
            <div className='row'>
              {loading
                ? fakeArray.map((item, index) => (
                  <div className={gridClass} key={index}>
                    <div className='skel-pro'></div>
                  </div>
                ))
                : products?.map((product, index) => (
                  <div className={gridClass} key={index}>
                    <ProductEleven images={product?.productImages ?? []} product={product?.product} info={product?.productInfo} />
                  </div>
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default React.memo(ShopListOne);
