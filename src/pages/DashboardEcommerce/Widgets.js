"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';

import React, { useState, useEffect } from "react";

import { Card, CardBody, CardHeader, Col, Container, Row, Button } from "reactstrap";

import { useLocation, useNavigate } from "react-router-dom";

//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


import BreadCrumb from "../../Components/Common/BreadCrumb";

// Enhanced Error Message Component
const ErrorMessage = ({ message, onRetry, details }) => (
  <div style={{ 
    padding: "12px", 
    backgroundColor: "#fee2e2", 
    color: "#b91c1c", 
    borderRadius: "8px",
    marginBottom: "16px",
  }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <i className="fas fa-exclamation-circle"></i>
        <span>{message}</span>
      </div>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          <i className="fas fa-sync-alt mr-1"></i> Retry
        </button>
      )}
    </div>
    {details && (
      <div style={{ 
        marginTop: "8px", 
        padding: "8px",
        backgroundColor: "#fecaca",
        borderRadius: "4px",
        fontSize: "0.9em"
      }}>
        <details>
          <summary>Technical details</summary>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: '4px' }}>{details}</pre>
        </details>
      </div>
    )}
  </div>
);

const Widgets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [statusCounts, setStatusCounts] = useState([]);
  const [schoolTypeCounts, setSchoolTypeCounts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState({
    status: true,
    schoolTypes: true
  });
  const [error, setError] = useState({
    status: null,
    schoolTypes: null
  });
    const handleRedirect = () => {
        navigate('/सामान्य-माहिती'); // Navigate to BasicElements route
    };

  document.title = "Application Details | ई मान्यता प्रणाली";

  // Helper function to format API status keys into readable titles
  const formatStatusTitle = (status) => {
    const statusMap = {
      'totalCount': 'Total Count', 
      'pending': 'Application Pending',
      'approved': 'Application Approved',
      'reject': 'Application Rejected',
      'assign-inspection': 'Inspection Assigned',
      'verified-by-inspection-officer': 'Inspection Completed',
      'final_submit': 'Application Finalized',
      'granted': 'Granted Schools',
      'non-granted': 'Non-Granted Schools',
      'permanently_unaided': 'Permanently Unaided',
      'self-finance': 'Self Finance',
      'partially_granted': 'Partially Granted'
    };
    return statusMap[status] || status.charAt(0).toUpperCase() + status.slice(1).replace(/([A-Z])/g, ' $1');
  };

  // Function to fetch status counts - UPDATED to handle the array format
  const fetchStatusCounts = async () => {
    try {
      setLoading(prev => ({ ...prev, status: true }));
      setError(prev => ({ ...prev, status: null }));
      
      const response = await fetch('http://localhost:8080/api/school-apply/status-counts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();

      // Handle empty response case
      if (!data || (Array.isArray(data) && data.length === 0)) {
        throw new Error('Server returned empty data');
      }

      // Format the data - UPDATED FOR ARRAY FORMAT
      let formattedData = [];
      
      if (Array.isArray(data)) {
        // Process array format: [{status: "pending", count: 5}, ...]
        formattedData = data.map(item => ({
          title: formatStatusTitle(item.status),
          value: item.count
        }));
      } else if (typeof data === 'object') {
        // Process object format (fallback): {pending: 5, approved: 10, ...}
        formattedData = Object.entries(data).map(([key, value]) => ({
          title: formatStatusTitle(key),
          value: value
        }));
      } else {
        throw new Error('Unexpected data format received');
      }

      setStatusCounts(formattedData);
    } catch (error) {
      console.error('Error fetching status counts:', error);
      setError(prev => ({ ...prev, status: error.message || 'Failed to load application status data' }));
      
      // Set default values when API fails
      setStatusCounts([
        { title: "Application Pending", value: 0 },
        { title: "Application Approved", value: 0 },
        { title: "Application Rejected", value: 0 },
        { title: "Inspection Assigned", value: 0 },
        { title: "Inspection Completed", value: 0 },
        { title: "Application Finalized", value: 0 }
      ]);
    } finally {
      setLoading(prev => ({ ...prev, status: false }));
    }
  };

  // Function to fetch school type counts
  const fetchSchoolTypeCounts = async () => {
    try {
      setLoading(prev => ({ ...prev, schoolTypes: true }));
      setError(prev => ({ ...prev, schoolTypes: null }));
      
      const response = await fetch('http://localhost:8080/api/schools/count-by-type', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data || !data.counts) {
        throw new Error('Invalid data format received from server');
      }

      // Format the school type data
      const formattedSchoolTypes = data.counts.map(item => ({
        title: formatStatusTitle(item.schoolType),
        value: item.count
      }));

      setSchoolTypeCounts(formattedSchoolTypes);
      setTotalCount(data.totalCount || 0);
    } catch (error) {
      console.error('Error fetching school type counts:', error);
      setError(prev => ({ ...prev, schoolTypes: error.message || 'Failed to load school type data' }));
      
      // Set default values when API fails
      setSchoolTypeCounts([
        { title: "Granted Schools", value: 0 },
        { title: "Non-Granted Schools", value: 0 },
        { title: "Permanently Unaided", value: 0 },
        { title: "Self Finance", value: 0 },
        { title: "Partially Granted", value: 0 }
      ]);
      setTotalCount(0);
    } finally {
      setLoading(prev => ({ ...prev, schoolTypes: false }));
    }
  };

  useEffect(() => {
    fetchStatusCounts();
    fetchSchoolTypeCounts();
  }, []);

  const retryFetch = (type) => {
    if (type === 'status') {
      fetchStatusCounts();
    } else {
      fetchSchoolTypeCounts();
    }
  };

  // Helper function to find status count by status name
  const getStatusCountByName = (statusName) => {
    const status = statusCounts.find(s => s.title === statusName);
    return status ? status.value : 0;
  };

  // Combined stats with school type data
  const stats = [
    { title: "Total Count", value: loading.schoolTypes ? "..." : totalCount },
    ...(loading.schoolTypes ? [
      { title: "Granted Schools", value: "..." },
      { title: "Non-Granted Schools", value: "..." },
      { title: "Permanently Unaided", value: "..." },
      { title: "Self Finance", value: "..." },
      { title: "Partially Granted", value: "..." }
    ] : schoolTypeCounts),
    ...(loading.status ? [
      { title: "Application Pending", value: "..." },
      { title: "Application Approved", value: "..." },
      { title: "Application Rejected", value: "..." },
      { title: "Inspection Assigned", value: "..." },
      { title: "Inspection Completed", value: "..." },
      { title: "Application Finalized", value: "..." }
    ] : statusCounts)
  ];

  // Chart data - now using the helper function to get counts
  const chartData = [
    { 
      month: 'Jan', 
      Pending: getStatusCountByName("Application Pending"),
      Reject: getStatusCountByName("Application Rejected"),
      Accept: getStatusCountByName("Application Approved"),
      AssignInspection: getStatusCountByName("Inspection Assigned"),
      Verified: getStatusCountByName("Inspection Completed"),
      FinalSubmit: getStatusCountByName("Application Finalized")
    },
    // Add more months as needed...
  ];

  const pieData = stats
    .filter(item => item.value !== "..." && item.title !== "Total Count") // Filter out loading placeholders and total
    .map((item) => ({
      name: item.title,
      value: typeof item.value === 'string' ? 0 : item.value
    }))
    .filter(item => item.value > 0); // Only include items with values > 0

  const COLORS = [
    "#6366f1", "#ef4444", "#facc15", "#fb923c", "#22c55e",
    "#a855f7", "#0ea5e9", "#14b8a6", "#8b5cf6", "#ec4899",
    "#10b981", "#f97316"
  ];

  return (
    <React.Fragment>
      <div className="page-content pt-0 pb-5 px-0">
        <Container fluid>
         
          <Row>
                                <Col>
                                     <div className="row">
      <div className="col-12">
        <div className="dashboard-heading row align-items-center mb-4">
          <div className="col-12">
            <h1 
              className="fs-3 text-center fw-bold mb-0" 
              style={{ 
                padding: '20px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              नमस्कार Arinoz School | UDISE क्रमांक: 27250100801
            </h1>
          </div>
        </div>
      </div>
      
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-xl-12 col-lg-12 p-3">
            <div 
              className="card shadow-lg border-0" 
              style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                borderRadius: '15px'
              }}
            >
              <div className="card-body text-center py-5">
                <div className="mb-4">
                  <div 
                    className="mx-auto mb-3"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      boxShadow: 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
                      
                    }}
                  >
                    📋
                  </div>
                  <h3 className="text-dark mb-3">अर्जावर जाण्यासाठी</h3>
                  <p className="text-muted mb-4">कृपया खालील बटणावर क्लिक करा</p>
                </div>
                
                <button
                  type="button"
                  className="btn btn-lg px-5 py-3 me-5 fw-bold"
                  style={{
                    background: '#405189',
                    border: 'none',
                    borderRadius: '25px',
                    color: 'white',
                    fontSize: '1.1rem',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                  }}
                  onClick={handleRedirect}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  २०१६ - २०२५ स्वमान्यता असल्यास येथे क्लिक करा
                </button>

                <button
                  type="button"
                  className="btn btn-lg px-5 py-3 fw-bold"
                  style={{
                    background: '#405189',
                    border: 'none',
                    borderRadius: '25px',
                    color: 'white',
                    fontSize: '1.1rem',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                  }}
                  onClick={handleRedirect}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  २०२५ - २०२८ स्वमान्यता अर्जासाठी येथे क्लिक करा
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                              
                                </Col>
                            </Row>
          {/* Display errors for both APIs */}
          {error.status && (
            <ErrorMessage 
              message="Failed to load application status data"
              onRetry={() => retryFetch('status')}
              details={error.status}
            />
          )}
          {error.schoolTypes && (
            <ErrorMessage 
              message="Failed to load school type data"
              onRetry={() => retryFetch('schoolTypes')}
              details={error.schoolTypes}
            />
          )}

          <style>
            {`
              .stat-card {
                background: #ffffff;
                border-radius: 18px;
                box-shadow: 8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff;
                padding: 20px 25px;
                display: flex;
                align-items: center;
                gap: 40px;
                height: 140px;
                transition: 0.3s ease;
              }

              .stat-card:hover {
                transform: translateY(-6px);
                box-shadow: 10px 10px 30px #d1d9e6, -10px -10px 30px #ffffff;
              }

              .icon-circle {
                background: linear-gradient(145deg, #e2e8ec, #ffffff);
                border-radius: 50%;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff;
                transition: transform 0.4s;
              }

              .stat-card:hover .icon-circle {
                transform: rotate(10deg) scale(1.05);
              }

              .icon-circle i {
                font-size: 28px;
                color: #ff8c42;
              }

              .loading-shimmer {
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                background-size: 200% 100%;
                animation: shimmer 1.5s infinite;
                border-radius: 4px;
                width: 60%;
                height: 30px;
              }

              @keyframes shimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
              }

              .retry-button {
                background-color: #3b82f6;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 6px;
                cursor: pointer;
                transition: background-color 0.3s;
                margin-left: 10px;
              }

              .retry-button:hover {
                background-color: #2563eb;
              }

              .stat-info {
                display: flex;
                flex-direction: column;
              }

              .stat-title {
                font-size: 18px;
                font-weight: 600;
                color: #333;
              }

              .stat-value {
                font-size: 24px;
                font-weight: bold;
                color: #111;
              }
            `}
          </style>

          {/* Cards Section */}
          <Row className="gy-4">
            {stats.map((stat, index) => {
              // Determine if this is a school type card or status card
              const isSchoolTypeCard = index > 0 && index < 6; // After Total Count and before status cards
              const isLoading = isSchoolTypeCard ? loading.schoolTypes : loading.status;
              
              return (
                <Col xl={4} md={6} key={index}>
                  <div className="stat-card">
                    <div className="icon-circle">
                      <i className={isSchoolTypeCard ? "fas fa-school" : "fas fa-tasks"}></i>
                    </div>
                    <div className="stat-info">
                      <div className="stat-title">{stat.title}</div>
                      {isLoading ? (
                        <div className="loading-shimmer"></div>
                      ) : (
                        <div className="stat-value">{stat.value}</div>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          
          
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Widgets;