import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

import Popup from "reactjs-popup";
import ReactPaginate from "react-paginate";
import "reactjs-popup/dist/index.css";

import { useRouter } from "next/router";
import { api } from "../../../utils";

import {
  JobsContainer,
  JobsWrapper,
  JobsWrapper2,
  JobsHeader,
  JobsIconLink,
  Divider,
  InfoWrapper,
  RoadmapLink,
  JobsTab,
  JobsTabList,
  JobsTabItem,
  JobsContent,
  JobsContentLeft,
  JobsContent2,
  JobsSubText,
  JobsSubText2,
  JobsSubText3,
  JobsSubText4,
  JobsComponentHeaderWrapper,
  JobsComponentHeader,
  JobsComponentHeader2,
  JobsSubHeader,
  JobsComponentSubText,
  JobsComponentSubText2,
  JobsRatingSalaryWrapper,
  JobsSalaryWrapper,
  JobsSalaryHeader,
  JobsSalaryHeader2,
  JobsSalaryContentWrapper,
  JobsSalaryContentGroup,
  JobsRatingHeader2,
  JobsRatingWrapper,
  JobsRatingWrapper2,
  JobsRatingSubWrapper,
  JobsRatingSubWrapperColumn,
  JobsSalaryDistributionWrapper,
  JobsSalaryDistributionWrapper2,
  JobsDataTableWrapper,
  JobsReviewWrapper,
  JobsReviewHeader,
  JobsReviewHeader2,
  JobsReviewHeaderGrid,
  JobsReviewHeaderWrapper,
  JobsReviewHeaderWrapper2,
  JobsReviewSubWrapper,
  JobsReviewRowWrapper,
  JobsReviewSubText,
  JobsReviewIcon,
  JobsReviewContentWrapper,
  JobsReviewSubmissionText,
  LinkStyled,
  ReviewButton,
  JobsReviewTopWrapper,
  JobsReviewTopLeftWrapper,
  JobsReviewPersonIcon,
  JobsReviewRoleRatingWrapper,
  PaginateWrapper,
} from "./JobsElements";

import {
  JobsRating,
  JobsRating2,
  JobsProgressBar,
  JobsSalaryBarChart,
  JobsDataTable,
} from "./JobsComponents.js";

import { SearchWrapper, SearchRowTop } from "../SearchSection/SearchElements";

import { JobsDropdown } from "../SearchSection/SearchFields";

const TickIcon = "/images/Miscellaneous/tick.png";
const CrossIcon = "/images/Miscellaneous/cross.png";
const DashIcon = "/images/Miscellaneous/dash.png";
const PersonIcon = "/images/Miscellaneous/person.png";

import { JobsNameToURL, JobsURLToName } from "../data";

