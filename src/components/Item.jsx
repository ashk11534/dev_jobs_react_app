import { Link } from "react-router-dom";

const Item = function ({ job }) {
  return (
    <Link to={`/job-details/${job.job_id}`} className="jobItem">
      <div className="companyLogo">
        <img src={`data:image/png;base64,${job.company_logo}`} />
      </div>
      <div className="timeAndType mb-2 mt-3">
        <p className="jobUploadingTime text-muted">{job.created_date}</p>
        <div className="separator"></div>
        <p className="jobType text-muted">
          {job.job_type === "full_time" ? "Full Time" : "Part Time"}
        </p>
      </div>
      <h6 className="jobName mb-2">{job.job_title}</h6>
      <p className="companyName mb-4 text-muted">{job.company_name}</p>
      <p className="jobLocation">{job.country}</p>
    </Link>
  );
};

export default Item;
