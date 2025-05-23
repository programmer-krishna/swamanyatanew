import React, { useState } from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody,
  Form, Label, Input, Button, FormGroup
} from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

const GrantedSchoolForm = () => {
  const [formData, setFormData] = useState({

    schoolId: '1',
    governmentDecisionOfApproval: '',
    approvalOrderOfDeputyDirectorOfEducation: '',
    firstApprovalOrder: '',
    organizationsRequisitionApplicationInSample1: '',
    institutionRegistration19501860Certificate: '',
    govtMinorityCertificateIfTheSchoolIsMinority: '',
    purchaseDeedLeaseAgreementAwardDeed: '',
    certificationOfJoiningIfJoiningIfAdditionalTeacher: '',
    institutionalUndertakingOfSchoolsNotChargingAny: '',
    womenGrievanceRedressalCommittee: '',
    affidavitOnStampOfRs100: '',
    schoolPrincipalSignStamp: '',
    applicationId: '1',
    schoolLocationChanged: '',
    commonOrder2013To2016: '',
    commonOrder2016To2019: '',
    commonOrder2019To2022: '',
    schoolLocationChangedBit: '',
    commonOrder2013To2016Bit: '',
    commonOrder2016To2019Bit: '',
    commonOrder2019To2022Bit: ''
  });

  const [showCommonOrder2013, setShowCommonOrder2013] = useState(false);
  const [showCommonOrder2016, setShowCommonOrder2016] = useState(false);
  const [showCommonOrder2019, setShowCommonOrder2019] = useState(false);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSelectChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value === 'yes', // Set to true if 'yes', false otherwise
  }));

  if (name === 'commonOrder2013To2016Bit') {
    setShowCommonOrder2013(value === 'yes');
  } else if (name === 'commonOrder2016To2019Bit') {
    setShowCommonOrder2016(value === 'yes');
  } else if (name === 'commonOrder2019To2022Bit') {
    setShowCommonOrder2019(value === 'yes');
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const submissionData = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      submissionData.append(key, value);
    }
  });

  try {
    const response = await axios.post(
      'http://localhost:8080/api/granted-school-info/save-or-update',
      submissionData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    Swal.fire({
      icon: 'success',
      title: 'Form Submitted',
      text: 'Your documents have been successfully uploaded.',
    });

    // Reset form
    setFormData({
      schoolId: '1',
      governmentDecisionOfApproval: '',
      approvalOrderOfDeputyDirectorOfEducation: '',
      firstApprovalOrder: '',
      organizationsRequisitionApplicationInSample1: '',
      institutionRegistration19501860Certificate: '',
      govtMinorityCertificateIfTheSchoolIsMinority: '',
      purchaseDeedLeaseAgreementAwardDeed: '',
      certificationOfJoiningIfJoiningIfAdditionalTeacher: '',
      institutionalUndertakingOfSchoolsNotChargingAny: '',
      womenGrievanceRedressalCommittee: '',
      affidavitOnStampOfRs100: '',
      schoolPrincipalSignStamp: '',
      applicationId: '1',
      schoolLocationChanged: '',
      commonOrder2013To2016: '',
      commonOrder2016To2019: '',
      commonOrder2019To2022: '',
      schoolLocationChangedBit: false,
      commonOrder2013To2016Bit: false,
      commonOrder2016To2019Bit: false,
      commonOrder2019To2022Bit: false,
    });
    setShowCommonOrder2013(false);
    setShowCommonOrder2016(false);
    setShowCommonOrder2019(false);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Upload Failed',
      text: 'Something went wrong while uploading. Please try again.',
    });
    console.error('Upload error:', error);
  }
};


  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <h5>मंजूर शाळा दस्तऐवज चेकलिस्ट</h5>
            <p className="text-warning">* कृपया फक्त PDF फाईल अपलोड करा</p>
            <p className="text-warning">* शाळेचे मुख्याध्यापक चिन्ह आणि शिक्के फक्त PNG मध्ये अपलोड केले पाहिजेत</p>
          </CardHeader>
          <CardBody>
            <Row>
             <Col md={6} className="mb-3">
                <Label htmlFor="governmentDecisionOfApproval">मान्यतेचे शासन निर्णय/शासन आदेश *</Label>
                <Input
                    type="file"
                    id="governmentDecisionOfApproval"
                    name="governmentDecisionOfApproval"
                    accept="application/pdf"
                    onChange={handleFileChange}
                />
            </Col>

             <Col md={6} className="mb-3">
                    <Label htmlFor="approvalOrderOfDeputyDirectorOfEducation">शिक्षण उपसंचालकांचे मान्यतेचे आदेश *</Label>
                    <Input
                        type="file"
                        id="approvalOrderOfDeputyDirectorOfEducation"
                        name="approvalOrderOfDeputyDirectorOfEducation"
                        accept="application/pdf"
                        onChange={handleFileChange}
                    />
                    </Col>
