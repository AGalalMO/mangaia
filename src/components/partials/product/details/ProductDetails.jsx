import { useEffect, useState, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";

import ALink from "~/src/components/features/alink";
import Qty from "~/src/components/features/qty";
import { actions as wishlistAction } from "~/store/wishlist";
import { actions as cartAction } from "~/store/cart";
import axiosInstance from "~/src/utils/axios/axiosInstance";
import { APIS } from "~/src/utils/ServiceUrls";
import { getCart } from "~/src/store/cart";
import { useTranslation } from "next-i18next";
import useAuth from "~/src/hooks/useAuth";

function DetailOne (props) {
  const { t } = useTranslation(["shop", "common"]);
  const router = useRouter();
  const { id } = router.query;
  const ref = useRef(null);
  const { product } = props;
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState("");
  const [color, setColor] = useState(1);
  const [selectedInfo, setSelectedInfo] = useState(product?.info?.[0]);
  const discountedPrice = product.discount ? Number((product.discount / 100) * product.price) : null
  const [selectedSizeCount, setSelectedSizeCount] = useState(
    product?.info?.[0]?.countBySize?.[0]
  );
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    scrollHandler();
  }, [router.pathname]);

  function scrollHandler () {
    if (router.pathname.includes("/product/default")) {
      let stickyBar = ref.current.querySelector(".sticky-bar");
      if (
        stickyBar.classList.contains("d-none") &&
        ref.current.getBoundingClientRect().bottom < 0
      ) {
        stickyBar.classList.remove("d-none");
        return;
      }
      if (
        !stickyBar.classList.contains("d-none") &&
        ref.current.getBoundingClientRect().bottom > 0
      ) {
        stickyBar.classList.add("d-none");
      }
    }
  }

  function selectSize (value) {
    setSize(value);
    const filter = selectedInfo?.countBySize.filter(
      (item) => item.size == value
    );
    setSelectedSizeCount(filter[0]);
    setQty(0);
  }

  function onChangeQty (current) {
    setQty(current);
  }

  async function onCartClick (e, index = 0) {
    if (!isAuthenticated) router.push("/auth/signin/");

    if (qty && size !== "") {
      e.preventDefault();
      if (e.currentTarget.classList.contains("btn-disabled")) return;
      else {
        await axiosInstance.post(APIS.CART.ADD, null, {
          params: {
            itemId: selectedSizeCount.itemId,
            token: localStorage.getItem("accessToken"),
            count: qty,
          },
        });
        router.replace("/shop/cart");

        dispatch(getCart());
        ///router.reload();
      }
    }
  }
  const details = useMemo(() => {
    return (
      <div className='product-details' ref={ref}>
        {Boolean(product) && Boolean(selectedInfo) && (
          <>
            <h1 className='product-title' style={{ display: "flex" }}>

              {router?.locale == 'ar' ? product?.arName : product?.enName}
            </h1>

            <div className='product-price'>
              {product.discount ? (
                <span style={{ fontSize: "2rem" }}>
                  <span
                    style={{ textDecoration: "line-through", color: "black" }}>
                    {Number(product.price).toFixed(2)}
                  </span>{" "}
                  {Number(discountedPrice).toFixed(2)} EGP
                </span>
              ) : (
                <span>{Number(product.price).toFixed(2)} EGP</span>
              )}
            </div>

            <div className='product-content'>
              <p>{product?.short_desc}</p>
            </div>

            {
              <>
                <div className='details-filter-row details-row-size'>
                  <label style={{ display: "flex !important" }}>
                    {t("COLOR")}:
                  </label>

                  <div
                    className='product-nav product-nav-dots'
                    style={{ marginInlineStart: "0 !important" }}>
                    {product?.info?.map((item, index) => (
                      <span
                        className={`${item == selectedInfo ? "active " : ""}`}
                        style={{
                          backgroundColor: item.color,
                          border: "1px solid rgba(0,0,0,0.2)",
                          borderColor:
                            selectedInfo?.color == item?.color
                              ? "red"
                              : " rgba(0,0,0,0.2)",
                          width: 36,
                          height: 36,
                        }}
                        key={index}
                        onClick={() => {
                          setSelectedInfo(item);
                          setSelectedSizeCount({ size: item?.size, count: item?.count });
                          setSize(item.size);
                          setQty(0);
                        }}></span>
                    ))}
                  </div>
                </div>

                <div className='details-filter-row details-row-size'>
                  <label htmlFor='size' style={{ display: "flex !important" }}>
                    {t("SIZE")}:
                  </label>
                  <div
                    className='select-custom'
                    style={{ marginInlineStart: "0 !important" }}>
                    <select
                      name='size'
                      className='form-control'
                      value={size}
                      onChange={(e) => {
                        selectSize(e.target.value);
                      }}>
                      <option value=''>{t("selectSize")}</option>
                      {/* {selectedInfo.countBySize?.map((item, index) => (
                        <option value={item.size} key={index}>
                          {item.size}
                        </option>
                      ))} */}
                      <option value={selectedInfo.size} >
                        {selectedInfo.size}
                      </option>

                    </select>
                  </div>

                  <ALink href='#' className='size-guide mr-4'>
                    <i className='icon-th-list'></i>
                    {t("SIZE_GUIDE")}
                  </ALink>
                </div>
              </>
            }

            <div className='details-filter-row details-row-size'>
              <label htmlFor='qty' style={{ display: "flex !important" }}>
                {t("QUANTITY")}:
              </label>
              {selectSize.count == 0 ? (
                <span className='product-label label-out'>
                  {t("OUT_OF_STOCK")}
                </span>
              ) : (
                <Qty
                  changeQty={onChangeQty}
                  max={selectedSizeCount?.count}
                  value={qty}></Qty>
              )}
            </div>

            {size !== "" && qty != 0 && (
              <div className='product-details-action'>
                <a
                  href='#'
                  className={`btn-product btn-cart`}
                  onClick={(e) => onCartClick(e, 0)}>
                  <span>{t("ADD_TO_CART")}</span>
                </a>
              </div>
            )}


            <div className='product-details-footer'>
              <div className='product-des'>
                <p style={{ fontWeight: "500", display: "flex" }}>
                  {t("PRODUCT_DESC")}
                </p>
                <span>{
                  router?.locale == 'ar' ? product?.arDescription : product?.enDescription
                } </span>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }, [selectedInfo, selectedSizeCount, size, qty]);
  return <>{details}</>;
}

const mapStateToProps = (state) => {
  return {
    cartlist: [],
    wishlist: [],
  };
};

export default connect(mapStateToProps, { ...wishlistAction, ...cartAction })(
  DetailOne
);
