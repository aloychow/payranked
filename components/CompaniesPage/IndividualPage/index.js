import axios from "axios";
import ReactPaginate from "react-paginate";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaInfoCircle } from "react-icons/fa";
// import { useLocation } from 'react-router-dom';
import { useRouter } from "next/router";

import {
  CompaniesContainer,
  CompaniesWrapper,
  CompaniesWrapper2,
  CompaniesHeader,
  CompaniesIconLink,
  Divider,
  InfoWrapper,
  RoadmapLink,
  CompaniesTab,
  CompaniesTabList,
  CompaniesTabItem,
  CompaniesContent,
  CompaniesContentLeft,
  CompaniesContent2,
  CompaniesSubText,
  CompaniesSubText2,
  CompaniesSubText3,
  CompaniesSubText4,
  CompaniesComponentHeaderWrapper,
  CompaniesComponentHeader,
  CompaniesComponentHeader2,
  CompaniesSubHeader,
  CompaniesComponentSubText,
  CompaniesComponentSubText2,
  CompaniesRatingSalaryWrapper,
  CompaniesSalaryWrapper,
  CompaniesSalaryHeader,
  CompaniesSalaryHeader2,
  CompaniesSalaryContentWrapper,
  CompaniesSalaryContentGroup,
  CompaniesRatingHeader2,
  CompaniesRatingWrapper,
  CompaniesRatingWrapper2,
  CompaniesRatingSubWrapper,
  CompaniesRatingSubWrapperColumn,
  CompaniesSalaryDistributionWrapper,
  CompaniesSalaryDistributionWrapper2,
  CompaniesDataTableWrapper,
  CompaniesReviewWrapper,
  CompaniesReviewHeader,
  CompaniesReviewHeader2,
  CompaniesReviewHeaderGrid,
  CompaniesReviewHeaderWrapper,
  CompaniesReviewHeaderWrapper2,
  CompaniesReviewSubWrapper,
  CompaniesReviewRowWrapper,
  CompaniesReviewSubText,
  CompaniesReviewIcon,
  CompaniesReviewContentWrapper,
  CompaniesReviewSubmissionText,
  LinkStyled,
  ReviewButton,
  CompaniesReviewTopWrapper,
  CompaniesReviewTopLeftWrapper,
  CompaniesReviewPersonIcon,
  CompaniesReviewRoleRatingWrapper,
  PaginateWrapper,
} from "./CompaniesElements";

import {
  CompaniesRating,
  CompaniesRating2,
  CompaniesProgressBar,
  CompaniesSalaryBarChart,
  CompaniesDataTable,
} from "./CompaniesComponents.js";

import { SearchWrapper, SearchRowTop } from "../SearchSection/SearchElements";

import { CompaniesDropdown } from "../SearchSection/SearchFields";

const TickIcon = "/images/Miscellaneous/tick.png";
const CrossIcon = "/images/Miscellaneous/cross.png";
const DashIcon = "/images/Miscellaneous/dash.png";
const PersonIcon = "/images/Miscellaneous/person.png";

import { CompanyNameToURL, CompanyURLToName } from "../data";
import { api } from "../../../utils";

