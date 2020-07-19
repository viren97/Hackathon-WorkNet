import React, { Component } from 'react'
import { Container } from 'reactstrap'
import SearchResult from './SearchResult'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import QuoteRequest from '../Quote/Quote.-Request';
import Select from 'react-dropdown-select';

export class SearchUI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showPopup : false,
        }
    }
    handleClose = () => {
    this.setState({
        showPopup: false
    });
    }
    handleClick = (id) => {
    this.setState({
        showPopup: true
    });
    }
    showPopup = () => {
        return ( 
        <QuoteRequest
          text={"Test"} 
          closePopup={this.handleClose}
          />
          )
      }
    onChange = (values) =>{

    }
    render() {
        const dummy = {
            name : "Technovert",
            description : "A company focussed on Microsoft Based Technologies making solutions for the new generation of tech-enabled companies worldwide",
            skills : ".NET Core, React, Angular, Node",
            projects : "CRM, Payroll, CMS",
            clients : "Oneplus, DLR, Samsung"
        }
        const options = [
            { label: 'Thing 1', value: 1},
            { label: 'Thing 2', value: 2},
          ];
          
        return (
          <React.Fragment>
            <div className="search-ui" >
              <div className="search">
                <input placeholder="Search" className="search-bar"></input>
                <button className="search-button">GO</button>
              </div>
              <div className="skill-select">
                <Select
                    multi
                    options={options}
                    onChange={(values) => this.onChange(values)}
                    className="selector"
                    placeholder="Skills"
                    style = {{width: "200%"}}
                />
                <Select
                    multi
                    options={options}
                    onChange={(values) => this.onChange(values)}
                    placeholder="Domain"
                />
              </div>

              <Container className="search-results">
                <SearchResult
                  company={dummy}
                  closePopup={this.handleClose}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                <SearchResult
                  company={dummy}
                  closePopup={this.handleClose}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                <SearchResult
                  company={dummy}
                  closePopup={this.handleClose}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                <SearchResult
                  company={dummy}
                  closePopup={this.handleClose}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                <SearchResult
                  company={dummy}
                  closePopup={this.handleClose}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                <SearchResult
                  company={dummy}
                  closePopup={this.handleClose}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                <SearchResult
                  company={dummy}
                  closePopup={this.handleClose}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                <SearchResult
                  company={dummy}
                  openPopup={this.handleClick}
                >
                  {" "}
                </SearchResult>
                
              </Container>
            </div>
            {this.state.showPopup ? this.showPopup() : null}
          </React.Fragment>
        );
    }
}

export default SearchUI
