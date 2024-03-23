import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import { IoLocationOutline } from "react-icons/io5";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import './index.css'

const Header = props => {
  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          

          <div className="nav-bar-large-container">
            
            <img
                className="website-logo"
                src="https://i.pinimg.com/564x/b9/16/6c/b9166c8cc7cf1d91fb98d79ab496108a.jpg"
                alt="website logo"
              />
            
            <div className='location-icon'>
                
                    <IoLocationOutline className='l-icon' />

                <p className='delivering_para'>Delivering to Guntur 533349 <br/><span className='update_heading'>Update Location</span></p>
                
                 
            </div>
            <div className='input1'>
                <select className='all-categories'>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    
                </select>
                <input className='input' type='search' />
                <br/>
                <IoSearch />

            </div>
            <div className='India-icon'>
                <img alt='india' className='india' src="https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?w=1380&t=st=1710774400~exp=1710775000~hmac=e918e39fcdab9c71f8380fee804e2fae61b10377949bb6fcb31273835809a611"/>
                <h1>EN</h1>
            </div>
            <div>
            
                <p className='delivering_para'>Hello, sign in <br/><span className='update_heading'>Accounts & Lists</span></p>
                
                 
            </div>
            <div>
                <p className='delivering_para'>Returns <br/><span className='update_heading'>& Orders</span></p>
                
                 
            </div>
            <div className='location-icon'>
                
                    <LiaCartPlusSolid className='l-icon1' />

                <span className='update_heading'>Cart</span>
                
                 
            </div>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
