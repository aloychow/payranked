import React, { useState, useEffect, useCallback } from "react";

import { useRouter } from "next/router";
import { api } from "../../../utils";

import {
    CareerContainer,
    CareerWrapper,
    CareerHeader,
    CareerTab,
    CareerTabList,
    CareerTabItem,
    
} from './CareerElements';

import { SearchWrapper, SearchRowTop } from "../SearchSection/SearchElements";

import { JobsDropdown } from "../SearchSection/SearchFields";

import { JobsNameToURL, JobsURLToName } from "../data";

function CareerSection() {
    
    const [submissions, setSubmissions] = useState([]);
    
    // Tab Logic -----------------------------------------------------
    const [activeTab, setActiveTab] = useState("Skills");

    const handleSkillsTab = () => {
        setActiveTab("Skills");
    };
  
    const handleEducationTab = () => {
        setActiveTab("Education");
    };
    
    const handleOverviewTab = () => {
        setActiveTab("Overview");
    };
      
    // Info Retrieval Logic -------------------------------------------
    
    // Get search selection from dropdown
    // const [job, setjob] = useState('Software Engineer')

    let jobDropdown = "";
    const createHandleChange = (name) => {
        return (value) => {
        try {
            switch (name) {
            case "job":
                jobDropdown = value;

                if (job !== "") {
                // For unique names
                let jobDropdownURL = JobsNameToURL[jobDropdown];

                // For normal names
                if (typeof jobDropdownURL === "undefined") {
                    jobDropdownURL = jobDropdown.toLowerCase();
                    jobDropdownURL = jobDropdownURL.replace(" ", "-");
                }

                router.push({
                    pathname: `${jobDropdownURL}`,
                    state: {
                    response: "",
                    },
                });
                }
                break;
            default:
                break;
            }
        } catch {
            // Issue when reading empty label (e.g. null entry)
            switch (name) {
            case "job":
                break;
            default:
                break;
            }
        }
        };
    };

    // Get url and job name
    const router = useRouter();
    const jobURL = router.query.slug || "";

    // For unique names
    let job = JobsURLToName[jobURL];

    // For normal names
    if (typeof job === "undefined") {
        job = jobURL.replace("-", " ");
        job = job.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
    }
    
    // Get submission data from mongodb -------------------------------------------
    const onFetchPost = useCallback(async () => {
        const response = await api.get("/insights/" + job);
        // const response = await api.get("/posts/" + job);
        setSubmissions(response.data[0]);
    }, [router.query])

    // Get Post
    useEffect(() => {
        onFetchPost()
    }, []);
    
    console.log('hi', submissions)
    
    return (
        <CareerContainer>
            <CareerWrapper>
                <SearchWrapper>
                    <SearchRowTop>
                        <JobsDropdown
                        value={job}
                        handleChange={createHandleChange("job")}
                        />
                    </SearchRowTop>
                </SearchWrapper>
                
                <CareerHeader>{job}</CareerHeader>
                
                <CareerTabList>
                    <CareerTabItem
                    className={activeTab === "Skills" ? "active first" : "first"}
                    onClick={handleSkillsTab}
                    >
                    Skills
                    </CareerTabItem>

                    <CareerTabItem
                    className={activeTab === "Education" ? "active second" : "second"}
                    onClick={handleEducationTab}
                    >
                    Education
                    </CareerTabItem>
                    
                    <CareerTabItem
                    className={activeTab === "Overview" ? "active second" : "second"}
                    onClick={handleOverviewTab}
                    >
                    Overview
                    </CareerTabItem>
                </CareerTabList>
          
            </CareerWrapper>
        </CareerContainer>
    )
}

export default CareerSection;