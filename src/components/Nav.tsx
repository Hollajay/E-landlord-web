import logo from '../assets/images/Screenshot__903_-removebg-preview.png'
import { Button } from './Button'

export const Nav = () => {
  return (
    <div>
        <nav className='w-full bg-white flex justify-between items-center py-3 px-8 shadow absolute top-0 left-0'>
           <div><img className='w-28' src={logo} alt="logo" /> </div>  
           <div className='flex items-center space-x-6'>
            <ul className='flex gap-4'>
                <li className='text-light-100'>Home</li>
                <li>Rent Now</li>
                <li>Contact Us</li>
                <li></li>
            </ul>

            <div className='flex gap-3'>
                <Button bgVariant='primary' title='Sign Up' />
                <Button bgVariant='outline' title='Log in' />
            </div>
           </div>
        </nav>
    </div>
  )
}
