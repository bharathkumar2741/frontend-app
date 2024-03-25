import { IoLocationOutline } from "react-icons/io5";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";

import './index.css'

const Header = props => {
  return (
    <>
    <div>
      <nav className="nav-header">
        <div className="nav-content">
          

          <div className="nav-bar-large-container">
            <a className='color' href=' '>
              <img
                className="website-logo"
                src="https://i.pinimg.com/564x/b9/16/6c/b9166c8cc7cf1d91fb98d79ab496108a.jpg"
                alt="website logo"/>
            </a>
            <h1 className="amazon-head">Amazon.in</h1>
            
            <div className='location-icon'>
                
                <a className='color' href=' '><IoLocationOutline className='l-icon' /></a>
                <a className='color' href=' '>

                <p className='delivering_para'>Delivering to Guntur 533349 <br/><span className='update_heading'>Update Location</span></p>
                </a>
                    
                
                 
            </div>
            <div className='input1'>
                <select className='all-categories'>
                    <option>All</option>
                    <option>item 1</option>
                    <option>item 2</option>
                    <option>item 3</option>
                    <option>item 4</option>
                    <option>item 5</option>
                </select>
                <input className='input' type='search' placeholder="Search..." />
                <br/>
               <IoSearch />

            </div>
            <div className='India-icon'>
              
              <img alt='india' className='india' src="https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?w=1380&t=st=1710774400~exp=1710775000~hmac=e918e39fcdab9c71f8380fee804e2fae61b10377949bb6fcb31273835809a611"/>
              <select className="select-lan">
                <option>EN</option>
                <option>TE</option>
              </select>
                
            </div>
            <div>
                <a href=" " className="color"><p className='delivering_para'>Hello, sign in <br/><span className='update_heading'>Accounts & Lists</span></p></a>    
            </div>
            <div className="mb-responsive">
                <a href=" " className="color"><p className='delivering_para'>Returns <br/><span className='update_heading'>& Orders</span></p></a> 
            </div>
            <div className='location-icon1'>
                
                    <a className="color" href=" "><LiaCartPlusSolid className='l-icon1' /></a>

                   <a href=" " className="color"><span className='update_heading'>Cart</span></a>
                
                 
            </div>
            
          </div>
        </div>
      </nav>
      <div className='input3'>
                
                <input className='input' type='search' placeholder="Search..." />
                <br/>
               <IoSearch className="search-icon-mb" />

            </div>
            <div className='India-icon'></div>
      </div>
    </>
  )
}

export default Header
