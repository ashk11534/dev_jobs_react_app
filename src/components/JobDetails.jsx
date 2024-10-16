import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import JobDetailHeader from "./JobDetailHeader";
import { useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm";
import JobDetailsMainContent from "./JobDetailsMainContent";

const JobDetails = function () {
  const param = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [jobDetails, setJobDetails] = useState({})

  const jobId = param.job_id;

  useEffect(() => {
    fetch(`http://localhost:8089/job-details/${jobId}`).then(res => res.json()).then((data) => {
      setJobDetails(data.job_data)
    })
  }, [jobId])

  return (
    <>
      {showApplicationForm && (
        <ApplicationForm handleShowApplicationForm={setShowApplicationForm} />
      )}
      <NavBar>
        <JobDetailHeader jobDetails={jobDetails} />
      </NavBar>
      <JobDetailsMainContent
        jobDetails={jobDetails}
        handleShowApplicationForm={setShowApplicationForm}
      />
    </>
  );
};

export default JobDetails;
