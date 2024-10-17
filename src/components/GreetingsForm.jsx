import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Loader from "./Loader";

const GreetingsForm = function({handleShowGreetingsForm}){

    return <div className="greetingsFormContainer">
        <div className="greetingsForm">
        <div className="greetingsFormHeader">
          <div>
            <MdCancel className="greetingsFormCloseBtn" onClick={() => handleShowGreetingsForm(false)}/>
          </div>
        </div>

        <div className="greetingsFormBody">
            <div className="greetingsFormCheckBtnContainer mb-3">
                <FaCircleCheck className="greetingsFormCheckBtn"/>
            </div>
            <h5 className="text-center">Thanks for your application.</h5>
        </div>
        </div>
    </div>;
}

export default GreetingsForm;