import { Link , useLocation, useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className="flex bg-black justify-between text-white px-10 md-max:px-5 py-4">
      <div className='flex items-center'>
        <img src={assets.navLogo} alt="" />
        <span className='font-semibold text-2xl md-max:text-xl ml-2'>Job Portal</span>
      </div>
      <div className='flex items-center md-max:hidden'>
        <ul className='flex items-center gap-5 font-bold text-xl text-[#a0a1a1]'>
          <li>
            <Link className={location.pathname === '/' ? 'text-white' : ''} to="/">Home</Link>
          </li>
          <li>
            <Link className={location.pathname === '/jobs' ? 'text-white' : ''} to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link className={location.pathname === '/aboutus' ? 'text-white' : ''} to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link className={location.pathname === '/contactus' ? 'text-white' : ''} to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <button className='bg-[#309689] px-4 py-2 rounded-lg ml-3' onClick={() => navigate('/login')} >Login</button>
      </div>
    </div>
  );
}

export default Navbar