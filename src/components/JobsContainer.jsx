import React from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteJob, setEditJobId } from "../features/jobs/jobSlice";
import { useNavigate } from "react-router-dom";

const JobsContainer = ({ jobs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (jobs?.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  const JobDelete = (id) => {
    dispatch(deleteJob(id));
  };

  const setUpdateId = (id) => {
    dispatch(setEditJobId(id));
    navigate("/add-job");
  };

  return (
    <Wrapper>
      <h5>
        {jobs.length} job{jobs?.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return (
            <div className="job-card" key={job?.id}>
              <div className="job-detail">
                <span>Position:</span>
                <span>{job?.position} </span>
              </div>
              <div className="job-detail">
                <span>Company:</span>
                <span>{job?.company} </span>
              </div>
              <div className="job-detail">
                <span>Job Location:</span>
                <span>{job?.jobLocation} </span>
              </div>
              <div className="job-detail">
                <span>Job Type: </span>
                <span>{job?.jobType} </span>
              </div>
              <div className="job-detail">
                <span>Status:</span>
                <span>{job?.status} </span>
              </div>
              <div className="delete-icon">
                <FaEdit onClick={() => setUpdateId(job?.id)} />
                <MdDelete onClick={() => JobDelete(job?.id)} />
              </div>
            </div>
          );
        })}
      </div>
      {/* {numOfPages > 1 && <PageBtnContainer />} */}
    </Wrapper>
  );
};

export default JobsContainer;
