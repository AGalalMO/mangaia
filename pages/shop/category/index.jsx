import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/src/components/features/alink';
import PageHeader from '~/src/components/features/page-header';
import ShopSidebarTwo from '~/src/components/partials/shop/sidebar/shop-sidebar-two';

function Category() {
    function openSidebar() {
        document
            .querySelector( 'body' )
            .classList.add( 'sidebar-filter-active' );
    }

    function closeSidebar() {
        document
            .querySelector( 'body' )
            .classList.remove( 'sidebar-filter-active' );
    }

    return (
        <div className="main shop">
            <PageHeader title="Product Category" subTitle="Shop" />

            <nav aria-label="breadcrumb" className="breadcrumb-nav breadcrumb-with-filter">
                <div className="container">
                    <button className="sidebar-toggler" onClick={ openSidebar }><i className="icon-bars"></i>Filters</button>

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                        <li className="breadcrumb-item"><ALink href="/category">Product Category</ALink></li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="categories-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner banner-cat banner-badge">
                                    <ALink href="/shop/sidebar/list?category=dresses">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/category/boxed/banner-1.jpg"
                                            alt="banner"
                                            width={ 320 }
                                            height={ 580 }
                                            effect="blur"
                                            threshold={ 500 }
                                        />
                                    </ALink>

                                    <ALink className="banner-link" href="/shop/sidebar/list?category=dresses">
                                        <h3 className="banner-title">Dresses</h3>
                                        <h4 className="banner-subtitle">3 Products</h4>
                                        <span className="banner-link-text">Shop Now</span>
                                    </ALink>
                                </div>

                                <div className="banner banner-cat banner-badge">
                                    <ALink href="/shop/sidebar/list?category=jackets">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/category/boxed/banner-2.jpg"
                                            alt="banner"
                                            width={ 320 }
                                            height={ 280 }
                                            effect="blur"
                                            threshold={ 500 }
                                        />
                                    </ALink>

                                    <ALink className="banner-link" href="/shop/sidebar/list?category=jackets">
                                        <h3 className="banner-title">Jackets</h3>
                                        <h4 className="banner-subtitle">2 Products</h4>
                                        <span className="banner-link-text">Shop Now</span>
                                    </ALink>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="banner banner-cat banner-badge">
                                            <ALink href="/shop/sidebar/list?category=t-shirts">
                                                <div className="lazy-overlay"></div>

                                                <LazyLoadImage
                                                    src="images/category/boxed/banner-3.jpg"
                                                    alt="banner"
                                                    width={ 280 }
                                                    height={ 280 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </ALink>

                                            <ALink className="banner-link" href="/shop/sidebar/list?category=t-shirts">
                                                <h3 className="banner-title">T-shirts</h3>
                                                <h4 className="banner-subtitle">0 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </ALink>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="banner banner-cat banner-badge">
                                            <ALink href="/shop/sidebar/list?category=jeans">
                                                <div className="lazy-overlay"></div>

                                                <LazyLoadImage
                                                    src="images/category/boxed/banner-4.jpg"
                                                    alt="banner"
                                                    width={ 280 }
                                                    height={ 280 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </ALink>

                                            <ALink className="banner-link" href="/shop/sidebar/list?category=jeans">
                                                <h3 className="banner-title">Jeans</h3>
                                                <h4 className="banner-subtitle">4 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </ALink>
                                        </div>
                                    </div>
                                </div>

                                <div className="banner banner-cat banner-badge">
                                    <ALink href="/shop/sidebar/list?category=bags">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/category/boxed/banner-5.jpg"
                                            alt="banner"
                                            width={ 320 }
                                            height={ 580 }
                                            effect="blur"
                                            threshold={ 500 }
                                        />
                                    </ALink>

                                    <ALink className="banner-link" href="/shop/sidebar/list?category=bags">
                                        <h3 className="banner-title">Bags</h3>
                                        <h4 className="banner-subtitle">0 Products</h4>
                                        <span className="banner-link-text">Shop Now</span>
                                    </ALink>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="banner banner-cat banner-badge">
                                    <ALink href="/shop/sidebar/list?category=sportswear">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/category/boxed/banner-6.jpg"
                                            alt="banner"
                                            width={ 280 }
                                            height={ 280 }
                                            effect="blur"
                                            threshold={ 500 }
                                        />
                                    </ALink>

                                    <ALink className="banner-link" href="/shop/sidebar/list?category=sportswear">
                                        <h3 className="banner-title">Sportwear</h3>
                                        <h4 className="banner-subtitle">1 Products</h4>
                                        <span className="banner-link-text">Shop Now</span>
                                    </ALink>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 order-md-last">
                                <div className="banner banner-cat banner-badge">
                                    <ALink href="/shop/sidebar/list?category=jumpers">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/category/boxed/banner-8.jpg"
                                            alt="banner"
                                            width={ 280 }
                                            height={ 280 }
                                            effect="blur"
                                            threshold={ 500 }
                                        />
                                    </ALink>

                                    <ALink className="banner-link" href="/shop/sidebar/list?category=jumpers">
                                        <h3 className="banner-title">Jumpers</h3>
                                        <h4 className="banner-subtitle">2 Products</h4>
                                        <span className="banner-link-text">Shop Now</span>
                                    </ALink>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="banner banner-cat banner-badge">
                                    <ALink href="/shop/sidebar/list?category=shoes">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            src="images/category/boxed/banner-7.jpg"
                                            alt="banner"
                                            width={ 320 }
                                            height={ 280 }
                                            effect="blur"
                                            threshold={ 500 }
                                        />
                                    </ALink>

                                    <ALink className="banner-link" href="/shop/sidebar/list?category=shoes">
                                        <h3 className="banner-title">Shoes</h3>
                                        <h4 className="banner-subtitle">3 Products</h4>
                                        <span className="banner-link-text">Shop Now</span>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-filter-overlay" onClick={ closeSidebar }></div>
                <ShopSidebarTwo></ShopSidebarTwo>
            </div >
        </div >
    )
}

export default Category;