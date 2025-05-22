import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Label,Input, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import UiContent from "../../../Components/Common/UiContent";
import Select from "react-select";
import { DefaultSelect, MenuSize, SelectSize } from './FormSelectCode';
import axios from "axios";
import { use } from 'react';
import { Link, useNavigate ,useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';




const SingleOptions1 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }
];


// Rooms for which data is entered
const roomLabels = [
    "मुख्याध्यापक",
    "कार्यालय",
    "स्टाफरुम",
    "भांडारखोली",
    "वर्गखोल्यांची संख्या",
    "विज्ञान प्रयोगशाळा",
    "१० संगणकांचा कक्ष",
    "ग्रंथालय"
];

 

const SingleOptions = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' },
   
];


const SingleOptionsT = Array.from({ length: 100 }, (_, i) => {
    const num = (i + 1).toString();
    return { value: num, label: num };
});

const SingleOptionsT1 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptionsT2 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptionsT3 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptionsT4 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptionsT5 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptionsT6 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptions21 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptions25 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptions26 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptions27 = [
    { value: 'Yes', label: 'होय' },
    { value: 'No', label: 'नाही' }  
];
const SingleOptions2 = [
    { value: 'SALE DEED', label: 'SALE DEED' },
    { value: 'GIFT DEED', label: 'GIFT DEED' },
    { value: 'RENT AGREEMENT', label: 'RENT AGREEMENT' },
    { value: '7/12', label: '7/12' },
    { value: 'PROPERTY CARD', label: 'PROPERTY CARD' }
    
];

