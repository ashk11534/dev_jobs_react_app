const JobDetailsMainContent = function ({ jobDetails, handleShowApplicationForm }) {

  return (
    <div className="container">
      <div className="jobDetailsMainContent mb-3">
        <div className="jobDetailsMainContentHeader mb-4">
          <div className="jobDetailsCompanyInfo">
            <div className="timeAndType mb-1">
              <p className="jobUploadingTime text-muted">{jobDetails.created_date}</p>
              <div className="separator"></div>
              <p className="jobType text-muted">{jobDetails.job_type === 'full_time' ? 'Full Time' : 'Part Time'}</p>
            </div>
            <h5 className="mb-1">{jobDetails.job_title}</h5>
            <p className="jobLocation">{jobDetails.country}</p>
          </div>
          <button
            className="applyNowBtn"
            onClick={() => handleShowApplicationForm(true)}
          >
            Apply Now
          </button>
        </div>

        <div className="jobDetailsMainContentBody">
          <p className="text-muted">
            {jobDetails.job_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsMainContent;
