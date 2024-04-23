import React, { useState } from "react";
import { useRouter } from "next/router";
import InputRange from "react-input-range";
import SlideToggle from "react-slide-toggle";
import "react-input-range/lib/css/index.css";

import ALink from "~/src/components/features/alink";
import { shopData } from "~/src/utils/shared/data";
import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";

function ShopSidebarOne (props) {
  const { toggle = false, categories, onChange, colors } = props;
  const { t } = useTranslation(["shop", "common"]);
  const router = useRouter();

  const query = useRouter().query;
  const [filter, setFilter] = useState({
    subcategoryId: null,
    minprice: null,
    maxprice: null,
    size: null,
    color: null,
  });

  function onChangePriceRange (value) {
    setFilter({ ...filter, minprice: value?.min, maxprice: value?.max });
    onChange({
      ...filter,
      minprice: value?.min,
      maxprice: value?.max,
    });
  }

  function onSizeChange (e, attr, value) {
    if (filter?.size == value) {
      setFilter({ ...filter, size: null })
      onChange({ ...filter, size: null })

    }
    else {
      setFilter({ ...filter, size: value });
      onChange({ ...filter, size: value });
    }
  }

  return (
    <>
      <aside
        className={`${toggle ? "sidebar-filter" : "sidebar"} sidebar-shop`}>
        <div className={toggle ? "sidebar-filter-wrapper" : ""}>
          <div className='widget widget-clean'>
            <label>{t("FILTERS")}</label>
            <Typography
              onClick={() => {
                setFilter({
                  subcategoryId: null,
                  minprice: null,
                  maxprice: null,
                  size: null,
                  color: null,
                });
                onChange({
                  subcategoryId: null,
                  minprice: null,
                  maxprice: null,
                  size: null,
                  color: null,
                });
              }}
              className='sidebar-filter-clear'
              style={{
                marginLeft: "0px !important",
                marginRight: "0px !important",
                marginInlineStart: "auto !important",
                marginInlineEnd: "0px !important",
                cursor: "pointer",
              }}
              scroll={false}>
              {t("CLEAN_ALL")}
            </Typography>
          </div>
          <CategoryList
            selected={filter?.subcategoryId}
            setSelected={(id) => {
              if (id == filter.subcategoryId) {
                setFilter({ ...filter, subcategoryId: null });
                onChange({ ...filter, subcategoryId: null });
              } else {
                setFilter({ ...filter, subcategoryId: id });
                onChange({ ...filter, subcategoryId: id });
              }
            }}
            categories={categories}
            query={query}
            router={router}
          />
          <SlideToggle collapsed={false}>
            {({ onToggle, setCollapsibleElement, toggleState }) => (
              <div className='widget widget-collapsible'>
                <h3 className='widget-title  mb-2'>
                  <a
                    style={{
                      textAlign: "start",

                    }}
                    href='#Size'
                    className={`${toggleState.toLowerCase() == "collapsed"
                      ? "collapsed"
                      : ""
                      }`}
                    onClick={(e) => {
                      onToggle(e);
                      e.preventDefault();
                    }}>
                    {t("SIZE")}
                  </a>
                </h3>
                <div ref={setCollapsibleElement}>
                  <div className='widget-body pt-0'>
                    <div
                      style={{ textAlign: "start" }}
                      className='filter-items'>
                      {shopData.sizes.map((item, index) => (
                        <div className='filter-item' key={index}>
                          <div  className='custom-control custom-checkbox'>
                            <input
                              type='checkbox'
                              className='custom-control-input'
                              id={`size-${index + 1}`}
                              onChange={(e) =>
                                onSizeChange(e, "size", item.size)
                              }
                              checked={item.size == filter.size}
                            />
                            <label
                              className='custom-control-label'
                              htmlFor={`size-${index + 1}`}>
                              {item.size}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SlideToggle>



          <SlideToggle collapsed={false}>
            {({ onToggle, setCollapsibleElement, toggleState }) => (
              <div className='widget widget-collapsible'>
                <h3 className='widget-title titlertl mb-2'>
                  <a
                    style={{ textAlign: "start" }}
                    href='#price'
                    className={`${toggleState.toLowerCase() == "collapsed"
                      ? "collapsed"
                      : ""
                      }`}
                    onClick={(e) => {
                      onToggle(e);
                      e.preventDefault();
                    }}>
                    {t("PRICE")}
                  </a>
                </h3>

                <div ref={setCollapsibleElement}>
                  <div className='widget-body pt-0'>
                    <div className='filter-price'>
                      <div className='filter-price-text d-flex justify-content-between'>
                        <span>
                          {t("PRICE_RANGE")}:&nbsp;
                          <span className='filter-price-range'>
                            {filter?.minprice} - {filter?.maxprice}
                          </span>
                        </span>
                      </div>

                      <div className='price-slider'>
                        <InputRange
                          formatLabel={(value) => `${value}`}
                          maxValue={5000}
                          minValue={0}
                          step={50}
                          value={{
                            min: filter.minprice ?? 0,
                            max: filter?.maxprice ?? 5000,
                          }}
                          onChange={onChangePriceRange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SlideToggle>
        </div>
      </aside>
    </>
  );
}

export default React.memo(ShopSidebarOne);
const CategoryList = ({ categories, query, router, selected, setSelected }) => {
  const { t } = useTranslation(["shop", "common"]);

  return (
    <SlideToggle collapsed={false}>
      {({ onToggle, setCollapsibleElement, toggleState }) => (
        <div className='widget widget-collapsible'>
          <h3 className='widget-title titlertl mb-2'>
            <a
              style={{ textAlign: 'start' }}
              href='#'
              className={`${toggleState.toLowerCase() == "collapsed" ? "collapsed" : ""
                }`}
              onClick={(e) => {
                onToggle(e);
                e.preventDefault();
              }}>
              {t("CATEGORY")}
            </a>
          </h3>
          <div ref={setCollapsibleElement}>
            <div className='widget-body pt-0'>
              <div
                style={{
                  paddingInlineEnd: "4rem",
                  width: "100%",
                  textAlign: "start",
                }}
                className='filter-items filter-items-count'>
                {categories.map((item, index) => (
                  <>
                    {item?.subCategories != undefined && (
                      <>
                        <div className='filter-item' key={`cat_${index}`}>
                          <div>
                            <div
                              onClick={() => {
                                setSelected(item?.subCategories?.subCategoryId);
                              }}
                              style={{
                                marginBottom: "10px",
                                color:
                                  item?.subCategories?.subCategoryId == selected
                                    ? "red"
                                    : "unset",
                              }}
                              className='filter-items filter-items-count'
                              key={`${item?.subCategories?.subCategoryId}${index}`}>
                              <ALink
                                className={`${query.category == item?.subCategories?.enName
                                  ? "active"
                                  : ""
                                  }`}
                                href={"#"}
                                scroll={false}>
                                {router.locale == 'ar' ? item?.subCategories?.arName : item?.subCategories?.enName}
                              </ALink>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </SlideToggle>
  );
};
