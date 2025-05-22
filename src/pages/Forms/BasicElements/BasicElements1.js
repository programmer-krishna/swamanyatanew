import React, { useState, useEffect } from "react";

import {
  Input,
  Button,
  Row,
  Col,
  Label,
  Card,
  CardBody,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import UiContent from "../../../Components/Common/UiContent";

const BasicElements1 = () => {
  document.title = "CheckIn ";

  const initialFormData = {
    firstName: "",
    lastName: "",
    totalRooms: "",
    totalMembers: "",
    bookingId: "",
    checkInDate: "",
    emailId: "",
    mobileNumber: "",
  };

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const validateField = (id, value) => {
    let error = "";

    switch (id) {
      case "firstName":
        if (!/^[A-Za-z]{3,20}$/.test(value)) {
          error = "First Name must be 3-20 alphabets.";
        }
        break;

      case "lastName":
        if (!/^[A-Za-z]{3,20}$/.test(value)) {
          error = "Last Name must be 3-20 alphabets.";
        }
        break;

      case "totalRooms":
        if (value < 1 || value > 100) {
          error = "Total Rooms must be between 1 and 100.";
        }
        break;

      case "totalMembers":
        if (value < 1 || value > 100) {
          error = "Total Members must be between 1 and 100.";
        }
        break;

      case "bookingId":
        if (!/^[A-Za-z0-9]{3,10}$/.test(value)) {
          error = "Booking ID must be 3-10 characters long.";
        }
        break;

      case "checkInDate":
        const today = new Date().toISOString().split("T")[0];
        if (!/^(\d{4}-\d{2}-\d{2})$/.test(value) || value < today) {
          error = "Check-In Date must be today or a future date.";
        }
        break;

      case "emailId":
        if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;

      case "mobileNumber":
        if (!/^\d{10}$/.test(value)) {
          error = "Mobile Number must be 10 digits long.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const error = validateField(id, value);

    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        isValid = false;
        newErrors[field] = error;
      }
    });

    setFormErrors(newErrors);
    return isValid;
  };

  // const resetForm = () => {
  //   setFormData(initialFormData);
  //   setFormErrors({});
  // };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/bookings/saveData",
        { ...formData, checkInStatus: "Pending" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/report", {
        state: { message: "Data has added successfully!" },
      });
     
      resetForm(); // Reset the form after submission
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Please fill in all the required fields.";
      toast.error(errorMessage);
    }
  };

  const handleSaveAndNew = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/bookings/saveData",
        { ...formData, checkInStatus: "Pending" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Data saved successfully!");
      resetForm(false);// Reset the form after saving
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Please fill all require Fields.";
      toast.error(errorMessage);
    }
  };

  // const handleCancel = () => {
  //   if (window.confirm("Are you sure you want to cancel?")) {
  //     navigate("/report");
  //   }
  // };

  const renderInputFields = () => {
    return Object.keys(initialFormData).map((field, index) => (
      <Col xxl={3} md={6} key={index}>
        <FormGroup>
          <Label htmlFor={field} className="form-label">
            {translateFieldLabel(field)} <span style={{ color: "red" }}>*</span>
          </Label>
          <Input
            type={
              field === "checkInDate"
                ? "date"
                : field === "emailId"
                ? "email"
                : field === "mobileNumber" ||
                  field === "totalRooms" ||
                  field === "totalMembers"
                ? "number"
                : "text"
            }
            id={field}
            value={formData[field]}
            onChange={handleInputChange}
            className={`form-control ${formErrors[field] ? "is-invalid" : ""}`}
          />
          {formErrors[field] && (
            <div className="text-danger">{formErrors[field]}</div>
          )}
        </FormGroup>
      </Col>
    ));
  };
 

  const handleCancel = () => {
    setModalOpen(true); // Open cancel confirmation modal
  };
  const handleReset = () => {
    // Call resetForm with true to show reset toast
    resetForm(true);
  };
  const resetForm = (showResetToast = false) => {
    setFormData(initialFormData);
    setFormErrors({});
  
    // Only show reset toast if 'showResetToast' is true
    if (showResetToast) {
      toast.success("Reset data successfully!");
    }
  };
  const confirmCancel = () => {
    navigate("/report");
    setModalOpen(false); // Close modal after cancel
  };

  const cancelModal = () => {
    setModalOpen(false); // Close modal without cancel
  };
  const translateFieldLabel = (field) => {
    const translations = {
      firstName: "Firstname",
      lastName: "Lastname",
      totalRooms: "Totalrooms",
      totalMembers: "Totalmembers",
      bookingId: "BookingId",
      checkInDate: "CheckInDate",
      emailId: "EmailId",
      mobileNumber: "Mobilenumber",
    
     
    };
    return translations[field] || field;
  };


  return (
    <React.Fragment>
      <UiContent />
      <style>
                {`
                    .page-title-right {
                        margin-left: 77%;
                    }
                        .mb-sm-0{
                        display: none;}
                     
                `}
            </style>
      <ToastContainer />
      <div className="page-content" style={{ backgroundColor: "#fbf7f4" }}>
        <Container fluid>
          <BreadCrumb title="Add CheckIn" pageTitle="Dashboard / Add CheckIn" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody style={{ padding: "24px 20px 24px 20px" }}>
                  <Row className="gy-4">
                    <Col
                      xxl={12}
                      md={12}
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        marginTop: `1%`,
                      }}
                    >
                      <div>
                        <h4 className="card-title mb-4" style={{ marginTop: `15%` }}>
                          Add Check-In
                        </h4>
                      </div>
                      <div>
                        <Button color="primary" onClick={() => navigate("/report")}>
                          Back To The Report
                        </Button>
                      </div>
                    </Col>
                  </Row>
<hr/>
                  <div className="live-preview">
                    <Row className="gy-4">{renderInputFields()}</Row>

                    <div className="col-lg-12" style={{ marginLeft: `-6px`, marginTop: `2%` }}>
                      <div className="d-flex justify-content-start button-container">
                        <Button color="success" onClick={handleSubmit} className="mx-2">
                          Submit
                        </Button>

                        <Button color="success" onClick={handleSaveAndNew} className="mx-2">
                          Submit And Add New
                        </Button>

                        <Button color="danger" onClick={handleCancel} className="mx-2">
                        Cancel
                      </Button>

                      <Button color="primary" onClick={resetForm} className="mx-2">
                        Reset
                      </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal isOpen={modalOpen} toggle={cancelModal}>
        <ModalHeader toggle={cancelModal}>Confirm Cancel</ModalHeader>
        <ModalBody>Are you sure you want to cancel?</ModalBody>
        <ModalFooter>
          <Button color="btn btn-success" onClick={confirmCancel}>Yes, Cancel</Button>
          <Button color="danger" onClick={cancelModal}>No, Stay</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default BasicElements1;
