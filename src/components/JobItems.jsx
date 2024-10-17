import { useEffect, useState } from "react";

import Item from "./Item";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import JobNotFound from "./JobNotFound";

const JobItems = function () {
  const [allJobs, setAllJobs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [renderComponent, setRenderComponent] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8089/dev-jobs")
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data.dev_jobs);

        setLoading(false);

        setRenderComponent(true);
      });
  }, [renderComponent]);

  return (
    <>
      <NavBar setRenderComponent={setRenderComponent}>
        <SearchBar setAllJobs={setAllJobs} setLoading={setLoading} />
      </NavBar>
      <div className="container">
        <div className="jobsContainer">
          {!loading && allJobs && allJobs.map((job) => (
            <Item key={job.job_id} job={job} />
          ))}

          {loading && <Loader/> }    

          {allJobs && allJobs.length === 0 && !loading && <JobNotFound/> }   
        </div>
      </div>
    </>
  );
};

export default JobItems;
