import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import './footer.css';
import './img/footer-icon.png';

const Footer = ()=>{
  const year = new Date().getFullYear();
  return(
    <div>
      <Row>
        <Col md="12">
          <div className="footer">
            <Row>
              <div className="msgDiv">
                <Row>
                  <Col md="8">
                    <div className="msg">
                      <p style={{fontWeight: "bold"}}>Quiky Access</p>
                      <Row>
                        <Col md="4">
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 1</a></p>
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 2</a></p>
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 3</a></p>
                        </Col>
                        <Col md="4">
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 4</a></p>
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 5</a></p>
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 6</a></p>
                        </Col>
                        <Col md="4">
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 7</a></p>
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 8</a></p>
                          <p><a href="http://account-book.nelsonlin.com/" className="footerLink">Link 9</a></p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="msg" >
                      <p style={{fontWeight: "bold"}}>Contact Us</p>
                      <p>Nelson LIN</p>
                      <p><a href="tel: +852 12345678" style={{color: "white"}}>+852 12345678</a></p>
                      <p><a href="mailto: nelson@accountbook.com" style={{color: "white"}}>nelson@accountbook.com</a></p>
                      <p>Address: In your heart</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
            <Row>
              <Col md="12">
                <div className="copyright">
                <h5 style={{marginRight: 10, fontSize: 15}}>{year} Nelson Account Book</h5>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;