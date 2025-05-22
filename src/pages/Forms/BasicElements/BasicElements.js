import React, { useState } from "react";
import "./basic.css";
import { FaChevronRight } from 'react-icons/fa'; // Importing a chevron icon from react-icons


import VidhyarthiSankhya from '../FormLayouts/VidhyarthiSankhya';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Payment from "../FormLayouts/payment";
import GrantedSchool from "../FormLayouts/granted";
import FormSelect1 from "../FormSelect/bhautiksuwidha";
import FormSelect from "../FormSelect/suwidha";
import GeneralInfo from "../FormLayouts/GeneralInfo";
const BasicElements = () => {
  const [activeTab, setActiveTab] = useState("general");

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralInfo/>;
      case "students":
        return <VidhyarthiSankhya />;
      case "facilities":
        return <FormSelect1/>;
      case "otherFacilities":
        return <FormSelect/>;
      case "grantSchool":
        return <GrantedSchool/>;
      case "final":
        return <Payment/>;
      default:
        return null;
    }
  };

 
  document.title = " सामान्य माहिती  ";
  return (
    
  <div>
       
      <div>
       
      </div>

     
    </div>
  );
};

export default BasicElements;
