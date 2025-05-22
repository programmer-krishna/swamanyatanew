import React, { useState } from 'react';
import { Card, CardBody, Col, CardHeader, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import { useNavigate } from 'react-router-dom';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Tracking from "./TrackingForm1 ";
const TrackingForm = () => {
    SwiperCore.use([FreeMode, Navigation, Thumbs]);
  const navigate = useNavigate();
    const [applicationId, setApplicationId] = useState('');
    const [showTimeline, setShowTimeline] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (applicationId.trim()) {
            setShowTimeline(true); // Hide form, show timeline
        }
    };
    const handleRedirect = () => {
        navigate('/ट्रॅकिंग-अर्ज'); // Navigate to BasicElements route
    };
    document.title = "ट्रॅकिंग";

    return (
        <React.Fragment>
            <style>
{`

    .timeline::after{
    background:grey;
    }
     .timeline-approved .content-card {
        background-color: #e6ffed;
        border-right: 5px solid #2ecc71;
    }

    .timeline-pending .content-card {
        background-color: #fffbe6;
        border-left: 5px solid #f1c40f;
    }

    .timeline-rejected .content-card {
        background-color: #ffe6e6;
        border-right: 5px solid #e74c3c;
    }
         .content-card {
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
`}
</style>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="अर्ज ट्रॅकिंग" pageTitle="डॅशबोर्ड" />

                    <Row>
                        <Col lg={12}>
                            {/* Show form only if timeline is not shown */}
                            {!showTimeline && (
                                <Card>
                                    <CardHeader>
                                        <h5 className="card-title mb-0">ट्रॅकिंग</h5>
                                    </CardHeader>

                                    <CardBody className="card-body">
                                        {/* <div className="card shadow p-4 mb-4">
                                    <div class="align-items-center d-flex card-header"><h4 class="card-title mb-0 flex-grow-1">ट्रॅकिंग</h4></div> */}
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3 mt-2">
                                                <label htmlFor="applicationId" className="form-label">
                                                    अर्ज क्रमांक प्रविष्ट करा <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="applicationId"
                                                    className="form-control"
                                                    placeholder="अर्ज क्रमांक प्रविष्ट करा"
                                                    value={applicationId}
                                                    onChange={(e) => setApplicationId(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="btn btn-primary" onClick={handleRedirect}>सबमिट</button>
                                            </div>
                                        </form>
                                        {/* </div> */}
                                    </CardBody>
                                </Card>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>

                            {/* Show timeline only if form is submitted */}
                            {showTimeline && (
                                <Card>
                                    <CardHeader>
                                        <h5 className="card-title mb-0">ट्रॅकिंग</h5>
                                    </CardHeader>

                                    <CardBody className="card-body">
                                        
                                            <div className="timeline">
                                                <div className="timeline-item left timeline-approved " style={{ padding: '70px 30px 60px 0px' }}>
                                                    <i className="icon ri-thumb-up-line"></i>
                                                    <div className="date">15 Dec 2024</div>
                                                    <div className="content-card">
                                                        <h4 className="fs-13">स्टेटस :<span className="text-success fs-15 align-middle ms-1">Approved</span></h4>
                                                        <p className="text-muted mb-1">#1882(application) has been Approved at 15 Dec, 2024 14:02 by Mayuri Thorat</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item right timeline-pending" style={{ padding: '70px 0px 60px 30px' }}>
                                                    <i className="icon ri-vip-diamond-line"></i>
                                                    <div className="date">22 Oct 2024</div>
                                                    <div className="content-card">
                                                        <h4 className="fs-13">स्टेटस :<span className="text-warning fs-15 align-middle ms-1">Pending</span></h4>
                                                        <p className="text-muted mb-1">#1882(application) has been updated at 22 Oct, 2024 04:19 by Friends primary/Secondary School Koregaon Bhima, Tal.Shirur, Dist.Pune</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item left timeline-rejected" style={{ padding: '70px 30px 60px 0px' }}>
                                                    <i className="icon ri-gift-line"></i>
                                                    <div className="date">10 Jul 2024</div>
                                                    <div className="content-card">
                                                        <h4 className="fs-13">स्टेटस :<span className="text-danger fs-15 align-middle ms-1">Rejected</span></h4>
                                                        <p className="text-muted mb-1">#1882(application) has been rejected at 10 Jul, 2024 13:20 by Mayuri Thorat</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item right timeline-pending" style={{ padding: '70px 0px 60px 30px' }}>
                                                    <i className="icon ri-shield-star-line"></i>
                                                    <div className="date">18 May 2024</div>
                                                    <div className="content-card">
                                                        <h4 className="fs-13">स्टेटस :<span className="text-warning fs-15 align-middle ms-1">Pending</span></h4>
                                                        <p className="text-muted mb-1">#1882(application) has been updated at 18 May, 2024 01:20 by Friends primary/Secondary School Koregaon Bhima, Tal.Shirur, Dist.Pune</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item left timeline-rejected" style={{ padding: '70px 30px 60px 0px' }}>
                                                    <i className="icon ri-user-smile-line"></i>
                                                    <div className="date">10 Feb 2024</div>
                                                    <div className="content-card">
                                                        <h4 className="fs-13">स्टेटस :<span className="text-danger fs-15 align-middle ms-1">Rejected</span></h4>
                                                        <p className="text-muted mb-1">#1882(application) has been rejected at 10 Feb, 2024 18:02 by Mayuri Thorat</p>
                                                    </div>
                                                </div>
                                                <div className="timeline-item right timeline-pending" style={{ padding: '70px 0px 60px 30px' }}>
                                                    <i className="icon ri-fire-line"></i>
                                                    <div className="date">01 Jan 2024</div>
                                                    <div className="content-card">
                                                        <h4 className="fs-13">स्टेटस :<span className="text-warning fs-15 align-middle ms-1">Pending</span></h4>
                                                        <p className="text-muted mb-1">
                                                            #1882(application) has been updated at 01 Jan, 2024 00:01 by Friends primary/Secondary School Koregaon Bhima, Tal.Shirur, Dist.Pune
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </CardBody>
                                </Card>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TrackingForm;
