import { useRouter } from 'next/router';
import ALink from '~/src/components/features/alink';
import React, { useState, useEffect } from 'react';

function Footer () {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );
    const [ containerClass, setContainerClass ] = useState( 'container' );

    useEffect( () => {
        handleBottomSticky();
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-dark">
            <div className="icon-boxes-container">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rocket"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Shipping</h3>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rotate-left"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Returns</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-info-circle"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-life-ring"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">We Support</h3>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle">
                <div className={ containerClass }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4" style={{display:'flex',justifyContent:'center'}}>
                            <div className="widget widget-about">
                                <ALink href="/">
                                    <img src="images/home/logo-footer.png" className="footer-logo" alt="Footer Logo" width="82" height="25" />
                                </ALink>

                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>

                                <div className="social-icons">
                                    <a href="#" className="social-icon" title="Facebook" onClick={ e => { e.preventDefault(); } }><i className="icon-facebook-f"></i></a>
                                    <a href="#" className="social-icon" title="Instagram" onClick={ e => { e.preventDefault(); } }><i className="icon-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li><a href="#" onClick={e => { e.preventDefault(); }}>Payment Methods</a></li>
                                    <li><a href="#" onClick={e => { e.preventDefault(); }}>Money-back guarantee!</a></li>
                                    <li><a href="#" onClick={e => { e.preventDefault(); }}>Returns</a></li>
                                    <li><a href="#" onClick={e => { e.preventDefault(); }}>Terms and conditions</a></li>
                                    <li><a href="#" onClick={e => { e.preventDefault(); }}>Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="widget">
                                <h4 className="widget-title" >Useful Links</h4>

                                <ul className="widget-list">
                                    <li><ALink href="/about">About UNEX</ALink></li>
                                    <li><ALink href="/contact">Contact us</ALink></li>
                                </ul>
                            </div>
                        </div>

                       

                
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ containerClass }>
                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } UNEX. All Rights Reserved.</p>
                  
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );