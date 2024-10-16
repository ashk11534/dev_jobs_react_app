import { useEffect, useState } from "react";
import Item from "./Item";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const JobItems = function () {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8089/dev-jobs")
      .then((res) => res.json())
      .then((data) => setAllJobs(data.dev_jobs));
  }, []);

  return (
    <>
      <NavBar>
        <SearchBar />
      </NavBar>
      <div className="container">
        <div className="jobsContainer">
          {allJobs.map((job) => (
            <Item key={job.job_id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobItems;
