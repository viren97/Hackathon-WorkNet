import React, {Component} from 'react'
import { Card, Container, Row, Col } from 'reactstrap';
import Select from 'react-dropdown-select';
class QuoteRequest extends Component{
    constructor(props) {
        super(props);
    
        this.state = { 
          showTab: 1,
        };
      }
    handleConfirm= (id, flag ) =>{
      this.props.closePopup();
      this.props.confirmRideDriver(id, flag);
    }
    handleCancel = (id) =>{
      this.props.closePopup();
      this.props.cancelBookingDriver(id)
    }
    onChange = (values) =>{

    }
    render() {
        const options = [
            { label: 'Thing 1', value: 1},
            { label: 'Thing 2', value: 2},
          ];
      return (
        <Container fluid={true} className="popup">
          <Card className="popup-inner">
            <Row>
              <Col xs="12">
                <button className="close" onClick={this.props.closePopup}><b>X</b></button>
              </Col>
            </Row>
            <Row>
              <Col xs="8">
                <h3>Get A Quote</h3>
              </Col>
              <Col xs="4">
                <button className="cancel-ride" >Submit</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="label">Description</p>
                <input></input>
              </Col>
              <Col>
                <p className="label">Skills </p>
                <Select
                    multi
                    options={options}
                    onChange={(values) => this.onChange(values)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="label">Its all good</p>
                <p>Its all good</p>
              </Col>
              <Col>
                <p className="label">Its all good</p>
                <p>Its all good</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="label">Its all good </p>
                <p>Its all good</p>
              </Col>
              <Col>
                <p className="label">Its all good</p>
                <p></p>
              </Col>
            </Row>
            <Row className="tabs">
              <Col xs="4"
                className={`${this.state.showTab === 1 ? "active" : ""}`}
                onClick={() => this.setState({ showTab: 1 })}
              >
                <h3>Its all good</h3>
              </Col>

              <Col xs="4"
                className={`${this.state.showTab === 2 ? "active" : ""}`}
                onClick={() => this.setState({ showTab: 2 })}
              >
                <h3>Its all good</h3>
              </Col>
            </Row>
          </Card>
        </Container>
      );
    }
}

export default QuoteRequest