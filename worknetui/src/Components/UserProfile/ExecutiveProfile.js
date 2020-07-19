import React from 'react';
import {Link} from 'react-router-dom'
import CompanyDP from '../../images/companyDisplayPicture.png';


class ExecutiveProfile extends React.Component{


render(){
    return(
        <div id="ExecutiveProfile">
            <div>
            <div id="ExecutiveCoverPicture">
            </div>
            <div id="EmployeeQuickDetails"> 
            <div id="CompanyDp">
                <img src={CompanyDP}></img>
            </div>
            <div id="ExecutiveDetails">
                <p>Ruthvik Kadiyala</p>
                <p>9841651516</p>
                <p>ruthwik.k@technovert.com</p>
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