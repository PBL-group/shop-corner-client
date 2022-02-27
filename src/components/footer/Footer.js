import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const Footer = () => (
    <footer className='bg-neutral-100'> 
        <div className='flex justify-center'>
            <div className='container' >
                <div className='flex flex-col p-8 md:align-center md:flex-row md:gap-4'>
                    <div className='w-full md:mb-4 md:w-1/2' >
                        <small>Newsletter</small>
                        <p className='pt-4 font-sans text-md'>Exclusives, sale previews, and discounts off your first full-price transaction await you at ShopCorner! What's not to like about that?</p>
                    </div>
                    <form className='w-full md:w-1/2'>
                        <div className='inline-block sm:flex sm:gap-2'>
                            <input className='flex-1 h-[3.125rem] px-4 placeholder:font-sans' type='email' placeholder='Put your Email'></input>
                            <Button >Submit</Button>
                        </div>
                        <div className='border-b border-black pt-4 inline-block'>
                            <Link to="#">
                                <small className='uppercase'>view our Privacy Policy</small>
                            </Link>
                        </div>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
        
        <div className=' font-body uppercase p-4 bg-neutral-200 flex justify-center'>
            <div className='container flex flex-col md:flex-row justify-between'>
                <div className='order-2 md:order-1'>&copy; <small>{new Date().getFullYear()} ShopCorner Ltd. All Rights Reserved</small></div>
                <ul className='flex flex-col sm:flex-row sm:justify-between md:gap-8 order-1 md:order-2'>
                    <li><Link to='#'><small>Sitemap</small></Link></li>
                    <li><Link to='#'><small>Cookies</small></Link></li>
                    <li><Link to='#'><small>Policy</small></Link></li>
                    <li><Link to='#'><small>Terms and Conditions</small></Link></li>
                </ul>
            </div>
        </div>
    </footer>
//     <footer id="footer" class="footer">
//     <div class="footer__top container-flex">
//             <div class="footer__signup row-flex footer--margin">
//                 <div class="footer--pad col-24">
//                     <div class="row-flex footer--margin">
//                         <div class="col-s-24 col-m-12">
//                             <p class="col-s-hidden footer__newsletter">Newsletter</p>
//                             <h3 class="h3">For all the Office gossip...<br>exclusives, sale previews &amp; 10% off your first full price order! What's not to love?</h3>
//                         </div>
//                         <form class="col-s-24 col-m-12 row-flex footer__newsletter-form js-simpleSignupForm is-initialized" data-inline-message="true" data-success-message="Thank you for signing up!" method="post">
                            
//                             <div class="footer__signup__gender js-simpleSignupGender col-s-18 col-offset-s-3 col-m-24">
//                                 <div class="row-flex">
//                                     <div class="col-m-6 col-l-5">
//                                         <div class="form-element ">
//     <input id="GENDER_FIELD_FEM" name="GENDER_FIELD" type="radio" checked="" value="Women">
//     <label class="form-element__label" for="GENDER_FIELD_FEM">
//         <span class="form-element__label-text">Women</span>
//     </label>
// </div>
//                                     </div>
//                                     <div class="col-m-6 col-l-5">
//                                         <div class="form-element ">
//     <input id="GENDER_FIELD_MAL" name="GENDER_FIELD" type="radio" value="Men">
//     <label class="form-element__label" for="GENDER_FIELD_MAL">
//         <span class="form-element__label-text">Men</span>
//     </label>
// </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="footer__signup__input col-s-24 col-m-16">
//                                 <div class="mdc-text-field mdc-text-field--upgraded input-block__field js-input-field is-initialized mdc-ripple-upgraded">
//                                     <input class="mdc-text-field__input" type="email" id="signup__input" aria-controls="username-helper-text" aria-describedby="first-name-helper" name="EMAIL_FIELD" required="">
//                                     <label for="signup__input" class="mdc-floating-label">Email</label>
//                                     <div class="mdc-line-ripple"></div>
//                                 </div>
//                                 <div class="mdc-text-field-helper-line input-helper js-input-helper">
//                                     <div id="first-name-helper" class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg input-helper__message" aria-hidden="true">
//                                         Please fill in the field above
//                                     </div>
//                                 </div>
//                             </div>
//                             <button type="submit" data-action="/view/emailsignup/simple" data-redirecturl="/view/content/secondsignup" class="js-email_submit btn btn-primary col-s-24 col-m-8">
//                                 Submit
//                             </button>
//                             <a href="/view/content/privacy-info-page" class="btn-link">View our Privacy Policy</a>
//                         </form>
//                     </div>
//                 </div>
//             </div>
        

        
//         <div class="row-flex">

            
            
                
                

// <div class="panel-group col-s-24 col-m-18" id="footer-accordion" role="tablist" aria-multiselectable="true">
//     <div class="panel col-s-24 col-m-8">
//         <div class="panel-heading" role="tab" id="headingOne">
//             <h4 class="panel-title">
//                 <a data-toggle="collapse" data-parent="#footer-accordion" href="#collapseOne" aria-expanded="false" class="collapsed" aria-controls="collapseOne">
//                     Help &amp; Info
//                     <span class="icon-expand" aria-hidden="true"></span>
//                 </a>
//             </h4>
//         </div>
//         <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
//             <div class="panel-body">
//                 <ul>
//                     <li>
//                         <a href="/view/content/contactus-info-page">Contact Us</a>
//                     </li>
//                     <li>
//                         <a href="/view/content/deliveryinfo-page">Delivery &amp; Returns</a>
//                     </li>
//                     <li>
//                         <a href="/view/content/storelocator">Find a Store</a>
//                     </li>
//                     <li>
//                         <a href="/studentdiscount">Student Discount</a>
//                     </li>
//                     <li>
//                         <a href="/view/content/giftcardinfo-page">Gift Cards</a>
//                     </li>
//                     <li>
//                         <a href="/blue-light-card">Blue Light Card</a>
//                     </li>
//                     <li>
//                         <a href="/black-friday">Black Friday</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//     <div class="panel col-s-24 col-m-8">
//         <div class="panel-heading" role="tab" id="headingTwo">
//             <h4 class="panel-title">
//                 <a data-toggle="collapse" data-parent="#footer-accordion" href="#collapseTwo" aria-expanded="false" class="collapsed" aria-controls="collapseTwo">
//                     About Office
//                     <span class="icon-expand" aria-hidden="true"></span>
//                 </a>
//             </h4>
//         </div>
//         <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
//             <div class="panel-body">
//                 <ul>
//                     <li>
//                         <a href="/view/content/about-us-page">About Us</a>
//                     </li>
//                     <li>
//                         <a href="/view/content/current-career-vacancies">Join Us!</a>
//                     </li>
//                     <li>
//                         <a href="/blog/">Shoe Diaries</a>
//                     </li>
//                     <li>
//                         <a href="/sustainability">Sustainability</a>
//                     </li>
//                     <li>
//                         <a href="/view/content/gender-pay-gap">Gender Pay Gap Report</a>
//                     </li>
//                     <li>
//                         <a href="/view/content/ModernSlaveryAct">Modern Slavery Act Statement</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//     <div class="panel col-s-24 col-m-8">
//         <div class="panel-heading" role="tab" id="headingThree">
//             <h4 class="panel-title">
//                 <a data-toggle="collapse" data-parent="#footer-accordion" href="#collapseThree" aria-expanded="false" class="collapsed" aria-controls="collapseThree">
//                     Shop with Us
//                     <span class="icon-expand" aria-hidden="true"></span>
//                 </a>
//             </h4>
//         </div>
//         <div id="collapseThree" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
//             <div class="panel-body">
//                 <ul>
//                     <li>
//                         <a href="https://www.offspring.co.uk/" target="_blank" rel="noopener noreferrer">OFFSPRING</a>
//                     </li>
//                     <li>
//                         <a href="https://offcutsshoes.co.uk/" target="_blank" rel="noopener noreferrer">OFFCUTS Outlet</a>
//                     </li>
//                     <li>
//                         <a href="https://www.officelondon.de/" target="_blank" rel="noopener noreferrer">OFFICE Germany</a>
//                     </li>
//                     <li>
//                         <a href="/view/content/apps">OFFICE App</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>
// <div class="panel-group--right col-s-24 col-m-6">
//     <div class="footer__currency">
//         <div class="dropdown footer__currency__dropdown">
//             <a class="dropdown-toggle" role="button" data-toggle="dropdown">
//                 Currency: 
//                 <div class="selected-currency"><span class="GBP currency-item" value="GBP">£ GBP<img loading="lazy" width="14" height="14" src="/_ui/responsive/site-office/images/flags/GBP-flag.svg"></span></div>
//             </a>
//             <ul class="dropdown-menu currency-list" role="menu"><li class="EUR currency-item" value="EUR"> € EUR<img loading="lazy" width="14" height="14" src="/_ui/responsive/site-office/images/flags/EUR-flag.svg"></li><li class="USD currency-item" value="USD">$ USD<img loading="lazy" width="14" height="14" src="/_ui/responsive/site-office/images/flags/USD-flag.svg"></li></ul>
//         </div>
//     </div>
//     <ul class="footer__social social-links row-flex">
//         <li>
//             <a href="https://www.facebook.com/Officeshoes1" target="_blank" rel="noopener noreferrer" class="facebook">
//                 <span class="icon-facebook"></span>
//             </a>
//         </li>
//         <li>
//             <a href="https://www.pinterest.com/officeshoes1/" target="_blank" rel="noopener noreferrer" class="pinterest">
//                 <span class="icon-pinterest"></span>
//             </a>
//         </li>
//         <li>
//             <a href="https://instagram.com/officeshoes" target="_blank" rel="noopener noreferrer" class="instagram">
//                 <span class="icon-instagram"></span>
//             </a>
//         </li>
//     </ul>
// </div>                
// </div>
//     </div>
// </footer>
)


export default Footer