import React, { useState } from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody,
  Form, Label, Input, Button
} from 'reactstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

const GrantedSchoolForm = () => {
  const [formData, setFormData] = useState({

    schoolId: '3',
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
    applicationId: '3',
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
      [name]: value,
    }));

    if (name === 'common_order_2013_to_2016_bit') {
      setShowCommonOrder2013(value === 'yes');
    } else if (name === 'common_order_2016_to_2019_bit') {
      setShowCommonOrder2016(value === 'yes');
    } else if (name === 'common_order_2019_to_2022_bit') {
      setShowCommonOrder2019(value === 'yes');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
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
        government_decision_of_approval: '',
        approval_order_of_deputy_director_of_education: '',
        first_approval_order: '',
        organizations_requisition_application_in_sample_1: '',
        institution_registration_1950_1860_certificate: '',
        govt_minority_certificate_if_the_school_is_minority: '',
        purchase_deed_lease_agreement_award_deed: '',
        certification_of_joining_if_joining_if_additional_teacher: '',
        institutional_undertaking_of_schools_not_charging_any: '',
        women_grievance_redressal_committee: '',
        affidavit_on_stamp_of_rs_100: '',
        school_principal_sign_stamp: '',
        school_location_changed: '',
        common_order_2013_to_2016: '',
        common_order_2016_to_2019: '',
        common_order_2019_to_2022: '',
        school_location_changed_bit: '',
        common_order_2013_to_2016_bit: '',
        common_order_2016_to_2019_bit: '',
        common_order_2019_to_2022_bit: '',
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
                <Label>मान्यतेचे शासन निर्णय/शासन आदेश *</Label>
                <Input
                  type="file"
                  name="government_decision_of_approval"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </Col>
              <Col md={6} className="mb-3">
                <Label>शिक्षण उपसंचालकांचे मान्यतेचे आदेश *</Label>
                <Input
                  type="file"
                  name="approval_order_of_deputy_director_of_education"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </Col>

              {/* Add more inputs as needed */}
              <Col md={6} className="mb-3">
                <Label>शाळेच्या मुख्याध्यापकांची स्वाक्षरी आणि शिक्का *</Label>
                <Input
                  type="file"
                  name="school_principal_sign_stamp"
                  accept="image/png"
                  onChange={handleFileChange}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Label>शाळा स्थलांतरित / हस्तांतरित सर्व कागदपत्रे *</Label>
                <Input
                  type="file"
                  name="school_location_changed"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </Col>

              {/* Select + Conditional File Inputs */}
              <Col md={6} className="mb-3">
                <Label>स्वमान्यता आदेश २०१३ ते २०१६ *</Label>
                <Input
                  type="select"
                  name="common_order_2013_to_2016_bit"
                  value={formData.common_order_2013_to_2016_bit}
                  onChange={handleSelectChange}
                >
                  <option value="">निवडा</option>
                  <option value="yes">हो</option>
                  <option value="no">नाही</option>
                </Input>
              </Col>
              {showCommonOrder2013 && (
                <Col md={6} className="mb-3">
                  <Label>स्वमान्यता आदेश २०१३ ते २०१६ चे कागदपत्र</Label>
                  <Input
                    type="file"
                    name="common_order_2013_to_2016"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                </Col>
              )}

              <Col md={6} className="mb-3">
                <Label>स्वमान्यता आदेश २०१६ ते २०१९ *</Label>
                <Input
                  type="select"
                  name="common_order_2016_to_2019_bit"
                  value={formData.common_order_2016_to_2019_bit}
                  onChange={handleSelectChange}
                >
                  <option value="">निवडा</option>
                  <option value="yes">हो</option>
                  <option value="no">नाही</option>
                </Input>
              </Col>
              {showCommonOrder2016 && (
                <Col md={6} className="mb-3">
                  <Label>स्वमान्यता आदेश २०१६ ते २०१९ चे कागदपत्र</Label>
                  <Input
                    type="file"
                    name="common_order_2016_to_2019"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                </Col>
              )}

              <Col md={6} className="mb-3">
                <Label>स्वमान्यता आदेश २०१९ ते २०२२ *</Label>
                <Input
                  type="select"
                  name="common_order_2019_to_2022_bit"
                  value={formData.common_order_2019_to_2022_bit}
                  onChange={handleSelectChange}
                >
                  <option value="">निवडा</option>
                  <option value="yes">हो</option>
                  <option value="no">नाही</option>
                </Input>
              </Col>
              {showCommonOrder2019 && (
                <Col md={6} className="mb-3">
                  <Label>स्वमान्यता आदेश २०१९ ते २०२२ चे कागदपत्र</Label>
                  <Input
                    type="file"
                    name="common_order_2019_to_2022"
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
