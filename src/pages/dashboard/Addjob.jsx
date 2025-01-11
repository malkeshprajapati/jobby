import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashBoardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setAllJobs, editJob } from "../../features/jobs/jobSlice";
import { useEffect, useState } from "react";
const Addjob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
    allJobs,
  } = useSelector((store) => store.job);

  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    position: "",
    company: "",
    status: "",
    jobLocation: "",
    jobType: "",
  });

  useEffect(() => {
    if (editJobId) {
      const updatePayload = allJobs?.filter((item) => item.id === editJobId)[0];
      setPayload(updatePayload);
    }
  }, [editJobId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payload?.length === 0) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    editJobId
      ? dispatch(editJob({ ...payload, id: editJobId }))
      : dispatch(setAllJobs(payload));
    setPayload();
  };

  const handleJobInput = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const clearInputs = (e) => {
    e.preventDefault();
    setPayload({});
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{editJobId ? "edit job" : "add job"}</h3>

        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            value={payload?.position}
            labelText="position"
            name="position"
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            labelText="company"
            name="company"
            handleChange={handleJobInput}
            value={payload?.company}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            handleChange={handleJobInput}
            value={payload?.jobLocation}
          />
          {/* status */}
          <FormRowSelect
            name="status"
            handleChange={handleJobInput}
            list={statusOptions}
            value={payload?.status}
          />
          {/* job type*/}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            handleChange={handleJobInput}
            list={jobTypeOptions}
            value={payload?.jobType}
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="reset"
              onClick={(e) => clearInputs(e)}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default Addjob;
