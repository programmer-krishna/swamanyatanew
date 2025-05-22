import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, Label, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import $ from 'jquery';
import 'select2/dist/css/select2.min.css';
import 'select2';
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";
import { FormGrid, Gutters, VerticalForm, HorizontalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels } from './FormlayoutsCode';
import LocationPicker from "./LocationPicker"; 
import { concat } from 'lodash';
import YearPicker from 'react-year-picker';
import { FaChevronRight } from 'react-icons/fa';

import { useNavigate ,useLocation} from 'react-router-dom'; // Make sure this is imported



const GeneralInfo = () => {
  document.title = "सामान्य-माहिती";

  const navigate = useNavigate(); // inside component

  const [schoolId, setSchoolId] = useState(1);
  const [applicationId , setApplicationId] = useState(1);

const [schoolGenInfo, setSchoolGenInfo] = useState({
  id: "",
  schoolAddress: "",
  addressMentionedInGovernmentApprovalDocument: "",
  schoolEstablishmentYear: "",
  dateOfFirstCommencementOfSchool: "",
  schoolAcademicSession: "",
  schoolTimeFullTime: "",
  schoolTimeHalfTime: "",
  academicLearningTimeForEachClass: "",
  lunchTimeForEachClass: "",
  sportsAndPhysicalEducationTimeForEachClass: "",
  nameOfTrustSocietyManagementCommittee: "",
  registrationNo: "",
  underTheSocietiesRegistrationAct1860: "",
  underTheMumbaiPublicTrusteeSystemAct1950: "",
  tillWhatPeriodTheRegistrationOfTrust: "",
  isThereEvidenceThatTheTrust: "",
  schoolUserName: "",
  schoolUserDegisnation: "",
  schoolUserAddress: "",
  schoolUserTelephone: "",
  accountYear: "",
  accountIncome: "",
  accountExpense: "",
  accountBalance: "",
  createdAt: "",
  updatedAt: "",
  applicationId: "",
  forWhichYearYouWantToApplyForACertificate: "",
  yearOfFoundationzOfSchool: "",
  dateOfFirstOpeningOfSchool: "",
  lowerStandard: "",
  higherStandard: "",
  schoolArea: "",
  mediumOfInstruction: "",
  schoolBoard: "",
  sangsthaCompanyName: "",
  sansthaCompanyHasPurposeForOnlyEducationService: "",
  isSchoolOpenWhereAddressMentionedInApproval: "",
  ifSansthaIsHandoverToSomeone: "",
  doYouHaveMaharastraShashanManyataNo: "",
  maharastraShashanApprovalNumber: "",
  maharastraShashanApprovalDate: "",
  doYouHaveShikshanUpsanchalakApproval: "",
  shikshanUpsanchalakApprovalDate: "",
  shikshanUpsanchalakApprovalNumber: "",
  doYouHavePrathamManyataCertificate: "",
  prathamManyataNumber: "",
  prathamManyataDate: "",
  doYouRunOnGovernmentNoObjectionCertificate: "",
  noObjectionCertificateNumber: "",
  noObjectionCertificateDate: "",
  whetherSchoolIsMovedToAnotherLocation: "",
  members: "",
  simpleHigherStandard: "",
  simpleLowerStandard: "",
  udiseLowerStandard: "",
  udiseHigherStandard: "",
  isThereAnAffiliationCertificate: "",
  affiliationCertificateNumber: "",
  affiliationCertificateDate: "",
  section1InspectionApproval: "",
  section2InspectionApproval: "",
  section3InspectionApproval: "",
  section1InspectionComment: "",
  section2InspectionComment: "",
  section3InspectionComment: ""
});

// State for the dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('05:00 AM - 11:59 PM');
  const [selectedYears, setSelectedYears] = useState([]);


  const [startHour, setStartHour] = useState(5);
  const [startMinute, setStartMinute] = useState(0);
  const [startAmPm, setStartAmPm] = useState('AM');
  
  const [endHour, setEndHour] = useState(11);
  const [endMinute, setEndMinute] = useState(59);
  const [endAmPm, setEndAmPm] = useState('PM');

  const [govApproval, setGovApproval] = useState(""); 
  const [eduApproval, setEduApproval] = useState('');
  const [firstApproval, setFirstApproval] = useState('');
  const [nocApproval , setNocApproval] = useState('');
  const [affiliationApproval , setAffiliationApproval] = useState('');

  const [manyataNumber, setManyataNumber] = useState('');
  const [manyataDate, setManyataDate] = useState('');
  const [upsanchalakNumber, setUpsanchalakNumber] = useState('');
  const [upsanchalakDate, setUpsanchalakDate] = useState('');
  const [prathamNumber, setPrathamNumber] = useState('');
  const [prathamDate , setPrathamDate ] = useState(''); 
  const [nocNumber, setNocNumber] = useState('');
  const [nocDate, setNocDate] = useState('');
  const [affiliationNumber, setAffiliationNumber] = useState('');
  const [affiliationDate, setAffiliationDate] = useState('');

const[successMsg,setSuccessMsg]=useState(null);
const[errorMsg,setErrorMsg]=useState(null);
const location = useLocation();

const [activeTab, setActiveTab] = useState(() => {
  return location.state?.tab || "general";
});

  // Generate hour options (1-12)
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  
  // Generate minute options (00-59)
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  
  const SingleOptions = [
      { value: 'Yes', label: 'होय' },
      { value: 'No', label: 'नाही' }
  ];

  const SingleOptions2 = [
      { value: 'Ownership', label: 'मालमत्ता' },
      { value: 'Lease', label: 'भाडेपट्टी' }
  ];

  const [entries, setEntries] = useState([
    { name: "", designation: "", address: "", mobile: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;
    setEntries(updatedEntries);
  };

  const addEntry = () => {
    setEntries([...entries, { name: "", designation: "", address: "", mobile: "" }]);
  };

  const removeEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };
  
 
  
  useEffect(() => {
  $('.js-example-basic-multiple').select2({
    placeholder: 'निवडा',
    width: '100%',
    allowClear: true,
  });

  // Listen to changes
  $('.js-example-basic-multiple').on('change', function (e) {
    const values = $(this).val(); // array of selected values
    setSelectedYears(values);
    setSchoolGenInfo(prev => ({
      ...prev,
      forWhichYearYouWantToApplyForACertificate: values.join(',') // or store as array
    }));
  });

  // Cleanup
  return () => {
    $('.js-example-basic-multiple').off('change');
  };
}, []);



  const finalPayload = {
  ...schoolGenInfo,
  schoolId,
  applicationId
};

  // handle submit form 
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  const response = await fetch("http://localhost:8080/api/school-general-info/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalPayload)
        });
console.log(response);
      if (response.ok) {
            const data = await response.json();
            if (data.status === "success") {
            Swal.fire("यशस्वी", "माहिती जतन झाली आहे!", "success").then(() => {
                navigate('/विद्यार्थी-संख्या', { state: { tab: 'students' } });
            });
        } else {
            setErrorMsg(data.message || "जतन करण्यात अडचण आली!");
        } 
   } 
   else 
   {
       setErrorMsg("सर्व्हर एरर: " + response.statusText);
   }
  } catch (error) {
    console.error("There was an error submitting the form:", error);
    alert("An error occurred while submitting the form. Please try again.");
  }
};

 
 // Update the timeRange text when dropdown values change
