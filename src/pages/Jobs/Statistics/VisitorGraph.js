import React from "react";
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../../Components/Common/ChartsDynamicColor";

const VisitorGraph = ({ dataColors }) => {
  var chartTreemapDiffColor = getChartColorsArray(dataColors);

  const series = [
    {
      data: [
        {
          x: "USA",
          y: 321,
        },
        {
          x: "Russia",
          y: 165,
        },
        {
          x: "India",
          y: 184,
        },
        {
          x: "China",
          y: 98,
        },
        {
          x: "Canada",
          y: 84,
        },
        {
          x: "Brazil",
          y: 31,
        },
        {
          x: "UK",
          y: 70,
        },
        {
          x: "Australia",
          y: 30,
        },
        {
          x: "Germany",
          y: 44,
        },
        {
          x: "Italy",
          y: 68,
        },
        {
          x: "Israel",
          y: 28,
        },
        {
          x: "Indonesia",
          y: 19,
        },
        {
          x: "Bangladesh",
          y: 29,
        },
      ],
    },
  ];
  var options = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Visitors Location",
      align: "center",
      style: {
        fontWeight: 500,
      },
    },
    colors: chartTreemapDiffColor,
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  };
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
};

export default VisitorGraph;
