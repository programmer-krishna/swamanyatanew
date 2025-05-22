// fourth update - font size increase - proper font size
// back button 
// 

import React from 'react';
import { Container, Row, Col, Card, CardBody, Table,Button, CardHeader } from 'reactstrap';
import UiContent from "../../../Components/Common/UiContent";
//import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ArjView = () => {
    document.title = "अर्ज तपशील";

    const navigate = useNavigate();

    const schoolDetails = {
        name: "JAWAHAR ENGLISH MEDIUM SCHOOL",
        address: "313, Ganesh Peth, near dudit bhoril, Pune",
        city: "PUNE",
        region: "Pune City",
        corporation: "Pune (M Corp.)",
        pin: "411002",
        phone: "8446647406",
        email: "jawaharsm@yahoo.com",
        district: "Pune",
        udise: "27251800818",
        submittedDate: "22/05/2023",
        resubmittedDate: "17/01/2024"
    };



    const BreadCrumb = ({ title, pageTitle, pageLink }) => {
      return (
          <Row>
              <Col xs={12}>
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                      <h4 className="mb-sm-0">{title}</h4>
                      <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                              <li className="breadcrumb-item">
                                  <Link to={pageLink}>{pageTitle}</Link>
                              </li>
                              <li className="breadcrumb-item active">{title}</li>
                          </ol>
                      </div>
                  </div>
              </Col>
          </Row>
      );
  };
    

    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="अर्ज पाहा" pageTitle="डॅशबोर्ड" pageLink="/dashboard" />

                    <Row className="my-2">
                        <Col style={{ fontSize:"14px" }} >
                            <h1 className="fs-5 mb-3 fw-bold"> 
                                अर्ज तपशील - {schoolDetails.name} ({schoolDetails.udise})
                            </h1>
                            <p className='fw-semibold mb-1'><strong>Inspection Officer Details:</strong></p>
                            <p className='fw-semibold mb-1'>Name: Sunanda Wakhare</p>
                            <p className='fw-semibold mb-2'>Administrative Officer Pune MNP</p>      
                        </Col>  
                    </Row>

                    <Row>
                        <Col lg={12} > 
                            <Card>
                              <CardHeader className="d-flex justify-content-between align-items-center bg-white">
                                <div className="card-title m-2 fw-semibold" style={{fontSize:"20px"}}>अर्ज</div> 
                                  
                              </CardHeader>
                              <CardBody>
                                { /* शाळेची माहिती */ }
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="mb-2 fw-semibold" style={{fontSize:"18px"}} >शाळेची माहिती</div> 
                                  <Table bordered>
                                    <thead className='table-light'>
                                      <tr>
                                        <th>एस. आर. क्रमांक</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>     
                                      </tr>   
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <th>शाळेचं नाव</th>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <th>शासन व उपशासन आदेशात नमूद केलेला पत्ता</th>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <th>जिल्हा</th>
                                        <td>Pune</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <th>तालुका</th>
                                        <td>Mawal</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <th>गाव/शहर</th>
                                        <td>Gahunje</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <th>पिनकोड</th>
                                        <td>412101</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <th>शाळेचा मोबाईल नंबर</th>
                                        <td>kpcfcghjk</td>
                                      </tr>
                                      <tr>
                                        <td>8</td>
                                        <th>शाळेचा ईमेल आयडी</th>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>9</td>
                                        <th>शाळेचा प्रकार</th>
                                        <td>अनुदानित</td>
                                      </tr>
                                      <tr>
                                        <td>10</td>
                                        <th>Udise No</th>
                                        <td></td>
                                      </tr>
                                      <tr>
                                        <td>11</td>
                                        <th>Application Submitted Date</th>
                                        <td>12/07/2024</td>
                                      </tr>
                                      <tr>
                                        <td>12</td>
                                        <th>Application Resubmitted Date</th>
                                        <td>13/07/2024</td>
                                      </tr> 
                                    </tbody>
                                  </Table>
                                </div>


                                { /* सामान्य माहिती */ }
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{fontSize:"18px"}}>सामान्य माहिती</div>   
                                    <div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="infoStatus" id="reject" value="reject" />
                                        <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="infoStatus" id="accept" value="accept" defaultChecked />
                                        <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                      </div>
                                    </div>
                                  </div>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>एस. आर. क्रमांक</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>गृहनिर्देशांक लिंक</td>
                                        <td>MPF4+RF Pimpri-Chinchwad, Maharashtra, India</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>सत्र मान्यता (नमुना - २) प्रमाणपत्र प्राप्ती कालावधी</td>
                                        <td>["2022-2025"]</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>शासन मान्यता दर्शविणारा नमूद केलेला पत्ता</td>
                                        <td>Tathwade Gahunje Rasta Pune</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>शाळेच्या स्थापनेचे वर्ष</td>
                                        <td>2017</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>प्रथम शाळा सुरु दिनांक</td>
                                        <td>04-06-2018</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>कोणत्या इयत्तेसाठी मान्यता प्रमाणपत्र आहे</td>
                                        <td>1 - 8</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <td>शाळेचे क्षेत्र</td>
                                        <td>Grampanchayat</td>
                                      </tr>
                                      <tr>
                                        <td>8</td>
                                        <td>सत्र प्रारंभाची सुरु असलेली इयत्ता</td>
                                        <td>1 - 10</td>
                                      </tr>
                                      <tr>
                                        <td>9</td>
                                        <td>माध्यम</td>
                                        <td>English</td>
                                      </tr>
                                      <tr>
                                        <td>10</td>
                                        <td>UDISE मध्ये असलेली इयत्ता</td>
                                        <td>1 - 10</td>
                                      </tr>
                                      <tr>
                                        <td>11</td>
                                        <td>शाळेचे मंडळ</td>
                                        <td>state_board</td>
                                      </tr>
                                      <tr>
                                        <td>12</td>
                                        <td>ट्रस्ट संचालित व्यवस्थापन समितीचे नाव</td>
                                        <td>Hans Education Modern Foundation</td>
                                      </tr>
                                    </tbody>
                                  </Table>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                       <th>नाव</th>
                                       <th>पदनाम</th>
                                       <th>पत्ता</th>
                                       <th>मोबाईल क्रमांक (कार्यालय निवास)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Seema</td>
                                        <td>principal</td>
                                        <td>Near Guru Narayan Temple Sai Nagar Gahunje</td>
                                        <td>8007622008</td> 
                                      </tr>
                                    </tbody>
                                  </Table>

                                </div>

                                { /* विद्यार्थी संख्या */ }   
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}> 
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{fontSize:"18px"}} >विद्यार्थी संख्या</div> 
                                    <div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="studentCountStatus" id="reject" value="reject" />
                                        <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="studentCountStatus" id="accept" value="accept" defaultChecked />
                                        <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                      </div>
                                    </div>
                                  </div>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>तपशील</th>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                        <th>4th</th>
                                        <th>5th</th>
                                        <th>6th</th>
                                        <th>7th</th>
                                        <th>8th</th>
                                        <th>9th</th>
                                        <th>10th</th>
                                        <th>एकूण</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>एकूण मुले</td>
                                        <td>21</td><td>11</td><td>17</td><td>16</td><td>11</td><td>2</td><td>8</td><td>8</td><td>13</td><td>8</td><td>115</td>
                                      </tr>
                                      <tr>
                                        <td>एकूण मुली</td>
                                        <td>22</td><td>16</td><td>17</td><td>12</td><td>12</td><td>4</td><td>2</td><td>5</td><td>03</td><td>7</td><td>100</td>
                                      </tr>
                                      <tr>
                                        <td>एकूण</td>
                                        <td>43</td><td>27</td><td>34</td><td>28</td><td>23</td><td>6</td><td>10</td><td>13</td><td>16</td><td>15</td><td>215</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>


                                {/* इमारत सुविधा / शाळेच्या परिसराचे क्षेत्रफळ */}  
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="d-flex justify-content-between align-items-center mb-2" >
                                    <div className="fw-semibold mb-2" style={{fontSize:"18px"}} >इमारत सुविधा / शाळेच्या परिसराचे क्षेत्रफळ / एकूण बांधकामाचे क्षेत्र</div> 
                                    <div>
                                        <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="BuildingServiceStatus" id="reject" value="reject" />
                                          <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input className="form-check-input" type="radio" name="BuildingServiceStatus" id="accept" value="accept" defaultChecked />
                                          <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                        </div>
                                    </div>
                                  </div>
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>एस आर क्र.</th>
                                        <th>शिर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>   
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>संस्थेच्या नावें उपलब्ध जागेचा पुरावा</td>
                                        <td>Rent agreement</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>एकूण बांधकामाचे क्षेत्रफळ (चौ.मी)</td>
                                        <td>1500</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>खेळाच्या मैदानाचे क्षेत्रफळ</td>
                                        <td>2500</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>शाळेच्या परिसराचे एकूण क्षेत्रफळ</td>
                                        <td>4000</td>
                                      </tr>
                                    </tbody>
                                  </Table>

                                  <div className='mt-4'>   
                                  
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}} >कार्यालय / भांडार / मुख्याध्यापक खोली / वर्गखोल्यांची संख्या व मापे नकाशानुसार</div>
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                       <th>एस आर क्र.</th>
                                       <th>खोल्या</th>
                                       <th>खोली संख्या</th>
                                      </tr>
                                    </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>मुख्याध्यापक- नि-कार्यालय- नि- भांडार खोली</td>
                                      <td>3</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>वर्गखोल्यांची संख्या</td>
                                      <td>13</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>विज्ञान प्रयोगशाळा खोली संख्या</td>
                                      <td>01</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>ग्रंथालय खोली संख्या</td>
                                      <td>01</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>एकूण खोली संख्या</td>
                                      <td>18</td>
                                    </tr>
                                  </tbody>
                                </Table>
                                </div>

                                <div className='mt-4' >
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}}>शौचालय व प्रवेश सुविधा</div>
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>एस आर क्र.</th>
                                        <th>शिर्षक</th>
                                        <th>संख्या</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>विशेष गरजा असणाऱ्या (Child with special need) विद्यार्थ्यांसाठी कमोड शौचालय</td>
                                        <td>2</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>मुलांसाठी स्वतंत्र शौचालय</td>
                                        <td>8</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>मुलांसाठी स्वतंत्र मुत्रारी</td>
                                        <td>8</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>मुलींसाठी स्वतंत्र शौचालय</td>
                                        <td>8</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>मुलींसाठी स्वतंत्र मुत्रारी</td>
                                        <td>8</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>किचन शेड</td>
                                        <td>NA</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <td>विना अडथळा प्रवेशासाठी उताराचा रस्ता</td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}>yes</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>

                                <div className='mt-4' >
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}}>इतर सुविधा</div> 
                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>आवश्यक सुविधा</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>अग्निशमन सिलिंडर संख्या</td>
                                        <td>1</td>
                                      </tr>
                                      <tr>
                                        <td>वैद्यकीय प्राथमिकोपचार पेटी संख्या</td>
                                        <td>1</td>
                                      </tr>
                                      <tr>
                                        <td>सीसीटीव्ही संख्या</td>
                                        <td>36</td>
                                      </tr>
                                      <tr>
                                        <td>शाळा मान्यता क्र व UDISE आँड NOC ना तपशील दर्शनी भागात स्पष्ट लावले आहे का?</td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}>yes</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                 </div>
                                </div>

                                {/* अध्ययन- अध्यापन तासिका, साहित्य/खेळ व क्रीडा विषयक सामग्री / ग्रंथालय मधील साहित्यांची उपलब्धता */} 
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}> 
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{fontSize:"18px"}}>
                                      अध्ययन- अध्यापन तासिका, साहित्य/खेळ व क्रीडा विषयक सामग्री / ग्रंथालय मधील साहित्यांची उपलब्धता
                                    </div>
                                    <div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="TeacherSubjectStatus" id="reject" value="reject" />
                                        <label className="form-check-label" htmlFor="reject">नकार द्या</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="TeacherSubjectStatus" id="accept" value="accept" defaultChecked />
                                        <label className="form-check-label" htmlFor="accept">स्वीकारा</label>
                                      </div>
                                    </div>
                                  </div>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>एस आर क्र.</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          मागील शैक्षणिक वर्षात प्राथमिक साठी किमान 200 दिवस 800 तासांची तासिका
                                          व उच्च प्रा. साठी 220 दिवस 1000 तासांची तासिका अध्यापन कार्यवाही
                                        </td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}>yes</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>किमान 45/48 तासिका अभ्यास अध्यापन कार्यवाही</td>
                                        <td>45 hrs</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>प्रत्येक वर्गासाठी शैक्षणिक साहित्य आवश्यकतेनुसार पुरेसे आहे ?</td>
                                        <td style={{ color: 'green', fontWeight: 'bold' }}>yes</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>शिक्षक अध्यापनासाठी उपलब्ध संदर्भ पुस्तके संख्या</td>
                                        <td>200</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>ग्रंथालय विद्यार्थ्यांच्या वाचनासाठी उपलब्ध पुस्तकांची संख्या</td>
                                        <td>1000</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>क्रीडा व खेळ विषयक उपलब्ध संच संख्या</td>
                                        <td>7</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <td>मानसिक / नियतकालिके ( किशोर, जीवन शिक्षण इ.) संख्या</td>
                                        <td>03</td>
                                      </tr>
                                      <tr>
                                        <td>8</td>
                                        <td>वर्तमानपत्रे नावे व संख्या</td>
                                        <td><strong>TIMES OF INDIA, SAKAL, NAV BHARAT</strong></td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>


                                { /* मंजूर शाळा दस्तऐवज चेकलिस्ट */ }
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="mb-0 fw-semibold" style={{fontSize:"18px"}} >मंजूर शाळा दस्तऐवज चेकलिस्ट</div>
                                    <div>
                                      <Button color="primary">Download All</Button>
                                      <div className="form-check form-check-inline ms-3">
                                        <input className="form-check-input" type="radio" name="documentStatus" id="rejectAll" value="reject" />
                                        <label className="form-check-label" htmlFor="rejectAll">नकार द्या</label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="documentStatus" id="acceptAll" value="accept" defaultChecked />
                                        <label className="form-check-label" htmlFor="acceptAll">स्वीकारा</label>
                                      </div>
                                    </div>
                                  </div>

                                  <Table bordered>
                                    <thead className="table-light">
                                      <tr>
                                        <th>एस आर क्र.</th>
                                        <th>शीर्षक</th>
                                        <th>शाळेने भरलेली माहिती</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {[
                                        'मान्यतेचे शासन निर्णय/शासन आदेश',
                                        'शिक्षण उपसंचालकांचे मान्यतेचे आदेश',
                                        'प्रथम मान्यता आदेश / सर्व वर्गांसाठी नैसर्गिक वाढ आदेश',
                                        'संस्थेचा नमुना १ मधील मागणी अर्ज (जुनी हेरिटेज जोडू नये)',
                                        'संस्था नोंदणी 1950 आणि 1860 प्रमाणपत्र / कंपनी प्रमाणपत्र',
                                        'संस्थेच्या नावे जागा असल्याचे खरेदीखत / भाडेकरार / बक्षीसपत्र / मालमता / ७/१२',
                                        'विध्यार्थ्यांकडून कोणतेही फी / देणगी घेत नसल्याचे मुख्याध्यापक हमीपत्र',
                                        'प्रस्तावित शाळेवास मनुषमालिके तील रु. 100 च्या मुद्रांकावरील प्रतिज्ञापत्र',
                                        'शाळेच्या मुख्याध्यापकांची स्वाक्षरी आणि शिक्का'
                                      ].map((title, idx) => (
                                        <tr key={idx}>
                                          <td>{idx + 1}</td>
                                          <td>{title}</td>
                                          <td>रिकामे</td>
                                          <td>
                                            <div className="form-check form-check-inline">
                                              <input className="form-check-input" style={{ marginRight:"10px" }} type="radio" name={`rowStatus${idx}`} id={`reject${idx}`} value="reject" />
                                              <label className="form-check-label" htmlFor={`reject${idx}`}>नकार द्या</label>
                                            </div>
                                            <div className="form-check form-check-inline ms-3">
                                              <input className="form-check-input" style={{ marginRight:"10px" }} type="radio" name={`rowStatus${idx}`} id={`accept${idx}`} value="accept" defaultChecked />
                                              <label className="form-check-label" htmlFor={`accept${idx}`}>स्वीकारा</label>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </Table>

                                </div>


                                { /* तपासणी अधिकारी अभिप्राय */ }
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>  
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}}>तपासणी अधिकारी अभिप्राय</div>
                                  <Table bordered responsive>
                                    <thead className="table-light"> 
                                      <tr>
                                        <th>शिर्षक</th>
                                        <th>तपासणी अधिकारी अभिप्राय</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                      <td>शाळेस मान्यता विपयक सर्व कागदपत्रे उपलब्ध आहेत?</td>
                                      <td>-</td>
                                      </tr>
                                      <tr>
                                        <td><b>RTE 2009</b> मधील निकषानुसार सर्व भौतिक सुविधांची पूर्तता होत आहे?</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>नमुना 2 प्रमाणपत्र देण्यासाठी शिफारस आहे?</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>अभिप्राय</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>तपासणी अधिकारी</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>तपासणी दिनांक</td>
                                        <td>-</td>
                                      </tr>
                                      <tr>
                                        <td>तपासणी अधिकारी अभिप्राय कामकाज</td>
                                        <td>-</td>
                                      </tr>
                                    </tbody>
                                  </Table>   
                                </div>


                                { /* तपासणी अधिकार्‍यांनी शाळेच्या भौतिक सुविधा दर्शविणाऱ्या खालील सर्व सुविधांचे
                                  जिओ टॅगिंगसह <b>GPS कॅमेऱ्याने फोटो जोडावे</b>  */ }
                                <div className='border m-2 p-4 fw-semibold' style={{ fontSize: '14px' }}>
                                  <div className="fw-semibold mb-2" style={{fontSize:"18px"}}>
                                    तपासणी अधिकार्‍यांनी शाळेच्या भौतिक सुविधा दर्शविणाऱ्या खालील सर्व सुविधांचे
                                    जिओ टॅगिंगसह <b>GPS कॅमेऱ्याने फोटो जोडावे</b>
                                  </div>
                                  <Table bordered responsive>
                                    <thead className="table-light">
                                      <tr>
                                        <th>शिर्षक</th>
                                        <th>प्रतिमा</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>उतार</td>
                                        <td>रिक्त</td>
                                      </tr>
                                      <tr>
                                        <td>संपर्क भिंत</td>
                                        <td>रिक्त</td>
                                      </tr>
                                      <tr>
                                        <td>मुलीचे शौचालय</td>
                                        <td>रिक्त</td>
                                      </tr>
                                      <tr>
                                        <td>मुलांचे शौचालय</td>
                                        <td>रिक्त</td>
                                      </tr>
                                      <tr>
                                        <td>पिण्याची सुविधा</td>
                                        <td>रिक्त</td>
                                      </tr>
                                      <tr>
                                        <td>खेळाचे मैदान</td>
                                        <td>रिक्त</td>
                                      </tr>
                                      <tr>
                                        <td>शाळेचे प्रवेशद्वार / इमारत / इतर सुविधा</td>
                                        <td>रिक्त</td>
                                      </tr>
                                      <tr>
                                        <td>वाचनालय, संगणक, प्रयोगशाळा किंवा किचन शेड</td>
                                        <td>रिक्त</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>


                                { /* last buttons  */}

                                <div className="d-flex justify-content-end mt-4" style={{ gap: '10px' }}>
                                  <Button
                                    color="primary"
                                    size="md"
                                    onClick={() => navigate('/अर्ज')}
                                    style={{
                                      backgroundImage: 'linear-gradient(to right, var(--bs-primary), var(--bs-info))',
                                      color: 'white', // Ensure text is readable on the gradient
                                      border: 'none', // Remove default button border
                                    }}
                                  >
                                    मागे जा
                                  </Button>
                                  <Button
                                    color="info"
                                    size="md"
                                    style={{
                                      backgroundImage: 'linear-gradient(to right, var(--bs-primary), var(--bs-info))',
                                      color: 'white',
                                      border: 'none',
                                    }}
                                  >
                                    Update Application Status
                                  </Button>
                                </div>

                              </CardBody>
                            </Card>

                        </Col> 
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ArjView;