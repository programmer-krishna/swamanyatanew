import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UiContent from "../../../Components/Common/UiContent";

//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, Label, Row, Table } from 'reactstrap';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { Link } from 'react-router-dom';
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from './FormlayoutsCode';

//Import Flatepicker
import Flatpickr from "react-flatpickr";

const Payment = () => {
    document.title = "फायनल";
  
    return (
      <React.Fragment>
        <UiContent />
        <div>
          <Container fluid>
            
  
            <Row>
              <Col xxl={12}>
                <Card>
                  {/* <PreviewCardHeader title="पेमेंट" /> */}
                  <CardHeader>
                    <Row>
                      <Col md={12}>
                        <Label
                          htmlFor="studentCount"
                          className="form-label fw-bold"
                        >
                          तुमच्या मोबाईल नंबरवर OTP पाठवला
                        </Label>
                      </Col>
                    </Row>
                  </CardHeader>
  
                  <CardBody>
                    <Row className="mb_20">
                        <Col xl={12} lg={12}>
                            <Label
                            htmlFor="inputname"
                            className="form-label text-capitalize"
                            >
                            OTP टाका <span className="text-danger">*</span>
                            </Label>
                            <Input
                            type="text"
                            name="otp"
                            className="form-control ot-input min_width_200"
                            placeholder=""
                            />
                        </Col>
                        <div className="resend-otp mt-3">
                            <span>
                            सत्यापन OTP प्राप्त झाला नाही?{" "}
                            <Link to="/resend-otp">
                                कोड पुन्हा पाठवा
                            </Link>
                            </span>
                        </div>
                    </Row>
                  </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Row className="mb_20">
                            <Col xl={12} lg={12} className="mb_20">
                                <Label htmlFor="inputname" className="form-label text-capitalize">
                                सुविधा शुल्क (सर्व करांसह) <span className="text-danger">*</span>
                                </Label>
                            </Col>

                            <div className="mb-3"></div>

                            <Col xl={12} lg={12} className="mb_20">
                                <Label htmlFor="inputname" className="form-label text-capitalize">
                                आम्ही सर्व माध्यमातून पेमेंट स्वीकारतो <span className="text-danger">*</span>
                                </Label>
                            </Col>

                            <div className="mb-3"></div>

                            <Col xl={12} lg={12} className="mb_20">
                                <table className="ot-basic-table ot-table-bg table table-bordered">
                                    <tbody>
                                        <tr>
                                        <th>सुविधा शुल्क</th>
                                        <th>2000/-</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
              </Col>
            </Row>
            <div class="row d-flex justify-content-end mb-4">
                        <div class="col-sm-auto">
                            <div>
                                <a class="btn btn-primary" href="/go-back"><i class="ri-arrow-left-line align-bottom me-1"></i> मागे जा</a>
                            </div>
                        </div>
                        <div class="col-sm-auto">
                            <div>
                                <a class="btn btn-submit btn-success" href="/save"> पेमेंट करा <i class="ri-arrow-right-line align-bottom me-1"></i></a>
                            </div>
                        </div>
              </div>
          </Container>
        </div>
      </React.Fragment>
    );
  };

export default Payment;