<Col md={6} className="mb-3">
  <Label htmlFor="firstApprovalOrder" className="form-label text-capitalize">
    प्रथम मान्यता आदेश / सर्व वर्गाचे नैसर्गिक वाढ आदेश <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="firstApprovalOrder"
    name="firstApprovalOrder"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                           <Col md={6} className="mb-3">
  <Label htmlFor="organizationsRequisitionApplicationInSample1" className="form-label text-capitalize">
    संस्थेचा नमुना १ मधील मागणी अर्ज (जुनी झेरॉक्स जोडू  नये) <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="organizationsRequisitionApplicationInSample1"
    name="organizationsRequisitionApplicationInSample1"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                           <Col md={6} className="mb-3">
  <Label htmlFor="institutionRegistration19501860Certificate" className="form-label text-capitalize">
    संस्था नोंदणी 1950 आणि 1860 प्रमाणपत्र/ कंपनी प्रमाणपत्र <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="institutionRegistration19501860Certificate"
    name="institutionRegistration19501860Certificate"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                            <Col md={6} className="mb-3">
  <Label htmlFor="govtMinorityCertificateIfTheSchoolIsMinority" className="form-label text-capitalize">
    संस्थेच्या नावे जागा असल्याचे खरेदीखत / भाडेकरार / बक्षीसपत्र / मालमत्ता / ७/१२
  </Label>
  <Input
    type="file"
    id="govtMinorityCertificateIfTheSchoolIsMinority"
    name="govtMinorityCertificateIfTheSchoolIsMinority"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                           <Col md={6} className="mb-3">
  <Label htmlFor="purchaseDeedLeaseAgreementAwardDeed" className="form-label text-capitalize">
    संस्थेच्या नावे खरेदीखत/लीज करार/अवॉर्ड डीड/मालमत्ता पत्रक ३ महिन्यांच्या आत असणे आवश्यक आहे. <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="purchaseDeedLeaseAgreementAwardDeed"
    name="purchaseDeedLeaseAgreementAwardDeed"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                           <Col md={6} className="mb-3">
  <Label htmlFor="institutionalUndertakingOfSchoolsNotChargingAny" className="form-label text-capitalize">
    विद्यार्थ्याकडून कोणतेही फी /देणगी घेत नसल्याचे मुख्याध्यापक हमीपत्र <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="institutionalUndertakingOfSchoolsNotChargingAny"
    name="institutionalUndertakingOfSchoolsNotChargingAny"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                           <Col md={6} className="mb-3">
  <Label htmlFor="womenGrievanceRedressalCommittee" className="form-label text-capitalize">
    महिला तक्रार निवारण समिती व RTE 2009 कलम 32 नुसार  तक्रार निवारण समिती <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="womenGrievanceRedressalCommittee"
    name="womenGrievanceRedressalCommittee"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                           <Col md={6} className="mb-3">
  <Label htmlFor="affidavitOnStampOfRs100" className="form-label text-capitalize">
    प्रस्तावासह सोबतच्या नमुन्यातील रु. 100 च्या मुद्रांकावरील प्रतिज्ञापत्र <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="affidavitOnStampOfRs100"
    name="affidavitOnStampOfRs100"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                          <Col md={6} className="mb-3">
  <Label htmlFor="schoolPrincipalSignStamp" className="form-label text-capitalize">
    शाळेच्या मुख्याध्यापकांची स्वाक्षरी आणि शिक्का <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="schoolPrincipalSignStamp"
    name="schoolPrincipalSignStamp"
    accept="image/png"
    onChange={handleFileChange}
  />