function CompaniesIndividualSection() {
  const [submissions, setSubmissions] = useState([]);
  const [companyAbout, setCompanyAbout] = useState("");

  const router = useRouter(); // Used to navigate on dropdown change

  // Get url and company name
  // const location = useLocation();
  const companyURL = router.query.slug || "";

  // For unique names
  let company = CompanyURLToName[companyURL];

  // For normal names
  if (typeof company === "undefined") {
    company = companyURL.replaceAll("-", " ");
    company = company.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    );
  }

  let companyDropdown = "";
  const createHandleChange = (name) => {
    return (value) => {
      try {
        switch (name) {
          case "company":
            companyDropdown = value;

            if (company !== "") {
              // For unique names
              let companyDropdownURL = CompanyNameToURL[companyDropdown];

              // For normal names
              if (typeof companyDropdownURL === "undefined") {
                companyDropdownURL = companyDropdown.toLowerCase();
                companyDropdownURL = companyDropdownURL.replace(" ", "-");
              }

              router.push({
                pathname: `${companyDropdownURL}`,
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
          case "company":
            break;
          default:
            break;
        }
      }
    };
  };

  // Get submission data
  useEffect(() => {
    if (!company) return
    (async () => {
      const result = await api.get("/submissions/company", {
        params: {
          company: company,
        },
      });
      const result2 = await api.get("/submissions/companyabout", {
        params: {
          company: company,
        },
      });
      setSubmissions(result.data.submissions);
      setCompanyAbout(result2.data.submissions[0]["About"]);
    })();
  }, [company]);

  // Define Tab Switching Logic Here --------------------------------------------

  const [activeTab, setActiveTab] = useState("Overview");

  const handleInfoTab = () => {
    setActiveTab("Overview");
  };

  const handleReviewsTab = () => {
    setActiveTab("Reviews");
  };

  // Do calculations here (maybe can do calculations in sql statemnt)
  // Maybe when database gets larger

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
  let jobCategoryTemp = "";
  let jobTitleTemp = "";
  let companiesLevelTemp = "";
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
              <CompaniesReviewContentWrapper>
                <CompaniesReviewTopWrapper>
                  <CompaniesReviewTopLeftWrapper style={{ alignText: "left" }}>
                    {matches768 ? (
                      <CompaniesReviewPersonIcon src={PersonIcon} />
                    ) : null}
                    <CompaniesReviewRoleRatingWrapper>
                      <CompaniesSubText3 style={{ paddingBottom: "0.125rem" }}>
                        {review[1]}
                      </CompaniesSubText3>
                      <CompaniesReviewRowWrapper>
                        <CompaniesRating2
                          style={{ textAlign: "left" }}
                          value={overallRating}
                        />
                        <CompaniesContentLeft
                          style={{ margin: "0 0 0.25rem 0.25rem" }}
                        >
                          {review[6]} / 5
                        </CompaniesContentLeft>
                      </CompaniesReviewRowWrapper>
                    </CompaniesReviewRoleRatingWrapper>
                  </CompaniesReviewTopLeftWrapper>

                  <CompaniesSubText
                    style={{
                      color: recommend[1],
                      fontWeight: "600",
                      paddingLeft: "1.25rem",
                    }}
                  >
                    {recommend[0]}
                  </CompaniesSubText>
                </CompaniesReviewTopWrapper>

                <CompaniesContentLeft>
                  Work-life Balance: {review[2]}
                </CompaniesContentLeft>
                <CompaniesContentLeft>
                  Career Opportunities: {review[3]}
                </CompaniesContentLeft>
                <CompaniesContentLeft>
                  Company Culture: {review[4]}
                </CompaniesContentLeft>
                <CompaniesContentLeft>
                  Personal Growth: {review[5]}
                </CompaniesContentLeft>

                <CompaniesSubText3 style={{ paddingTop: "0.75rem" }}>
                  Good
                </CompaniesSubText3>
                {reviewGood.map((subReviewGood, index) => {
                  return (
                    <CompaniesSubText4 key={index}>
                      {subReviewGood}
                      <br />
                    </CompaniesSubText4>
                  );
                })}

                <CompaniesSubText3 style={{ paddingTop: "0.5rem" }}>
                  Bad
                </CompaniesSubText3>
                {reviewBad.map((subReviewBad, index) => {
                  return (
                    <CompaniesSubText4 key={index}>
                      {subReviewBad}
                      <br />
                    </CompaniesSubText4>
                  );
                })}
              </CompaniesReviewContentWrapper>
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
  // },[currentReviews])

  // -------------------------------------------------------

  // Data Table Data

  // Set table columns depending on media screen size
  const [matches480, setMatches480] = useState(false);
  const [matches768, setMatches768] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 480px)")
      .addEventListener("change", (e) => setMatches480(e.matches));

    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches768(e.matches));
  }, []);

  var columns = [];

  if (matches480) {
    columns = [
      {
        name: "Category",
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
        name: "Category",
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
        jobCategoryTemp = submissions[i]["jobCategory"];
        jobTitleTemp = submissions[i]["jobTitle"];
        companiesLevelTemp = submissions[i]["jobLevel"];
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
            jobCategoryTemp,
            companiesLevelTemp,
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
            jobCategoryTemp,
            companiesLevelTemp,
            jobTypeTemp,
            totalSalaryTemp,
            overallTemp2,
          ]);
        }

        // Add to reviews list if good/bad fields are not blank
        if (submissions[i]["good"] != "" || submissions[i]["bad"] != "") {
          reviewsTemp.push([
            company,
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
    <CompaniesContainer>
      <Helmet>
        <title>{company} | Payranked</title>
        <meta name="description" content={companyAbout} />
        <meta
          name="keywords"
          content={`${company}, company, companies, work, job, reviews, salary, pay, compensation`}
        />
        <link
          rel="canonical"
          href={`https://www.payranked.com/companies/${companyURL}`}
        />
      </Helmet>

      <CompaniesWrapper>
        <SearchWrapper>
          <SearchRowTop>
            <CompaniesDropdown
              value={company}
              handleChange={createHandleChange("company")}
            />
          </SearchRowTop>
        </SearchWrapper>

        <CompaniesHeader>{company}</CompaniesHeader>

        <CompaniesSubHeader>{companyAbout}</CompaniesSubHeader>

        <CompaniesTab>
          <CompaniesTabList>
            <CompaniesTabItem
              className={activeTab === "Overview" ? "active first" : "first"}
              onClick={handleInfoTab}
            >
              Overview
            </CompaniesTabItem>

            <CompaniesTabItem
              className={activeTab === "Reviews" ? "active second" : "second"}
              onClick={handleReviewsTab}
            >
              Reviews
            </CompaniesTabItem>
          </CompaniesTabList>

          {/* Display Tab Toggle */}
          {activeTab === "Overview" ? (
            <>
              {/* Show only if at least 1 submission */}

              {submissions.length !== 0 ? (
                <>
                  <CompaniesRatingSalaryWrapper>
                    <CompaniesRatingWrapper>
                      <CompaniesComponentHeaderWrapper>
                        <CompaniesComponentHeader>
                          Rating Overview
                        </CompaniesComponentHeader>
                        <InfoWrapper>
                          <Popup
                            trigger={
                              <CompaniesIconLink
                                target="_blank"
                                aria-label="Rating Explanation"
                              >
                                <FaInfoCircle />
                              </CompaniesIconLink>
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
                      </CompaniesComponentHeaderWrapper>

                      <CompaniesComponentSubText>
                        All-in-one transparent reviews
                      </CompaniesComponentSubText>

                      <Divider />

                      <CompaniesRatingHeader2>
                        {overallRating} / 5
                      </CompaniesRatingHeader2>
                      <CompaniesRating value={overallRating} />
                      <CompaniesComponentSubText>
                        ({countRatings})
                      </CompaniesComponentSubText>

                      <CompaniesRatingWrapper2>
                        <CompaniesRatingSubWrapper>
                          <CompaniesRatingSubWrapperColumn>
                            <CompaniesSubText>
                              Work-Life Balance
                            </CompaniesSubText>
                            <CompaniesSubText>
                              Career Opportunities
                            </CompaniesSubText>
                            <CompaniesSubText>Company Culture</CompaniesSubText>
                            <CompaniesSubText>Personal Growth</CompaniesSubText>
                          </CompaniesRatingSubWrapperColumn>

                          <CompaniesRatingSubWrapperColumn>
                            <CompaniesProgressBar
                              value={wlbRating}
                              colorStart="#80bfff"
                              colorEnd="#99ccff"
                            />
                            <CompaniesProgressBar
                              value={careerRating}
                              colorStart="#FEA500"
                              colorEnd="#FCC70A"
                            />
                            <CompaniesProgressBar
                              value={cultureRating}
                              colorStart="#89f752"
                              colorEnd="#99FC67"
                            />
                            <CompaniesProgressBar
                              value={personalRating}
                              colorStart="#E166B5"
                              colorEnd="#e378be"
                            />
                          </CompaniesRatingSubWrapperColumn>

                          <CompaniesRatingSubWrapperColumn>
                            <CompaniesSubText2>{wlbRating}</CompaniesSubText2>
                            <CompaniesSubText2>
                              {careerRating}
                            </CompaniesSubText2>
                            <CompaniesSubText2>
                              {cultureRating}
                            </CompaniesSubText2>
                            <CompaniesSubText2>
                              {personalRating}
                            </CompaniesSubText2>
                          </CompaniesRatingSubWrapperColumn>
                        </CompaniesRatingSubWrapper>
                      </CompaniesRatingWrapper2>
                    </CompaniesRatingWrapper>

                    <CompaniesSalaryWrapper>
                      <CompaniesComponentHeaderWrapper>
                        <CompaniesComponentHeader>
                          Salary Overview
                        </CompaniesComponentHeader>
                        <InfoWrapper>
                          <Popup
                            trigger={
                              <CompaniesIconLink
                                target="_blank"
                                aria-label="Rating Explanation"
                              >
                                <FaInfoCircle />
                              </CompaniesIconLink>
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
                      </CompaniesComponentHeaderWrapper>

                      <CompaniesComponentSubText>
                        Never get underpaid again
                      </CompaniesComponentSubText>

                      <Divider />

                      <CompaniesSalaryHeader>
                        Median Salary
                      </CompaniesSalaryHeader>
                      <CompaniesSalaryHeader2>
                        ${medSalary}/yr
                      </CompaniesSalaryHeader2>
                      <CompaniesComponentSubText>
                        ({countSalary})
                      </CompaniesComponentSubText>

                      <CompaniesSalaryContentWrapper>
                        <CompaniesSalaryContentGroup>
                          <CompaniesContent>Avg. Salary</CompaniesContent>
                          <CompaniesContent2> ${avgSalary2}</CompaniesContent2>
                        </CompaniesSalaryContentGroup>

                        <CompaniesSalaryContentGroup>
                          <CompaniesContent>Std. Dev</CompaniesContent>
                          <CompaniesContent2>${stdSalary2}</CompaniesContent2>
                        </CompaniesSalaryContentGroup>
                      </CompaniesSalaryContentWrapper>

                      <CompaniesSalaryContentWrapper>
                        <CompaniesSalaryContentGroup>
                          <CompaniesContent>Min. Salary</CompaniesContent>
                          <CompaniesContent2>${minSalary2}</CompaniesContent2>
                        </CompaniesSalaryContentGroup>

                        <CompaniesSalaryContentGroup>
                          <CompaniesContent>Max. Salary</CompaniesContent>
                          <CompaniesContent2>${maxSalary2}</CompaniesContent2>
                        </CompaniesSalaryContentGroup>
                      </CompaniesSalaryContentWrapper>
                    </CompaniesSalaryWrapper>
                  </CompaniesRatingSalaryWrapper>

                  <CompaniesSalaryDistributionWrapper>
                    <CompaniesSalaryDistributionWrapper2>
                      <CompaniesComponentHeaderWrapper>
                        <CompaniesComponentHeader>
                          Compensation Distribution
                        </CompaniesComponentHeader>
                        <InfoWrapper>
                          <Popup
                            trigger={
                              <CompaniesIconLink
                                target="_blank"
                                aria-label="Rating Explanation"
                              >
                                <FaInfoCircle />
                              </CompaniesIconLink>
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
                      </CompaniesComponentHeaderWrapper>

                      <CompaniesComponentSubText>
                        Understand the market
                      </CompaniesComponentSubText>

                      <CompaniesSalaryBarChart data={dataBarChart} />
                    </CompaniesSalaryDistributionWrapper2>
                  </CompaniesSalaryDistributionWrapper>

                  {/* <Divider2 /> */}

                  <CompaniesDataTableWrapper>
                    <CompaniesComponentHeaderWrapper>
                      <CompaniesComponentHeader>
                        Detailed Information
                      </CompaniesComponentHeader>
                      <InfoWrapper>
                        <Popup
                          trigger={
                            <CompaniesIconLink
                              target="_blank"
                              aria-label="Rating Explanation"
                            >
                              <FaInfoCircle />
                            </CompaniesIconLink>
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
                    </CompaniesComponentHeaderWrapper>

                    <CompaniesComponentSubText>
                      Information at your fingertips
                    </CompaniesComponentSubText>

                    <CompaniesDataTable
                      data={dataTableData}
                      columns={columns}
                    />
                  </CompaniesDataTableWrapper>
                </>
              ) : (
                <CompaniesReviewWrapper>
                  <CompaniesReviewContentWrapper>
                    <CompaniesReviewHeader2>
                      Add Your Information
                    </CompaniesReviewHeader2>
                    {company == "" ? (
                      <CompaniesReviewSubmissionText>
                        Help us make job transparency a reality by sharing your
                        work experience, and help millions of other job seekers
                        as well.
                      </CompaniesReviewSubmissionText>
                    ) : (
                      <CompaniesReviewSubmissionText>
                        Working in {company}? Help us make job transparency a
                        reality by sharing your work experience, and help
                        millions of other job seekers as well.
                      </CompaniesReviewSubmissionText>
                    )}
                    <LinkStyled href="/submission">
                      <ReviewButton>Submit a review</ReviewButton>
                    </LinkStyled>
                  </CompaniesReviewContentWrapper>
                </CompaniesReviewWrapper>
              )}
            </>
          ) : (
            <>
              {/* Show only if at least 1 review */}
              {reviews.length !== 0 ? (
                <>
                  <CompaniesReviewWrapper>
                    <CompaniesReviewHeader>
                      Reviews Overview
                    </CompaniesReviewHeader>

                    <CompaniesComponentSubText>
                      The good and the bad
                    </CompaniesComponentSubText>

                    <Divider />

                    <CompaniesReviewHeaderGrid>
                      <CompaniesReviewHeaderWrapper>
                        <CompaniesReviewHeader2>
                          Overall Ratings
                        </CompaniesReviewHeader2>
                        <CompaniesRatingHeader2>
                          {overallRating} / 5
                        </CompaniesRatingHeader2>
                        <CompaniesRating value={overallRating} />
                        <CompaniesComponentSubText>
                          ({countRatings})
                        </CompaniesComponentSubText>

                        <CompaniesRatingWrapper2>
                          <CompaniesRatingSubWrapper>
                            <CompaniesRatingSubWrapperColumn>
                              <CompaniesSubText>
                                Work-Life Balance
                              </CompaniesSubText>
                              <CompaniesSubText>
                                Career Opportunities
                              </CompaniesSubText>
                              <CompaniesSubText>
                                Company Culture
                              </CompaniesSubText>
                              <CompaniesSubText>
                                Personal Growth
                              </CompaniesSubText>
                            </CompaniesRatingSubWrapperColumn>

                            <CompaniesRatingSubWrapperColumn>
                              <CompaniesProgressBar
                                value={wlbRating}
                                colorStart="#80bfff"
                                colorEnd="#99ccff"
                              />
                              <CompaniesProgressBar
                                value={careerRating}
                                colorStart="#FEA500"
                                colorEnd="#FCC70A"
                              />
                              <CompaniesProgressBar
                                value={cultureRating}
                                colorStart="#89f752"
                                colorEnd="#99FC67"
                              />
                              <CompaniesProgressBar
                                value={personalRating}
                                colorStart="#E166B5"
                                colorEnd="#e378be"
                              />
                            </CompaniesRatingSubWrapperColumn>

                            <CompaniesRatingSubWrapperColumn>
                              <CompaniesSubText2>{wlbRating}</CompaniesSubText2>
                              <CompaniesSubText2>
                                {careerRating}
                              </CompaniesSubText2>
                              <CompaniesSubText2>
                                {cultureRating}
                              </CompaniesSubText2>
                              <CompaniesSubText2>
                                {personalRating}
                              </CompaniesSubText2>
                            </CompaniesRatingSubWrapperColumn>
                          </CompaniesRatingSubWrapper>
                        </CompaniesRatingWrapper2>
                      </CompaniesReviewHeaderWrapper>

                      <CompaniesReviewHeaderWrapper2>
                        <CompaniesReviewSubWrapper>
                          <CompaniesReviewRowWrapper>
                            <CompaniesReviewIcon
                              src={compareOverallRating[2]}
                            />
                            <CompaniesSubText style={{ fontWeight: "600" }}>
                              Overall Ratings:
                            </CompaniesSubText>
                            <CompaniesSubText
                              style={{
                                color: compareOverallRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareOverallRating[0]}
                            </CompaniesSubText>
                          </CompaniesReviewRowWrapper>
                          <CompaniesReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <CompaniesReviewSubText>
                              {overallRating} vs {avgOverallRating} (Average)
                            </CompaniesReviewSubText>
                          </CompaniesReviewRowWrapper>

                          <CompaniesReviewRowWrapper>
                            <CompaniesReviewIcon src={compareWlbRating[2]} />
                            <CompaniesSubText style={{ fontWeight: "600" }}>
                              Work-life Balance:
                            </CompaniesSubText>
                            <CompaniesSubText
                              style={{
                                color: compareWlbRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareWlbRating[0]}
                            </CompaniesSubText>
                          </CompaniesReviewRowWrapper>
                          <CompaniesReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <CompaniesReviewSubText>
                              {wlbRating} vs {avgWlbRating} (Average)
                            </CompaniesReviewSubText>
                          </CompaniesReviewRowWrapper>

                          <CompaniesReviewRowWrapper>
                            <CompaniesReviewIcon src={compareCareerRating[2]} />
                            <CompaniesSubText style={{ fontWeight: "600" }}>
                              Career Opportunities:
                            </CompaniesSubText>
                            <CompaniesSubText
                              style={{
                                color: compareCareerRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareCareerRating[0]}
                            </CompaniesSubText>
                          </CompaniesReviewRowWrapper>
                          <CompaniesReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <CompaniesReviewSubText>
                              {careerRating} vs {avgCareerRating} (Average)
                            </CompaniesReviewSubText>
                          </CompaniesReviewRowWrapper>

                          <CompaniesReviewRowWrapper>
                            <CompaniesReviewIcon
                              src={compareCultureRating[2]}
                            />
                            <CompaniesSubText style={{ fontWeight: "600" }}>
                              Company Culture:
                            </CompaniesSubText>
                            <CompaniesSubText
                              style={{
                                color: compareCultureRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {compareCultureRating[0]}
                            </CompaniesSubText>
                          </CompaniesReviewRowWrapper>
                          <CompaniesReviewRowWrapper
                            style={{ paddingBottom: "0.5rem" }}
                          >
                            <CompaniesReviewSubText>
                              {cultureRating} vs {avgCultureRating} (Average)
                            </CompaniesReviewSubText>
                          </CompaniesReviewRowWrapper>

                          <CompaniesReviewRowWrapper>
                            <CompaniesReviewIcon
                              src={comparePersonalRating[2]}
                            />
                            <CompaniesSubText style={{ fontWeight: "600" }}>
                              Personal Growth:
                            </CompaniesSubText>
                            <CompaniesSubText
                              style={{
                                color: comparePersonalRating[1],
                                fontWeight: "600",
                                padding: "0",
                              }}
                            >
                              {comparePersonalRating[0]}
                            </CompaniesSubText>
                          </CompaniesReviewRowWrapper>
                          <CompaniesReviewRowWrapper>
                            <CompaniesReviewSubText>
                              {personalRating} vs {avgPersonalRating} (Average)
                            </CompaniesReviewSubText>
                          </CompaniesReviewRowWrapper>
                        </CompaniesReviewSubWrapper>
                      </CompaniesReviewHeaderWrapper2>
                    </CompaniesReviewHeaderGrid>
                  </CompaniesReviewWrapper>

                  <CompaniesReviewWrapper>
                    <CompaniesReviewContentWrapper>
                      <CompaniesReviewHeader2>
                        Share Your Experience
                      </CompaniesReviewHeader2>
                      {company == "" ? (
                        <CompaniesReviewSubmissionText>
                          Help us make job transparency a reality by sharing
                          your work experience, and help millions of other job
                          seekers as well.
                        </CompaniesReviewSubmissionText>
                      ) : (
                        <CompaniesReviewSubmissionText>
                          Working in {company}? Help us make job transparency a
                          reality by sharing your work experience, and help
                          millions of other job seekers as well.
                        </CompaniesReviewSubmissionText>
                      )}
                      <LinkStyled href="/submission">
                        <ReviewButton>Submit a review</ReviewButton>
                      </LinkStyled>
                    </CompaniesReviewContentWrapper>

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
                  </CompaniesReviewWrapper>
                </>
              ) : (
                <CompaniesReviewWrapper>
                  <CompaniesReviewContentWrapper>
                    <CompaniesReviewHeader2>
                      Share Your Experience
                    </CompaniesReviewHeader2>
                    {company == "" ? (
                      <CompaniesReviewSubmissionText>
                        Help us make job transparency a reality by sharing your
                        work experience, and help millions of other job seekers
                        as well.
                      </CompaniesReviewSubmissionText>
                    ) : (
                      <CompaniesReviewSubmissionText>
                        Working in {company}? Help us make job transparency a
                        reality by sharing your work experience, and help
                        millions of other job seekers as well.
                      </CompaniesReviewSubmissionText>
                    )}
                    <LinkStyled href="/submission">
                      <ReviewButton>Submit a review</ReviewButton>
                    </LinkStyled>
                  </CompaniesReviewContentWrapper>
                </CompaniesReviewWrapper>
              )}
            </>
          )}
        </CompaniesTab>
      </CompaniesWrapper>
    </CompaniesContainer>
  );
}

export default CompaniesIndividualSection;
