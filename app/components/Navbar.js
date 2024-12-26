import React from 'react'
import { BiShoppingBag } from "react-icons/bi";

const Navbar = ({ cart, onCartClick }) => {

  //Show cart quantity with cart icon
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div>
        <nav className='bg-white p-3 md:p-4 mt-4 flex justify-between items-center rounded-lg'>
        <a href='/' className='text-lg md:text-2xl bg-gradient-to-tr from-blue-600 via-purple-800 to-yellow-500 bg-clip-text text-transparent font-semibold'>
        Brand
        </a>

        <div className='flex items-center space-x-4'>
            {/* Cat Icon */}
          <div className='relative'>
            <button onClick={onCartClick} className='text-black pr-2'>
            <BiShoppingBag size={24} className='inline'/>
            {cartQuantity > 0 && 
            <span className='absolute top-[-10px] right-[-4px] bg-purple-700 text-white text-xs px-2 py-1 rounded-full'>
              {cartQuantity}
            </span>}
            </button>

          </div>

        </div>
        </nav>
    </div>
  )
}

export default Navbar