import { useQuery } from '@apollo/react-hooks';

import ALink from '~/src/components/features/alink';
import PageHeader from '~/src/components/features/page-header';
import ElementList from '~/src/components/partials/elements/element-list';
import OwlCarousel from '~/src/components/features/owl-carousel';
import ProductOne from '~/src/components/features/products/product-one';
import ProductTwo from '~/src/components/features/products/product-two';
import ProductThree from '~/src/components/features/products/product-three';
import ProductFour from '~/src/components/features/products/product-four';
import ProductFive from '~/src/components/features/products/product-five';
import ProductSix from '~/src/components/features/products/product-six';
import ProductSeven from '~/src/components/features/products/product-seven';

import { mainSlider2, mainSlider4 } from '~/src/utils/shared/data';

function Products () {
    const data = [];
    const loading = false;
    const error = false

    const products = []
    const productGroup1 = [];
    const productGroup2 = [];
    const productGroup3 = [];

    if ( error ) {
        return ( <div>{ error }</div> )
    }

    return (
        <div className="main">
            <PageHeader title="Products" subTitle="Elements" />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/elements">Elements</ALink>
                        </li>
                        <li className="breadcrumb-item active">Products</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content skeleton-body">
                <div className="container">
                    <h2 className="title text-center mb-3">3 Columns Large</h2>

                    <div className="row">
                        {
                            loading ?
                                [ 1, 2, 3 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-4 mb-2" key={ index }>
                                        <div className="skel-pro"></div>
                                    </div>
                                )
                                :
                                productGroup1.map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-4" key={ `one_${index}` }>
                                        <ProductOne product={ item } />
                                    </div>
                                )
                        }
                    </div>

                    <hr className="mt-1 mb-5" />

                    <h2 className="title text-center mb-3">4 Columns Carousel</h2>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2" options={ mainSlider2 }>
                                {
                                    [ 1, 2, 3, 4 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2" options={ mainSlider2 }>
                                {
                                    productGroup2.map( ( product, index ) =>
                                        <ProductTwo product={ product } key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }


                    <hr className="mt-3 mb-5" />

                    <h2 className="title text-center mb-3">4 Columns Carousel 2</h2>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2" options={ mainSlider2 }>
                                {
                                    [ 1, 2, 3, 4 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2" options={ mainSlider2 }>
                                { productGroup2.map( ( product, index ) =>
                                    <ProductThree
                                        product={ product }
                                        key={ index }
                                    />
                                ) }
                            </OwlCarousel>
                    }

                    <hr className="mt-3 mb-5" />

                    <h2 className="title text-center mb-3">4 Columns Simple</h2>

                    <div className="row">
                        {
                            loading ?
                                [ 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 mb-2" key={ index }>
                                        <div className="skel-pro"></div>
                                    </div>
                                )
                                :
                                productGroup2.map( ( product, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                        <ProductFour product={ product } />
                                    </div>
                                )
                        }
                    </div>

                    <hr className="mt-2 mb-5" />
                    <h2 className="title text-center mb-3">5 Columns Simple</h2>
                    {
                        loading ?
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2" options={ mainSlider4 }>
                                {
                                    [ 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                        <div className="skel-pro" key={ index }></div>
                                    )
                                }
                            </OwlCarousel>
                            :
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2" options={ mainSlider4 }>
                                {
                                    productGroup3.map( ( product, index ) =>
                                        <ProductFive product={ product } key={ index } />
                                    )
                                }
                            </OwlCarousel>
                    }
                    <hr className="mt-0 mb-5" />
                </div>

                <div className="container-fluid">
                    <h2 className="title text-center mb-3">Fullwidth</h2>

                    <div className="row">
                        {
                            loading ?
                                [ 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-2" key={ index }>
                                        <div className="skel-pro"></div>
                                    </div>
                                )
                                :
                                products.map( ( product, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={ index }>
                                        <ProductSix
                                            product={ product }
                                        />
                                    </div>
                                )
                        }
                    </div>
                </div>

                <div className="container">
                    <hr className="mt-2 mb-5" />
                    <h2 className="title text-center mb-3">4 Columns Without Space</h2>

                    <div className="row no-gutters">
                        {
                            loading ?
                                [ 1, 2, 3, 4 ].map( ( item, index ) =>
                                    <div className="col-sm-6 col-12 col-md-4 col-lg-3 mb-2" key={ index }>
                                        <div className="skel-pro"></div>
                                    </div>
                                )
                                :
                                productGroup2.map( ( product, index ) =>
                                    <div className="col-sm-6 col-12 col-md-4 col-lg-3" key={ index }>
                                        <ProductSeven
                                            product={ product }
                                        />
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>

            <ElementList />
        </div>
    )
}

export default Products