import React, { useState } from 'react';
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from 'axios'; // Import axios

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
  document.title = "इतर सुविधा";

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
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:8080/api/other-facility/create', formData);

      // Check if the request was successful
      if (response.status === 200) {
        alert("Data saved successfully!");
        // Optionally, redirect or reset the form here
      } else {
        alert("There was an error saving the data. Please try again.");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default FormSelect;