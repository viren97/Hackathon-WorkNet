import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  

  return (
    <div>
      <Nav style={{backgroundColor:"white"}} tabs>
        <NavItem>
          <NavLink
            style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px",cursor:"pointer"}}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Description
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
          style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px",cursor:"pointer"}}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Projects & Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
          style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px",cursor:"pointer"}}
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Contact
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent style={{backgroundColor:"white"}} activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <p>A company focussed on Microsoft Based Technologies making solutions for the new generation of tech-enabled companies worldwide</p>
              
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12"className="projectsDetails" >
            <h5>Skills :</h5>
              <ul >
                  <li>.NET Core</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Node</li>
              </ul>
              <h5>Projects Domains :</h5>
              <ul className="projectsDetails">
                  <li>CRM</li>
                  <li>Payroll</li>
                  <li>CMS</li>
                  
              </ul>
              <h5>Former Clients :</h5>
              <ul className="projectsDetails">
                  <li>OnePlus</li>
                  <li>DLR</li>
                  <li>Samsung</li>
              </ul>
            </Col>
        </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
            <Col sm="12">
              <h5>Address :</h5>
              <p>Indra Prastha mens and womens PG,metro pillar 25 lane,Opposite to ur.cars</p>
              <p>Kavuri Hills,phase 3,Sri Rama Colony,Madhapur</p>
              <div className="physicalAddress">
              <p >Hyderabad</p>
              <p>Telangana</p>
              <p>India</p>
              <p>500081</p>
              </div>
              <div id="addressContactDetails">
              <h5 >Contact Details :</h5>
              <p>Primary Contact</p>
              <a href="#">Ruthvik Kadiyala</a>
              <p>Secondary Contact</p>
              <a href="#">Virendra Pandey</a>
              </div>
            </Col>
        </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;