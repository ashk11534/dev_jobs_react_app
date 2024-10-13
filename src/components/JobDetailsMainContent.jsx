const JobDetailsMainContent = function ({ handleShowApplicationForm }) {
  return (
    <div className="container">
      <div className="jobDetailsMainContent mb-3">
        <div className="jobDetailsMainContentHeader mb-4">
          <div className="jobDetailsCompanyInfo">
            <div className="timeAndType mb-1">
              <p className="jobUploadingTime text-muted">5h ago</p>
              <div className="separator"></div>
              <p className="jobType text-muted">Full Time</p>
            </div>
            <h5 className="mb-1">Senior Software Engineer</h5>
            <p className="jobLocation">Bangladesh</p>
          </div>
          <button
            className="applyNowBtn"
            onClick={() => handleShowApplicationForm(true)}
          >
            Apply Now
          </button>
        </div>

        <div className="jobDetailsMainContentBody">
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            voluptatem cupiditate qui explicabo quia perferendis tempora
            veritatis optio dolore possimus ex commodi earum corrupti, fuga
            adipisci exercitationem facere, ad harum. Hic nemo quod modi esse
            labore harum doloremque velit obcaecati ea, nisi quas expedita
            mollitia, nesciunt consequuntur atque earum officiis debitis, veniam
            placeat recusandae eius tempore reprehenderit voluptates nam.
            Minima, a. Recusandae totam, quisquam quos aspernatur molestias,
            reiciendis quibusdam dicta consequuntur beatae exercitationem
            maiores saepe eveniet nihil perspiciatis assumenda distinctio
            officia! Tempore consequuntur accusantium soluta et incidunt
            inventore aliquid necessitatibus, aspernatur dolore esse natus enim
            illo molestiae voluptatem aperiam excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsMainContent;
