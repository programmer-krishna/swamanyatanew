import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    //Calender
    const [isCalender, setCalender] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
    const [isJobs, setIsJobs] = useState(false);
    const [isJobList, setIsJobList] = useState(false);
    const [isCandidateList, setIsCandidateList] = useState(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [isLanding, setIsLanding] = useState(false);
    const [isBlog, setIsBlog] = useState(false);

    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const menuItems = [
       
        {
            id: "dashboard",
            label: "डॅशबोर्ड",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
          
        },
      
        {
            id: "apps",
            label: "स्वमान्यता साठी अर्ज",
            icon: "ri-apps-2-line",
            link: "/सामान्य-माहिती",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
          
        },
        // {
        //     id: "apps",
        //     label: "प्रथम मान्यतेसाठी अर्ज ",
        //     icon: "ri-apps-2-line",
        //     link: "/#",
        //     stateVariables: isDashboard,
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsDashboard(!isDashboard);
        //         setIscurrentState('Dashboard');
        //         updateIconSidebar(e);
        //     },
          
        // },
        // {
        //     id: "apps",
        //     label: "RTE २५% फी प्रतिपूर्ती  अर्ज",
        //     icon: "ri-apps-2-line",
        //     link: "/#",
        //     stateVariables: isDashboard,
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsDashboard(!isDashboard);
        //         setIscurrentState('Dashboard');
        //         updateIconSidebar(e);
        //     },
          
        // },
        // {
        //     id: "apps",
        //     label: "नवीन यु-डायस क्रं साठी अर्ज",
        //     icon: "ri-apps-2-line",
        //     link: "/#",
        //     stateVariables: isDashboard,
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsDashboard(!isDashboard);
        //         setIscurrentState('Dashboard');
        //         updateIconSidebar(e);
        //     },
          
        // },
      
        {
            id: "tables",
            label: "नमुना १ फॉर्म डाऊनोड करा",
            icon: "ri-apps-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },

        },
        {
            id: "tables",
            label: "ट्रॅकिंग",
            icon: "ri-apps-2-line",
            link: "/ट्रॅकिंग",
            click: function (e) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },

        },
      
        {
            id: "forms",
            label: "सेटिंग्ज",
            icon: "ri-account-circle-line",
            link: "/profile-setting",
            // click: function (e) {
            //     e.preventDefault();
            //     setIsForms(!isForms);
            //     setIscurrentState('Forms');
            //     updateIconSidebar(e);
            // },
            // stateVariables: isForms,
            // subItems: [
            //     { id: "basicelements", label: "प्रोफाइल अपडेट", link: "/forms-elements", parentId: "forms" },
            //     { id: "formselect", label: "पासवर्ड अपडेट करा", link: "/forms-select", parentId: "forms" },
            //     { id: "checkboxsradios", label: "सुरक्षा अद्ययावत करा", link: "/forms-checkboxes-radios", parentId: "forms" },
                
            // ],
        },
      
      
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
