import React, { useState, useEffect } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import '../styles/list.css';

function TabPanel({ children, value, index }) {
    return (
        <div hidden={value !== index} style={{ width: '100%' }}>
            {value === index && <Box py={2}>{children}</Box>}
        </div>
    );
}

const ProfProjectList = () => {
    const [value, setValue] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const experienceItems = {
        "OSB & SOA Fusion (weblogic)": {
            jobTitle: "Senior Systems Engineer - ",
            duration: "Jan 2024 - Present | Infosys Pvt Limited",
            desc: [
                "Developed critical Oracle Service Bus (OSB) services to enable real-time integration across multiple backend systems, improving data flow and system interoperability.",
                "Designed and implemented SOA artifacts for seamless order orchestration.",
                "Led the end-to-end upgrade project of Oracle Fusion Middleware from 11g to 12c, including planning, impact analysis, testing, and rollout.",
                "Identified and resolved compatibility issues during migration, ensuring a smooth upgrade with minimal business disruption.",
                "Enhanced system stability and scalability post-upgrade through tuning, refactoring, and documentation."
            ]
        },
        "Migration and Deployment": {
            jobTitle: "Senior Systems Engineer - ",
            duration: "Jan 2022 - Present | Infosys Pvt Limited",
            desc: [
                "Managed the migration of complex Environment (Application Support) and artifacts from on-premises to Oracle Cloud Infrastructure.",
                "Provided migration support across all environments including Development (Dev), System Integration Testing (SIT), User Acceptance Testing (UAT), and Production (PROD).",
                "Prepared connectivity matrices and Network Security Groups (NSGs), and conducted impact analysis for applications. Assisted in resolving API-related issues for integration of Oracle Fusion tools and Java Spring Boot microservices."
            ]
        },
        "Shell Script Development": {
            jobTitle: "Senior Systems Engineer - ",
            duration: "Nov 2023 - Dec 2023 | Infosys Pvt Limited",
            desc: [
                "Developed and implemented robust shell scripts to support upgrade and deployment projects across environments.",
                "Automated the selection and extraction of specific JAR files based on versioning and naming conventions.",
                "Implemented logic to programmatically modify configuration arguments within JAR files to match target environment requirements.",
                "Reduced manual errors and accelerated deployment timelines by streamlining repetitive and error-prone steps.",
                "Integrated scripts into CI/CD pipelines to support continuous deployment and improve delivery efficiency."
            ]
        },
        "Jenkins Automation": {
            jobTitle: "Systems Engineer - ",
            duration: "Jan 2023 - Dec 2023 | Infosys Pvt Limited",
            desc: [
                "Established and optimized CI/CD pipelines, reducing manual effort by 80% in deployment and testing processes.",
                "Developed and maintained sanity pipelines for daily validation of SIT, UAT, and PROD environments.",
                "Automated the creation of XML files using SOAP UI (API testing tool) and integrated them with GitLab through Jenkins, ensuring daily sanity checks and API testing reports.",
                "Managed and updated CI/CD pipelines on existing servers and configured them for new servers."
            ]
        },
        "IBM ODM": {
            jobTitle: "Systems Engineer - ",
            duration: "Jan 2022 - Aug 2022 | Infosys Pvt Limited",
            desc: [
                "Upgraded the IBM Operational Decision Manager (ODM) platform to the latest version, improving decision automation capabilities.",
                "Migrated POJO calls to RESTful APIs using Java, enhancing system efficiency and maintainability.",
                "Conducted system testing and debugging post-upgrade to ensure seamless integration and performance.",
                "Provided technical documentation and knowledge transfer for enhanced maintainability."
            ]
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                width: '100%',
                backgroundColor: 'black',
                color: 'white',
            }}
        >
            <Tabs
                orientation={isMobile ? 'horizontal' : 'vertical'}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                    width: isMobile ? '100%' : 250,
                    borderRight: isMobile ? 'none' : '`1px solid ${theme.palette.divider}`',
                    '& .MuiTab-root': {
                        color: '#9ca3af', // default (gray-400)
                        alignItems: 'flex-start',
                    },
                    '& .Mui-selected': {
                        color: '#a78bfa',
                        fontWeight: 'bold',
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#facc15' // underline/indicator color
                    }
                }}
            >
                {/* {Object.keys(experienceItems).map((key, i) => (
                    <Tab key={i} label={isMobile ? `0${i + 1}` : key} />
                ))}
            </Tabs> */}

                {Object.keys(experienceItems).map((key, i) => (
                    <Tab
                        key={i}
                        label={isMobile ? `0${i + 1}` : key}
                        sx={{
                            textTransform: 'none', // Optional: disables uppercase
                            fontSize: '0.9rem',
                        }}
                    />
                ))}
            </Tabs>

            <Box sx={{ flexGrow: 1, padding: 2 }}>
                {Object.keys(experienceItems).map((key, i) => (
                    <TabPanel key={i} value={value} index={i}>
                        <Typography variant="h6" align="left">
                            {experienceItems[key].jobTitle} <span className="text-white-400">{key}</span>
                        </Typography>
                        <Typography variant="subtitle2" color="gray" align="left">
                            {experienceItems[key].duration}
                        </Typography>
                        <ul className="job-description" align="left">
                            {experienceItems[key].desc.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </TabPanel>
                ))}
            </Box>
        </Box>
    );
};

export default ProfProjectList;