const [isOpenFullTime, setIsOpenFullTime] = useState(false);
const [startHourFull, setStartHourFull] = useState(9);
const [startMinuteFull, setStartMinuteFull] = useState(0);
const [startAmPmFull, setStartAmPmFull] = useState("AM");
const [endHourFull, setEndHourFull] = useState(5);
const [endMinuteFull, setEndMinuteFull] = useState(0);
const [endAmPmFull, setEndAmPmFull] = useState("PM");

const toggleDropdownFullTime = () => setIsOpenFullTime(!isOpenFullTime);

const handleCancelFullTime = () => {
  setIsOpenFullTime(false);
};

const handleApplyFullTime = () => {
  setIsOpenFullTime(false);
};

const timeRangeFullTime = `${startHourFull}:${startMinuteFull
  .toString()
  .padStart(2, "0")} ${startAmPmFull} - ${endHourFull}:${endMinuteFull
  .toString()
  .padStart(2, "0")} ${endAmPmFull}`;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleApply = () => {
 
    setIsOpen(false);
  };
  
  const handleCancel = () => {
 
    setIsOpen(false);
  };


        document.title="";
      
        const breadcrumbTitles = {
          general: "सामान्य माहिती",
          students: "विद्यार्थी संख्या",
          facilities: "भौतिक सुविधा",
          otherFacilities: "इतर सुविधा",
          grantSchool: "अनुदानित शाळा",
          final: "फायनल माहिती"
        };
      
        const tabs = [
          { id: "general", label: "सामान्य माहिती" },
          { id: "students", label: "विद्यार्थी संख्या" },
          { id: "facilities", label: "भौतिक सुविधा" },
          { id: "otherFacilities", label: "इतर सुविधा" },
          { id: "grantSchool", label: "अनुदानित शाळा" },
          { id: "final", label: "फायनल" },
        ];
      
        useEffect(() => {
          document.title = breadcrumbTitles[activeTab];
        }, [activeTab]);


    return (
      <React.Fragment>
           {successMsg && (
            <div className="alert alert-success mt-3" role="alert">
              {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMsg}
            </div>
          )}

<div style={{ padding: "94px 24px" }}>
 <BreadCrumb
  pageTitle={
    <>
      डॅशबोर्ड 
      <FaChevronRight className="mx-2" /> 
      स्व-मान्यता अर्ज 
      <FaChevronRight className="mx-2" /> 
      सामान्य माहिती
    </>
  }
/>

  
        {/* Tabs under Breadcrumb */}
        <div className="tab-nav container-fluid d-flex flex-wrap gap-2 my-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* newly added code ends here */}

        <UiContent />
        <div>        
          <Container fluid>
            <Row>
              <Col xxl={12}>
                <Card>
                 {/* <PreviewCardHeader title="सामान्य माहिती" />*/}
                  {/* <CardHeader>
                    <Row>zs
                      <Col md={4}>
                        <Label className="form-label fw-bold">सामान्य माहिती</Label>
                      </Col>
                    </Row>
                  </CardHeader> */}
  
                  <CardBody>
                    <LocationPicker />
                      <div className="live-preview">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                  <Col md={12}>
                                    <div className="mb-3 one">
                                      <Label htmlFor="forWhichYearYouWantToApplyForACertificate" className="form-label">
                                        स्व मान्यता (नमुना-२) प्रमाणपत्र मागणी कालावधी निवडा <span className="text-danger">*</span>
                                      </Label>
                                      <select
                                        className="form-select js-example-basic-multiple"
                                        id="forWhichYearYouWantToApplyForACertificate"
                                        name="forWhichYearYouWantToApplyForACertificate"
                                        multiple
                                        value={selectedYears}
                                        onChange={() => {}} // required to avoid React warning
                                        style={{ marginTop: '20px', marginBottom: '20px' }}
                                      >
                                        <option value="2025-2028">2025-2028</option>
                                        <option value="2028-2031">2028-2031</option>
                                        <option value="2031-2034">2031-2034</option>
                                      </select>
                                    </div>
                                  </Col>
                                    
                                  <Col md={6}>
                                    <div className="form-floating mb-3">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="addressMentionedInGovernmentApprovalDocument"
                                            name="addressMentionedInGovernmentApprovalDocument"
                                            value={schoolGenInfo.addressMentionedInGovernmentApprovalDocument}
                                            onChange={(e) => setSchoolGenInfo(prev => ({
                                                ...prev,
                                                addressMentionedInGovernmentApprovalDocument: e.target.value
                                            }))}
                                        />

                                        <Label htmlFor="addressMentionedInGovernmentApprovalDocument">
                                          शासन मान्यताप्राप्त दस्तऐवजात नमूद केलेला पत्ता <span className="text-danger">*</span>
                                        </Label>
                                    </div>
                                  </Col>


                                  <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="schoolEstablishmentYear" className="form-label d-block">
                                          शाळेच्या स्थापनेचे वर्ष निवडा <span className="text-danger">*</span>
                                        </Label>
                                        <div style={{ width: '48%!imporatant;' }}>
                                            <YearPicker
                                              name="schoolEstablishmentYear"
                                              id="schoolEstablishmentYear"
                                              value={schoolGenInfo.schoolEstablishmentYear}
                                              className="form-control"
                                              placeholderText="वर्ष निवडा"
                                              onChange={(year) =>
                                                  setSchoolGenInfo((prev) => ({
                                                    ...prev,
                                                    schoolEstablishmentYear: year,
                                                  }))
                                                }                                                                        
                                              style={{ height: '37px', width: '100%' }}
                                            />
                                          </div>
                                        </div>
                                  </Col>


                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="dateOfFirstOpeningOfSchool" className="form-label">
                                          प्रथम शाळा सुरु दिनांक <span className="text-danger">*</span>
                                        </Label>   
                                        <Input 
                                          type="date" 
                                          className="form-control" 
                                          id="dateOfFirstOpeningOfSchool" 
                                          name="dateOfFirstOpeningOfSchool"
                                          value={schoolGenInfo.dateOfFirstOpeningOfSchool}
                                          onChange={(e) => setSchoolGenInfo(prev => ({
                                            ...prev,
                                            dateOfFirstOpeningOfSchool: e.target.value
                                          }))}
                                        />
                                      </div>
                                    </Col>


                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label className="form-label">
                                          कोणत्या इयत्तेसाठी स्वमूल्यता प्रमाणपत्र पाहिजे?
                                        </Label>
                                        <Row>
                                          <Col>
                                            <Input
                                               type="select"
                                                className="form-select"
                                                id="lowerStandard"
                                                name="lowerStandard"
                                                value={schoolGenInfo.lowerStandard}
                                                onChange={(e) => setSchoolGenInfo(prev => ({
                                                  ...prev,
                                                  lowerStandard: e.target.value
                                                }))}
                                            >
                                              <option value="" disabled selected>खालची इयत्ता निवडा</option>
                                              {[...Array(12)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>
                                                  {index + 1}
                                                </option>
                                              ))}
                                            </Input>
                                          </Col>

                                          <Col>
                                            <Input
                                              type="select"
                                              className="form-select"
                                              id="higherStandard"
                                              name="higherStandard"
                                              value={schoolGenInfo.higherStandard}
                                              onChange={(e) =>
                                                setSchoolGenInfo((prev) => ({
                                                  ...prev,
                                                  higherStandard: e.target.value,
                                                }))
                                              }
                                            >
                                              <option value="" disabled>
                                                वरची इयत्ता निवडा
                                              </option>
                                              {[...Array(12)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>
                                                  {index + 1}
                                                </option>
                                              ))}
                                            </Input>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Col>


                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="schoolArea" className="form-label">
                                          शाळेचे क्षेत्र <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          type="select"
                                          className="form-select"
                                          id="schoolArea"
                                          name="schoolArea"
                                          value={schoolGenInfo.schoolArea}
                                          onChange={(e) =>
                                            setSchoolGenInfo((prev) => ({
                                              ...prev,
                                              schoolArea: e.target.value,
                                            }))
                                          }
                                        >
                                          <option value="" disabled>
                                            निवडा
                                          </option>
                                          <option value="Grampanchayat">ग्रामपंचायत</option>
                                          <option value="A Grade Nagar Palika">अ श्रेणी नगरपालिका</option>
                                          <option value="Nagar Palika">नगरपालिका</option>
                                          <option value="Mahanagarpalika">महानगरपालिका</option>
                                        </Input>
                                      </div>
                                    </Col>

                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label className="form-label">
                                          सरल प्रणालीत सुरु असलेले वर्ग <span className="text-danger">*</span>
                                        </Label>
                                        <Row>
                                          <Col>
                                            <Input
                                              type="select"
                                              className="form-select"
                                              id="simpleLowerStandard"
                                              name="simpleLowerStandard"
                                              value={schoolGenInfo.simpleLowerStandard}
                                              onChange={(e) =>
                                                setSchoolGenInfo((prev) => ({
                                                  ...prev,
                                                  simpleLowerStandard: e.target.value,
                                                }))
                                              }
                                            >
                                              <option value="" disabled>
                                                खालची इयत्ता निवडा
                                              </option>
                                              {[...Array(12)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>
                                                  {index + 1}
                                                </option>
                                              ))}
                                            </Input>
                                          </Col>

                                          <Col>
                                            <Input
                                              type="select"
                                              className="form-select"
                                              id="simpleHigherStandard"
                                              name="simpleHigherStandard"
                                              value={schoolGenInfo.simpleHigherStandard}
                                              onChange={(e) =>
                                                setSchoolGenInfo((prev) => ({
                                                  ...prev,
                                                  simpleHigherStandard: e.target.value,
                                                }))
                                              }
                                            >
                                              <option value="" disabled>
                                                वरची इयत्ता निवडा
                                              </option>
                                              {[...Array(12)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>
                                                  {index + 1}
                                                </option>
                                              ))}
                                            </Input>
                                          </Col>
                                        </Row>
                                      </div>
                                    </Col>



                                   <Col md={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="mediumOfInstruction" className="form-label">
                                        माध्यम <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="select"
                                        className="form-select"
                                        id="mediumOfInstruction"
                                        name="mediumOfInstruction"
                                        value={schoolGenInfo.mediumOfInstruction}
                                        onChange={(e) =>
                                          setSchoolGenInfo((prev) => ({
                                            ...prev,
                                            mediumOfInstruction: e.target.value,
                                          }))
                                        }
                                      >
                                        <option value="" disabled>निवडा</option>
                                        <option value="Marathi">मराठी</option>
                                        <option value="Hindi">हिंदी</option>
                                        <option value="English">इंग्रजी</option>
                                        <option value="Urdu">उर्दू</option>
                                        <option value="Gujarati">गुजराती</option>
                                        <option value="Tamil">तमिळ</option>
                                        <option value="Sindhi">सिंधी</option>
                                        <option value="Telugu">तेलुगू</option>
                                        <option value="Kannada">कन्नड</option>
                                      </Input>
                                    </div>
                                  </Col>

                                  <Col md={6}>
                                    <div className="mb-3">
                                      <Label className="form-label">
                                        UDISE मध्ये असलेले वर्ग <span className="text-danger">*</span>
                                      </Label>
                                      <Row>
                                        <Col>
                                          <Input
                                            type="select"
                                            className="form-select"
                                            id="udiseLowerStandard"
                                            name="udiseLowerStandard"
                                            value={schoolGenInfo.udiseLowerStandard}
                                            onChange={(e) =>
                                              setSchoolGenInfo((prev) => ({
                                                ...prev,
                                                udiseLowerStandard: e.target.value,
                                              }))
                                            }
                                          >
                                            <option value="" disabled>खालची इयत्ता निवडा</option>
                                            {[...Array(12)].map((_, index) => (
                                              <option key={index + 1} value={index + 1}>
                                                {index + 1}
                                              </option>
                                            ))}
                                          </Input>
                                        </Col>

                                        <Col>
                                          <Input
                                            type="select"
                                            className="form-select"
                                            id="udiseHigherStandard"
                                            name="udiseHigherStandard"
                                            value={schoolGenInfo.udiseHigherStandard}
                                            onChange={(e) =>
                                              setSchoolGenInfo((prev) => ({
                                                ...prev,
                                                udiseHigherStandard: e.target.value,
                                              }))
                                            }
                                          >
                                            <option value="" disabled>वरची इयत्ता निवडा</option>
                                            {[...Array(12)].map((_, index) => (
                                              <option key={index + 1} value={index + 1}>
                                                {index + 1}
                                              </option>
                                            ))}
                                          </Input>
                                        </Col>
                                      </Row>
                                    </div>
                                  </Col>

                                  <Col md={6}>
                                    <div className="mb-3">
                                      <Label htmlFor="schoolBoard" className="form-label">
                                        शाळेचे मंडळ <span className="text-danger">*</span>
                                      </Label>
                                      <Input
                                        type="select"
                                        className="form-select"
                                        id="schoolBoard"
                                        name="schoolBoard"
                                        value={schoolGenInfo.schoolBoard}
                                        onChange={(e) =>
                                          setSchoolGenInfo((prev) => ({
                                            ...prev,
                                            schoolBoard: e.target.value,
                                          }))
                                        }
                                      >
                                        <option value="" disabled>निवडा</option>
                                        <option value="State Board">महाराष्ट्र राज्य मंडळ</option>
                                        <option value="CBSE">सीबीएसई (CBSE)</option>
                                        <option value="IB">आयबी (IB)</option>
                                        <option value="ICSE">आयसीएसई (ICSE)</option>
                                        <option value="IGCSE">आयजीसीएसई (IGCSE)</option>
                                        <option value="CIE">सीआयई (CIE)</option>
                                      </Input>
                                    </div>
                                  </Col>


{ /* Below integration is not working  */}

                                  <Col md={6}>
  <div className="relative w-full max-w-md">
    <div className="mb-1 font-medium">शाळेची पूर्ण वेळ (सोमवार-शुक्रवार)</div>

    <div
      className="border border-gray-300 rounded p-3 bg-white cursor-pointer"
      onClick={toggleDropdownFullTime}
    >
      {timeRangeFullTime}
    </div>

    {isOpenFullTime && (
      <div className="absolute top-full left-0 w-full mt-1 border border-gray-300 rounded bg-white shadow-lg z-10">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            {/* Start Time */}
            <select className="border rounded p-1" value={startHourFull} onChange={e => setStartHourFull(parseInt(e.target.value))}>
              {hours.map(h => <option key={`start-hour-${h}`} value={h}>{h}</option>)}
            </select>
            <span>:</span>
            <select className="border rounded p-1" value={startMinuteFull} onChange={e => setStartMinuteFull(parseInt(e.target.value))}>
              {minutes.map(m => <option key={`start-minute-${m}`} value={m}>{m.toString().padStart(2, '0')}</option>)}
            </select>
            <select className="border rounded p-1" value={startAmPmFull} onChange={e => setStartAmPmFull(e.target.value)}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>

            <span>-</span>

            {/* End Time */}
            <select className="border rounded p-1" value={endHourFull} onChange={e => setEndHourFull(parseInt(e.target.value))}>
              {hours.map(h => <option key={`end-hour-${h}`} value={h}>{h}</option>)}
            </select>
            <span>:</span>
            <select className="border rounded p-1" value={endMinuteFull} onChange={e => setEndMinuteFull(parseInt(e.target.value))}>
              {minutes.map(m => <option key={`end-minute-${m}`} value={m}>{m.toString().padStart(2, '0')}</option>)}
            </select>
            <select className="border rounded p-1" value={endAmPmFull} onChange={e => setEndAmPmFull(e.target.value)}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="text-sm">{timeRangeFullTime}</div>
            <div className="space-x-2">
              <button className="px-3 py-1 border rounded" onClick={handleCancelFullTime}>Cancel</button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={handleApplyFullTime}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</Col>



                                                                      <Col md={6}>
                                                                          <div className="relative w-full max-w-md">
                                        <div className="mb-1 font-medium">शाळेची अर्धी वेळ- (शनिवार)*</div>
                                        
                                        {/* Input field */}
                                        <div 
                                          className="border border-gray-300 rounded p-3 bg-white cursor-pointer"
                                          onClick={toggleDropdown}
                                        >
                                          {/*timeRange*/} -
                                        </div>
                                        
                                        {/* Dropdown */}
                                        {isOpen && (
                                          <div className="absolute top-full left-0 w-full mt-1 border border-gray-300 rounded bg-white shadow-lg z-10">
                                            <div className="p-4">
                                              <div className="flex items-center space-x-2 mb-4">
                                                {/* Start time */}
                                                <select 
                                                  className="border border-gray-300 rounded p-1"
                                                  value={startHour}
                                                  onChange={(e) => setStartHour(parseInt(e.target.value))}
                                                >
                                                  {hours.map(hour => (
                                                    <option key={`start-hour-${hour}`} value={hour}>{hour}</option>
                                                  ))}
                                                </select>
                                                
                                                <span>:</span>
                                                
                                                <select 
                                                  className="border border-gray-300 rounded p-1"
                                                  value={startMinute}
                                                  onChange={(e) => setStartMinute(parseInt(e.target.value))}
                                                >
                                                  {minutes.map(minute => (
                                                    <option key={`start-minute-${minute}`} value={minute}>
                                                      {minute.toString().padStart(2, '0')}
                                                    </option>
                                                  ))}
                                                </select>
                                                
                                                <select 
                                                  className="border border-gray-300 rounded p-1"
                                                  value={startAmPm}
                                                  onChange={(e) => setStartAmPm(e.target.value)}
                                                >
                                                  <option value="AM">AM</option>
                                                  <option value="PM">PM</option>
                                                </select>
                                                
                                                {/* Separator */}
                                                <span>-</span>
                                                
                                                {/* End time */}
                                                <select 
                                                  className="border border-gray-300 rounded p-1"
                                                  value={endHour}
                                                  onChange={(e) => setEndHour(parseInt(e.target.value))}
                                                >
                                                  {hours.map(hour => (
                                                    <option key={`end-hour-${hour}`} value={hour}>{hour}</option>
                                                  ))}
                                                </select>
                                                
                                                <span>:</span>
                                                
                                                <select 
                                                  className="border border-gray-300 rounded p-1"
                                                  value={endMinute}
                                                  onChange={(e) => setEndMinute(parseInt(e.target.value))}
                                                >
                                                  {minutes.map(minute => (
                                                    <option key={`end-minute-${minute}`} value={minute}>
                                                      {minute.toString().padStart(2, '0')}
                                                    </option>
                                                  ))}
                                                </select>
                                                
                                                <select 
                                                  className="border border-gray-300 rounded p-1"
                                                  value={endAmPm}
                                                  onChange={(e) => setEndAmPm(e.target.value)}
                                                >
                                                  <option value="AM">AM</option>
                                                  <option value="PM">PM</option>
                                                </select>
                                              </div>
                                              
                                              {/* Summary and buttons */}
                                              <div className="flex justify-between items-center">
                                                <div className="text-sm">
                                                  {timeRange}
                                                </div>
                                                <div className="space-x-2">
                                                  <button 
                                                    className="px-3 py-1 border border-gray-300 rounded text-black"
                                                    onClick={handleCancel}
                                                  >
                                                    Cancel
                                                  </button>
                                                  <button 
                                                    className="px-3 py-1 bg-blue-500 text-white rounded"
                                                    onClick={handleApply}
                                                  >
                                                    Apply
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </Col>
 

                                    <Col md={6}>
                                                  <div className="relative w-full max-w-md">
                                      <div className="mb-1 font-medium">प्रत्येक वर्गासाठी मध्यान भोजनाची वेळ *</div>
                                      
                                      {/* Input field */}
                                      <div 
                                        className="border border-gray-300 rounded p-3 bg-white cursor-pointer"
                                        onClick={toggleDropdown}
                                      >
                                        {timeRange}
                                      </div>
                                      
                                      {/* Dropdown */}
                                      {isOpen && (
                                        <div className="absolute top-full left-0 w-full mt-1 border border-gray-300 rounded bg-white shadow-lg z-10">
                                          <div className="p-4">
                                            <div className="flex items-center space-x-2 mb-4">
                                              {/* Start time */}
                                              <select 
                                                className="border border-gray-300 rounded p-1"
                                                value={startHour}
                                                onChange={(e) => setStartHour(parseInt(e.target.value))}
                                              >
                                                {hours.map(hour => (
                                                  <option key={`start-hour-${hour}`} value={hour}>{hour}</option>
                                                ))}
                                              </select>
                                              
                                              <span>:</span>
                                              
                                              <select 
                                                className="border border-gray-300 rounded p-1"
                                                value={startMinute}
                                                onChange={(e) => setStartMinute(parseInt(e.target.value))}
                                              >
                                                {minutes.map(minute => (
                                                  <option key={`start-minute-${minute}`} value={minute}>
                                                    {minute.toString().padStart(2, '0')}
                                                  </option>
                                                ))}
                                              </select>
                                              
                                              <select 
                                                className="border border-gray-300 rounded p-1"
                                                value={startAmPm}
                                                onChange={(e) => setStartAmPm(e.target.value)}
                                              >
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                              </select>
                                              
                                              {/* Separator */}
                                              <span>-</span>
                                              
                                              {/* End time */}
                                              <select 
                                                className="border border-gray-300 rounded p-1"
                                                value={endHour}
                                                onChange={(e) => setEndHour(parseInt(e.target.value))}
                                              >
                                                {hours.map(hour => (
                                                  <option key={`end-hour-${hour}`} value={hour}>{hour}</option>
                                                ))}
                                              </select>
                                              
                                              <span>:</span>
                                              
                                              <select 
                                                className="border border-gray-300 rounded p-1"
                                                value={endMinute}
                                                onChange={(e) => setEndMinute(parseInt(e.target.value))}
                                              >
                                                {minutes.map(minute => (
                                                  <option key={`end-minute-${minute}`} value={minute}>
                                                    {minute.toString().padStart(2, '0')}
                                                  </option>
                                                ))}
                                              </select>
                                              
                                              <select 
                                                className="border border-gray-300 rounded p-1"
                                                value={endAmPm}
                                                onChange={(e) => setEndAmPm(e.target.value)}
                                              >
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                              </select>
                                            </div>
                                            
                                            {/* Summary and buttons */}
                                            <div className="flex justify-between items-center">
                                              <div className="text-sm">
                                                {timeRange}
                                              </div>
                                              <div className="space-x-2">
                                                <button 
                                                  className="px-3 py-1 border border-gray-300 rounded text-black"
                                                  onClick={handleCancel}
                                                >
                                                  Cancel
                                                </button>
                                                <button 
                                                  className="px-3 py-1 bg-blue-500 text-white rounded"
                                                  onClick={handleApply}
                                                >
                                                  Apply
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    </Col>


                                    <Col md={6}>
                                      <div className="mb-3 mt-3">
                                        <Label htmlFor="nameOfTrustSocietyManagementCommittee" className="form-label">
                                          ट्रस्ट सोसायटी व्यवस्थापन समितीचे नाव <span className="text-danger">*</span>
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="nameOfTrustSocietyManagementCommittee"
                                          name="nameOfTrustSocietyManagementCommittee"
                                          placeholder="ट्रस्टचे नाव लिहा"
                                        />
                                      </div>
                                    </Col>


                                    <Col md={6}>
                                      <div className="mb-3 mt-3">
                                        <Label htmlFor="sansthaCompanyHasPurposeForOnlyEducationService" className="form-label">
                                          संस्था/कंपनीचा उद्देश फक्त शिक्षण सेवा आहे का?
                                        </Label>3
                                        <Input
                                          type="select"
                                          className="form-select"
                                          id="sansthaCompanyHasPurposeForOnlyEducationService"
                                          name="sansthaCompanyHasPurposeForOnlyEducationService"
                                        >
                                          <option value="" disabled selected>निवडा</option>
                                          <option value="होय">होय</option>
                                          <option value="नाही">नाही</option>
                                        </Input>
                                      </div>
                                    </Col>


                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="isSchoolOpenWhereAddressMentionedInApproval" className="form-label">
                                          शाळा मान्यतामध्ये नमूद केलेल्या पत्त्यावर त्या ठिकाणी शाळा सुरु आहे का?
                                        </Label>
                                        <Input
                                          type="select"
                                          className="form-select"
                                          id="isSchoolOpenWhereAddressMentionedInApproval"
                                          name="isSchoolOpenWhereAddressMentionedInApproval"
                                        >
                                          <option value="" disabled selected>निवडा</option>
                                          <option value="होय">होय</option>
                                          <option value="नाही">नाही</option>
                                        </Input>
                                      </div>
                                    </Col>


                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="whetherSchoolIsMovedToAnotherLocation" className="form-label">
                                          शाळा स्थलांतरित झालेली आहे का?
                                        </Label>
                                        <Input
                                          type="select"
                                          className="form-select"
                                          id="whetherSchoolIsMovedToAnotherLocation"
                                          name="whetherSchoolIsMovedToAnotherLocation"
                                        >
                                          <option value="" disabled selected>निवडा</option>
                                          <option value="होय">होय</option>
                                          <option value="नाही">नाही</option>
                                        </Input>
                                      </div>
                                    </Col>


                                    <Col md={6}>
                                      <div className="mb-3">
                                        <Label htmlFor="ifSansthaIsHandoverToSomeone" className="form-label">
                                          संस्था हस्तांतरीत झालेली आहे का?
                                        </Label>
                                        <Input
                                          type="select"
                                          className="form-select"
                                          id="ifSansthaIsHandoverToSomeone"
                                          name="ifSansthaIsHandoverToSomeone"
                                        >
                                          <option value="" disabled selected>पर्याय निवडा</option>
                                          <option value="होय">होय</option>
                                          <option value="नाही">नाही</option>
                                        </Input>
                                      </div>
                                    </Col>


                                       {/* महाराष्ट्र शासन मान्यता आदेश आहे का? */}
                                    <Row>
                                      <Col md={6}>
                                          <div className="mb-3">
                                            <Label
                                              htmlFor="doYouHaveMaharastraShashanManyataNo"
                                              className="form-label"
                                            >
                                              महाराष्ट्र शासन मान्यता आदेश आहे का? <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                              type="select"
                                              name="doYouHaveMaharastraShashanManyataNo"
                                              id="doYouHaveMaharastraShashanManyataNo"
                                              value={govApproval}
                                              onChange={(e) => setGovApproval(e.target.value)}
                                              className="form-select"
                                            >
                                              <option value="" disabled>
                                                पर्याय निवडा
                                              </option>
                                              <option value="होय">होय</option>
                                              <option value="नाही">नाही</option>
                                            </Input>
                                          </div>
                                        </Col>

                                        {govApproval === "होय" && (
                                          <>
                                            <Col lg={3}>
                                              <Label
                                                htmlFor="maharastraShashanApprovalNumber"
                                                className="form-label"
                                              >
                                                शासन मान्यता आदेश क्र. <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="text"
                                                name="maharastraShashanApprovalNumber"
                                                id="maharastraShashanApprovalNumber"
                                                className="form-control mb-3"
                                                placeholder="शासन मान्यता आदेश क्र."
                                                value={manyataNumber}
                                                onChange={(e) => setManyataNumber(e.target.value)}
                                              />
                                            </Col>
                                            <Col lg={3}>
                                              <Label
                                                htmlFor="maharastraShashanApprovalDate"
                                                className="form-label"
                                              >
                                                मान्यता दिनांक <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="date"
                                                name="maharastraShashanApprovalDate"
                                                id="maharastraShashanApprovalDate"
                                                className="form-control mb-3"
                                                placeholder="मान्यता दिनांक"
                                                value={manyataDate}
                                                onChange={(e) => setManyataDate(e.target.value)}
                                              />
                                            </Col>
                                          </>
                                        )}
                                      </Row>


                                      {/* शिक्षण उपसंचालक मान्यता आहे का? */}
                                      <Row>
                                        <Col lg={6}>
                                          <div className="mb-3">
                                            <Label
                                              htmlFor="doYouHaveShikshanUpsanchalakApproval"
                                              className="form-label"
                                            >
                                              शिक्षण उपसंचालक मान्यता आहे का? <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                              type="select"
                                              id="doYouHaveShikshanUpsanchalakApproval"
                                              name="doYouHaveShikshanUpsanchalakApproval"
                                              value={eduApproval}
                                              onChange={(e) => setEduApproval(e.target.value)}
                                              className="form-select"
                                            >
                                              <option value="" disabled>
                                                पर्याय निवडा
                                              </option>
                                              <option value="Yes">होय</option>
                                              <option value="No">नाही</option>
                                            </Input>
                                          </div>
                                        </Col>

                                        {eduApproval === 'Yes' && (
                                          <>
                                            <Col lg={3}>
                                              <Label
                                                htmlFor="shikshanUpsanchalakApprovalNumber"
                                                className="form-label"
                                              >
                                                उपसंचालक मान्यता आदेश क्र. <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="text"
                                                id="shikshanUpsanchalakApprovalNumber"
                                                name="shikshanUpsanchalakApprovalNumber"
                                                className="form-control mb-3"
                                                placeholder="उपसंचालक मान्यता आदेश क्र."
                                                value={upsanchalakNumber}
                                                onChange={(e) => setUpsanchalakNumber(e.target.value)}
                                              />
                                            </Col>
                                            
                                            <Col lg={3}>
                                              <Label
                                                htmlFor="shikshanUpsanchalakApprovalDate"
                                                className="form-label"
                                              >
                                                मान्यता दिनांक <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="date"
                                                id="shikshanUpsanchalakApprovalDate"
                                                name="shikshanUpsanchalakApprovalDate"
                                                className="form-control mb-3"
                                                placeholder="मान्यता दिनांक"
                                                value={upsanchalakDate}
                                                onChange={(e) => setUpsanchalakDate(e.target.value)}
                                              />
                                            </Col>
                                          </>
                                        )}
                                      </Row>


                                      {/* प्रथम मान्यता आहे का? */}
                                       <Row>
                                        <Col lg={6}>
                                          <div className="mb-3">
                                            <Label htmlFor="doYouHavePrathamManyataCertificate" className="form-label">
                                              प्रथम मान्यता आहे का? <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                              type="select"
                                              id="doYouHavePrathamManyataCertificate"
                                              name="doYouHavePrathamManyataCertificate"
                                              value={firstApproval}
                                              onChange={(e) => setFirstApproval(e.target.value)}
                                              className="form-select"
                                            >
                                              <option value="" disabled>पर्याय निवडा</option>
                                              <option value="Yes">होय</option>
                                              <option value="No">नाही</option>
                                            </Input>
                                          </div>
                                        </Col>

                                        {firstApproval === 'Yes' && (
                                          <>
                                            <Col lg={3}>
                                              <Label htmlFor="prathamManyataNumber" className="form-label">
                                                प्रथम मान्यता आदेश क्र. <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="text"
                                                id="prathamManyataNumber"
                                                name="prathamManyataNumber"
                                                className="form-control mb-3"
                                                placeholder="प्रथम मान्यता आदेश क्र."
                                                value={prathamNumber}
                                                onChange={(e) => setPrathamNumber(e.target.value)}
                                              />
                                            </Col>
                                            <Col lg={3}>
                                              <Label htmlFor="prathamManyataDate" className="form-label">
                                                प्रथम मान्यता दिनांक <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="date"
                                                id="prathamManyataDate"
                                                name="prathamManyataDate"
                                                className="form-control mb-3"
                                                placeholder="प्रथम मान्यता दिनांक"
                                                value={prathamDate}
                                                onChange={(e) => setPrathamDate(e.target.value)}
                                              />
                                            </Col>
                                          </>
                                        )}
                                      </Row>

                                      {/* शासनाचे ना हरकत प्रमाणपत्र (NOC) आहे का? */}
                                      <Row>
                                        <Col lg={6}>
                                          <div className="mb-3">
                                            <Label htmlFor="doYouRunOnGovernmentNoObjectionCertificate" className="form-label">
                                              शासनाचे ना हरकत प्रमाणपत्र (N.O.C.) आहे का? <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                              type="select"
                                              id="doYouRunOnGovernmentNoObjectionCertificate"
                                              name="doYouRunOnGovernmentNoObjectionCertificate"
                                              value={nocApproval}
                                              onChange={(e) => setNocApproval(e.target.value)}
                                              className="form-select"
                                            >
                                              <option value="" disabled>पर्याय निवडा</option>
                                              <option value="Yes">होय</option>
                                              <option value="No">नाही</option>
                                            </Input>
                                          </div>
                                        </Col>

                                        {nocApproval === 'Yes' && (
                                          <>
                                            <Col lg={3}>
                                              <Label htmlFor="noObjectionCertificateNumber" className="form-label">
                                                NOC आदेश क्र. <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="text"
                                                id="noObjectionCertificateNumber"
                                                name="noObjectionCertificateNumber"
                                                className="form-control mb-3"
                                                placeholder="NOC आदेश क्र."
                                                value={nocNumber}
                                                onChange={(e) => setNocNumber(e.target.value)}
                                              />
                                            </Col>
                                            <Col lg={3}>
                                              <Label htmlFor="noObjectionCertificateDate" className="form-label">
                                                NOC दिनांक <span className="text-danger">*</span>
                                              </Label>
                                              <Input
                                                type="date"
                                                id="noObjectionCertificateDate"
                                                name="noObjectionCertificateDate"
                                                className="form-control mb-3"
                                                placeholder="NOC दिनांक"
                                                value={nocDate}
                                                onChange={(e) => setNocDate(e.target.value)}
                                              />
                                            </Col>
                                          </>
                                        )}
                                      </Row>


                                      {/* संलग्नता प्रमाणपत्र आहे का? */}
                                    <Row>
                                      <Col lg={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="isThereAnAffiliationCertificate" className="form-label">
                                            संलग्नता प्रमाणपत्र आहे का? <span className="text-danger">*</span>
                                          </Label>
                                          <Input
                                            type="select"
                                            id="isThereAnAffiliationCertificate"
                                            name="isThereAnAffiliationCertificate"
                                            value={affiliationApproval}
                                            onChange={(e) => setAffiliationApproval(e.target.value)}
                                            className="form-select"
                                          >
                                            <option value="" disabled>पर्याय निवडा</option>
                                            <option value="Yes">होय</option>
                                            <option value="No">नाही</option>
                                          </Input>
                                        </div>
                                      </Col>

                                      {affiliationApproval === 'Yes' && (
                                        <>
                                          <Col lg={3}>
                                            <Label htmlFor="affiliationCertificateNumber" className="form-label">
                                              संलग्नता प्रमाणपत्र क्र. <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                              type="text"
                                              id="affiliationCertificateNumber"
                                              name="affiliationCertificateNumber"
                                              className="form-control mb-3"
                                              placeholder="संलग्नता प्रमाणपत्र क्र."
                                              value={affiliationNumber}
                                              onChange={(e) => setAffiliationNumber(e.target.value)}
                                            />
                                          </Col>
                                          <Col lg={3}>
                                            <Label htmlFor="affiliationCertificateDate" className="form-label">
                                              संलग्नता दिनांक <span className="text-danger">*</span>
                                            </Label>
                                            <Input
                                              type="date"
                                              id="affiliationCertificateDate"
                                              name="affiliationCertificateDate"
                                              className="form-control mb-3"
                                              placeholder="संलग्नता दिनांक"
                                              value={affiliationDate}
                                              onChange={(e) => setAffiliationDate(e.target.value)}
                                            />
                                          </Col>
                                        </>
                                      )}
                                    </Row>

                                  </Row>
                                </Form>
                              </div>
                            </CardBody>
                          </Card>                
                        </Col>
                      </Row>
                  <Row>
  <Col lg={12}>
    <Card>
      <PreviewCardHeader title="मुख्याध्यापक, शाळा व्यवस्थापन, अध्यक्ष, सचिव, लिपिकाचे नाव आणि तपशील" />
      <CardBody>
        
        {/* अध्यक्ष */}
        <Row className="mb-3">
          <Col lg={4}>
            <Label className="form-label">अध्यक्षाचे नाव</Label>
            <Input type="text" className="form-control" name="president_name" />
          </Col>
          <Col lg={4}>
            <Label className="form-label">पत्ता</Label>
            <Input type="text" className="form-control" name="president_address" />
          </Col>
          <Col lg={4}>
            <Label className="form-label">मोबाईल क्रमांक (कार्यालय निवास)</Label>
            <Input type="text" className="form-control" name="president_mobile" />
          </Col>
        </Row>

        {/* सचिव */}
        <Row className="mb-3">
          <Col lg={4}>
            <Label className="form-label">सचिवाचे नाव</Label>
            <Input type="text" className="form-control" name="secretary_name" />
          </Col>
          <Col lg={4}>
            <Label className="form-label">पत्ता</Label>
            <Input type="text" className="form-control" name="secretary_address" />
          </Col>
          <Col lg={4}>
            <Label className="form-label">मोबाईल क्रमांक (कार्यालय निवास)</Label>
            <Input type="text" className="form-control" name="secretary_mobile" />
          </Col>
        </Row>

        {/* मुख्याध्यापक */}
        <Row className="mb-3">
          <Col lg={4}>
            <Label className="form-label">मुख्याध्यापकाचे नाव</Label>
            <Input type="text" className="form-control" name="headmaster_name" />
          </Col>
          <Col lg={4}>
            <Label className="form-label">पत्ता</Label>
            <Input type="text" className="form-control" name="headmaster_address" />
          </Col>
          <Col lg={4}>
            <Label className="form-label">मोबाईल क्रमांक (कार्यालय निवास)</Label>
            <Input type="text" className="form-control" name="headmaster_mobile" />
          </Col>
        </Row>

      </CardBody>

      <div className="col-12 text-end mb-3">
        <div className="col-sm-auto">
          <a
            className="btn btn-submit btn-success"
            href="javascript:void(0);"
            onClick={handleSubmit}
          >
            जतन करा आणि पुढे जा <i className="ri-arrow-right-line align-bottom me-1"></i>
          </a>
        </div>
      </div>
    </Card>
  </Col>
</Row>

                    </Container>
                 </div>
                 </div>
             </React.Fragment>
            );
          };
  
    export default GeneralInfo;
