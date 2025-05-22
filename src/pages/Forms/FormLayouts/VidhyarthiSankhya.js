import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UiContent from "../../../Components/Common/UiContent";
import './VidhyarthiSankhya.css';
import { FaChevronRight } from 'react-icons/fa';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, Label, Row, FormGroup } from 'reactstrap';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { Link,useLocation } from 'react-router-dom';

//Import Flatepicker
import Flatpickr from "react-flatpickr";

import { useNavigate } from 'react-router-dom';

const VidhyarthiSankhya = () => {
    const navigate = useNavigate();

    const [lowestClass, setLowestClass] = useState("");
    const [highestClass, setHighestClass] = useState("");
    const [classList, setClassList] = useState([]);
    const [studentData, setStudentData] = useState({});

const[successMsg,setSuccessMsg]=useState(null);
const[errorMsg,setErrorMsg]=useState(null);
const location = useLocation();

const [activeTab, setActiveTab] = useState(() => {
  return location.state?.tab || "general";
});

    const numberWords = [
        "zero", "first", "second", "third", "fourth", "fifth",
        "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelth"
      ];
      
      const convertNumberToWord = (numStr) => {
        const num = parseInt(numStr);
        return numberWords[num] || `class${num};`
      };
      function toUnicode(str) {
        return str.split('').map(char => '\\u' + ('000' + char.charCodeAt(0).toString(16)).slice(-4)).join('');
      }
      
    //   const handleSave = () => {
    //     const schoolId = 1;
    //     const applicationId = 1;
    //     const lowerClass = parseInt(lowestClass);
    //     const upperClass = parseInt(highestClass);
      
    //     const filteredData = Object.entries(studentData)
    //       .filter(([cls]) => {
    //         const clsNum = parseInt(cls);
    //         return clsNum >= lowerClass && clsNum <= upperClass;
    //       });
      
    //     const studentCountsArray = filteredData.map(([cls, counts]) => ({
    //       standard: parseInt(cls),
    //       boys: counts.boys,
    //       girls: counts.girls,
    //       total: counts.total,
    //     }));
      
    //     // Unicode helpers
    //     const totalBoysObj = { details: toUnicode("एकूण मुले") };
    //     const totalGirlsObj = { details: toUnicode("एकूण मुली") };
    //     const totalObj = { details: toUnicode("एकूण") };
      
    //     // Add per-class data
    //     filteredData.forEach(([cls, counts]) => {
    //       const classKey = convertNumberToWord(cls);
    //       totalBoysObj[classKey] = counts.boys.toString();
    //       totalGirlsObj[classKey] = counts.girls.toString();
    //       totalObj[classKey] = counts.total.toString();
    //     });
      
    //     const payload = {
    //       schoolId,
    //       applicationId,
    //       totalBoys: JSON.stringify(totalBoysObj),
    //       totalGirls: JSON.stringify(totalGirlsObj),
    //       total: JSON.stringify(totalObj),
    //       lower: lowestClass.toString(),
    //       higher: highestClass.toString(),
    //       studentCounts: studentCountsArray
    //     };
      
    //     fetch("http://localhost:8080/api/student-counts/add", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(payload)
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         if (data.status === "success") {
    //           Swal.fire("यशस्वी", "माहिती जतन झाली आहे!", "success");
    //         } else {
    //           Swal.fire("त्रुटी", "जतन करण्यात अडचण आली!", "error");
    //         }
    //       })
    //       .catch(err => {
    //         console.error(err);
    //         Swal.fire("त्रुटी", "सर्व्हरशी संपर्क साधता आला नाही", "error");
    //       });
    //   };   

 const handleSave = async () => {
    const schoolId = 1;
    const applicationId = 1;
    const lowerClass = parseInt(lowestClass);
    const upperClass = parseInt(highestClass);

    const filteredData = Object.entries(studentData).filter(([cls]) => {
        const clsNum = parseInt(cls);
        return clsNum >= lowerClass && clsNum <= upperClass;
    });

    const studentCountsArray = filteredData.map(([cls, counts]) => ({
        standard: parseInt(cls),
        boys: counts.boys,
        girls: counts.girls,
        total: counts.total,
    }));

    // Unicode helpers
    const totalBoysObj = { details: toUnicode("एकूण मुले") };
    const totalGirlsObj = { details: toUnicode("एकूण मुली") };
    const totalObj = { details: toUnicode("एकूण") };

    // Add per-class data
    filteredData.forEach(([cls, counts]) => {
        const classKey = convertNumberToWord(cls);
        totalBoysObj[classKey] = counts.boys.toString();
        totalGirlsObj[classKey] = counts.girls.toString();
        totalObj[classKey] = counts.total.toString();
    });

    const payload = {
        schoolId,
        applicationId,
        totalBoys: JSON.stringify(totalBoysObj),
        totalGirls: JSON.stringify(totalGirlsObj),
        total: JSON.stringify(totalObj),
        lower: lowestClass.toString(),
        higher: highestClass.toString(),
        studentCounts: studentCountsArray
    };

    try {
        const response = await fetch("http://localhost:8080/api/student-counts/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
console.log(response);
   if (response.ok) {
    const data = await response.json();
   if (data.status === "success") {
    Swal.fire("यशस्वी", "माहिती जतन झाली आहे!", "success").then(() => {
        navigate('/forms-select1', { state: { tab: 'facilities' } });
    });
} else {
    setErrorMsg(data.message || "जतन करण्यात अडचण आली!");
}

} else {
    setErrorMsg("सर्व्हर एरर: " + response.statusText);
}


    } catch (error) {
        console.error("Error while saving data:", error);
       setErrorMsg("invalid data");
    }
};

    
    const handleClassChange = (type, value) => {
        if (value === "") {
          if (type === 'lowest') setLowestClass("");
          else setHighestClass("");
          return;
        }
      
        const newLowest = type === 'lowest' ? parseInt(value) : parseInt(lowestClass || 0);
        const newHighest = type === 'highest' ? parseInt(value) : parseInt(highestClass || 0);
      
        if (newLowest && newHighest && newHighest < newLowest) {
          Swal.fire({
            icon: 'warning',
            title: 'चूक निवड',
            text: 'सर्वात वरची इयत्ता ही सर्वात खालच्या इयत्तेपेक्षा कमी असू शकत नाही!',
            backdrop: true,
            heightAuto: false,
          });
      
          if (type === 'lowest') setLowestClass('');
          else setHighestClass('');
      
          return;
        }
      
        if (type === 'lowest') setLowestClass(value);
        else setHighestClass(value);
    };

    const classOptions = [
    { value: "0", label: "इयत्ता 0" },
    { value: "1", label: "इयत्ता १" },
    { value: "2", label: "इयत्ता २" },
    { value: "3", label: "इयत्ता ३" },
    { value: "4", label: "इयत्ता ४" },
    { value: "5", label: "इयत्ता ५" },
    { value: "6", label: "इयत्ता ६" },
    { value: "7", label: "इयत्ता ७" },
    { value: "8", label: "इयत्ता ८" },
    { value: "9", label: "इयत्ता ९" },
    { value: "10", label: "इयत्ता १०" },
    { value: "11", label: "इयत्ता ११" },
    { value: "12", label: "इयत्ता १२" },
    ];

    useEffect(() => {
        if (lowestClass && highestClass) {
          const start = parseInt(lowestClass);
          const end = parseInt(highestClass);
      
          if (start <= end) {
            const updatedClasses = [];
            for (let i = start; i <= end; i++) {
              updatedClasses.push(i.toString());
            }
            setClassList(updatedClasses);
      
            setStudentData(prev => {
              const filtered = {};
              updatedClasses.forEach(cls => {
                if (prev[cls]) filtered[cls] = prev[cls];
              });
              return filtered;
            });
          } else {
            setClassList([]);
            setStudentData({});
          }
        }
      }, [lowestClass, highestClass]);
      

    const handleInputChange = (e, std, type) => {
    const value = parseInt(e.target.value) || 0;
    setStudentData((prev) => {
        const newData = { ...prev };
        if (!newData[std]) newData[std] = { boys: 0, girls: 0, total: 0 };
        newData[std][type] = value;
        newData[std].total = (newData[std].boys || 0) + (newData[std].girls || 0);
        return newData;
    });
    };

    document.title="विद्यार्थी संख्या";
    
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
        title={breadcrumbTitles[activeTab]}
        pageTitle={
          <>
            डॅशबोर्ड <FaChevronRight className="mx-2" /> स्व-मान्यता अर्ज
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
                            <Card >
                                {/* <PreviewCardHeader title="विद्यार्थी संख्या" /> */}
                                <CardHeader>
                                    <Row>
                                        <Col md={4}>
                                            <Label htmlFor="studentCount" className="form-label fw-bold">विद्यार्थी संख्या</Label>
                                        </Col>

                                        <Col md={4}>
                                            <Label htmlFor="lowestClass" id="lowestClass" className="form-label fw-bold" value={lowestClass} onChange={(e) => handleClassChange('lowest', e.target.value)}>सर्वात खालची इयत्ता निवडा</Label>
                                            <Input
                                                type="select"
                                                id="lowestClass"
                                                className="form-control"
                                                value={lowestClass}
                                                onChange={(e) => setLowestClass(e.target.value)}
                                                style={{
                                                    paddingTop: '11px',
                                                    paddingBottom: '11px',
                                                  }}
                                            >
                                                <option value="">सर्वात खालची इयत्ता निवडा</option>
                                                {classOptions.map((cls) => (
                                                <option key={cls.value} value={cls.value}>{cls.label}</option>
                                                ))}
                                                
                                            </Input>
                                        </Col>

                                        <Col md={4}>
                                            <Label htmlFor="highestClass" id="highestClass" className="form-label fw-bold" value={highestClass} onChange={(e) => handleClassChange('highest', e.target.value)}>सर्वात वरची इयत्ता निवडा</Label>
                                            <Input
                                                type="select"
                                                id="highestClass"
                                                className="form-control"
                                                value={highestClass}
                                                onChange={(e) => setHighestClass(e.target.value)}
                                                style={{
                                                    paddingTop: '11px',
                                                    paddingBottom: '11px',
                                                  }}
                                            >
                                                <option value="">सर्वात वरची इयत्ता निवडा</option>
                                                {classOptions.map((cls) => (
                                                <option key={cls.value} value={cls.value}>{cls.label}</option>
                                                ))}
                                            </Input>
                                        </Col>
                                    </Row>
                                </CardHeader>

                                {classList.length > 0 && (
                                    
                                    <CardBody>
                                        <Form>
                                            <div className="table-responsive mt-4">
                                                <table className="table">
                                                <thead>
                                                    <tr>
                                                    <th className="first-cell">तपशील</th>
                                                    {classList.map((cls, index) => (
                                                        <th key={cls} className={index === classList.length - 1 ? "last-cell" : ""}>
                                                            इयत्ता {cls}
                                                        </th>
                                                    ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td className="first-cell">एकूण मुले</td>
                                                    {classList.map((cls, index) => (
                                                        <td key={cls} className={index === classList.length - 1 ? "last-cell" : ""}>
                                                        <FormGroup className="form-floating">
                                                            <Input
                                                                type="number"
                                                                id={`total_boys_${cls}`}
                                                                name={`total_boys[${cls}]`}
                                                                value={studentData[cls]?.boys || ""}
                                                                onChange={(e) => handleInputChange(e, cls, "boys")}
                                                                placeholder="एकूण मुले"
                                                            />
                                                            <Label htmlFor={`total_boys_${cls}`}>मुलांची संख्या </Label>
                                                        </FormGroup>
                                                        </td>
                                                    ))}
                                                    </tr>
                                                    <tr>
                                                    <td className="first-cell">एकूण मुली</td>
                                                    {classList.map((cls, index) => (
                                                        <td key={cls} className={index === classList.length - 1 ? "last-cell" : ""}>
                                                        <FormGroup className="form-floating">
                                                            <Input
                                                                type="number"
                                                                id={`total_girls_${cls}`}
                                                                name={`total_girls[${cls}]`}
                                                                value={studentData[cls]?.girls || ""}
                                                                onChange={(e) => handleInputChange(e, cls, "girls")}
                                                                placeholder="एकूण मुली"
                                                            />
                                                            <Label htmlFor={`total_girls_${cls}`}>मुलींची संख्या</Label>
                                                        </FormGroup>
                                                        </td>
                                                    ))}
                                                    </tr>
                                                    <tr>
                                                    <td className="first-cell">एकूण</td>
                                                    {classList.map((cls, index) => (
                                                        <td key={cls} className={index === classList.length - 1 ? "last-cell" : ""}>
                                                        <FormGroup className="form-floating">
                                                            <Input
                                                                type="number"
                                                                id={`total_${cls}`}
                                                                name={`total[${cls}]`}
                                                                value={studentData[cls]?.total || ""}
                                                                readOnly
                                                                placeholder="एकूण संख्या"
                                                            />
                                                            <Label htmlFor={`total_${cls}`}>एकूण संख्या</Label>
                                                        </FormGroup>
                                                        </td>
                                                    ))}
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                        </Form>
                                    </CardBody>                                
                                )}
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
                            <a class="btn btn-submit btn-success" href="javascript:void(0);" onClick={handleSave}>जतन करा आणि पुढे जा <i class="ri-arrow-right-line align-bottom me-1"></i>
                            </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            </div>
        </React.Fragment>
    );
};
export default VidhyarthiSankhya;