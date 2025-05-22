import React from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { recentNFTsData } from "../../common/data/dashboardNFT";
import { topCollectionData } from "../../common/data/dashboardNFT";
import { popularCreatorsData } from "../../common/data/dashboardNFT";

// Import Images
import usFlag from "../../assets/images/flags/us.svg";
import russiaFlag from "../../assets/images/flags/russia.svg";
import spainFlag from "../../assets/images/flags/spain.svg";
import italyFlag from "../../assets/images/flags/italy.svg";
import germanyFlag from "../../assets/images/flags/germany.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Vector Map
import { VectorMap } from '@south-paw/react-vector-maps'
import world from '../../common/world.svg.json';
import { Link } from 'react-router-dom';

const RecentNFTs = () => {
    return (
        <React.Fragment>
            
        </React.Fragment>
    );
};

export default RecentNFTs;