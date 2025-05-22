import React, { useState, useEffect, useRef } from 'react';
// import Swal from 'sweetalert2';
import UiContent from "../../../Components/Common/UiContent";

//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, Label, Row, p, FormGroup } from 'reactstrap';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { Link } from 'react-router-dom';

//Import Flatepicker
import Flatpickr from "react-flatpickr";

const formSelect2 = () => {
    const [showCommonOrderUpload, setShowCommonOrderUpload] = useState(false);
    const [showCommonOrder2013, setShowCommonOrder2013] = useState(false);
    const [showCommonOrder2016, setShowCommonOrder2016] = useState(false);
    const [showCommonOrder2019, setShowCommonOrder2019] = useState(false);

    document.title = "Form Layouts | Velzon - React Admin & Dashboard Template";
  
    return (
      <React.Fragment>
        <UiContent />
        <div className="page-content">
          <Container fluid>
            <BreadCrumb title="नॉन-ग्रँटेड दस्तऐवज चेकलिस्ट" pageTitle="डॅशबोर्ड > स्व-मान्यता अर्ज" />
  
            <Row>
              <Col xxl={12}>
                <Card>
                    <PreviewCardHeader title="नॉन-ग्रँटेड दस्तऐवज चेकलिस्ट" />
                    <CardHeader>
                        <Row>
                            <Col md={12}>
                            <p className="m-0 fw-bold">नॉन-ग्रँटेड शाळा दस्तऐवज चेकलिस्ट</p>
                            <p className="m-0 font-11 text-capitalize text-warning">* झेरॉक्स कागदपत्रे जोडू नये </p>
                            <p className="m-0 font-11 text-capitalize text-warning">* कृपया फक्त Pdf फाईल अपलोड करा </p>
                            <p className="m-0 font-11 text-capitalize text-warning">
                                * शाळेचे शासन मान्यता / उपसंचालक मान्यता / प्रथम मान्यता / नमुना-२/ भाडेकरार सर्व कागदपत्रे ओरिजिनल संगणकीय प्रणालीतून स्कॅन करून रंगीत कागदपत्रे अपलोड करणे.
                            </p>
                            <p className="m-0 font-11 text-capitalize text-warning">
                                * शाळेचे मुख्याध्यापक चिन्ह आणि शिक्के फक्त PNG मध्ये अपलोड केले पाहिजेत
                            </p>
                            </Col>
                        </Row>
                    </CardHeader>
  
                    <CardBody>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="approvalPdf" className="form-label text-capitalize">
                                मान्यतेचे शासन निर्णय/शासन आदेश <span className="text-danger">*</span>
                                </Label>
                                <Input
                                type="file"
                                id="approvalPdf"
                                name="government_decision_of_approval"
                                accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="deputyDirectorApproval" className="form-label text-capitalize">
                                    शिक्षण उपसंचालकांचे मान्यतेचे आदेश <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="deputyDirectorApproval"
                                    name="approval_order_of_deputy_director_of_education"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="firstApprovalOrder" className="form-label text-capitalize">
                                    प्रथम मान्यता आदेश / सर्व वर्गाचे नैसर्गिक वाढ आदेश <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="firstApprovalOrder"
                                    name="first_approval_order"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="sample1Application" className="form-label text-capitalize">
                                    संस्थेचा नमुना १ मधील मागणी अर्ज (जुनी झेरॉक्स जोडू  नये) <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="sample1Application"
                                    name="organizations_requisition_application_in_sample_1"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="institutionCertificate" className="form-label text-capitalize">
                                संस्था आणि शिक्षणाधिकारी यांचे संयुक्त खाते कायम ठेव पावती  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="institutionCertificate"
                                    name="institution_registration_1950_1860_certificate"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb
                            -3">
                                <Label htmlFor="propertyDocs" className="form-label text-capitalize">
                                संस्था/कंपनी नोंदणी प्रमाणपत्र 
                                </Label>
                                <Input
                                    type="file"
                                    id="propertyDocs"
                                    name="govt_minority_certificate_if_the_school_is_minority"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile10" className="form-label text-capitalize">
                                संस्थेच्या नवे जागा असल्याचे खरेदीखत / भाडेकरार / बक्षीसपत्र / मालमत्ता / ७/१२  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile10"
                                    name="purchase_deed_lease_agreement_award_deed"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile19" className="form-label text-capitalize">
                                ऑडिट रिपोर्ट (गेले 1 वर्ष)  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile19"
                                    name="institutional_undertaking_of_schools_not_charging_any"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile21" className="form-label text-capitalize">
                                फी वाढीबाबत EPTA मंजुरीच्या मिनिटांची प्रत <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile21"
                                    name="women_grievance_redressal_committee"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile2121" className="form-label text-capitalize">
                                मागील तीन वर्षांच्या वर्ग फी रचनेनुसार फी संरचना  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile2121"
                                    name="affidavit_on_stamp_of_rs_100"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile210" className="form-label text-capitalize">
                                परिवहन समिती ऑनलाइन प्रत (www.schoolbussafetypune.org)  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile210"
                                    name="school_principal_sign_stamp"
                                    accept="image/png"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile310" className="form-label text-capitalize">
                                महिला तक्रार निवारण समिती व RTE 2009 कलम 32 नुसार तक्रार निवारण समिती <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile310"
                                    name="school_location_changed"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile210" className="form-label text-capitalize">
                                प्रस्तावासह सोबतच्या नमुन्यातील रु. 100 च्या मुद्रांकावरील प्रतिज्ञापत्र  <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile210"
                                    name="school_principal_sign_stamp"
                                    accept="image/png"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile310" className="form-label text-capitalize">
                                शाळेच्या मुख्याध्यापकांची स्वाक्षरी आणि शिक्का <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile310"
                                    name="school_location_changed"
                                    accept="application/pdf"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Label htmlFor="awesomefile310" className="form-label text-capitalize">
                                शाळा स्थलांतरित / हस्तांतरित सर्व कागदपत्रे अपलोड करणे <span className="text-danger">*</span>
                                </Label>
                                <Input
                                    type="file"
                                    id="awesomefile310"
                                    name="school_location_changed"
                                    accept="application/pdf"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup className="mb-3">
                                    <Label htmlFor="common_order_2013_select" className="form-label text-capitalize">
                                    स्वमान्यता आदेश २०१३ ते २०१६ <span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                    type="select"
                                    name="common_order_2013_to_2016_bit"
                                    id="common_order_2013_select"
                                    onChange={(e) => setShowCommonOrder2013(e.target.value === 'yes')}
                                    >
                                    <option value="">निवडा</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            {showCommonOrder2013 && (
                                <Col md={6} className="mb-3">
                                    <Label htmlFor="awesomefile110" className="form-label text-capitalize">
                                    स्वमान्यता आदेश २०१३ ते २०१६*
                                    </Label>
                                    <Input
                                    type="file"
                                    id="awesomefile110"
                                    name="common_order_2013_to_2016"
                                    accept="application/pdf"
                                    />
                                </Col>
                            )}
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup className="mb-3">
                                    <Label htmlFor="common_order_2016_select" className="form-label text-capitalize">
                                    स्वमान्यता आदेश २०१६ ते २०१९<span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                    type="select"
                                    name="common_order_2016_to_2019_bit"
                                    id="common_order_2016_select"
                                    onChange={(e) => setShowCommonOrder2016(e.target.value === 'yes')}
                                    >
                                    <option value="">निवडा</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            {showCommonOrder2016 && (
                                <Col md={6} className="mb-3">
                                    <Label htmlFor="awesomefile010" className="form-label text-capitalize">
                                    स्वमान्यता आदेश २०१६ ते २०१९ चे कागदपत्र
                                    </Label>
                                    <Input
                                    type="file"
                                    id="awesomefile010"
                                    name="common_order_2016_to_2019"
                                    accept="application/pdf"
                                    />
                                </Col>
                            )}
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup className="mb-3">
                                    <Label htmlFor="common_order_2019_select" className="form-label text-capitalize">
                                    स्वमान्यता आदेश २०१९ ते २०२२<span className="text-danger">*</span>
                                    </Label>
                                    <Input
                                    type="select"
                                    name="common_order_2019_to_2022_bit"
                                    id="common_order_2019_select"
                                    onChange={(e) => setShowCommonOrder2019(e.target.value === 'yes')}
                                    >
                                    <option value="">निवडा</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            {showCommonOrder2019 && (
                                <Col md={6} className="mb-3">
                                    <Label htmlFor="awesomefile610" className="form-label text-capitalize">
                                    स्वमान्यता आदेश २०१९ ते २०२२ चे कागदपत्र
                                    </Label>
                                    <Input
                                    type="file"
                                    id="awesomefile610"
                                    name="common_order_2019_to_2022"
                                    accept="application/pdf"
                                    />
                                </Col>
                            )}
                        </Row>
                    </CardBody>
                    
                </Card>
                    <div class="col-12 text-end mb-3">
                        <button class="btn btn-primary me-2" type="submit">← मागे जा  </button>
                        <button class="btn btn-success" type="submit" >जतन करा आणि पुढे जा → </button>
                    </div>
              </Col>
            </Row>
            
          </Container>
        </div>
      </React.Fragment>
    );
  };
  
  export default formSelect2;