</Col>

  
                          <Col md={6} className="mb-3">
  <Label htmlFor="schoolLocationChanged" className="form-label text-capitalize">
    शाळा स्थलांतरित / हस्तांतरित सर्व कागदपत्रे अपलोड करणे <span className="text-danger">*</span>
  </Label>
  <Input
    type="file"
    id="schoolLocationChanged"
    name="schoolLocationChanged"
    accept="application/pdf"
    onChange={handleFileChange}
  />
</Col>


                        </Row>
                        <Row>

                           <Col md={6}>
                   <FormGroup className="mb-3">
                    <Label htmlFor="commonOrder2013To2016Bit" className="form-label text-capitalize">
                        स्वमान्यता आदेश २०१३ ते २०१६<span className="text-danger">*</span>
                    </Label>
                    <Input
                        type="select"
                        name="commonOrder2013To2016Bit"
                        id="commonOrder2013To2016Bit"
                        value={formData.commonOrder2013To2016Bit}
                        onChange={(e) => {
                        const value = e.target.value;
                        setFormData((prev) => ({
                            ...prev,
                            commonOrder2013To2016Bit: value
                        }));
                        setShowCommonOrder2013(value === 'yes');
                        }}
                    >
                        <option value="">निवडा</option>
                        <option value="yes">हो</option>
                        <option value="no">नाही</option>
                    </Input>
                    </FormGroup>

                    </Col>
                    {showCommonOrder2013 && (
                    <Col md={6} className="mb-3">
                        <Label htmlFor="commonOrder2013To2016" className="form-label text-capitalize">
                        स्वमान्यता आदेश २०१३ ते २०१६ चे कागदपत्र
                        </Label>
                        <Input
                        type="file"
                        id="commonOrder2013To2016"
                        name="commonOrder2013To2016"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        />
                    </Col>
                                                )}
                                            </Row>


                                            <Row>
                                            <Col md={6}>
                    <FormGroup className="mb-3">
                        <Label htmlFor="commonOrder2016To2019Bit" className="form-label text-capitalize">
                        स्वमान्यता आदेश २०१६ ते २०१९<span className="text-danger">*</span>
                        </Label>
                        <Input
                        type="select"
                        name="commonOrder2016To2019Bit"
                        id="commonOrder2016To2019Bit"
                        onChange={(e) => setShowCommonOrder2016(e.target.value === 'yes')}
                        >
                        <option value="">निवडा</option>
                        <option value="yes">हो</option>
                        <option value="no">नाही</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    {showCommonOrder2016 && (
                    <Col md={6} className="mb-3">
                        <Label htmlFor="commonOrder2016To2019" className="form-label text-capitalize">
                        स्वमान्यता आदेश २०१६ ते २०१९ चे कागदपत्र
                        </Label>
                        <Input
                        type="file"
                        id="commonOrder2016To2019"
                        name="commonOrder2016To2019"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        />
                    </Col>
                                                )}
                                            </Row>
                                            <Row>
                                            <Col md={6}>
                    <FormGroup className="mb-3">
                        <Label htmlFor="commonOrder2019To2022Bit" className="form-label text-capitalize">
                        स्वमान्यता आदेश २०१९ ते २०२२<span className="text-danger">*</span>
                        </Label>
                        <Input
                        type="select"
                        name="commonOrder2019To2022Bit"
                        id="commonOrder2019To2022Bit"
                        onChange={(e) => setShowCommonOrder2019(e.target.value === 'yes')}
                        >
                        <option value="">निवडा</option>
                        <option value="yes">हो</option>
                        <option value="no">नाही</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    {showCommonOrder2019 && (
                    <Col md={6} className="mb-3">
                        <Label htmlFor="commonOrder2019To2022" className="form-label text-capitalize">
                        स्वमान्यता आदेश २०१९ ते २०२२ चे कागदपत्र
                        </Label>
                        <Input
                        type="file"
                        id="commonOrder2019To2022"
                        name="commonOrder2019To2022"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        />
                    </Col>
                    )}

                    </Row>


            <Row className="mt-4">
              <Col className="d-flex justify-content-between">
                <Button color="secondary" onClick={() => window.history.back()}>
                  मागे जा
                </Button>
                <Button color="success" type="submit">
                  जतन करा आणि पुढे जा
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Form>
    </Container>
  );
};

export default GrantedSchoolForm;

