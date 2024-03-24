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
                <ol className='items'>
                <a className='color1' href=' '><li>Womens Fashion</li></a>
                <a className='color1' href=' '><li>Mens & Beauty</li></a>
                <a className='color1' href=' '><li>Mens's Fashion</li></a>
                <a className='color1' href=' '><li>Watches & Accessories</li></a>
                <a className='color1' href=' '><li>Electronic Devices</li></a>
                <a className='color1' href=' '><li>TV & Home Appliances</li></a>
                <a className='color1' href=' '><li>Electronic Accessories</li></a>
                <a className='color1' href=' '><li>Groceries & Pets</li></a>
                <a className='color1' href=' '><li>Babies & Toys</li></a>
                <a className='color1' href=' '><li>Mens's Fashion</li></a>
                </ol>
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
                                    <div className="padding-four hover">
                                        <a className='img-hyper' href=" "><img className='four-img ' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "><span className='four-span'>Clothing</span></a>
                                    </div>
                                    <div className="padding-four hover">
                                    <a href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "><span className='four-span'>Foot Wear</span></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four hover">
                                    <a href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "><span className='four-span'>Watches</span></a>
                                    </div>
                                    <div className="padding-four hover">
                                    <a href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "><span className='four-span'>Clothing</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='cards'>
                    
                    
                    <div className='card2'>
                        <div className='four-container'>
                            <h1 className='four-card-heading'>Appliances for your home | Up to 55%</h1>
                            <div className='four-card'>
                                <div>
                                    <div className="padding-four hover">
                                    <a href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "><span className='four-span'>Washing Machine</span></a>
                                    </div>
                                    <div className="padding-four hover">
                                    <a href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "> <span className='four-span'>Microwaves</span></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four hover">
                                    <a className='img-hyper' href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "><span className='four-span'>Refigirators</span></a>
                                    </div>
                                    <div className="padding-four hover">
                                    <a className='img-hyper' href=" "> <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "> <span className='four-span'>Air Conditioners</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='cards'>
                    
                    
                    <div className='card2'>
                        <div className='four-container'>
                            <h1 className='four-card-heading'>Revamp your home in style</h1>
                            <div className='four-card'>
                                <div>
                                    <div className="padding-four hover">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg"/>
                                        <br/>
                                        <span className='four-span'>cushion covers</span>
                                    </div>
                                    <div className="padding-four hover">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg"/>
                                        <br/>
                                        <span className='four-span'>fugurines covers</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four hover">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Home Storages</span>
                                    </div>
                                    <div className="padding-four hover">
                                        <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg"/>
                                        <br/>
                                        <span className='four-span'>Lighting Solutions</span>
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
                                    <div className="padding-four hover">
                                    <a className='img-hyper' href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "><span className='four-span'>Boat</span></a>
                                    </div>
                                    <div className="padding-four hover">
                                    <a className='img-hyper' href=" "><img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" "> <span className='four-span'>Boult</span></a>
                                    </div>
                                </div>
                                <div>
                                    <div className="padding-four hover">
                                    <a className='img-hyper' href=" "> <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg"/></a>
                                        <br/>
                                        <a className='img-hyper' href=" ">  <span className='four-span'>Noise</span></a>
                                    </div>
                                    <div className="padding-four hover">
                                    <a className='img-hyper' href=" "> <img className='four-img' alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg"/> </a>
                                        <br/>
                                        <a className='img-hyper' href=" "> <span className='four-span'>Zebranics</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <span className='head'>Categories</span>
                <div className='small-card-container'>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/12350706fd50c2bd41871dc5f3609189.jpg"/></a>
                    <a className='img-hyper' href=" "> <span className='small-span'>Diapers</span></a>
                    </div>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" ">  <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/120c0e065e6f4a0243e1bbd09ad3f090.jpg"/></a>
                    <a className='img-hyper' href=" "> <span className='small-span'>Arm Bags</span></a>
                    </div>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" ">  <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/7601e60aec8b8358fe2b32138a07939b.jpg"/></a>
                    <a className='img-hyper' href=" "> <span className='small-span'>Wireless EarBuds</span></a>
                    </div>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/23923743c4006e6d43a93d910dd12fb1.jpg"/></a>
                    <a className='img-hyper' href=" ">  <span className='small-span'>Door Stops</span></a>
                    </div>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/cd9f86f2960315b62efe4ab5788cf93b.jpg"/></a>
                    <a className='img-hyper' href=" "> <span className='small-span'>Base Layers</span></a>
                    </div>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/7a8a5ebec899a029acf0e387bcc2ff96.jpg"/></a>
                    <a className='img-hyper' href=" "> <span className='small-span'>Body Brush</span></a>
                    </div>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/8651b83461168e67b33265b93464a271.jpg"/></a>
                    <a className='img-hyper' href=" "> <span className='small-span'>Key Chains</span></a>
                    </div>
                    <div className='small-card hover'>
                    <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/057a53a9d19447b881713346f8e590f2.jpg"/></a>
                    <a className='img-hyper' href=" "> <span className='small-span'>Fasical cleaners</span></a>
                    </div>
                   
                </div>
            <div className='small-card-container'>
           
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/c2c0395a4ba7a8fea7ca9622001fccf9.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>fans and bags</span></a>
                </div>
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/original/fa37bfbf30cf43261211b9640b4f8abb.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>Shirts</span></a>
                </div>
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/1f66cccf66e4e5c10ec2f918d56ab701.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>Braas</span></a>
                </div>
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/4b685ec290a5d534a393f36f32c0e925.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>Seeds</span></a>
                </div>
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/a34ccc85c00c43f3ccf3f4505453418d.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>Clothes</span></a>
                </div>
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/790684bd9c3c3ab63f2152de8fbc0966.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>Pads</span></a>
                </div>
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://np-live-21.slatic.net/kf/Sfd61f28799b0456d8b3648e360df37709.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>Sugar</span></a>
                </div>
                <div className='small-card hover'>
                <a className='img-hyper' href=" "> <img className='small-img' alt="" src="https://static-01.daraz.com.np/p/c2c0395a4ba7a8fea7ca9622001fccf9.jpg"/></a>
                <a className='img-hyper' href=" "> <span className='small-span'>Wireless EarBuds</span></a>
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