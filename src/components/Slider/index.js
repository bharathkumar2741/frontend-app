import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./index.css"

function Sliding() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='container'>
            <div className='card-container'>
            <div className='card1'>
                <ul className='items'>
                    <li>Womens Fashion</li>
                    <li>Mens & Beauty</li>
                    <li>Mens's Fashion</li>
                    <li>Watches & Accessories</li>
                    <li>Electronic Devices</li>
                    <li>TV & Home Appliances</li>
                    <li>Electronic Accessories</li>
                    <li>Groceries & Pets</li>
                    <li>Babies & Toys</li>
                </ul>
            </div>
            <div className="image-slider-container">
                <Slider {...settings}>
                    {data.map((d)=>(
                        <div >
                            <img className='img' alt="" src={d.img}/>
                        </div>
                    ))}
                </Slider>
            </div>
            </div>
            <div className='main-card'>
                <div className='cards'>
                    
                    
                    <div className='card2'>
                        <div className='four-container'>
                            <h1 className='four-card-heading'>Up to 70% | Get festive ready</h1>
                            <div className='four-card'>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='cards'>
                    
                    
                    <div className='card2'>
                        <div className='four-container'>
                            <h1 className='four-card-heading'>Up to 70% | Get festive ready</h1>
                            <div className='four-card'>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='cards'>
                    
                    
                    <div className='card2'>
                        <div className='four-container'>
                            <h1 className='four-card-heading'>Up to 70% | Get festive ready</h1>
                            <div className='four-card'>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='cards'>
                    
                    
                    <div className='card2'>
                        <div className='four-container'>
                            <h1 className='four-card-heading'>Up to 70% | Get festive ready</h1>
                            <div className='four-card'>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                    <div className="padding-four">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Clothing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <span className='head'>Categories</span>
                <div className='small-card-container'>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                    <div className='small-card'>
                        <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                        <span className='small-span'>Wireless EarBuds</span>
                    </div>
                   
                </div>
            <div className='small-card-container'>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                <div className='small-card'>
                    <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/18c653784187d37c2e6d014ae7a37738.jpg"/>
                    <span className='small-span'>Wireless EarBuds</span>
                </div>
                
            </div>
        </div>
    );
}

const data=[
    {
    img:"https://icms-image.slatic.net/images/ims-web/a27cdde6-3981-4364-a3cf-ba93b1ae43e3.png_1200x1200.jpg"
},
{
    img:"https://icms-image.slatic.net/images/ims-web/4b4061c5-375a-40a2-99d7-ce42800a6408.jpg"
},
{
    img:"https://icms-image.slatic.net/images/ims-web/61a6e0ed-7c4a-40de-8146-162fa8502cf8.jpg"
},
{
    img:"https://icms-image.slatic.net/images/ims-web/0d216dd2-08fd-450a-bf84-0a60fbdf3459.jpg"
},
{
    img:"https://icms-image.slatic.net/images/ims-web/fc8a4900-1e5e-42ab-9cd4-468ae25fc583.png"
},
{
    img:"https://icms-image.slatic.net/images/ims-web/ea87b495-d575-4de6-b385-7c47349db14c.jpg"
}
]

export default Sliding;