const FormSelect1 = () => {



        

      const [fireWarrantyCylinderNo, setFireWarrantyCylinderNo] = useState("");
      const [medicalPrimaryBoxNumber, setMedicalPrimaryBoxNumber] = useState("");
      const [cctvNo, setCctvNo] = useState("");
      const [areaOfPlayground, setAreaOfPlayground] = useState("");
      const [totalAreaSqM, setTotalAreaSqM] = useState("");
      const [waterTankCapacity, setWaterTankCapacity] = useState('');
      const[schoolTotalAreaSqM, setschoolTotalAreaSqM]=useState("");
      const[kitchenShed, setkitchenShed]=useState("");
      const[room_number, setroom_number]=useState("");
      const[retainingWallCompound, setretainingWallCompound]=useState("");
      const [typeOfProofAvailableAndItsDate, setTypeOfProofAvailableAndItsDate] = useState("");
      const[areaSqM, setareaSqM]=useState("");


     const navigate = useNavigate();

      

    const[successMsg,setSuccessMsg]=useState(null);
    const[errorMsg,setErrorMsg]=useState(null);
    const location = useLocation();



    const [selectedSingle, setSelectedSingle] = useState(null);
    const [selectedSingle1, setSelectedSingle1] = useState(null);
    const [selectedSingle2, setSelectedSingle2] = useState(null);
    const [selectedSingle3, setSelectedSingle3] = useState(null);
    const [selectedSingle4, setSelectedSingle4] = useState(null);
    const [selectedSingle5, setSelectedSingle5] = useState(null);
    const [selectedSingle6, setSelectedSingle6] = useState(null);
    const [selectedSingle7, setSelectedSingle7] = useState(null);
    const [selectedSingle8, setSelectedSingle8] = useState(null);
    const [selectedSingle9, setSelectedSingle9] = useState(null);
    const [selectedSingle10, setSelectedSingle10] = useState(null);
    const [selectedSingle11, setSelectedSingle11] = useState(null);
    const [selectedSingle12, setSelectedSingle12] = useState(null);
    const [selectedSingle13, setSelectedSingle13] = useState(null);
    const [selectedSingle14, setSelectedSingle14] = useState(null);
    const [selectedSingle15, setSelectedSingle15] = useState(null);
    const [selectedSingle16, setSelectedSingle16] = useState(null);
    const [selectedSingle17, setSelectedSingle17] = useState(null);
    const [selectedSingle18, setSelectedSingle18] = useState(null);
    const [selectedSingle19, setSelectedSingle19] = useState(null);
    const [selectedSingle20, setSelectedSingle20] = useState(null);
    const [selectedSingle21, setSelectedSingle21] = useState(null);
    const [selectedSingle22, setSelectedSingle22] = useState(null);
    const [selectedSingle23, setSelectedSingle23] = useState(null);
    const [selectedSingle24, setSelectedSingle24] = useState(null);
    const [selectedSingle25, setSelectedSingle25] = useState(null);
    const [selectedSingle26, setSelectedSingle26] = useState(null);
    const [selectedSingle27, setSelectedSingle27] = useState(null);
    const [selectedSingle28, setSelectedSingle28] = useState(null);



    // State to track room data
    const [roomData, setRoomData] = useState(
        roomLabels.reduce((acc, label) => {
            acc[label] = { count: "", area: "" };
            return acc;
        }, {})
    );

   const [totalArea, setTotalArea] = useState(""); 
const [totalCount, setTotalCount] = useState("");

    useEffect(() => {
        let countSum = 0;
        let areaSum = 0;

        Object.values(roomData).forEach(({ count, area }) => {
            countSum += parseFloat(count) || 0;
            areaSum += parseFloat(area) || 0;
        });

        setTotalCount(countSum);
        setTotalArea(areaSum);
    }, [roomData]);

    const handleRoomChange = (label, field, value) => {
        setRoomData(prev => ({
            ...prev,
            [label]: {
                ...prev[label],
                [field]: value
            }
        }));
    };

    const handleSubmit = async () => {
    const payload = {
        schoolId: 1, // Replace with dynamic va lue as required
        applicationId:1 ,
        forYouTakePropertyDocumentType: selectedSingle1?.value || "",
        schoolTotalCount: totalCount.toString(),    
        schoolTotalArea:totalArea.toString(),

        typeOfProofAvailableAndItsDate: typeOfProofAvailableAndItsDate||  "",

        // Boys facilities
        seperateBoysToiletCount: selectedSingle4?.value || "",
        seperateBoysToiletFacilityDetails: selectedSingle5?.value || "",
        seperateBoysWashroomCount: selectedSingle6?.value || "",
        seperateBoysWashroomFacilityDetails: selectedSingle7?.value || "",
        seperateBoysDrinkingWaterCount: selectedSingle8?.value || "",
        seperateBoysDrinkingWaterFacilityDetails: selectedSingle9?.value || "",

        // Girls facilities
        seperateGirlsToiletCount: selectedSingle27?.value || "",
        seperateGirlsToiletFacilityDetails: selectedSingle10?.value || "",
        seperateGirlsWashroomCount: selectedSingle11?.value || "",
        seperateGirlsWashroomFacilityDetails: selectedSingle12?.value || "",
        seperateGirlsDrinkingWaterCount: selectedSingle13?.value || "",
        seperateGirlsDrinkingWaterFacilityDetails: selectedSingle14?.value || "",

        // Drinking water & tank
        waterTankCapacity: selectedSingle15?.value || "",
        actualAvailableFacilityDetailsWater: selectedSingle16?.value || "",
        waterTapCount: selectedSingle17?.value || "",
        actualAvailableFacilityDetailsTap: selectedSingle18?.value || "",

        // Playground
          areaOfPlayground: areaOfPlayground || "",
        areaOfPlaygroundDetails: selectedSingle19?.value || "",

         areaSqM:areaSqM||"",   

        // Boundary wall + iron gate
        schoolTotalAreaSqM: schoolTotalAreaSqM || "", // Fill if dynamic            

        entranceWithProtectiveWallAndIronGate: selectedSingle20?.value || "",

        totalAreaSqM: totalAreaSqM || "",

        retainingWallCompound: retainingWallCompound||" ",


        // Kitchen shed
        kitchenShed: kitchenShed||"", // Add value if applicable
        kitchenShedDetails: selectedSingle21?.value || "",

        // Ramp info
        rampRoad: selectedSingle22?.value || "",
        rocksOnTheSideOfTheRamp: selectedSingle23?.value || "",
        rampFacilityDetails: selectedSingle24?.value || "",

        // Classrooms info
        classroomCount: roomData["वर्गखोल्यांची संख्या"]?.count || "",
        classroomArea: roomData["वर्गखोल्यांची संख्या"]?.area || "",
        roomNumber: room_number, // <-- use the expected backend key here
        theRoofIsSolidRcc: selectedSingle25?.value || "",

        // Other facilities
        fireWarrantyCylinderNo, // Replace with actual field
        medicalPrimaryBoxNumber, // Replace with actual field
        cctvNo, // Replace with actual field
        plaquesInFacadesOfSchoolRecognition: selectedSingle26?.value || "",
         
    


        westernToiletCount: selectedSingle28?.value || "",


        // Room mappings
        principalCount: roomData["मुख्याध्यापक"]?.count || "",
        principalArea: roomData["मुख्याध्यापक"]?.area || "",
        officeCount: roomData["कार्यालय"]?.count || "",
        officeArea: roomData["कार्यालय"]?.area || "",
        staffCount: roomData["स्टाफरुम"]?.count || "",
        staffArea: roomData["स्टाफरुम"]?.area || "",
        storageCount: roomData["भांडारखोली"]?.count || "",
        storageArea: roomData["भांडारखोली"]?.area || "",
        labCount: roomData["विज्ञान प्रयोगशाळा"]?.count || "",
        labArea: roomData["विज्ञान प्रयोगशाळा"]?.area || "",
        compCount: roomData["१० संगणकांचा कक्ष"]?.count || "",
        compArea: roomData["१० संगणकांचा कक्ष"]?.area || "",
        libraryCount: roomData["ग्रंथालय"]?.count || "",
        libraryArea: roomData["ग्रंथालय"]?.area || "",

        // Required by DTO
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    //
    try {
            const response = await fetch("http://localhost:8080/api/bhautic-suvidha/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
    console.log(response);
       if (response.ok) {
        const data = await response.json();
       if (data.status === "success") {
        Swal.fire("यशस्वी", "माहिती जतन झाली आहे!", "success").then(() => {
            navigate('/forms-select', { state: { tab: 'otherFacilities' } });
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




//     try {
//         const response = await axios.post("http://localhost:8080/api/bhautic-suvidha/create", payload);
//         console.log("Submitted Successfully:", response.data);
//         alert("डेटा यशस्वीरित्या जतन केला गेला आहे.");
// navigate('/forms-select', { state: { tab: 'suwidha' } });
//     } catch (error) {
//         console.error("API Error:", error);
//         alert("डेटा जतन करताना त्रुटी आली.");
//     }
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
                            भौतिक सुविधा
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
            <div>
            <style>
                {`{
                .css-19bb58m{
                    padding-bottom: 10px;
                    padding-top: 10px;
                }
                  
            `}
            </style>
                <div className="container-fluid">
                   
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="इमारत सुविधा/शाळेच्या परिसराचे क्षेत्रफळ/ एकूण बांधकामाचे क्षेत्र" />
                                <CardBody>
                                    <div className="live-preview">
                                        <Row>
                                        <Col lg={6}>
                                            <Label className="form-label">
                                                संस्थेच्या नावे उपलब्ध जागेचा पुरावा आहे का ? <span style={{ color: 'red' }}>*</span>
                                            </Label>

                                            <Select
                                                value={SingleOptions.find(option => option.value === typeOfProofAvailableAndItsDate)}
                                               onChange={(selectedOption) => {
                                              setSelectedSingle(selectedOption); // still controls the UI
                                              setTypeOfProofAvailableAndItsDate(selectedOption?.value || "");}}

                                                options={SingleOptions}
                                                placeholder="पर्याय निवडा"
                                                menuPortalTarget={document.body}
                                                styles={{
                                                    menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                    control: base => ({
                                                    ...base,
                                                   
                                                    }),
                                                }}
                                                />

                                        </Col>


                                            {/* Conditionally show second select if 'Yes' is selected */}
                                            {selectedSingle?.value === 'Yes' && (
                                                <Col lg={6}>
                                                    <div className="mb-0">
                                                        <Label className="form-label">
                                                            मालमत्ता दस्तऐवज प्रकार <span style={{ color: 'red' }}>*</span>
                                                        </Label>
                                                        <Select
                                                            value={selectedSingle1}
                                                            onChange={setSelectedSingle1}
                                                            options={SingleOptions2}
                                                            styles={{
                                                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                control: base => ({
                                                                ...base,
                                                                paddingTop: '9px',
                                                                paddingBottom: '9px',
                                                                }),
                                                            }}
                                                        />
                                                    </div>
                                                </Col>
                                            )}
                                        </Row>
                                    </div>
                                    <div className="mt-4">
                                            <Row>                                            
                                                <Col lg={6} >
                                                    <h5 className="fs-14 mb-3">एकूण बांधकामाचे क्षेत्रफळ (चौ.मी)</h5>
                                                    <div className="form-floating mb-3">
                                                        <Input 
                                                            type="number" 
                                                            className="form-control" 
                                                            id="totalAreaInput" 
                                                            placeholder="एकूण क्षेत्रफळ (चौ. मी)" 
                                                            value={totalAreaSqM}
                                                            onChange={(e) => {
                                                                const stringValue = String(e.target.value);
                                                                setTotalAreaSqM(stringValue)}}
                                                        />
                                                        <Label htmlFor="totalAreaInput">
                                                        एकूण क्षेत्रफळ (चौ. मी)  <span style={{ color: 'red' }}>*</span>
                                                        </Label>
                                                    </div>
                                                </Col>
                                           
                                                <Col lg={6} >
                                                        <h5 className="fs-14 mb-3">खेळाच्या मैदानाचे क्षेत्रफळ </h5>
                                                        <div className="form-floating mb-3">
                                                        <Input 
                                                            type="number" 
                                                            className="form-control" 
                                                            id="totalAreaInput" 
                                                            placeholder="एकूण क्षेत्रफळ (चौ. मी)" 
                                                             value={areaSqM}
                                                            onChange={(e) => {
                                                          const stringValue = String(e.target.value); 
                                                          setareaSqM(stringValue)}}
                                                        />
                                                        <Label htmlFor="totalAreaInput">
                                                        एकूण क्षेत्रफळ (चौ. मी)  <span style={{ color: 'red' }}>*</span>
                                                        </Label>
                                                    </div>
                                                </Col>
                                                
                                                <Col lg={6}>
                                                    <h5 className="fs-14 mb-3">शाळेच्या परिसराचे एकूण क्षेत्रफळ (चौ. मी.)</h5>
                                                    <div className="form-floating mb-3">
                                                        <Input 
                                                            type="number" 
                                                            className="form-control" 
                                                            id="totalAreaInput" 
                                                            placeholder="एकूण क्षेत्रफळ (चौ. मी)" 
                                                             value={schoolTotalAreaSqM}  
                                                             onChange={(e) =>{
                                                             const stringValue = String(e.target.value);
                                                             setschoolTotalAreaSqM(stringValue)}}

                                                            // }}
                                                        />
                                                        <Label htmlFor="totalAreaInput">
                                                        एकूण क्षेत्रफळ (चौ. मी)  <span style={{ color: 'red' }}>*</span>
                                                        </Label>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="कार्यालय- भांडार- मुख्याध्यापक खोली वर्गखोल्यांची संख्या व मापे नकाशानुसार" />
                                <CardBody>
                                    {roomLabels.map((label, idx) => (
                                        <div className="live-preview" key={idx}>
                                            <h5 className="fs-14 mb-3 mt-3">{label}</h5>
                                            <Row>
                                                <Col lg={6}>
                                                    <div className="form-floating mb-3">
                                                        <Input
                                                            type="number"
                                                            id={`roomCount-${idx}`}
                                                            className="form-control"
                                                            placeholder="खोली संख्या"
                                                            value={roomData[label].count}
                                                            onChange={(e) => handleRoomChange(label, 'count', e.target.value)}
                                                        />
                                                        <Label htmlFor={`roomCount-${idx}`}>खोली संख्या <span style={{ color: 'red' }}>*</span></Label>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="form-floating mb-3">
                                                        <Input
                                                            type="number"
                                                            id={`roomArea-${idx}`}
                                                            className="form-control"
                                                            placeholder="एकूण क्षेत्रफळ"
                                                            value={roomData[label].area}
                                                            onChange={(e) => handleRoomChange(label, 'area', e.target.value)}
                                                        />
                                                        <Label htmlFor={`roomArea-${idx}`}>एकूण क्षेत्रफळ (चौ. मी) <span style={{ color: 'red' }}>*</span></Label>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    ))}

                                    {/* Total section */}
                                    <div className="live-preview">
                                        <h5 className="fs-14 mb-3 mt-3">एकूण</h5>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-floating mb-3">
                                                    <Input
                                                        type="number"
                                                        id="totalCount"
                                                        className="form-control"
                                                        placeholder="एकूण खोली संख्या"
                                                        readOnly
                                                        value={totalCount}
                                                    />
                                                    <Label htmlFor="totalCount">एकूण खोली संख्या</Label>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-floating mb-3">
                                                    <Input
                                                        type="number"
                                                        id="totalArea"
                                                        className="form-control"
                                                        placeholder="एकूण क्षेत्रफळ"
                                                        readOnly
                                                        value={totalArea}
                                                    />
                                                    <Label htmlFor="totalArea">एकूण क्षेत्रफळ (चौ. मी)</Label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    {/* <Col md={12}>
                                        <div className="text-end mt-4">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </Col> */}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="विशेष गरजा असणाऱ्या (Child with special need) विद्यार्थ्यांसाठी कमोड शौचालय" />
                                <CardBody>                                    
                                    <div className="live-preview">
                                     <h5 className="fs-14 mb-3 mt-3">कमोड शौचालय</h5>
                                        <Row>
                                            <Col lg={6} >
                                                <div className="mb-3">
                                                    <Label htmlFor="choices-single-default" className="form-label">संख्या <span style={{ color: 'red' }}>*</span></Label>
                                                        <Select
                                                            value={selectedSingle28}
                                                            onChange={(selectedOption) => {
                                                            setSelectedSingle28(selectedOption);
                                                            setwesternToiletCount:(selectedOption?.value || "");
                                                            }}
                                                            options={SingleOptionsT}
                                                            styles={{
                                                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                control: base => ({
                                                                ...base,
                                                                paddingTop: '9px',
                                                                paddingBottom: '9px',
                                                                }),
                                                            }}
                                                        />
                                                </div>
                                            </Col>
                                            <Col lg={6} >
                                                    <div className="mb-3">
                                                        <Label htmlFor="choices-single-default" className="form-label">निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span></Label>
                                                        <Select
                                                            value={selectedSingle3}
                                                            onChange={setSelectedSingle3}
                                                            options={SingleOptionsT1}
                                                            styles={{
                                                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                control: base => ({
                                                                ...base,
                                                                paddingTop: '9px',
                                                                paddingBottom: '9px',
                                                                }),
                                                            }}
                                                        />
                                                    </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <DefaultSelect />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="पुरेशा पाण्याच्या सुविधेसह स्वच्छ स्थितीत मुलांसाठी स्वतंत्र स्वच्छतागृहे" />
                                <CardBody>
                                    <div className="live-preview ">
                                    <h5 className="fs-14 mb-3 mt-3">मुलांसाठी स्वतंत्र स्वच्छतागृह</h5>

                                        <Row>
                                            <Col lg={4}>
                                                <div>
                                                    <Label htmlFor="basiInput" className="form-label">शौचालय <span style={{ color: 'red' }}>*</span></Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    संख्या
                                                    <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle4}
                                                        onChange={setSelectedSingle4}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3"> निकषां नुसार सुविधा उपलब्ध आहे का?  <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle5}
                                                        onChange={setSelectedSingle5}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        </div>

                                        <div className="mt-3">
                                        <Row>
                                            <Col lg={4} >
                                                <div>
                                                    <Label htmlFor="basiInput" className="form-label">मुतारी  <span style={{ color: 'red' }}>*</span></Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle6}
                                                        onChange={setSelectedSingle6}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle7}
                                                        onChange={setSelectedSingle7}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                       </Row>
                                       </div>
                                       <div className="mt-3">
                                       <Row>
                                            <Col lg={4} >
                                                    <div>
                                                        <Label htmlFor="basiInput" className="form-label">स्वच्छतागृहातील नळ संख्या  <span style={{ color: 'red' }}>*</span></Label>
                                                    </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle8}
                                                        onChange={setSelectedSingle8}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle9}
                                                        onChange={setSelectedSingle9}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                       </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="पुरेशा पाण्याच्या सुविधेसह स्वच्छ स्थितीत मुलांसाठी स्वतंत्र स्वच्छतागृहे" />
                                <CardBody>
                                    <div className="live-preview ">
                                    <h5 className="fs-14 mb-3 mt-3">मुलींसाठी स्वतंत्र स्वच्छातागृह</h5>
                                        <Row>
                                            <Col lg={4}>
                                                <div>
                                                    <Label htmlFor="basiInput" className="form-label">शौचालय <span style={{ color: 'red' }}>*</span></Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    संख्या
                                                    <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle27}
                                                        onChange={setSelectedSingle27}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का?  <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle10}
                                                        onChange={setSelectedSingle10}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        </div>
                                        
                                        <div className="mt-3">
                                        <Row>
                                        <Col lg={4} >
                                                    <div>
                                                        <Label htmlFor="basiInput" className="form-label">मुतारी  <span style={{ color: 'red' }}>*</span></Label>
                                                    </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle11}
                                                        onChange={setSelectedSingle11}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle12}
                                                        onChange={setSelectedSingle12}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                       </Row>
                                       </div>
                                       <div className="mt-3">
                                       <Row>
                                        <Col lg={4} >
                                                    <div>
                                                        <Label htmlFor="basiInput" className="form-label">स्वच्छतागृहातील नळ संख्या  <span style={{ color: 'red' }}>*</span></Label>
                                                    </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle13}
                                                        onChange={setSelectedSingle13}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle14}
                                                        onChange={setSelectedSingle14}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                       </Row>
                                      
                                    </div>
                              
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="पिण्याचे पाणी सुविधा" />
                                <CardBody>
                                    <div className="live-preview ">
                                    <h5 className="fs-14 mb-3 mt-3">पिण्याचे पाणी</h5>

                                        <Row>
                                            <Col lg={4}>
                                                <div>
                                                    <Label htmlFor="basiInput" className="form-label">पाण्याच्या टाकीची क्षमता (लीटर)  <span style={{ color: 'red' }}>*</span></Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    संख्या
                                                    <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle15}
                                                       onChange={(selectedOption) => {
                                                       setSelectedSingle15(selectedOption); // for UI display
                                                       setWaterTankCapacity(selectedOption?.value || "");}}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का?  <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle16}
                                                        onChange={(selectedOption) => {
                                                        setSelectedSingle16(selectedOption);}}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        </div>
                                        <div className="mt-3">
                                        <Row>
                                        <Col lg={4} >
                                            <div>
                                                <Label htmlFor="basiInput" className="form-label">नळ जोडणी संख्या   <span style={{ color: 'red' }}>*</span></Label>
                                            </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle17}
                                                        onChange={setSelectedSingle17}
                                                        options={SingleOptionsT}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle18}
                                                        onChange={setSelectedSingle18}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                       </Row>
                                       </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="खेळाच्या मैदानाचे क्षेत्रफळ" />
                                <CardBody>                                    
                                    <div className="live-preview">
                                    <Label htmlFor="choices-single-default" className="form-label"></Label>

                                      <h5 className="fs-14 mb-3">खेळाचे मैदान</h5>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-floating mb-3">
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        id="basiInput"
                                                        placeholder="एकूण क्षेत्रफळ (चौ. मी)"
                                                       value={areaOfPlayground}
                                                      onChange={(e) => {
                                                          const stringValue = String(e.target.value); 
                                                        setAreaOfPlayground(stringValue)}}
                                                    />
                                                    <Label htmlFor="basiInput">
                                                        एकूण क्षेत्रफळ (चौ. मी) <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                </div>
                                            </Col>
                                           


                                            <Col lg={6} style={{marginTop:'-2%'}} >
                                                    <div className="mb-3 two" >
                                                        <Label htmlFor="choices-single-default" className="form-label">निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span></Label>
                                                        <Select
                                                            value={selectedSingle19}
                                                             onChange={setSelectedSingle19}
                                                            options={SingleOptionsT2}
                                                            styles={{
                                                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                control: base => ({
                                                                ...base,
                                                                paddingTop: '9px',
                                                                paddingBottom: '9px',
                                                               
                                                                }),
                                                            }}
                                                        />
                                                    </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <DefaultSelect />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="संरक्षक भिंत (वाल कम्पाऊंड)" />
                                <CardBody>                                    
                                    <div className="live-preview">
                                     <h5 className="fs-14 mb-3">आवश्यक सुविधा</h5>
                                        <Row>
                                        <Col lg={6}>
                                            <div className="form-floating mb-3">
                                                <Input
                                                    type="number"
                                                    className="form-control"
                                                    id="basiInput"
                                                    placeholder="एकूण बांधकामाचे क्षेत्रफळ (चौ.मी)"
                                                    value={retainingWallCompound}
                                                    onChange={(e) => {
                                                   const stringValue = String(e.target.value); // Explicitly convert to string
                                                   setretainingWallCompound(stringValue);}}
                                                    
                                                
                                                />
                                                <Label htmlFor="basiInput">
                                                    एकूण बांधकामाचे क्षेत्रफळ (चौ.मी) <span style={{ color: 'red' }}>*</span>
                                                </Label>
                                            </div>
                                        </Col>

                                            <Col lg={6} style={{marginTop:'-2%'}}>
                                                    <div className="mb-3 ">
                                                        <Label htmlFor="choices-single-default" className="form-label">चारही बाजूंनी संरक्षक भिंत व लोखंडी गेट असलेले प्रवेशद्वार *
                                                        <span style={{ color: 'red' }}>*</span></Label>
                                                        <Select
                                                            value={selectedSingle20}
                                                             onChange={setSelectedSingle20}
                                                            options={SingleOptionsT3}
                                                            styles={{
                                                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                control: base => ({
                                                                ...base,
                                                                paddingTop: '9px',
                                                                paddingBottom: '9px',
                                                                }),
                                                            }}
                                                        />
                                                    </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <DefaultSelect />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="दुपारचे जेवण शिजवण्यासाठी स्वयंपाकघर (किचन शेड)." />
                                <CardBody>                                    
                                    <div className="live-preview">
                                        <h5 className="fs-14 mb-3">आवश्यक सुविधा</h5>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="form-floating mb-3">
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        id="basiInput"
                                                        placeholder="किचन शेड"
                                                        value={kitchenShed}
                                                        onChange={(e) => {
                                                      const stringValue = String(e.target.value); // Explicitly convert to string
                                                     setkitchenShed(stringValue);}}
                                                        

                                                    />
                                                    <Label htmlFor="basiInput">
                                                        किचन शेड <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                </div>
                                            </Col>

                                            <Col lg={6} style={{marginTop:'-2%'}}>
                                                <div className="mb-3">
                                                    <Label htmlFor="choices-single-default" className="form-label">
                                                        निकषां नुसार सुविधा उपलब्ध आहे का?  <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle21}
                                                         onChange={setSelectedSingle21}
                                                        options={SingleOptions21}
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <DefaultSelect />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="रॅम्प सुविधा" />
                                <CardBody>
                                    <div className="live-preview ">
                                    <h5 className="fs-14 mb-3">आवश्यक सुविधा</h5>

                                        <Row>
                                        <Col lg={4}>
                                        <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    विना अडथळा प्रवेश साठी उताराचा रस्ता
                                                    <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle22}
                                                        onChange={setSelectedSingle22}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    रॅम्प बाजूला कठडे( हॅन्ड रेलिंग ) आहे का ?
                                                    <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle23}
                                                        onChange={setSelectedSingle23}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label mb-3">
                                                    निकषां नुसार सुविधा उपलब्ध आहे का? <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                    <Select
                                                        value={selectedSingle24}
                                                        onChange={setSelectedSingle24}
                                                        options={SingleOptions}
                                                        placeholder="पर्याय निवडा"
                                                        styles={{
                                                            menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                            control: base => ({
                                                            ...base,
                                                            paddingTop: '9px',
                                                            paddingBottom: '9px',
                                                            }),
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        </div>
 
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="वर्गखोल्यांची सुविधा" />
                                <CardBody>                                    
                                    <div className="live-preview">
                                     <h5 className="fs-14 mb-3">अध्यापनासाठी वापरत असलेल्या वर्गखोल्यांची माहिती खोलीची कार्पेट एरिया प्रत्येकी (490 स्क्वेअर फूट कार्पेट एरिया व्हरंडासह)

                                     </h5>
                                        <Row>
                                            <Col lg={6}> 
                                                <div className="form-floating mb-3 mt-4">
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        id="basiInput"
                                                        placeholder="खोली संख्या"
                                                        value={room_number}
                                                        onChange={(e) => {
                                                      const stringValue = String(e.target.value);
                                                      setroom_number(stringValue);}}
                                                    />
                                                    <Label htmlFor="basiInput">
                                                        खोली संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                </div>
                                            </Col>

                                            <Col lg={6} >
                                                    <div className="mb-3">
                                                        <Label htmlFor="choices-single-default" className="form-label">छत पक्के / RCC स्लॅब आहे ?  <span style={{ color: 'red' }}>*</span></Label>
                                                        <Select
                                                            value={selectedSingle25}
                                                             onChange={setSelectedSingle25}
                                                            options={SingleOptions25}
                                                            styles={{
                                                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                control: base => ({
                                                                ...base,
                                                                paddingTop: '9px',
                                                                paddingBottom: '9px',
                                                                }),
                                                            }}
                                                        />
                                                    </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <DefaultSelect />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <PreviewCardHeader title="इतर सुविधा" />
                                <CardBody>                                    
                                    <div className="live-preview">
                                    <h5 className="fs-14 mb-3">आवश्यक सुविधा

                                    </h5>
                                        <Row>
                                        <Col lg={3}>
                                                <div className="form-floating mb-3">
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        id="basiInput"
                                                        placeholder="अग्निशमन वॉरंटीसह सिलिंडर संख्या"
                                                         value={fireWarrantyCylinderNo}
                                                         onChange={(e) => {
                                                         const stringValue = String(e.target.value); // Explicitly convert to string
                                                         setFireWarrantyCylinderNo(stringValue);
                                                         console.log("Fire Warranty Cylinder No:", stringValue);
                                                         }}
                                                    />
                                                    <Label htmlFor="basiInput">
                                                        अग्निशमन वॉरंटीसह सिलिंडर संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                </div>
                                            </Col>

                                            <Col lg={3}>
                                                <div className="form-floating mb-3">
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        id="basiInput"
                                                        placeholder="वैद्यकीय प्रथमोपचार पेटी संख्या"
                                                        value={medicalPrimaryBoxNumber}
                                                       onChange={(e) => {
                                                        const stringValue = String(e.target.value);
                                                        setMedicalPrimaryBoxNumber(stringValue)}}
                                                    />
                                                    <Label htmlFor="basiInput">
                                                        वैद्यकीय प्रथमोपचार पेटी संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                </div>
                                            </Col>

                                            <Col lg={3}>
                                                <div className="form-floating mb-3">
                                                    <Input
                                                        type="number"
                                                        className="form-control"
                                                        id="basiInput"
                                                        placeholder="सीसीटीव्ही संख्या"
                                                        value={cctvNo}
                                                       onChange={(e) => {
                                                         const stringValue = String(e.target.value);
                                                        setCctvNo(stringValue)}}
                                                    />
                                                    <Label htmlFor="basiInput">
                                                        सीसीटीव्ही संख्या <span style={{ color: 'red' }}>*</span>
                                                    </Label>
                                                </div>
                                            </Col>

                                            <Col lg={3} style={{marginTop:'-3%'}}>
                                                    <div>
                                                        <Label htmlFor="choices-single-default" className="form-label">शाळा मान्यता क्रं व UDISE अँड NOC चा तपशील असलेले दर्शनी भागात फलक लावले आहेत का? <span style={{ color: 'red' }}>*</span></Label>
                                                        <Select
                                                            value={selectedSingle26}
                                                            onChange={setSelectedSingle26} // ✅ Add this
                                                            options={SingleOptions26}
                                                            styles={{
                                                                menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                control: base => ({
                                                                ...base,
                                                                paddingTop: '9px',
                                                                paddingBottom: '9px',
                                                                }),
                                                            }}
                                                        />
                                                    </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ "height": "275px" }}>
                                            <code>
                                                <DefaultSelect />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                                <div class="col-12 text-end mb-3">
                                    <button class="btn btn-primary me-2" type="submit"><i class="ri-arrow-left-line me-1"></i>मागे जा  </button>
                                   <button className="btn btn-success" type="button" onClick={handleSubmit}> जतन करा आणि पुढे जा →</button>
                                </div>
                        </Col>
                    </Row>
                </div>
            </div>
           </div> 
        </React.Fragment>
    );
};

export default FormSelect1;
