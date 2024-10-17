import { useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading'

const ApplicationForm = function ({ handleShowApplicationForm, handleShowGreetingsForm }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailRef = useRef(null);
  const coverLetterRef = useRef(null);
  const resumeRef = useRef(null);

  const handleSubmit = function(){

    if(!resumeRef.current.files[0]){
      return;
    }

    setFormSubmitted(true);

    const formData = new FormData();

    formData.append('email', emailRef.current.value);
    formData.append('coverLetter', coverLetterRef.current.value);
    formData.append('resume', resumeRef.current.files[0]);


    fetch('http://localhost:8085/job-application', {
      method: 'POST',
      body: formData
    }).then(res => res.json()).then(data => {
      if (data.code === 200){
        emailRef.current.value = '';
        coverLetterRef.current.value = '';
        resumeRef.current.value = '';

        handleShowApplicationForm(false);
        handleShowGreetingsForm(true);
      }
    })
  }

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
          <p className="formInputLabel mb-1">Email</p>
          <input type="email" id="emailInput" className="mb-3" ref={emailRef}/>

          <p className="formInputLabel mb-1">Cover Letter</p>
          <textarea id="coverLetterInput" className="mb-3" rows={8} ref={coverLetterRef}></textarea>

          <p className="formInputLabel mb-1">Resume (Only PDF)</p>
          <input type="file" id="resumeInput" accept="application/pdf" className="mb-4" ref={resumeRef} />

          <br/>

          {!formSubmitted && <button className="applicationSubmitBtn" onClick={handleSubmit}>Submit</button>}
          {formSubmitted && <button className="applicationSubmitBtn applicationSubmitDoneBtn"><UseAnimations animation={loading} strokeColor="#fff" /></button>}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
