import axios from "axios";
import Popup from "reactjs-popup";
import JobCategoryField from "../JobCategoryField";

import { useState } from "react";
import { useRouter } from 'next/router';
import { FaInfoCircle } from "react-icons/fa";

import {
  CompanyField,
  JobTitleField,
  JobLevelField,
  CompensationBaseField,
  CompensationStockField,
  CompensationBonusField,
  CompensationVariableField,
} from "../TextField";

import {
  YearField,
  MonthField,
  JobTypeField,
  YoETotalField,
  YoECurrentField,
  JobLocationField,
} from "../DropdownField";

import {
  FormContainer,
  FormHeader,
  FormWrapperFull,
  FormWrapperHalf,
  FormContentHeaderWrapper,
  InfoWrapper,
  IconLink,
  FormContentHeader,
  FormContentText,
  FormErrorText,
  FormWrapperThird,
  QuestionWrapper,
  QuestionText,
  SubmitButton,
} from "../FormElements";

const FormSection = () => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const [yoeCurrent, setYoeCurrent] = useState(0);
  const [yoeTotal, setYoeTotal] = useState(0);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);

  const [baseSalary, setBaseSalary] = useState("");
  const [variableSalary, setVariableSalary] = useState("");
  const [stockSalary, setStockSalary] = useState("");
  const [bonusSalary, setBonusSalary] = useState("");

  const [errors, setErrors] = useState([]);

  // Check if field is clicked (only for compulsory fields)
  const [clickedCompany, setClickedCompany] = useState(false);
  const [clickedJobTitle, setClickedJobTitle] = useState(false);
  const [clickedJobCategory, setClickedJobCategory] = useState(false);
  const [clickedJobType, setClickedJobType] = useState(false);
  const [clickedJobLocation, setClickedJobLocation] = useState(false);

  const [clickedBaseSalary, setClickedBaseSalary] = useState("");

  // Show errors if form is invalid (don't show from start)
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  // Used for textfield that returns singular event (e) prop
  const createHandleChange = (name) => {
    return (e) => {
      switch (name) {
        case "company":
          setCompany(e.target.value);
          setClickedCompany(true);
          break;
        case "jobTitle":
          setJobTitle(e.target.value);
          setClickedJobTitle(true);
          break;
        case "jobLevel":
          setJobLevel(e.target.value);
          break;
        default:
          break;
      }
    };
  };

  // Used for dropdown menu that returns (event, value) props
  const createHandleChange2 = (name) => {
    return (event, value) => {
      try {
        switch (name) {
          case "jobType":
            setJobType(value.label);
            setClickedJobType(true);
            break;
          case "jobLocation":
            setJobLocation(value.label);
            setClickedJobLocation(true);
            break;
          case "yoeCurrent":
            setYoeCurrent(value.label);
            break;
          case "yoeTotal":
            setYoeTotal(value.label);
            break;
          case "month":
            setMonth(value.label);
            break;
          case "year":
            setYear(value.label);
            break;
          default:
            break;
        }
      } catch {
        // Issue when reading empty label (e.g. null entry)
        switch (name) {
          case "jobType":
            setJobType("");
            break;
          case "jobLocation":
            setJobLocation("");
            break;
          case "yoeCurrent":
            setYoeCurrent("");
            break;
          case "yoeTotal":
            setYoeTotal("");
            break;
          default:
            break;
        }
      }
    };
  };

  // Used for dropdown menu with add self input (since various prop input shapes)
  const createHandleChange3 = (name) => {
    return (value) => {
      setClickedJobCategory(true);
      try {
        switch (name) {
          case "jobCategory":
            setJobCategory(value);
            break;
          default:
            break;
        }
      } catch {
        // Issue when reading empty label (e.g. null entry)
        switch (name) {
          case "jobCategory":
            setJobCategory("");
            break;
          default:
            break;
        }
      }
    };
  };

  // Used for textfield that doesn't allow alphabets (salary section)
  const createHandleChange4 = (name) => {
    const re = /^[0-9\b]+$/;

    return (e) => {
      if (e.target.value === "" || re.test(e.target.value)) {
        switch (name) {
          case "baseSalary":
            setBaseSalary(e.target.value);
            setClickedBaseSalary(true);
            break;
          case "variableSalary":
            setVariableSalary(e.target.value);
            break;
          case "stockSalary":
            setStockSalary(e.target.value);
            break;
          case "bonusSalary":
            setBonusSalary(e.target.value);
            break;
          default:
            break;
        }
      }
    };
  };

  // Error handling and message display
  const [errorMessage, setErrorMessage] = useState("");

  // Used to validate errors
  const validateInformation = () => {
    const error = [];

    if (
      company.length === 0 ||
      jobTitle.length === 0 ||
      jobCategory.length === 0 ||
      jobType.length === 0 ||
      jobLocation.length === 0 ||
      yoeCurrent.length === 0 ||
      yoeTotal.length === 0 ||
      baseSalary.length === 0
    ) {
      error.push("⚠ Please fill in the required fields highlighted in red.");
    }

    return error;
  };

  const router = useRouter();

  const RouteSuccess = () => {
    let path = `/submission/success`;
    router.push(path);
  };

  // When click submit button
  const onSubmit = (event) => {
    setIsFormInvalid(true);

    const errortemp = validateInformation();

    console.log(errortemp);
    if (errortemp.length > 0) {
      setErrors(errortemp);
      window.scrollTo({ top: 0 });
      return;
    }

    const datetime = new Date().toLocaleDateString("en-CA");
    const datetime2 = datetime.concat(" 00:00:00");

    axios
      .post(
        "https://sheet.best/api/sheets/a4155965-1e53-4ade-995d-a4c0b81f7fea",
        {
          company: company,
          jobTitle: jobTitle,
          jobLevel: jobLevel,
          jobCategory: jobCategory,
          jobType: jobType,
          jobLocation: jobLocation,
          yoeCurrent: yoeCurrent,
          yoeTotal: yoeTotal,
          monthSubmission: month,
          yearOffer: year,
          baseSalary: baseSalary,
          variableSalary: variableSalary,
          stockSalary: stockSalary,
          bonusSalary: bonusSalary,
          submissionDate: datetime2,
        }
      )
      .then((response) => {
        console.log(response);
      });

    // React Router v4
    RouteSuccess();
  };

  return (
    <FormContainer>
      <FormHeader>Add Your Information</FormHeader>
      {/* <FormSubHeader>Alternatively, submit your offer letter or payslip here.</FormSubHeader> */}

      <FormContentText>
        * Fields marked with an asterisk (*) are compulsory.
      </FormContentText>

      <FormErrorText>
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </FormErrorText>

      <FormContentHeaderWrapper>
        <FormContentHeader>General Information</FormContentHeader>
        <InfoWrapper>
          <Popup
            trigger={
              <IconLink target="_blank" aria-label="Rating Explanation">
                <FaInfoCircle />
              </IconLink>
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
              <b>Company</b>: The company.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Job Title</b>: Your official job title.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Job Category</b>: The category you belong to. Choose from our
              presets or create your own if it doesn&apos;t exist.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Level / Seniority</b>: The grade or classification of your
              role. E.g. Associate, Manager, Director, L3, Principal SDE, etc.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Job Type</b>: The nature of the job, e.g. full-time.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Location</b>: Where the job is based.
            </div>
          </Popup>
        </InfoWrapper>
      </FormContentHeaderWrapper>

      <FormWrapperFull>
        <CompanyField
          value={company}
          clicked={clickedCompany}
          isFormInvalid={isFormInvalid}
          // onChange={(e) => setCompany(e.target.value)}
          handleChange={createHandleChange("company")}
        />

        <JobTitleField
          value={jobTitle}
          clicked={clickedJobTitle}
          isFormInvalid={isFormInvalid}
          handleChange={createHandleChange("jobTitle")}
        />
      </FormWrapperFull>

      <FormWrapperHalf>
        <JobCategoryField
          value={jobCategory}
          clicked={clickedJobCategory}
          isFormInvalid={isFormInvalid}
          handleChange={createHandleChange3("jobCategory")}
        />

        <JobLevelField
          value={jobLevel}
          handleChange={createHandleChange("jobLevel")}
        />
      </FormWrapperHalf>

      <FormWrapperHalf>
        <JobTypeField
          value={jobType}
          clicked={clickedJobType}
          isFormInvalid={isFormInvalid}
          handleChange={createHandleChange2("jobType")}
        />

        <JobLocationField
          value={jobLocation}
          clicked={clickedJobLocation}
          isFormInvalid={isFormInvalid}
          handleChange={createHandleChange2("jobLocation")}
        />
      </FormWrapperHalf>

      <FormContentHeaderWrapper>
        <FormContentHeader>Additional Information</FormContentHeader>
        <InfoWrapper>
          <Popup
            trigger={
              <IconLink target="_blank" aria-label="Rating Explanation">
                <FaInfoCircle />
              </IconLink>
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
              Additional information that will be useful to others. This section
              is optional.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Current experience</b>: The number of years at your current
              company.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Total experience</b>: The total number of years in the
              industry.
            </div>
          </Popup>
        </InfoWrapper>
      </FormContentHeaderWrapper>

      <QuestionWrapper>
        <QuestionText>When was the offer received?</QuestionText>
      </QuestionWrapper>

      <FormWrapperHalf>
        <MonthField value={month} handleChange={createHandleChange2("month")} />

        <YearField value={year} handleChange={createHandleChange2("year")} />
      </FormWrapperHalf>

      <QuestionWrapper>
        <QuestionText>
          How many years of working experience do you have?
        </QuestionText>
      </QuestionWrapper>

      <FormWrapperHalf>
        <YoECurrentField
          value={yoeCurrent}
          handleChange={createHandleChange2("yoeCurrent")}
        />

        <YoETotalField
          value={yoeTotal}
          handleChange={createHandleChange2("yoeTotal")}
        />
      </FormWrapperHalf>

      <QuestionWrapper style={{ paddingTop: "0" }}>
        <QuestionText
          style={{
            color: "grey",
            fontSize: "0.875rem",
            fontWeight: 400,
            margin: "0",
            lineHeight: "1.25rem",
          }}
        >
          <b>Current experience</b>: The number of years at your current
          company.
        </QuestionText>
        <QuestionText
          style={{
            color: "grey",
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.25rem",
          }}
        >
          <b>Total experience</b>: The total number of years in the industry.
        </QuestionText>
      </QuestionWrapper>

      {/* This Section is for Compensation */}

      <FormContentHeaderWrapper>
        <FormContentHeader>Compensation</FormContentHeader>
        <InfoWrapper>
          <Popup
            trigger={
              <IconLink target="_blank" aria-label="Rating Explanation">
                <FaInfoCircle />
              </IconLink>
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
              The yearly salary you receive from your job. You may leave the
              variable, stocks, and bonus fields blank if they do not apply to
              you.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Base</b>: Your base salary.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Variable</b>: Any variable portion of your salary.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Stocks</b>: The monetary value of the RSUs (Restricted Stock
              Units) you receive yearly.
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#425466",
                padding: "0 0.5rem 0.5rem 0.5rem",
              }}
            >
              <b>Bonus</b>: Any one-time payments, such as the Annual Wage
              Supplement (13th month bonus)
            </div>
          </Popup>
        </InfoWrapper>
      </FormContentHeaderWrapper>

      <FormWrapperThird>
        <CompensationBaseField
          value={baseSalary}
          clicked={clickedBaseSalary}
          isFormInvalid={isFormInvalid}
          handleChange={createHandleChange4("baseSalary")}
        />

        <CompensationVariableField
          value={variableSalary}
          handleChange={createHandleChange4("variableSalary")}
        />

        <CompensationStockField
          value={stockSalary}
          handleChange={createHandleChange4("stockSalary")}
        />

        <CompensationBonusField
          value={bonusSalary}
          handleChange={createHandleChange4("bonusSalary")}
        />
      </FormWrapperThird>

      <FormContentText>
        All submissions are strictly confidential and untraceable. All
        submissions are anonymized and we do not link them to your account.
      </FormContentText>

      <SubmitButton type="submit" onClick={onSubmit} />
    </FormContainer>
  );
}

export default FormSection;
