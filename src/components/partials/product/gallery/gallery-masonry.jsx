import { Magnifier } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';
import axiosInstance from '~/src/utils/axios/axiosInstance';

function GalleryMasonry ( props ) {
    const [ isOpen, setIsOpen ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
const [product,setProduct]=useState({})
    useEffect( () => {
        if ( product ) {
            setIsOpen( false );
            setPhotoIndex( 0 );
        }
    }, [product])
    useEffect(() => {
        getProduct()
    },[])
    const getProduct = async () => {
        const rsponse=await axiosInstance.get('https://dummyjson.com/products/1')
        setProduct(rsponse.data)
}
    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % product?.images?.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + product?.images?.length - 1 ) % product?.images?.length );
    }

    function openLightBox () {
        let index = parseInt( document.querySelector( ".product-main-image" ).getAttribute( "index" ) );

        if ( !index ) {
            index = 0;
        }
        setIsOpen( true );
        setPhotoIndex( index );
    }

    function closeLightBox () {
        setIsOpen( false );
    }

    function changeBgImage ( e, image, index ) {
        let imgs = document.querySelectorAll( '.product-main-image img' );
        for ( let i = 0; i < imgs.length; i++ ) {
            imgs[ i ].src = image;
        }

        document.querySelector( '.product-image-gallery .active' ).classList.remove( 'active' );
        document.querySelector( '.product-main-image' ).setAttribute( 'index', index );
        e.currentTarget.classList.add( 'active' );
    }

    if ( !product ) {
        return <div></div>
    }

    return (
        <>
            <div className="product-gallery product-gallery-masonry">
                <div className="row m-0">
                    <figure className="product-main-image" index="0">
                        {
                            product?.new ?
                                <span className="product-label label-new">New</span>
                                : ""
                        }

                        {
                            product?.sale_price ?
                                <span className="product-label label-sale">Sale</span>
                                : ""
                        }

                        {
                            product?.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }

                        {
                            !product?.stock || product?.stock == 0 ?
                                <span className="product-label label-out">Out of Stock</span>
                                : ""
                        }

                        <Magnifier
                            imageSrc={ product?.images?.[ 0 ] }
                            imageAlt="product"
                            largeImageSrc={ product?.images?.[ 0 ] } // Optional
                            dragToMove={ false }
                            mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            className="zoom-image overflow-hidden p-relative"
                            width={ product?.images?.[ 0 ].width }
                            height={ '100%' }
                            style={ { paddingTop: `${product?.images?.[ 0 ].height / product?.images?.[ 0 ].width * 100}%` } }
                        />

                        <button id="btn-product-gallery" className="btn-product-gallery" onClick={ openLightBox }>
                            <i className="icon-arrows"></i>
                        </button>
                    </figure>

                    <div id="product-zoom-gallery" className="product-image-gallery mr-0 ml-0">
                        <div className="row">
                            <div className="col-5 d-flex mb-1">
                                <button className="active product-masonry-item p-0 w-100" onClick={ e => changeBgImage( e, `${product?.images?.[0]}`, 0 ) }>
                                    <img src={ product?.images?.[0] } alt="product back" className="w-100" />
                                </button>
                            </div>
                            {
                                product?.images?.length > 1 ?
                                    <div className="col-7 d-flex mb-1">
                                        <button className="product-masonry-item p-0 w-100" onClick={ e => changeBgImage( e, `${product?.images?.[0]}`, 1 ) }>
                                            <img src={ product?.images?.[0] } alt="product back" className="w-100" />
                                        </button>
                                    </div>
                                    : ""
                            }
                            {
                                product?.images?.length > 2 ?
                                    <div className="col-7 d-flex mb-1">
                                        <button className="product-masonry-item p-0 w-100" onClick={ e => changeBgImage( e, `${product?.images?.[0]}`, 2 ) }>
                                            <img src={ product?.images?.[0] } alt="product back" className="w-100" />
                                        </button>
                                    </div>
                                    : ""
                            }
                            {
                                product?.images?.length > 3 ?
                                    <div className="col-5 d-flex mb-1">
                                        <button className="product-masonry-item p-0 w-100" onClick={ e => changeBgImage( e, `${product?.images?.[0]}`, 3 ) }>
                                            <img src={ product?.images?.[0] } alt="product back" className="w-100" />
                                        </button>
                                    </div>
                                    : ""
                            }
                        </div>
                    </div>
                </div>
            </div>

            {
                isOpen ?
                    <LightBox
                        mainSrc={ product?.images?.[ photoIndex ] }
                        nextSrc={ product?.images?.[ ( photoIndex + 1 ) % product?.images?.length ] }
                        prevSrc={ product?.images?.[ ( photoIndex + product?.images?.length - 1 ) % product?.images?.length ] }
                        onCloseRequest={ closeLightBox }
                        onMovePrevRequest={ moveNextPhoto }
                        onMoveNextRequest={ movePrevPhoto }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: 1041
                            },
                        }
                        }
                    />
                    : ''
            }
        </>
    )
}

export default React.memo( GalleryMasonry );