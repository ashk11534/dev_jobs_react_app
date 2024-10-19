import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import JobDetailHeader from "./JobDetailHeader";
import { useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm";
import JobDetailsMainContent from "./JobDetailsMainContent";
import GreetingsForm from "./GreetingsForm";
import Loader from "./Loader";

const JobDetails = function () {
  const param = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showGreetingsForm, setShowGreetingsForm] = useState(false);
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const jobId = param.job_id;

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:8085/job-details/${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        setJobDetails(data.job_data);
        setLoading(false);
      });
  }, [jobId]);

  return (
    <>
      {showApplicationForm && (
        <ApplicationForm
          jobId={jobId}
          handleShowApplicationForm={setShowApplicationForm}
          handleShowGreetingsForm={setShowGreetingsForm}
        />
      )}
      {showGreetingsForm && (
        <GreetingsForm handleShowGreetingsForm={setShowGreetingsForm} />
      )}
      <NavBar>
        {jobDetails && <JobDetailHeader jobDetails={jobDetails} />}
      </NavBar>
      {jobDetails && (
        <JobDetailsMainContent
          jobDetails={jobDetails}
          handleShowApplicationForm={setShowApplicationForm}
        />
      )}

      {loading && <Loader />}
    </>
  );
};

export default JobDetails;
