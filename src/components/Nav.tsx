
import Icon from '../constant/icons/Icon'
import { Button } from './Button'
import { FaBars } from "react-icons/fa";

export const Nav = () => {
  return (
    <div>
        <nav className='w-full bg-[#fff] flex justify-between items-center py-3 lg:px-8 px-4 shadow fixed top-0 left-0 z-40'>
           {/* <div><img className='w-28' src={logo} alt="logo" /> </div>   */}
          <div className=''><Icon fill='#006A71'  type="logo" /></div> 


           <div className='hidden lg:flex items-center space-x-6'>
            <ul className='flex gap-4 font-semibold text-[#006A71]'>
                <li className=''>Home</li>
                <li>Rent Now</li>
                <li>Contact Us</li>

            </ul>

            <div className='flex gap-3'>
                <Button bgVariant='secondary' title='Sign Up' />
                <Button bgVariant='outline' title='Log in' />
            </div>
           </div>

          <div className='lg:hidden'> <FaBars size={25} color='#006A71'/></div>
        </nav>
    </div>
  )
}
