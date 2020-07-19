import React, { Component } from 'react'
import { Card, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import QuoteRequest from '../Quote/Quote.-Request';
export class SearchResult extends Component {
    
    render() {
        return (
            <Card>
                <h1>{this.props.company.name}</h1>
                <p>{this.props.company.description}</p>
                <div className="skills">
                    <h6>Skills</h6>
                    <p>{this.props.company.skills}</p>
                </div>
                <div className="projects">
                    <h6>Project Domains</h6>
                    <p>{this.props.company.projects}</p>
                </div>
                <div className="clients">
                    <h6>Former Clients</h6>
                    <p>{this.props.company.clients}</p>
                </div>
                <div className="quote">
                    <Button onClick={() => this.props.openPopup()}>Get Quote</Button>
                    <Link className="profile-linl" to="technovert">See More</Link>
                </div>

            </Card>
        )
    }
}

export default SearchResult
