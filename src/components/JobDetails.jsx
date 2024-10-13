import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import JobDetailHeader from "./JobDetailHeader";
import { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import JobDetailsMainContent from "./JobDetailsMainContent";

const JobDetails = function () {
  const param = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  console.log(param.job_id);
  return (
    <>
      {showApplicationForm && (
        <ApplicationForm handleShowApplicationForm={setShowApplicationForm} />
      )}
      <NavBar>
        <JobDetailHeader />
      </NavBar>
      <JobDetailsMainContent
        handleShowApplicationForm={setShowApplicationForm}
      />
    </>
  );
};

export default JobDetails;
