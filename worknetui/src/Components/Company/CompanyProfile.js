import React from 'react';
import {Link} from 'react-router-dom'
import CompanyDP from '../../images/companyDisplayPicture.png';



class CompanyProfile extends React.Component{


render(){
    return(
        <div id="CompanyProfile">
            <div>
            <div id="CompanyCoverPicture">
            </div>
            <div id="CompanyQuickDetails"> 
            <div id="CompanyDp">
                <img src={CompanyDP}></img>
            </div>
            <div id="CompanyDetails">
                <div >
                    <h4 style={{color:"black"}}>Technovert</h4>
                    <ul className="CompanyDetails" id="CompanyUpperDetails">
                        <li>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>Location</span>
                        </li>
                        <li>
                            <i class="fa fa-address-card-o" aria-hidden="true"></i>
                            <span><a href="#">Ruthvik Kadiyala</a></span>
                        </li>
                        <li>
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                            <span><a href="#">Virendra Pandey</a></span>
                        </li>
                    </ul>
                </div>
                
                <div >
                    <ul className="CompanyDetails" id="CompanyLowerDetails">
                        <li>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            <span>Website</span>
                            <p><a href="#">www.technovert.com</a></p>
                        </li>
                        <li>
                            <i class="fa fa-building-o" aria-hidden="true"></i>
                            <span>Sector</span>
                            <p>IT</p>
                        </li>
                        <li>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span>Established</span>
                            <p>12 Jul 2012</p>
                        </li>
                        <li>
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                            <span>Employee count</span>
                            <p>512</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div id="CompanyProfileNavigationDiv" >
            <ul id="CompanyProfileNavigation">
                <li><Link className="profileNavigationLink" to="">Description</Link></li>
                <li><Link className="profileNavigationLink" to="">Projects & Technologies</Link></li>
                <li><Link className="profileNavigationLink" to="">About</Link></li>
            </ul>
        </div>
        </div>
            
);
}
}
export default CompanyProfile;