function JobsSection() {
  const [submissions, setSubmissions] = useState([]);

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

  // Get submission data from sql
  useEffect(() => {
    if (!job) return;
    (async () => {
      const result = await api.get("/submissions/job", {
        params: {
          job: job,
        },
      });

      setSubmissions(result.data.submissions);
    })();
  }, [job]);

  // Define Tab Switching Logic Here --------------------------------------------

  const [activeTab, setActiveTab] = useState("Overview");

  const handleInfoTab = () => {
    setActiveTab("Overview");
  };

  const handleReviewsTab = () => {
    setActiveTab("Reviews");
  };

  // Ratings --------------------------------------------
  const [wlbRating, setWlbRating] = useState(0);
  const [careerRating, setCareerRating] = useState(0);
  const [cultureRating, setCultureRating] = useState(0);
  const [personalRating, setPersonalRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);

  let wlbTemp = 0;
  let careerTemp = 0;
  let cultureTemp = 0;
  let personalTemp = 0;

  // Salary --------------------------------------------
  const [medSalary, setMedSalary] = useState(0);

  // Used for graph visualisation (pure form)
  const [avgSalary, setAvgSalary] = useState(0);
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [stdSalary, setStdSalary] = useState(0);

  // Used for salary section (with , (comma) for thousandth place)
  const [avgSalary2, setAvgSalary2] = useState(0);
  const [minSalary2, setMinSalary2] = useState(0);
  const [maxSalary2, setMaxSalary2] = useState(0);
  const [stdSalary2, setStdSalary2] = useState(0);

  let salaryArr = [];
  let avgSalaryTemp = 0;
  let minSalaryTemp = 0;
  let maxSalaryTemp = 0;
  let salaryTemp = 0;
  let totalCompensationBreakdownTemp = 0;
  let baseSalaryTemp = 0;
  let variableSalaryTemp = 0;
  let stockSalaryTemp = 0;
  let bonusSalaryTemp = 0;

  // Graph --------------------------------------------
  const [salaryRange, setSalaryRange] = useState(0); // Max - min salary
  const [salaryRangeTenth, setSalaryRangeTenth] = useState(0); // Size of 1 bin

  // Count of salaries in each bin, stored as an array, eg [1,0,3,5...0]
  const [salaryCount, setSalaryCount] = useState([]);

  let salaryCountTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // Table --------------------------------------------
  const [dataTableData, setDataTableData] = useState([]);

  let companyTemp = "";
  let jobTitleTemp = "";
  let jobLevelTemp = "";
  let totalSalaryTemp = 0;
  let countSalaryTemp = 0;
  const [countSalary, setCountSalary] = useState(0);

  let experienceCurrentTemp = 0;
  let experienceTotalTemp = 0;
  let experienceFullTemp = 0;

  let wlbTemp2 = 0;
  let careerTemp2 = 0;
  let cultureTemp2 = 0;
  let personalTemp2 = 0;
  let overallTemp2 = 0;
  let countRatingsTemp = 0;
  const [countRatings, setCountRatings] = useState(0);

  let jobTypeTemp = "";

  let dataTableDataTemp = [];

  // Bar Chart Data

  const dataBarChart = [
    {
      // name: '$15K',
      range:
        "$" +
        minSalary.toString().slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[0],
    },
    {
      name:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 1.5))
          .toString()
          .slice(0, -3) +
        "K",
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 2))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[1],
    },
    {
      // name: '$75K',
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 2))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 3))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[2],
    },
    {
      name:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 3.5))
          .toString()
          .slice(0, -3) +
        "K",
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 3))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 4))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[3],
    },
    {
      // name: '$135K',
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 4))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 5))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[4],
    },
    {
      name:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 5.5))
          .toString()
          .slice(0, -3) +
        "K",
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 5))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 6))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[5],
    },
    {
      // name: '$195K',
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 6))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 7))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[6],
    },
    {
      name:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 7.5))
          .toString()
          .slice(0, -3) +
        "K",
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 7))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 8))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[7],
    },
    {
      // name: '$255K',
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 8))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 9))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[8],
    },
    {
      name:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 9.5))
          .toString()
          .slice(0, -3) +
        "K",
      range:
        "$" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 9))
          .toString()
          .slice(0, -3) +
        "K - $" +
        (parseInt(minSalary) + parseInt(salaryRangeTenth * 10))
          .toString()
          .slice(0, -3) +
        "K",
      count: salaryCount[9],
    },
  ];

  // Reviews Page Logic and States --------------------------------------------
  const [reviews, setReviews] = useState([]);
  let reviewsTemp = [];

  const avgOverallRating = 3.9;
  const avgWlbRating = 3.9;
  const avgCareerRating = 3.5;
  const avgCultureRating = 4.2;
  const avgPersonalRating = 3.8;

  const [compareOverallRating, setCompareOverallRating] = useState([
    "About Average",
    "#415E72",
    DashIcon,
  ]);
  const [compareWlbRating, setCompareWlbRating] = useState([
    "About Average",
    "#415E72",
    DashIcon,
  ]);
  const [compareCareerRating, setCompareCareerRating] = useState([
    "About Average",
    "#415E72",
    DashIcon,
  ]);
  const [compareCultureRating, setCompareCultureRating] = useState([
    "About Average",
    "#415E72",
    DashIcon,
  ]);
  const [comparePersonalRating, setComparePersonalRating] = useState([
    "About Average",
    "#415E72",
    DashIcon,
  ]);

  // Set color depending on compare status
  useEffect(() => {
    var overallDiff = overallRating - avgOverallRating;
    var wlbDiff = wlbRating - avgWlbRating;
    var careerDiff = careerRating - avgCareerRating;
    var cultureDiff = cultureRating - avgCultureRating;
    var personalDiff = personalRating - avgPersonalRating;

    if (overallDiff < 0) {
      setCompareOverallRating(["Below Average", "#E04F60", CrossIcon]);
    } else if (overallDiff > 0) {
      setCompareOverallRating(["Above Average", "#32BEA6", TickIcon]);
    } else {
      setCompareOverallRating(["About Average", "#415E72", DashIcon]);
    }

    if (wlbDiff < 0) {
      setCompareWlbRating(["Below Average", "#E04F60", CrossIcon]);
    } else if (wlbDiff > 0) {
      setCompareWlbRating(["Above Average", "#32BEA6", TickIcon]);
    } else {
      setCompareWlbRating(["About Average", "#415E72", DashIcon]);
    }

    if (careerDiff < 0) {
      setCompareCareerRating(["Below Average", "#E04F60", CrossIcon]);
    } else if (careerDiff > 0) {
      setCompareCareerRating(["Above Average", "#32BEA6", TickIcon]);
    } else {
      setCompareCareerRating(["About Average", "#415E72", DashIcon]);
    }

    if (cultureDiff < 0) {
      setCompareCultureRating(["Below Average", "#E04F60", CrossIcon]);
    } else if (cultureDiff > 0) {
      setCompareCultureRating(["Above Average", "#32BEA6", TickIcon]);
    } else {
      setCompareCultureRating(["About Average", "#415E72", DashIcon]);
    }

    if (personalDiff < 0) {
      setComparePersonalRating(["Below Average", "#E04F60", CrossIcon]);
    } else if (personalDiff > 0) {
      setComparePersonalRating(["Above Average", "#32BEA6", TickIcon]);
    } else {
      setComparePersonalRating(["About Average", "#415E72", DashIcon]);
    }
  }, [overallRating]);

  // Reviews Pagination ----------------------------------------------------------------------------
  const reviewsPerPage = 5;
  const [pageNumber, setPageNumber] = useState(0);

  const [currentReviews, setCurrentReviews] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(reviews.length / reviewsPerPage));

    // Pass slice of review to map (for current page)
    // Get current reviews
    const indexOfFirstReview = pageNumber * reviewsPerPage;
    const indexOfLastReview = indexOfFirstReview + reviewsPerPage;

    setCurrentReviews(
      reviews
        .slice(indexOfFirstReview, indexOfLastReview)
        .map((review, index) => {
          var reviewGood = review[7].split("<br />");
          var reviewBad = review[8].split("<br />");

          if (review[9] == "yes") {
            var recommend = ["Recommend", "#218721"];
          } else if (review[9] == "no") {
            var recommend = ["Don't Recommend", "#E04F60"];
          } else {
            var recommend = ["Neutral", "#415E72"];
          }

          return (
            <>
              <JobsReviewContentWrapper>
                <JobsReviewTopWrapper>
                  <JobsReviewTopLeftWrapper style={{ alignText: "left" }}>
                    {matches768 ? (
                      <JobsReviewPersonIcon src={PersonIcon} />
                    ) : null}
                    <JobsReviewRoleRatingWrapper>
                      <JobsSubText3 style={{ paddingBottom: "0.125rem" }}>
                        {review[1]} at {review[0]}
                      </JobsSubText3>
                      <JobsReviewRowWrapper>
                        <JobsRating2
                          style={{ textAlign: "left" }}
                          value={overallRating}
                        />
                        <JobsContentLeft
                          style={{ margin: "0 0 0.25rem 0.25rem" }}
                        >
                          {review[6]} / 5
                        </JobsContentLeft>
                      </JobsReviewRowWrapper>
                    </JobsReviewRoleRatingWrapper>
                  </JobsReviewTopLeftWrapper>

                  <JobsSubText
                    style={{
                      color: recommend[1],
                      fontWeight: "600",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    {recommend[0]}
                  </JobsSubText>
                </JobsReviewTopWrapper>

                <JobsContentLeft>
                  Work-life Balance: {review[2]}
                </JobsContentLeft>
                <JobsContentLeft>
                  Career Opportunities: {review[3]}
                </JobsContentLeft>
                <JobsContentLeft>Company Culture: {review[4]}</JobsContentLeft>
                <JobsContentLeft>Personal Growth: {review[5]}</JobsContentLeft>

                <JobsSubText3 style={{ paddingTop: "0.75rem" }}>
                  Good
                </JobsSubText3>
                {reviewGood.map((subReviewGood, index) => {
                  return (
                    <JobsSubText4 key={index}>
                      {subReviewGood}
                      <br />
                    </JobsSubText4>
                  );
                })}

                <JobsSubText3 style={{ paddingTop: "0.5rem" }}>
                  Bad
                </JobsSubText3>
                {reviewBad.map((subReviewBad, index) => {
                  return (
                    <JobsSubText4 key={index}>
                      {subReviewBad}
                      <br />
                    </JobsSubText4>
                  );
                })}
              </JobsReviewContentWrapper>
              <Divider />
            </>
          );
        })
    );
  }, [reviews, pageNumber]);

  // Change page
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Scroll to top when page change
  // useEffect(()=>{
  //   if (matches768) {
  //     window.scrollTo({top: 970});
  //   } else if (matches480) {
  //     window.scrollTo({top: 1350});
  //   } else {
  //     window.scrollTo({top: 1300});
  //   }
  // },[pageNumber])

  // -------------------------------------------------------

  // Data Table Data

  // Set table columns depending on media screen size
  const [matches480, setMatches480] = useState(false);
  const [matches768, setMatches768] = useState(false);

  useEffect(() => {
    const mw480 = window.matchMedia("(min-width: 480px)");
    const mw768 = window.matchMedia("(min-width: 768px)");

    setMatches480(mw480.matches);
    setMatches768(mw768.matches);

    mw480.addEventListener("change", (e) => setMatches480(e.matches));
    mw768.addEventListener("change", (e) => setMatches768(e.matches));
  }, []);

  var columns = [];

  if (matches480) {
    columns = [
      {
        name: "Company",
        options: {
          filter: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Title",
        options: {
          filter: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Level",
        options: {
          filter: false,
          hint: "Company-Specific Levels",
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Type",
        options: {
          filter: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Experience",
        options: {
          filter: false,
          hint: "Years at Current Company | Total Years of Experience",
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Compensation Breakdown",
        options: {
          filter: false,
          hint: "Base | Variable | Stocks | Bonus ",
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Total Compensation",
        options: {
          filter: false,
          sort: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
          sortCompare: (order) => {
            return (obj1, obj2) => {
              let val1 = parseInt(obj1.data, 10);
              let val2 = parseInt(obj2.data, 10);
              return (val1 - val2) * (order === "asc" ? 1 : -1);
            };
          },
        },
      },
      {
        name: "Worklife Balance",
        options: {
          filter: false,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Career",
        options: {
          filter: false,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Culture",
        options: {
          filter: false,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Growth",
        options: {
          filter: false,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Overall Rating",
        options: {
          filter: false,
          hint: "Aggregated ratings across all fields",
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
    ];
  } else {
    columns = [
      {
        name: "Company",
        options: {
          filter: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Title",
        options: {
          filter: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Level",
        options: {
          filter: false,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Type",
        options: {
          filter: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
      {
        name: "Total Compensation",
        options: {
          filter: false,
          sort: true,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
          sortCompare: (order) => {
            return (obj1, obj2) => {
              let val1 = parseInt(obj1.data, 10);
              let val2 = parseInt(obj2.data, 10);
              return (val1 - val2) * (order === "asc" ? 1 : -1);
            };
          },
        },
      },
      {
        name: "Overall Rating",
        options: {
          filter: false,
          setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
        },
      },
    ];
  }

  // For Ratings and Salary Calculations/ Graph Calculations/ Table --------------------------------------------

  // Do calculations here (maybe can do calculations in sql statemnt)
  // Maybe when database gets larger

  useEffect(() => {
    const calculations = () => {
      for (var i = 0; i < submissions.length; i++) {
        // Ratings -----------------------------------
        wlbTemp += submissions[i]["wlbRating"];
        careerTemp += submissions[i]["careerRating"];
        cultureTemp += submissions[i]["cultureRating"];
        personalTemp += submissions[i]["growthRating"];

        // Salary -----------------------------------
        if (submissions[i]["totalSalary"] != 0) {
          salaryArr.push(submissions[i]["totalSalary"]);
          countSalaryTemp += 1;
        }

        avgSalaryTemp += submissions[i]["totalSalary"];

        salaryTemp = submissions[i]["totalSalary"];

        if (salaryTemp !== null) {
          if (i === 0) {
            minSalaryTemp = salaryTemp;
            maxSalaryTemp = salaryTemp;
          } else if (salaryTemp < minSalaryTemp) {
            minSalaryTemp = salaryTemp;
          } else if (salaryTemp > maxSalaryTemp) {
            maxSalaryTemp = salaryTemp;
          }
        }

        // Table -----------------------------------
        companyTemp = submissions[i]["company"];
        jobTitleTemp = submissions[i]["jobTitle"];
        jobLevelTemp = submissions[i]["jobLevel"];
        totalSalaryTemp = submissions[i]["totalSalary"];

        // Compensation Breakdown
        if (totalSalaryTemp !== null) {
          // totalSalaryTemp = totalSalaryTemp.toLocaleString('en-US');
          totalSalaryTemp = totalSalaryTemp.toFixed(0).slice(0, -3) + "k";

          baseSalaryTemp = submissions[i]["baseSalary"];
          variableSalaryTemp = submissions[i]["variableSalary"];
          stockSalaryTemp = submissions[i]["stockSalary"];
          bonusSalaryTemp = submissions[i]["bonusSalary"];

          if (baseSalaryTemp === null) {
            baseSalaryTemp = 0;
          } else {
            baseSalaryTemp *= 12;
            if (baseSalaryTemp.toString().length >= 4) {
              baseSalaryTemp = baseSalaryTemp.toString().slice(0, -3) + "k";
            }
          }
          if (variableSalaryTemp === null) {
            variableSalaryTemp = 0;
          } else {
            if (variableSalaryTemp.toString().length >= 4) {
              variableSalaryTemp =
                variableSalaryTemp.toString().slice(0, -3) + "k";
            }
          }
          if (stockSalaryTemp === null) {
            stockSalaryTemp = 0;
          } else {
            if (stockSalaryTemp.toString().length >= 4) {
              stockSalaryTemp = stockSalaryTemp.toString().slice(0, -3) + "k";
            }
          }
          if (bonusSalaryTemp === null) {
            bonusSalaryTemp = 0;
          } else {
            if (bonusSalaryTemp.toString().length >= 4) {
              bonusSalaryTemp = bonusSalaryTemp.toString().slice(0, -3) + "k";
            }
          }

          totalCompensationBreakdownTemp =
            baseSalaryTemp +
            " | " +
            variableSalaryTemp +
            " | " +
            stockSalaryTemp +
            " | " +
            bonusSalaryTemp;
        }

        experienceCurrentTemp = submissions[i]["yoeCurrent"];
        experienceTotalTemp = submissions[i]["yoeTotal"];

        if (experienceCurrentTemp === null) {
          experienceCurrentTemp = "-";
        }
        if (experienceTotalTemp === null) {
          experienceTotalTemp = "-";
        }

        experienceFullTemp =
          experienceCurrentTemp + " | " + experienceTotalTemp;

        if (submissions[i]["wlbRating"] !== null) {
          wlbTemp2 = submissions[i]["wlbRating"];
          careerTemp2 = submissions[i]["careerRating"];
          cultureTemp2 = submissions[i]["cultureRating"];
          personalTemp2 = submissions[i]["growthRating"];
          overallTemp2 = (
            (wlbTemp2 + careerTemp2 + cultureTemp2 + personalTemp2) /
            4
          ).toFixed(1);
          countRatingsTemp += 1;
        } else {
          overallTemp2 = "";
          wlbTemp2 = "";
          careerTemp2 = "";
          cultureTemp2 = "";
          personalTemp2 = "";
        }

        jobTypeTemp = submissions[i]["jobType"];

        // You cannot update state in loop correctly - assign temp first
        if (matches480) {
          dataTableDataTemp.push([
            companyTemp,
            jobTitleTemp,
            jobLevelTemp,
            jobTypeTemp,
            experienceFullTemp,
            totalCompensationBreakdownTemp,
            totalSalaryTemp,
            wlbTemp2,
            careerTemp2,
            cultureTemp2,
            personalTemp2,
            overallTemp2,
          ]);
        } else {
          dataTableDataTemp.push([
            companyTemp,
            jobTitleTemp,
            jobLevelTemp,
            jobTypeTemp,
            totalSalaryTemp,
            overallTemp2,
          ]);
        }

        // Add to reviews list if good/bad fields are not blank
        if (submissions[i]["good"] != "" || submissions[i]["bad"] != "") {
          reviewsTemp.push([
            companyTemp,
            jobTitleTemp,
            wlbTemp2,
            careerTemp2,
            cultureTemp2,
            personalTemp2,
            overallTemp2,
            submissions[i]["good"],
            submissions[i]["bad"],
            submissions[i]["recommend"],
          ]);
        }
      }

      setDataTableData(dataTableDataTemp);

      wlbTemp /= countRatingsTemp;
      careerTemp /= countRatingsTemp;
      cultureTemp /= countRatingsTemp;
      personalTemp /= countRatingsTemp;

      avgSalaryTemp /= salaryArr.length;
      setCountRatings(countRatingsTemp);
      setCountSalary(countSalaryTemp);

      // Infinity

      // Get median of arr
      const median = (arr) => {
        const mid = Math.floor(arr.length / 2),
          nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0
          ? nums[mid]
          : (nums[mid - 1] + nums[mid]) / 2;
      };

      const getStandardDeviation = (arr) => {
        const n = arr.length;
        if (!arr || arr.length === 0) {
          return 0;
        }
        const mean = arr.reduce((a, b) => a + b) / n;
        return Math.sqrt(
          arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
        );
      };

      if (!isNaN(wlbTemp)) {
        setWlbRating(wlbTemp.toFixed(1));
        setCareerRating(careerTemp.toFixed(1));
        setCultureRating(cultureTemp.toFixed(1));
        setPersonalRating(personalTemp.toFixed(1));
        setOverallRating(
          ((wlbTemp + careerTemp + cultureTemp + personalTemp) / 4).toFixed(1)
        );
      } else {
        setWlbRating("-");
        setCareerRating("-");
        setCultureRating("-");
        setPersonalRating("-");
        setOverallRating("-");
      }

      setMedSalary(median(salaryArr).toLocaleString("en-US"));

      setAvgSalary(avgSalaryTemp.toFixed(0));
      setMinSalary(minSalaryTemp.toFixed(0));
      setMaxSalary(maxSalaryTemp.toFixed(0));
      setStdSalary(getStandardDeviation(salaryArr).toFixed(0));

      setAvgSalary2(
        avgSalaryTemp.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
      setMinSalary2(
        minSalaryTemp.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
      setMaxSalary2(
        maxSalaryTemp.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
      setStdSalary2(
        getStandardDeviation(salaryArr).toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );

      setReviews(reviewsTemp);

      // To get graph distribution splits
      const salaryRangeTenthTemp = (
        (maxSalaryTemp - minSalaryTemp) /
        10
      ).toFixed(0);

      setSalaryRange(maxSalaryTemp - minSalaryTemp);
      setSalaryRangeTenth(salaryRangeTenthTemp);

      // Sort according to salary bins
      for (var i = 0; i < salaryArr.length; i++) {
        let value = salaryArr[i];
        let binsFromStart = Math.floor(
          (value - minSalaryTemp) / salaryRangeTenthTemp
        );

        if (binsFromStart < 10) {
          salaryCountTemp[binsFromStart] += 1;
        } else {
          salaryCountTemp[binsFromStart - 1] += 1; // Account for largest value bug
        }
      }
      setSalaryCount(salaryCountTemp);
    };
    calculations();
  }, [submissions]);

  // -------------------------------------------------------

  return (
    <JobsContainer>
      <JobsWrapper>
        <SearchWrapper>
          <SearchRowTop>
            <JobsDropdown
              value={job}
              handleChange={createHandleChange("job")}
            />
          </SearchRowTop>
        </SearchWrapper>

        <JobsHeader>{job}</JobsHeader>

        <JobsSubHeader>
          Insights into job ratings, compensation & other detailed information.
          We help to organise, store, and display important information across
          multiple industries and roles into digestible, bite-sized insights for
          you.
        </JobsSubHeader>

        {/* Link to roadmap page */}
        {job === "" ? null : (
          <JobsWrapper2>
            <JobsComponentHeader2>Want to be a {job}?</JobsComponentHeader2>
            <JobsComponentSubText2>
              If you are planning on a job switch or aiming for a career
              progression, check out
              <RoadmapLink href="/community"> Career Insights </RoadmapLink>
              to learn about what technical and soft skills employers are
              looking for in a {job.toLowerCase()}, what exactly{" "}
              {job.toLowerCase()}s do, and many more actionable insights into
              this role.
            </JobsComponentSubText2>
            <JobsComponentSubText2>
              Payranked is constantly scouring and scraping the internet for the
              latest updates and insights.
            </JobsComponentSubText2>
          </JobsWrapper2>
        )}

        <JobsTab>
          <JobsTabList>
            <JobsTabItem
              className={activeTab === "Overview" ? "active first" : "first"}
              onClick={handleInfoTab}
            >
              Overview
            </JobsTabItem>

            <JobsTabItem
              className={activeTab === "Reviews" ? "active second" : "second"}
              onClick={handleReviewsTab}
            >
              Reviews
            </JobsTabItem>
          </JobsTabList>

          {/* Display Tab Toggle */}
          {activeTab === "Overview" ? (
            <>
              {/* Show only if at least 1 submission */}
              {submissions.length !== 0 ? (
                <>
                  <JobsRatingSalaryWrapper>
                    <JobsRatingWrapper>
                      <JobsComponentHeaderWrapper>
                        <JobsComponentHeader>
                          Rating Overview
                        </JobsComponentHeader>
                        <InfoWrapper>
                          <Popup
                            trigger={
                              <JobsIconLink
                                target="_blank"
                                aria-label="Rating Explanation"
                              >
                                <FaInfoCircle />
                              </JobsIconLink>
                            }
                            position="bottom center"
                          >
                            <div
                              style={{
                                fontSize: "0.9rem",
                                color: "#425466",
                                padding: "0.5rem",
                              }}
                            >
                              Overall ratings are calculated by aggregating all
                              individual ratings, while individual metrics are
                              also aggregated across submissions.
                            </div>
                            <div
                              style={{
                                fontSize: "0.9rem",
                                color: "#425466",
                                padding: "0 0.5rem 0.5rem 0.5rem",
                              }}
                            >
                              Reviews that do not comply with Payranked policies
                              may be taken down.
                            </div>
                          </Popup>
                        </InfoWrapper>
                      </JobsComponentHeaderWrapper>

                      <JobsComponentSubText>
                        All-in-one transparent reviews
                      </JobsComponentSubText>

                      <Divider />

                      <JobsRatingHeader2>{overallRating} / 5</JobsRatingHeader2>
                      <JobsRating value={overallRating} />
                      <JobsComponentSubText>
                        ({countRatings})
                      </JobsComponentSubText>

                      <JobsRatingWrapper2>
                        <JobsRatingSubWrapper>
                          <JobsRatingSubWrapperColumn>
                            <JobsSubText>Work-Life Balance</JobsSubText>
                            <JobsSubText>Career Opportunities</JobsSubText>
                            <JobsSubText>Company Culture</JobsSubText>
                            <JobsSubText>Personal Growth</JobsSubText>
                          </JobsRatingSubWrapperColumn>

                          <JobsRatingSubWrapperColumn>
                            <JobsProgressBar
                              value={wlbRating}
                              colorStart="#80bfff"
                              colorEnd="#99ccff"
                            />
                            <JobsProgressBar
                              value={careerRating}
                              colorStart="#FEA500"
                              colorEnd="#FCC70A"
                            />
                            <JobsProgressBar
                              value={cultureRating}
                              colorStart="#89f752"
                              colorEnd="#99FC67"
                            />
                            <JobsProgressBar
                              value={personalRating}
                              colorStart="#E166B5"
                              colorEnd="#e378be"
                            />
                          </JobsRatingSubWrapperColumn>

                          <JobsRatingSubWrapperColumn>
                            <JobsSubText2>{wlbRating}</JobsSubText2>
                            <JobsSubText2>{careerRating}</JobsSubText2>
                            <JobsSubText2>{cultureRating}</JobsSubText2>
                            <JobsSubText2>{personalRating}</JobsSubText2>
                          </JobsRatingSubWrapperColumn>
                        </JobsRatingSubWrapper>
                      </JobsRatingWrapper2>
                    </JobsRatingWrapper>

                    <JobsSalaryWrapper>
                      <JobsComponentHeaderWrapper>
                        <JobsComponentHeader>
                          Salary Overview
                        </JobsComponentHeader>
                        <InfoWrapper>
                          <Popup
                            trigger={
                              <JobsIconLink
                                target="_blank"
                                aria-label="Rating Explanation"
                              >
                                <FaInfoCircle />
                              </JobsIconLink>
                            }
                            position="bottom center"
                          >
                            <div
                              style={{
                                fontSize: "0.9rem",
                                color: "#425466",
                                padding: "0.5rem",
                              }}
                            >
                              Common salary metrics are calculated by
                              aggregating all submissions.
                            </div>
                            <div
                              style={{
                                fontSize: "0.9rem",
                                color: "#425466",
                                padding: "0 0.5rem 0.5rem 0.5rem",
                              }}
                            >
                              Reviews that do not comply with Payranked policies
                              may be taken down.
                            </div>
                          </Popup>
                        </InfoWrapper>
                      </JobsComponentHeaderWrapper>

                      <JobsComponentSubText>
                        Never get underpaid again
                      </JobsComponentSubText>

                      <Divider />

                      <JobsSalaryHeader>Median Salary</JobsSalaryHeader>
                      <JobsSalaryHeader2>${medSalary}/yr</JobsSalaryHeader2>
                      <JobsComponentSubText>
                        ({countSalary})
                      </JobsComponentSubText>

                      <JobsSalaryContentWrapper>
                        <JobsSalaryContentGroup>
                          <JobsContent>Avg. Salary</JobsContent>
                          <JobsContent2> ${avgSalary2}</JobsContent2>
                        </JobsSalaryContentGroup>

                        <JobsSalaryContentGroup>
                          <JobsContent>Std. Dev</JobsContent>
                          <JobsContent2>${stdSalary2}</JobsContent2>
                        </JobsSalaryContentGroup>
                      </JobsSalaryContentWrapper>

                      <JobsSalaryContentWrapper>
                        <JobsSalaryContentGroup>
                          <JobsContent>Min. Salary</JobsContent>
                          <JobsContent2>${minSalary2}</JobsContent2>
                        </JobsSalaryContentGroup>

                        <JobsSalaryContentGroup>
                          <JobsContent>Max. Salary</JobsContent>
                          <JobsContent2>${maxSalary2}</JobsContent2>
                        </JobsSalaryContentGroup>
                      </JobsSalaryContentWrapper>
                    </JobsSalaryWrapper>
                  </JobsRatingSalaryWrapper>

                  <JobsSalaryDistributionWrapper>
                    <JobsSalaryDistributionWrapper2>
                      <JobsComponentHeaderWrapper>
                        <JobsComponentHeader>
                          Compensation Distribution
                        </JobsComponentHeader>
                        <InfoWrapper>
                          <Popup
                            trigger={
                              <JobsIconLink
                                target="_blank"
                                aria-label="Rating Explanation"
                              >
                                <FaInfoCircle />
                              </JobsIconLink>
                            }
                            position="bottom center"
                          >
                            <div
                              style={{
                                fontSize: "0.9rem",
                                color: "#425466",
                                padding: "0.5rem",
                              }}
                            >
                              Salary submissions are grouped into multiple
                              salary bands/bins and aggregated by count.
                            </div>
                            {/* <div style={{fontSize:"0.9rem", color:"#425466", padding:"0 0.5rem 0.5rem 0.5rem"}}>
                        Reviews that do not comply with Payranked policies may be taken down.
                      </div>                   */}
                          </Popup>
                        </InfoWrapper>
                      </JobsComponentHeaderWrapper>

                      <JobsComponentSubText>
                        Understand the market
                      </JobsComponentSubText>

                      <JobsSalaryBarChart data={dataBarChart} />
                    </JobsSalaryDistributionWrapper2>
                  </JobsSalaryDistributionWrapper>

                  {/* <Divider2 /> */}

                  <JobsDataTableWrapper>
                    <JobsComponentHeaderWrapper>
                      <JobsComponentHeader>
                        Detailed Information
                      </JobsComponentHeader>
                      <InfoWrapper>
                        <Popup
                          trigger={
                            <JobsIconLink
                              target="_blank"
                              aria-label="Rating Explanation"
                            >
                              <FaInfoCircle />
                            </JobsIconLink>
                          }
                          position="bottom center"
                        >
                          <div
                            style={{
                              fontSize: "0.9rem",
                              color: "#425466",
                              padding: "0.5rem",
                            }}
                          >
                            Individual submission information, such as
                            compensation and other rating metrics, are listed
                            here.
                          </div>
                          <div
                            style={{
                              fontSize: "0.9rem",
                              color: "#425466",
                              padding: "0 0.5rem 0.5rem 0.5rem",
                            }}
                          >
                            You may use the search/filter function to query
                            specific results.
                          </div>
                        </Popup>
                      </InfoWrapper>
                    </JobsComponentHeaderWrapper>

                    <JobsComponentSubText>
                      Information at your fingertips
                    </JobsComponentSubText>

                    <JobsDataTable data={dataTableData} columns={columns} />
                  </JobsDataTableWrapper>
                </>
              ) : (
                <JobsReviewWrapper>
                  <JobsReviewContentWrapper>
                    <JobsReviewHeader2>Add Your Information</JobsReviewHeader2>
                    {job == "" ? (
                      <JobsReviewSubmissionText>
                        Help us make job transparency a reality by sharing your
                        work experience, and help millions of other job seekers
                        as well.
                      </JobsReviewSubmissionText>
                    ) : (
                      <JobsReviewSubmissionText>
                        Working as a {job}? Help us make job transparency a
                        reality by sharing your work experience, and help
                        millions of other job seekers as well.
                      </JobsReviewSubmissionText>
                    )}
                    <LinkStyled href="/submission">
                      <ReviewButton>Submit a review</ReviewButton>
                    </LinkStyled>
                  </JobsReviewContentWrapper>
                </JobsReviewWrapper>
              )}
            </>
          ) : (
            <>
              {/* Show only if at least 1 review */}
              {reviews.length !== 0 ? (
                <>
                  <JobsReviewWrapper>
                    <JobsReviewHeader>Reviews Overview</JobsReviewHeader>

                    <JobsComponentSubText>
                      The good and the bad
                    </JobsComponentSubText>

                    <Divider />

                    <JobsReviewHeaderGrid>
                      <JobsReviewHeaderWrapper>
                        <JobsReviewHeader2>Overall Ratings</JobsReviewHeader2>
                        <JobsRatingHeader2>
                          {overallRating} / 5
                        </JobsRatingHeader2>
                        <JobsRating value={overallRating} />
                        <JobsComponentSubText>
                          ({countRatings})
                        </JobsComponentSubText>

                        <JobsRatingWrapper2>
                          <JobsRatingSubWrapper>
                            <JobsRatingSubWrapperColumn>
                              <JobsSubText>Work-Life Balance</JobsSubText>
                              <JobsSubText>Career Opportunities</JobsSubText>
                              <JobsSubText>Company Culture</JobsSubText>
                              <JobsSubText>Personal Growth</JobsSubText>
                            </JobsRatingSubWrapperColumn>

                            <JobsRatingSubWrapperColumn>
                              <JobsProgressBar
                                value={wlbRating}
                                colorStart="#80bfff"
                                colorEnd="#99ccff"
                              />
                              <JobsProgressBar
                                value={careerRating}
                                colorStart="#FEA500"
                                colorEnd="#FCC70A"
                              />
                              <JobsProgressBar
                                value={cultureRating}
                                colorStart="#89f752"
                                colorEnd="#99FC67"
                              />
                              <JobsProgressBar
                                value={personalRating}
                                colorStart="#E166B5"
                                colorEnd="#e378be"
                              />
                            </JobsRatingSubWrapperColumn>

                            <JobsRatingSubWrapperColumn>
                              <JobsSubText2>{wlbRating}</JobsSubText2>
                              <JobsSubText2>{careerRating}</JobsSubText2>
                              <JobsSubText2>{cultureRating}</JobsSubText2>
                              <JobsSubText2>{personalRating}</JobsSubText2>
                            </JobsRatingSubWrapperColumn>
                          </JobsRatingSubWrapper>
                        </JobsRatingWrapper2>
                      </JobsReviewHeaderWrapper>

                      <JobsReviewHeaderWrapper2>
                        <JobsReviewSubWrapper>
                          <JobsReviewRowWrapper>
                            <JobsReviewIcon src={compareOverallRating[2]} />
                            <JobsSubText style={{ fontWeight: "600" }}>
                              Overall Ratings:
                            </JobsSubText>
                            <JobsSubText
                              style={{
                                color: compareOverallRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareOverallRating[0]}
                            </JobsSubText>
                          </JobsReviewRowWrapper>
                          <JobsReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <JobsReviewSubText>
                              {overallRating} vs {avgOverallRating} (Average)
                            </JobsReviewSubText>
                          </JobsReviewRowWrapper>

                          <JobsReviewRowWrapper>
                            <JobsReviewIcon src={compareWlbRating[2]} />
                            <JobsSubText style={{ fontWeight: "600" }}>
                              Work-life Balance:
                            </JobsSubText>
                            <JobsSubText
                              style={{
                                color: compareWlbRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareWlbRating[0]}
                            </JobsSubText>
                          </JobsReviewRowWrapper>
                          <JobsReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <JobsReviewSubText>
                              {wlbRating} vs {avgWlbRating} (Average)
                            </JobsReviewSubText>
                          </JobsReviewRowWrapper>

                          <JobsReviewRowWrapper>
                            <JobsReviewIcon src={compareCareerRating[2]} />
                            <JobsSubText style={{ fontWeight: "600" }}>
                              Career Opportunities:
                            </JobsSubText>
                            <JobsSubText
                              style={{
                                color: compareCareerRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareCareerRating[0]}
                            </JobsSubText>
                          </JobsReviewRowWrapper>
                          <JobsReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <JobsReviewSubText>
                              {careerRating} vs {avgCareerRating} (Average)
                            </JobsReviewSubText>
                          </JobsReviewRowWrapper>

                          <JobsReviewRowWrapper>
                            <JobsReviewIcon src={compareCultureRating[2]} />
                            <JobsSubText style={{ fontWeight: "600" }}>
                              Company Culture:
                            </JobsSubText>
                            <JobsSubText
                              style={{
                                color: compareCultureRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareCultureRating[0]}
                            </JobsSubText>
                          </JobsReviewRowWrapper>
                          <JobsReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <JobsReviewSubText>
                              {cultureRating} vs {avgCultureRating} (Average)
                            </JobsReviewSubText>
                          </JobsReviewRowWrapper>

                          <JobsReviewRowWrapper>
                            <JobsReviewIcon src={comparePersonalRating[2]} />
                            <JobsSubText style={{ fontWeight: "600" }}>
                              Personal Growth:
                            </JobsSubText>
                            <JobsSubText
                              style={{
                                color: comparePersonalRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {comparePersonalRating[0]}
                            </JobsSubText>
                          </JobsReviewRowWrapper>
                          <JobsReviewRowWrapper>
                            <JobsReviewSubText>
                              {personalRating} vs {avgPersonalRating} (Average)
                            </JobsReviewSubText>
                          </JobsReviewRowWrapper>
                        </JobsReviewSubWrapper>
                      </JobsReviewHeaderWrapper2>
                    </JobsReviewHeaderGrid>
                  </JobsReviewWrapper>

                  <JobsReviewWrapper>
                    <JobsReviewContentWrapper>
                      <JobsReviewHeader2>
                        Share Your Experience
                      </JobsReviewHeader2>
                      {job == "" ? (
                        <JobsReviewSubmissionText>
                          Help us make job transparency a reality by sharing
                          your work experience, and help millions of other job
                          seekers as well.
                        </JobsReviewSubmissionText>
                      ) : (
                        <JobsReviewSubmissionText>
                          Working as a {job}? Help us make job transparency a
                          reality by sharing your work experience, and help
                          millions of other job seekers as well.
                        </JobsReviewSubmissionText>
                      )}
                      <LinkStyled href="/submission">
                        <ReviewButton>Submit a review</ReviewButton>
                      </LinkStyled>
                    </JobsReviewContentWrapper>

                    <Divider />

                    {currentReviews}

                    <PaginateWrapper>
                      <ReactPaginate
                        previousLabel={"←"}
                        nextLabel={"→"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBtns2"}
                        disabledClassName={"paginationDisabled2"}
                        activeClassName={"paginationActive2"}
                        pageRangeDisplayed={5}
                      />
                    </PaginateWrapper>
                  </JobsReviewWrapper>
                </>
              ) : (
                <JobsReviewWrapper>
                  <JobsReviewContentWrapper>
                    <JobsReviewHeader2>Share Your Experience</JobsReviewHeader2>
                    {job == "" ? (
                      <JobsReviewSubmissionText>
                        Help us make job transparency a reality by sharing your
                        work experience, and help millions of other job seekers
                        as well.
                      </JobsReviewSubmissionText>
                    ) : (
                      <JobsReviewSubmissionText>
                        Working as a {job}? Help us make job transparency a
                        reality by sharing your work experience, and help
                        millions of other job seekers as well.
                      </JobsReviewSubmissionText>
                    )}
                    <LinkStyled href="/submission">
                      <ReviewButton>Submit a review</ReviewButton>
                    </LinkStyled>
                  </JobsReviewContentWrapper>
                </JobsReviewWrapper>
              )}
            </>
          )}
        </JobsTab>
      </JobsWrapper>
    </JobsContainer>
  );
}

export default JobsSection;
