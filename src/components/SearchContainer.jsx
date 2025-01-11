import { useSelector } from "react-redux";
import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
const SearchContainer = ({ setSearchParams, filterJobs }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((p) => ({
      ...p,
      [name]: value,
    }));
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="company"
            labelText="company"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job Location"
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="jobType"
            labelText="job Type"
            handleChange={handleChange}
          />

          <button onClick={filterJobs} className="btn btn-block btn-danger">
            search
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
