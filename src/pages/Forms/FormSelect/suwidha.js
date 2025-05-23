import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from 'axios'; // Import axios
import { Link, useNavigate ,useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaChevronRight } from 'react-icons/fa';


const animatedComponents = makeAnimated();

const SingleOptions = [
  { value: 'Yes', label: 'हो' },
  { value: 'No', label: 'नाही' }
];

const SingleOptions1 = [
  { value: 'Yes', label: '43 HRS' },
  { value: 'No', label: '48 HRS' }
];

const SingleOptions2 = [
  { value: 'Yes', label: 'हो' },
  { value: 'No', label: 'नाही' }
];

// Custom styles for react-select
const selectCustomStyles = {
  control: (base) => ({
    ...base,
    paddingTop: '6px',
    paddingBottom: '6px',
  })
};

const FormSelect = () => {
  const [selectedSingle1, setSelectedSingle1] = useState(null);
  const [selectedSingle2, setSelectedSingle2] = useState(null);
  const [selectedSingle3, setSelectedSingle3] = useState(null);

  const [teacherRefBooks, setTeacherRefBooks] = useState('');
  const [libraryBooks, setLibraryBooks] = useState('');
  const [sportsKits, setSportsKits] = useState('');
  const [magazines, setMagazines] = useState('');
  const [newspapers, setNewspapers] = useState('');

  // Set the page title
  //document.title = "इतर सुविधा";

    const navigate = useNavigate();
  
      const[successMsg,setSuccessMsg]=useState(null);
      const[errorMsg,setErrorMsg]=useState(null);
      const location = useLocation();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare the data to be sent to the backend API
    const formData = {
      applicationId: 2, 
      schoolId: 2,      // Static value for schoolId
      areAllFacilitiesAccessibleWithoutHindrance: selectedSingle1 ? selectedSingle1.value : null,
      studyTeachingMaterials: selectedSingle2 ? selectedSingle2.value : null,
      sportsAndSportsEquipment: selectedSingle3 ? selectedSingle3.value : null,
      numberOfReferenceBooksAvailableForTeacherTraining: teacherRefBooks,
      numberOfBooksAvailableForStudentReadingInTheLibrary: libraryBooks,
      numberOfSportsAndSportsLiterature: sportsKits,
      magzinBooksCount: magazines,
      newspaperAndTotalCount: newspapers,
    };

    try {

      const response = await fetch("http://localhost:8080/api/other-facility/create", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData)
              });
      
              if (response.ok) {
                  const data = await response.json();
                  if (data.status === "success") {
                      Swal.fire("यशस्वी", "माहिती जतन झाली आहे!", "success").then(() => {
                          navigate('/granted-school', { state: { tab: 'grantSchool' } });
                      });
                  } else {
                      setErrorMsg(data.message || "जतन करण्यात अडचण आली!");
                  }
              } else {
                  setErrorMsg("सर्व्हर एरर: " + response.statusText);
              }



      // // Make a POST request to the backend API
      // const response = await axios.post('http://localhost:8080/api/other-facility/create', formData);

      // // Check if the request was successful
      // if (response.status === 200) {
      //   alert("Data saved successfully!");
      //   // Optionally, redirect or reset the form here
      // } else {
      //   alert("There was an error saving the data. Please try again.");
      // }
    } catch (error) {
      console.error("Error while saving data:", error);
        setErrorMsg("Invalid data");
    }
  };

    document.title = "भौतिक सुविधा";
  
      const [activeTab, setActiveTab] = useState(() => {
        return location.state?.tab || "general";
      });
  
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
                              डॅशबोर्ड <FaChevronRight className="mx-2" /> स्व-मान्यता अर्ज
                                 <FaChevronRight className="mx-2" /> 
                                  इतर सुविधा
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

      <UiContent />
      <div className="container-fluid">
        <Row>
          <Col lg={12}>
            <Card>
              <PreviewCardHeader title="अध्यान- अध्यापन तासिका, साहित्य/खेळ व क्रीडा विषयक सामुग्री/ ग्रंथालय मधील साहित्यांची उपलब्धता" />
              <CardBody>
                <div className="live-preview">
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* Select 1 */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="form-label">
                            मागील शैक्षणिक वर्षात प्राथमिक साठी किमान 200 दिवस 800 घड्याळी तासिका व उच्च प्राथ. साठी २२० दिवस १००० घड्याळी तासिका अद्यापन कार्यवाही <span style={{ color: 'red' }}>*</span>
                          </Label>
                          <Select
                            components={animatedComponents}
                            value={selectedSingle1}
                            onChange={setSelectedSingle1}
                            options={SingleOptions}
                            styles={selectCustomStyles}
                          />
                        </div>
                      </Col>

                      {/* Select 2 */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="form-label mb-4">
                            किमान ४५/४८ तासिका आठवड्यास अध्यापन कार्यवाही <span style={{ color: 'red' }}>*</span>
                          </Label>
                          <Select
                            components={animatedComponents}
                            value={selectedSingle2}
                            onChange={setSelectedSingle2}
                            options={SingleOptions1}
                            styles={selectCustomStyles}
                          />
                        </div>
                      </Col>

                      {/* Select 3 */}
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label className="form-label">
                            प्रत्येक वर्गात शैक्षणिक साहित्य आवश्यकतेनुसार पुरेसे <span style={{ color: 'red' }}>*</span>
                          </Label>
                          <Select
                            components={animatedComponents}
                            value={selectedSingle3}
                            onChange={setSelectedSingle3}
                            options={SingleOptions2}
                            styles={selectCustomStyles}
                          />
                        </div>
                      </Col>

                      {/* Input fields */}
                      <Col lg={6}>
                        <div className="form-floating mb-3 mt-4">
                          <Input
                            type="number"
                            className="form-control"
                            id="teacherRefBooksInput"
                            value={teacherRefBooks}
                            onChange={(e) => setTeacherRefBooks(e.target.value)}
                            placeholder="शिक्षक अध्यापनासाठी उपलब्ध संदर्भ पुस्तके संख्या"
                          />
                          <Label htmlFor="teacherRefBooksInput">शिक्षक अध्यापनासाठी उपलब्ध संदर्भ पुस्तके संख्या <span style={{ color: 'red' }}>*</span></Label>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="form-floating mb-3">
                          <Input
                            type="number"
                            className="form-control"
                            id="libraryBooksInput"
                            value={libraryBooks}
                            onChange={(e) => setLibraryBooks(e.target.value)}
                            placeholder="ग्रंथालयात विद्यार्थ्यांच्या वाचनासाठी उपलब्ध पुस्तकांची संख्या"
                          />
                          <Label htmlFor="libraryBooksInput">ग्रंथालयात विद्यार्थ्यांच्या वाचनासाठी उपलब्ध पुस्तकांची संख्या <span style={{ color: 'red' }}>*</span></Label>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="form-floating mb-3">
                          <Input
                            type="number"
                            className="form-control"
                            id="sportsKitsInput"
                            value={sportsKits}
                            onChange={(e) => setSportsKits(e.target.value)}
                            placeholder="क्रीडा व खेळ विषयक उपलब्ध संच संख्या"
                          />
                          <Label htmlFor="sportsKitsInput">क्रीडा व खेळ विषयक उपलब्ध संच संख्या <span style={{ color: 'red' }}>*</span></Label>
                        </div>
                      </Col>
                    </Row>

                    {/* Additional Section */}
                    <Row>
                      <Col lg={12}>
                        <Card>
                          <PreviewCardHeader title="वाचन साहित्य विनासायास उपलब्ध" />
                          <CardBody>
                            <div className="live-preview">
                              <Row>
                                <Col lg={6}>
                                  <div className="form-floating mb-3">
                                    <Input
                                      type="number"
                                      className="form-control"
                                      id="magazineInput"
                                      value={magazines}
                                      onChange={(e) => setMagazines(e.target.value)}
                                      placeholder="मासिके / नियतकालिये"
                                    />
                                    <Label htmlFor="magazineInput">मासिके / नियतकालिये ( किशोर, जीवन शिक्षण इ. ) संख्या <span style={{ color: 'red' }}>*</span></Label>
                                  </div>
                                </Col>

                                <Col lg={6}>
                                  <div className="form-floating mb-3">
                                    <Input
                                      type="number"
                                      className="form-control"
                                      id="newspaperInput"
                                      value={newspapers}
                                      onChange={(e) => setNewspapers(e.target.value)}
                                      placeholder="वर्तमानपत्रे नावे व संख्या"
                                    />
                                    <Label htmlFor="newspaperInput">वर्तमानपत्रे नावे व संख्या <span style={{ color: 'red' }}>*</span></Label>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Col md={12}>
                      <div className="text-end md-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </Col>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div> 
      </div>
    </React.Fragment>
  );
};

export default FormSelect;