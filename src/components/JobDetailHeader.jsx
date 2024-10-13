import { Link } from "react-router-dom";

const JobDetailHeader = function () {
  return (
    <div className="jobDetailHeader">
      <div className="companyLogoAndDesc">
        <div className="jobDetailCompanyLogo">
          <img src="../../images/company_logo_2.png" />
        </div>
        <div className="jobDetailCompanyDesc">
          <h5>Scoot</h5>
          <p className="text-muted">scoot.com</p>
        </div>
      </div>
      <Link to="/" className="companyLink">
        Company Site
      </Link>
    </div>
  );
};

export default JobDetailHeader;
