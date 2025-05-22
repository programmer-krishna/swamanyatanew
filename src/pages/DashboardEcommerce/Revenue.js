import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { RevenueCharts } from "./DashboardEcommerceCharts";
import CountUp from "react-countup";
import { useSelector, useDispatch } from "react-redux";
import { getRevenueChartsData } from "../../slices/thunks";
import { createSelector } from "reselect";

const Revenue = () => {
  const dispatch = useDispatch();

  const [chartData, setchartData] = useState([]);

  const selectDashboardData = createSelector(
    (state) => state.DashboardEcommerce,
    (revenueData) => revenueData.revenueData
  );
  // Inside your component
  const revenueData = useSelector(selectDashboardData);

  useEffect(() => {
    setchartData(revenueData);
  }, [revenueData]);

  const onChangeChartPeriod = pType => {
    dispatch(getRevenueChartsData(pType));
  };

  useEffect(() => {
    dispatch(getRevenueChartsData("all"));
  }, [dispatch]);
  return (
    <React.Fragment>
     
    </React.Fragment>
  );
};

export default Revenue;
