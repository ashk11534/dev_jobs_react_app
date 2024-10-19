import { useRef } from "react";

const SearchBar = function ({ setAllJobs, setLoading }) {
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const fullTimeRef = useRef(null);

  const handleJobSearch = function (e) {
    e.preventDefault();

    if (
      titleRef.current.value === "" &&
      locationRef.current.value === "" &&
      fullTimeRef.current.checked === false
    ) {
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("title", titleRef.current.value);
    formData.append("location", locationRef.current.value);
    formData.append("fullTime", fullTimeRef.current.checked);

    fetch("http://localhost:8085/job-search", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          titleRef.current.value = "";
          locationRef.current.value = "";
          fullTimeRef.current.checked = false;

          setAllJobs(data.dev_jobs);

          setLoading(false);
        }
      });
  };

  return (
    <form className="navSearchBar" onSubmit={handleJobSearch}>
      <input
        type="text"
        id="filterByLCE"
        placeholder="Filter by title, companies..."
        ref={titleRef}
      />
      <input
        type="text"
        id="filterByLocation"
        placeholder="Filter by country"
        ref={locationRef}
      />
      <div className="filterByFTandSubmit">
        <div className="filterByFT">
          <input type="checkbox" id="filterByFullTime" ref={fullTimeRef} />
          <label htmlFor="filterByFullTime">Full Time Only</label>
        </div>
        <button className="searchBtn">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
