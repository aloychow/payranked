import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaInfoCircle } from 'react-icons/fa';

import Popup from 'reactjs-popup';

import {
  CompanyField,
  JobTitleField,
  JobLevelField,

  GoodField,
  BadField,
} from '../TextField';

import {
  JobTypeField,
  JobLocationField,

  YoECurrentField,
  YoETotalField,

  MonthField,
  YearField,
} from '../DropdownField';

import JobRating from '../JobRating';
import JobCategoryField from '../JobCategoryField';
import RecommendField from '../RadioButtonField';

import {
  FormContainer,
  FormHeader,
  FormSubHeader,
  FormWrapperFull,
  FormWrapperHalf,

  FormContentHeaderWrapper,
  InfoWrapper,
  IconLink,

  FormContentHeader,
  FormContentText,
  FormRatingWrapper,
  FormRatingSubHeader,
  FormRatingText,
  FormErrorText,

  QuestionWrapper,
  QuestionText,

  SubmitButton,
} from '../FormElements';

function FormSection() {

  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobLevel, setJobLevel] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  const [yoeCurrent, setYoeCurrent] = useState(0);
  const [yoeTotal, setYoeTotal] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);

  const [wlbRating, setWlbRating] = useState(3);
  const [careerRating, setCareerRating] = useState(3);
  const [cultureRating, setCultureRating] = useState(3);
  const [growthRating, setGrowthRating] = useState(3);

  const [recommend, setRecommend] = useState('');
  const [good, setGood] = useState('');
  const [bad, setBad] = useState('');

  const [errors, setErrors] = useState([]);

  // Check if field is clicked (only for compulsory fields)
  const [clickedCompany, setClickedCompany] = useState(false)
  const [clickedJobTitle, setClickedJobTitle] = useState(false)
  const [clickedJobCategory, setClickedJobCategory] = useState(false)
  const [clickedJobType, setClickedJobType] = useState(false)
  const [clickedJobLocation, setClickedJobLocation] = useState(false)

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
        case "wlbRating":
          setWlbRating(e.target.value);
          break;
        case "careerRating":
          setCareerRating(e.target.value);
          break;
        case "cultureRating":
          setCultureRating(e.target.value);
          break;
        case "growthRating":
          setGrowthRating(e.target.value);
          break;
        case "good":
          setGood(e.target.value);
          break;
        case "bad":
          setBad(e.target.value);
          break;
        default:
          break;
      }
    };
  }

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
      } catch { // Issue when reading empty label (e.g. null entry)
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
  }

  // Used for dropdown menu with add self input (since various prop input shapes)
  const createHandleChange3 = (name) => {
    return (value) => {
      setClickedJobCategory(true)
      try {
        switch (name) {
          case "jobCategory":
            setJobCategory(value);
            break;
          default:
            break;
        }
        // this.setState({ [name]: value});
        // console.log(name, value);  
      } catch { // Issue when reading empty label (e.g. null entry)
        switch (name) {
          case "jobCategory":
            setJobCategory("");
            break;
          default:
            break;
        }
      }
    };
  }

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
      yoeTotal.length === 0
    ) {
      error.push("⚠ Please fill in the required fields highlighted in red.");
    }

    return error
  }

  const router = useRouter();

  const RouteSuccess = () => {
    let path = `/submission/success`;
    router.push(path)
  }

  // When click submit button
  const onSubmit = (event) => {

    setIsFormInvalid(true)

    const errortemp = validateInformation();

    console.log(errortemp)
    if (errortemp.length > 0) {
      setErrors(errortemp);
      window.scrollTo({ top: 0 });
      return;
    }

    const datetime = new Date().toLocaleDateString('en-CA')
    const datetime2 = datetime.concat(" 00:00:00")

    axios.post(
      'https://sheet.best/api/sheets/a4155965-1e53-4ade-995d-a4c0b81f7fea',
      {
        "company": company, "jobTitle": jobTitle, "jobLevel": jobLevel, "jobCategory": jobCategory, "jobType": jobType, "jobLocation": jobLocation,
        "yoeCurrent": yoeCurrent, "yoeTotal": yoeTotal,
        "monthOffer": month, "yearOffer": year,
        "wlbRating": wlbRating, "careerRating": careerRating, "cultureRating": cultureRating, "growthRating": growthRating,
        "recommend": recommend, "good": good.replace(/\n/g, "<br />"), "bad": bad.replace(/\n/g, "<br />"),
        "submissionDate": datetime2
      }
    )
      .then(response => {
        console.log(response);
      })

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
        {errors.map(error => (
          <p key={error}>{error}</p>
        ))}
      </FormErrorText>

      <FormContentHeaderWrapper>
        <FormContentHeader>
          General Information
        </FormContentHeader>
        <InfoWrapper>
          <Popup
            trigger={
              <IconLink target='_blank' aria-label='Rating Explanation'>
                <FaInfoCircle />
              </IconLink>
            } position="bottom center">
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0.5rem" }}>
              <b>Company</b>: The company.
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
              <b>Job Title</b>: Your official job title.
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
              <b>Job Category</b>: The category you belong to. Choose from our presets or create your own if it doesn&apos;t exist.
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
              <b>Level / Seniority</b>: The grade or classification of your role. E.g. Associate, Manager, Director, L3, Principal SDE, etc.
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
              <b>Job Type</b>: The nature of the job, e.g. full-time.
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
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
          handleChange={createHandleChange3("jobCategory")} />

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
          handleChange={createHandleChange2("jobType")} />

        <JobLocationField
          value={jobLocation}
          clicked={clickedJobLocation}
          isFormInvalid={isFormInvalid}
          handleChange={createHandleChange2("jobLocation")} />
      </FormWrapperHalf>

      <FormContentHeaderWrapper>
        <FormContentHeader>
          Additional Information
        </FormContentHeader>
        <InfoWrapper>
          <Popup
            trigger={
              <IconLink target='_blank' aria-label='Rating Explanation'>
                <FaInfoCircle />
              </IconLink>
            } position="bottom center">
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0.5rem" }}>
              Additional information that will be useful to others. This section is optional.
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
              <b>Current experience</b>: The number of years at your current company.
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
              <b>Total experience</b>: The total number of years in the industry.
            </div>
          </Popup>
        </InfoWrapper>
      </FormContentHeaderWrapper>

      <QuestionWrapper>
        <QuestionText>When was the offer received?</QuestionText>
      </QuestionWrapper>

      <FormWrapperHalf>
        <MonthField
          value={month}
          handleChange={createHandleChange2("month")} />

        <YearField
          value={year}
          handleChange={createHandleChange2("year")} />
      </FormWrapperHalf>

      <QuestionWrapper>
        <QuestionText>How many years of working experience do you have?</QuestionText>
      </QuestionWrapper>

      <FormWrapperHalf>
        <YoECurrentField
          value={yoeCurrent}
          handleChange={createHandleChange2("yoeCurrent")} />

        <YoETotalField
          value={yoeTotal}
          handleChange={createHandleChange2("yoeTotal")} />
      </FormWrapperHalf>

      <QuestionWrapper style={{ paddingTop: "0" }}>
        <QuestionText style={{ color: "grey", fontSize: "0.875rem", fontWeight: 400, margin: "0", lineHeight: "1.25rem" }}><b>Current experience</b>: The number of years at your current company.</QuestionText>
        <QuestionText style={{ color: "grey", fontSize: "0.875rem", fontWeight: 400, lineHeight: "1.25rem" }}><b>Total experience</b>: The total number of years in the industry.</QuestionText>
      </QuestionWrapper>

      {/* This Section is for Ratings */}

      <FormContentHeaderWrapper>
        <FormContentHeader>
          Experience
        </FormContentHeader>
        <InfoWrapper>
          <Popup
            trigger={
              <IconLink target='_blank' aria-label='Rating Explanation'>
                <FaInfoCircle />
              </IconLink>
            } position="bottom center">
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0.5rem" }}>
              Experience at your job based on 4 qualitative metrics:
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0 0 0.5rem" }}>
              • Work-life balance
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0 0 0.5rem" }}>
              • Career Opportunities
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0 0 0.5rem" }}>
              • Company Culture
            </div>
            <div style={{ fontSize: "0.9rem", color: "#425466", padding: "0 0.5rem 0.5rem 0.5rem" }}>
              • Personal Growth
            </div>
          </Popup>
        </InfoWrapper>
      </FormContentHeaderWrapper>

      <FormRatingSubHeader>
        Please answer the following sections honestly. Your ratings will better evaluate existing companies and help others as well. All ratings are strictly confidential.
      </FormRatingSubHeader>

      <FormRatingWrapper>
        <FormRatingText >
          Work-Life Balance
        </FormRatingText>

        <FormSubHeader>
          Consider the amount of time spent at work as well as outside working hours dealing with work-related issues. As a benchmark, an average person works around 8-9h/day.
        </FormSubHeader>

        <JobRating
          value={wlbRating}
          handleChange={createHandleChange("wlbRating")}
        />
      </FormRatingWrapper>

      <FormRatingWrapper>
        <FormRatingText>
          Career Opportunities
        </FormRatingText>

        <FormSubHeader>
          Does your job provide you with opportunities for progression, e.g. mentoring, leadership development programs, training, upgrading courses, and additional responsibilities?
        </FormSubHeader>

        <JobRating
          value={careerRating}
          handleChange={createHandleChange("careerRating")}
        />
      </FormRatingWrapper>

      <FormRatingWrapper>
        <FormRatingText>
          Company Culture
        </FormRatingText>

        <FormSubHeader>
          This refers to the attitudes and behaviours of your company and colleagues, regarding the general working environment, communication, and collaboration.
        </FormSubHeader>

        <JobRating
          value={cultureRating}
          handleChange={createHandleChange("cultureRating")}
        />
      </FormRatingWrapper>

      <FormRatingWrapper>
        <FormRatingText>
          Personal Growth
        </FormRatingText>

        <FormSubHeader>
          This involves your company&apos;s growth culture, the resources available for growth, as well as their core values. Unlike career opportunites, this aspect focuses on emotional balance, intellectual growth and your physical health.
        </FormSubHeader>

        <JobRating
          value={growthRating}
          handleChange={createHandleChange("growthRating")}
        />

        {/* This Section is for Ratings 2 */}
        <QuestionWrapper>
          <QuestionText style={{ margin: "0" }}>Would you recommend this company to others?</QuestionText>
          <RecommendField
            value={recommend}
            handleChange={(e) => setRecommend(e.target.value)}
          />

          <QuestionText style={{ margin: "0" }}>Share your likes and dislikes about the company.</QuestionText>
          <GoodField
            value={good}
            handleChange={createHandleChange("good")}
          />
          <BadField
            value={bad}
            handleChange={createHandleChange("bad")}
          />
        </QuestionWrapper>

      </FormRatingWrapper>


      <FormContentText>
        All submissions are strictly confidential and untraceable. All submissions are anonymized and we do not link them to your account.
      </FormContentText>

      <SubmitButton type="submit" onClick={onSubmit} />
    </FormContainer>
  );
};

export default FormSection;
