import React, { useState } from 'react';
import { Card, CardBody, Col, CardHeader, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const TrackingForm1  = () => {
    SwiperCore.use([FreeMode, Navigation, Thumbs]);

    const [applicationId, setApplicationId] = useState('');
    const [showTimeline, setShowTimeline] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (applicationId.trim()) {
            setShowTimeline(true); // Hide form, show timeline
        }
    };

    document.title = "Application Tracking";

    return (
        <React.Fragment>
             <style>
{`

    .timeline::after{
    background:grey;
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
                                            <button type="submit" className="btn btn-primary">सबमिट</button>
                                        </div>
                                    </form>
                                {/* </div> */}
                                </CardBody>
                                </Card>
                            )}

                            {/* Show timeline only if form is submitted */}
                            {showTimeline && (
                                <div>
                                    <h5>ट्रॅकिंग</h5>
                                    <div className="timeline">
                                        <div className="timeline-item left"style={{ padding: '70px 30px 60px 0px' }}>
                                            <i className="icon ri-thumb-up-line"></i>
                                            <div className="date">15 Dec 2024</div>
                                            <div className="content">
                                                <h4 className="fs-13">स्टेटस :<span className="text-success fs-15 align-middle ms-1">Approved</span></h4>
                                                <p className="text-muted mb-1">#1882(application) has been Approved at 15 Dec, 2024 14:02 by Mayuri Thorat</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item right"style={{ padding: '70px 0px 60px 30px' }}>
                                            <i className="icon ri-vip-diamond-line"></i>
                                            <div className="date">22 Oct 2024</div>
                                            <div className="content">
                                                <h4 className="fs-13">स्टेटस :<span className="text-warning fs-15 align-middle ms-1">Pending</span></h4>
                                                <p className="text-muted mb-1">#1882(application) has been updated at 22 Oct, 2024 04:19 by Friends primary/Secondary School Koregaon Bhima, Tal.Shirur, Dist.Pune</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item left"style={{ padding: '70px 30px 60px 0px' }}>
                                            <i className="icon ri-gift-line"></i>
                                            <div className="date">10 Jul 2024</div>
                                            <div className="content">
                                                <h4 className="fs-13">स्टेटस :<span className="text-danger fs-15 align-middle ms-1">Rejected</span></h4>
                                                <p className="text-muted mb-1">#1882(application) has been rejected at 10 Jul, 2024 13:20 by Mayuri Thorat</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item right"style={{ padding: '70px 0px 60px 30px' }}>
                                            <i className="icon ri-shield-star-line"></i>
                                            <div className="date">18 May 2024</div>
                                            <div className="content">
                                                <h4 className="fs-13">स्टेटस :<span className="text-warning fs-15 align-middle ms-1">Pending</span></h4>
                                                <p className="text-muted mb-1">#1882(application) has been updated at 18 May, 2024 01:20 by Friends primary/Secondary School Koregaon Bhima, Tal.Shirur, Dist.Pune</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item left"style={{ padding: '70px 30px 60px 0px' }}>
                                            <i className="icon ri-user-smile-line"></i>
                                            <div className="date">10 Feb 2024</div>
                                            <div className="content">
                                                <h4 className="fs-13">स्टेटस :<span className="text-danger fs-15 align-middle ms-1">Rejected</span></h4>
                                                <p className="text-muted mb-1">#1882(application) has been rejected at 10 Feb, 2024 18:02 by Mayuri Thorat</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item right"style={{ padding: '70px 0px 60px 30px' }}>
                                            <i className="icon ri-fire-line"></i>
                                            <div className="date">01 Jan 2024</div>
                                            <div className="content">
                                                <h4 className="fs-13">स्टेटस :<span className="text-warning fs-15 align-middle ms-1">Pending</span></h4>
                                                <p className="text-muted mb-1">
                                                #1882(application) has been updated at 01 Jan, 2024 00:01 by Friends primary/Secondary School Koregaon Bhima, Tal.Shirur, Dist.Pune
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TrackingForm1 ;
