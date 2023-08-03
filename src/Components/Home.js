import React from 'react'

function Home() {
  return (
    <div>
    <div className='body'>
    <img src={require('./img/img2.png')} alt='img2'></img>
    </div>
    <main>
      <h1 className='week'><center>This Week’s Highlights</center></h1>
     <div className='menu'>
     <p><b><u>NewIn</u> Mobile
      TV
      Appliances
      Galaxy Ecosystem
      SamsungLive</b></p></div>
      <img src={require('./img/img3.png')} className='unpack' alt='img3'></img>
      <div>                            
      <img src={require('./img/img4.png')} className='compute' alt='img4'></img>
      <img src={require('./img/img5.png')} className='mc' alt='img5'></img>
      <img src={require('./img/img6.png')} className='neo' alt='img6'></img>
      <img src={require('./img/img7.png')} className='selfie' alt='img7'></img>
      </div>
      <div>
        <h1 className='look'><center>Looking for something else?</center></h1>
      </div>
      <div>
      <input type='text' placeholder='search keyword' className='box'></input>
      </div>
      <div className='search'>
        <button className='g'>Galaxy Z Flip5</button>
        <button className='ga'>Galaxy Z Fold5</button>
        <button className='ql'>QLED 8k </button>
        <button className='ut'>UHD TVs </button>
        <button className='eb'>Eco bubble</button></div>
        <div className='se2'><button className='cm'>Curd Maestro</button>
        <button className='smart'>Smart Monitors</button>
      </div>
      <div className='para'>
        <p>* Image simulated for illustrative purpose. Actual UX/UI may differ.</p>
        <p>* S Pen Fold Edition sold separately and is only compatible with Z Fold5, Z Fold4 and Z Fold3. Flex mode supported at angles between 75˚ and 115˚.</p>
        <p>* Image simulated. Color and model availability may vary depending on country or carrier.</p>
        <p>* Galaxy Tab S9, Tab S9+, Tab S9 Ultra is rated as IP68. Based on test condition for submersion in up to 1.5 meter of fresh water for up to 30 mins. Not advised for beach or pool use.</p>
        <p>* 5G Devices are 5G ready, connectivity dependent on network availability.</p>
        <p>* Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
        <p>* Image simulated. S Pen Fold Edition sold separately and is only compatible with Galaxy Z Fold4 and Galaxy Z Fold3.</p>
        <p>* Watch screen image simulated for illustrative purpose. Availability of colours, sizes, models, and watch bands may vary by country or carrier.</p>
        <p>* Image simulated. Available colours of Galaxy Buds2 Pro may vary by country or carrier.</p>
        <p># T&C Apply. Cashback at the sole discretion of the issuer / NBFC.</p>
        <p>** Product launch dates vary from country to country. Some products may be launched earlier in few countries.</p>
        <p>* Offer valid on select models only.</p>
      </div>
      <hr></hr>
      <div className='container'>
      <div className='ps'>
        <h4>Product & Service</h4>
        <p>Smartphones</p>
        <p>Tablets</p>
        <p>Audio Sound</p>
        <p>Watches</p>
        <p>Smart switch</p>
        <p>Mobile Accessories</p>
        <p>Tvs</p>
        <p>Sound Devices</p>
        <p>Refrigerators</p>
        <p>Laundry</p>
        <p>Air solutions</p>
        <p>Cooking Appliances</p>
        <p>Monitors</p>
        <p>Memory storage</p>
        {/* <img src={require('./img/img10.png')} className='line1'></img> */}
     </div>
     {/* <div className='bor1'></div> */}
     <div className='shops1'>
      <h4>Shop</h4>
      <p>Cancellation & Return Policy</p>
      <p>Tracks order status</p>
      <p>Welcome voucher</p>
      <p>Samsung refereal advantage</p>
      <p>Samsung student advantage</p>
      <p>Defence purchase program</p>
      <p>Corporate empolyee program</p>
      <p>Corporate bulk purchase</p>
      <p>Samsung experience store</p>
      <p>Store locator</p>
      <p>Smart club</p>
      <p>FAQs</p>
      <p>Terms of use</p>
      <p>Grievance redressal</p>
      <p>Explore</p>
     </div>
     {/* <div className='bor2'></div> */}
     <div>
      <div className='sup' >
        <h4>Support</h4>
        <p>Whatsapp us</p>
        <p>Sign Language</p>
        <p>E-mail us</p>
        <p>Call us</p>
        <p>Email the CEO</p>
        <p>Community</p>
        <p>Product Registration</p>
        <p>Service center</p>
        <p>Share your opinion</p>
      </div>
      {/* <div className='bor3'></div> */}
      <div className='acccom'>
        <h4>Account&Community</h4>
        <p>My page</p>
        <p>My products</p>
        <p>orders</p>
        <p>Wishlist</p>
        <p>Vouchers</p>
        <p>My referals</p>
        <p>Service</p>
        <p>Community</p>
      </div>
      {/* <div className='bor4'></div> */}
      <div className='sus'>
        <h4>Sustainability</h4>
        <p>Environment</p>
        <p>Security&Privacy</p>
        <p>Accessibility</p>
        <p>Diversity-Equity-Inclusion</p>
        <p>Corporate Citizenship</p>
        <p>Corporate Sustainability</p>
        <h4>About us</h4>
        <p>Company Info</p>
        <p>Business area</p>
        <p>Brand identity</p>
        <p>Careers</p>
        <p>Investor Relations</p>
        <p>News Room</p>
        <p>Ethics</p>
        <p>Samsung design</p>
      </div>
      {/* <div className='bor1'></div>
      <div className='bor2'></div>
      <div className='bor3'></div>
      <div className='bor4'></div> */}
    <hr></hr>
     </div>
     </div>
     <div className='foot'>
      <p>Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.</p>
      <p>Please dispose of e-waste and plastic waste responsibly.</p>
<p>For more information or e-waste pick up, please call 1800 5 7267864 or click here for more details.</p>
     <p>Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001</p>
     <p>Corporate Identification Number (CIN): U31900DL1995PTC071387</p>
     </div>
        <hr></hr>
        <footer>
          <img src={require('./img/img9.png')} alt='lastimg'></img>
        </footer>
        </main>
    </div>
  )
}

export default Home