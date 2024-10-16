import { Link } from "react-router-dom";

const JobDetailHeader = function ({jobDetails}) {
  return (
    <div className="jobDetailHeader">
      <div className="companyLogoAndDesc">
        <div className="jobDetailCompanyLogo">
          <img src={`data:image/png;base64,${jobDetails.company_logo}`} />
        </div>
        <div className="jobDetailCompanyDesc">
          <h5>{jobDetails.company_name}</h5>
          <p className="text-muted">{jobDetails.company_website_url}</p>
        </div>
      </div>
      <a href={`http://${jobDetails.company_website_url}`} className="companyLink">
        Company Site
      </a>
    </div>
  );
};

export default JobDetailHeader;
