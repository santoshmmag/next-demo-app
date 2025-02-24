// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <div className="container pos-rel">
          <div className="row">
            <div className="pull-left col-3 col-sm-4 col-xs-6 brand-logo">
              <a href="javascript:;" className="goto-home logo-header">
                <img src="/images/logo.svg" alt="Brand Logo" className="img-responsive" data-event-category="Header" data-event-action="Click" data-event-name="Logo" />           
              </a>          
            </div>
            {/*<div className="col-9 col-sm-8 col-xs-6 pull-right">          
              <div className="pull-right menu-icon-mobile">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </div>
              <div className="col-12 pull-right lower">                                 
                <div className="pull-right enq-btn-wrapper hidden-sm">
                  <div className="enquire-btn open-form theme-btn" data-event-category="Header" data-event-action="Click" data-event-name="Enquire Now">Enquire Now</div>
                </div>
                <div className="pull-right headerCallNumber text-semiBold hidden-sm">
                  <img src="images/call-icon.svg" className="img-responsive" /> <span className="">+91 00 0000 0000</span>
                </div>
                <ul className="nav-links pull-right">
                  <li><a href="javascript:;" rel="overview" data-event-category="Header" data-event-action="Click" data-event-name="Overview">Overview</a></li>
                  <li><a href="javascript:;" rel="amenities" data-event-category="Header" data-event-action="Click" data-event-name="Amenities">Amenities</a></li>
                  <li><a href="javascript:;" rel="specifications" data-event-category="Header" data-event-action="Click" data-event-name="Specifications">Specifications</a></li>
                  <li><a href="javascript:;" rel="location" data-event-category="Header" data-event-action="Click" data-event-name="Location">Location</a></li>
                  <li><a href="javascript:;" rel="gallery" data-event-category="Header" data-event-action="Click" data-event-name="Gallery">Gallery</a></li>
                  <li><a href="javascript:;" rel="about-us" data-event-category="Header" data-event-action="Click" data-event-name="About">About</a></li>       
                </ul>           
              </div>
            </div>*/}
          </div>
        </div>    
      </header>
      <section className="slide pos-rel banner_ht" id="home">
        <div className="row">
          <div className="banner-slider">
            <div className="banner_ht slide slide-1 pos-rel">
              <div className="container">
                <div className="row">
                  <div className="col-8 pull-right text-center" >
                    <div className="col-12 taglineWrapper ">
                      <div className="banner_ht dis-flex">
                        <div>
                          <div className="tag-1 w100">Zero Account Opening Charges</div>
                          <div className="banner-form-wrapper">
                            <div className="formHeading">Open a Demat Account with YES Securities</div>
                              <div className="customForm">                  
                                <form className="enquire-form" id="enquiryForm" method="POST" noValidate>
                                  <input type="hidden" name="utmsource" className="utmSource" />
                                  <input type="hidden" name="utmcampaign" className="utmCampaign" />
                                  <input type="hidden" name="utmmedium" className="utmMedium" />
                                  <input type="hidden" name="utmterm" className="utmTerm" />

                                  <div className="col-6 col-xs-12 form-group-wrapper">
                                    <label>Name<span>*</span></label><br />
                                    <input type="text" name="name" id="name" className="form-control required" />
                                  </div>  
                                  <div className="col-6 col-xs-12 form-group-wrapper phone_wrapper">
                                    <label>Mobile Number<span>*</span></label><br />
                                    <div className="col-12">
                                        <input type="hidden" name="code" id="countryname" value="IN" className="countryname" />
                                        <input id="phone" maxLength="10" minLength="10" name="phone" size="20" className="required number phone" type="tel" />                       
                                    </div>
                                    <div className="clearfix"></div>                                 
                                  </div>
                                  <div className="col-12 col-xs-12 form-group-wrapper checkbox-check">
                                    <input type="checkbox" name="checkboxv1" value="1" required="" /> <span className="text-medium">I hereby accept the terms and conditions</span>
                                  </div>                                           
                                  <div className="col-12 dis-flex pd-tp-10">
                                    <div className="col-6 col-xs-12 form-group-wrapper">
                                      <input type="submit" className="submit-btn theme-btn" id="enquiry-submit" value="Open Dmat Account" data-event-category="Button" data-event-action="Click" data-event-name="Submit Enquire Form" />
                                    </div>
                                    <div className="col-6 col-xs-12 form-group-wrapper clickHereWrapper">
                                     <a href="#" className="text-medium underline">Click Here</a> to Resume Application
                                    </div>
                                  </div>
                                  <div className="clearfix"></div>
                                </form>
                                {/*<div id="enquirySuccess" className="success text-center text-purple text-semiBold pd-bt-20" >Your response has been received.<br /> Our sales team will get in touch with you soon.</div>             */}
                              </div>
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="padding pos-rel bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="col-12 secHeading text-center">Why Open a YES Securities Demat Account?</div>
              <div className="col-12 dis-flex mg-tp-30">
                <div className="col-6">
                  <ul className="list whyOpenList">
                    <li>Research-Backed Advice: Daily recommendations for informed investments</li>
                    <li>Cost Effective Plans: High Value, Low Brokerage Plans</li>
                    <li>Anywhere Access: Trade from your computer, laptop, or mobile phone with equal ease</li>
                    <li>Bouquet of Offerings: Trade & invest across equity, derivatives, commodities and currency</li>
                    <li>Call & Trade: Enjoy call and trade service at zero cost</li>
                    <li>IPO Counter: Apply for IPOs in three clicks</li>
                    <li>Global Investments: Access to 30+ global markets and 35000+ investment instruments</li>
                    <li>Mutual Funds: Choose from multiple AMCs under a single window</li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/images/image.webp" alt="image" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
