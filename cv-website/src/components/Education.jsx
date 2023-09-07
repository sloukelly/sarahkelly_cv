import { Container } from "react-bootstrap";
import './Home.css'

const Education = () => {
    return (
      <Container maxWidth="sm" className="section">

        <div className="section-item">
          <div className="job-title">Full Stack Development Degree</div>
          <div className="date">2023</div>
        </div> 
        <div className="company">Code First Girls</div>
        
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">QTS with PGCE</div>
          <div className="date">2020-2021</div>
        </div> 
        <div className="company">GORSE SCITT</div>
        
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">BA (Hons) Printed Textiles and Surface Pattern Design</div>
          <div className="date">2016-2019</div>
        </div> 
        <div className="company">Leeds Arts University</div>
        
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">Foundation Diploma</div>
          <div className="date">2015-2016</div>
        </div> 
        <div className="company">Leeds Arts University</div>
        
        <hr className="left-line"/>

        <div className="section-item">
          <div className="job-title">A Levels - Art(A), Media(C). AS Levels - Product Design(A), Sociology(C)</div>
          <div className="date">2013-2015</div>
        </div> 
        <div className="company">Notre Dame Catholic Sixth Form</div>
        
        <hr className="left-line"/>

      </Container>
    );
  }
   
  export default Education