import { MdCancel } from "react-icons/md";

const ApplicationForm = function ({ handleShowApplicationForm }) {
  return (
    <div className="applyNowFormContainer">
      <div className="applyNowForm">
        <div className="applyNowFormHeader">
          <h5>Apply for the job</h5>
          <div onClick={() => handleShowApplicationForm(false)}>
            <MdCancel className="applyFormCloseBtn" />
          </div>
        </div>
        <div className="applyNowFormBody">
          <p className="formInputLabel mb-1">Cover Letter</p>
          <textarea id="coverLetterInput" className="mb-3" rows={8}></textarea>

          <p className="formInputLabel mb-1">Resume (Only PDF)</p>
          <input type="file" id="resumeInput" accept="application/pdf" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
