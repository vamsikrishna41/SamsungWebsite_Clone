import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
       <img src="https://static.vecteezy.com/system/resources/previews/014/018/566/original/samsung-logo-on-transparent-background-free-vector.jpg" id='logo' alt='one'/>
          <ul>
            <Link to='/' className='home'>Home</Link>
            <Link to='/shop' className='shop'>Shop</Link>
            <Link to='/mobile' className='mobile'>Mobile</Link>
            <Link to='/tv' className='tv'>Tv&AV</Link>
            <Link to='/homeapp' className='ha'>HomeAppliances</Link>
            <Link to='/laptop' className='laptop'>Laptops&Monitors</Link>
           <Link to='/display' className='dis'>Displays</Link>
           <Link to='/acc' className='acc'>Accessories</Link>
           <Link  to='/sm' className='sm'>SmartThings</Link>
            <Link to='/support' className='support'>Support</Link>
            <Link to='/fb' className='bussiness'>ForBusiness</Link>
            
       <Link to='/search' className='searchbar'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"  alt="buttonpng"  id='b1'/></Link>
       <Link to='/cart' className='addtocart'> <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"  alt="buttonpng"  id='b2'/></Link>
      <Link to='/account' className='account'> <img src="https://cdn.icon-icons.com/icons2/3065/PNG/512/profile_user_account_icon_190938.png"  alt="buttonpng"  id='b3'/></Link>
            </ul>
           
        </nav>
    </div>
  )
}

export default Navbar