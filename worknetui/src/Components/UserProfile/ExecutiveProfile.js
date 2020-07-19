import React from 'react';
import {Link} from 'react-router-dom'
import CompanyDP from '../../images/companyDisplayPicture.png';


class ExecutiveProfile extends React.Component{


render(){
    return(
        <div id="companyProfile">
            <div>
            <div id="ExecutiveCoverPicture">
            </div>
            <div id="CompanyQuickDetails"> 
            <div id="CompanyDp">
                <img src={CompanyDP}></img>
            </div>
            <div id="CompanyDetails">
                
            </div>
            </div>
        </div>
        <div id="CompanyProfileNavigationDiv" >
            
        </div>
        </div>
            
);
}
}
export default ExecutiveProfile;