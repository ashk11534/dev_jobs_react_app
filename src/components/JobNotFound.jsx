import { FaRegSadTear } from "react-icons/fa";

const JobNotFound = function(){
    return <div className="jobNotFound">
        <h5 className="mb-3">Nothing Found!!!</h5>
        <FaRegSadTear className=" jobNotFoundIcon"/>
    </div>;
}

export default JobNotFound;