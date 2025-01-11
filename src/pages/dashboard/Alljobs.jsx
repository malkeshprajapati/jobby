import { useEffect, useState } from "react";
import { SearchContainer, JobsContainer } from "../../components";
import { useSelector } from "react-redux";

const AllJobs = () => {
  const { allJobs } = useSelector((state) => state.job);
  const [jobs, setJobs] = useState(allJobs);
  const [searchParams, setSearchParams] = useState({
    position: "",
    company: "",
    jobLocation: "",
    jobType: "",
    status: "",
  });

  let filtered = [];

  const filterJobs = (e) => {
    e.preventDefault();

    const toSearch = Object?.values(searchParams).filter(
      (item) => item !== "",
    ).length;

    if (toSearch) {
      filtered = allJobs.filter((job) => {
        return (
          job.position.toLowerCase() === searchParams.position.toLowerCase() ||
          job.company.toLowerCase() === searchParams.company.toLowerCase() ||
          job.jobLocation.toLowerCase() ===
            searchParams.jobLocation.toLowerCase() ||
          job.jobType.toLowerCase() === searchParams.jobType.toLowerCase()
        );
      });
      setJobs(filtered);
    }
  };

  useEffect(() => {
    setJobs(allJobs);
  }, [allJobs]);

  return (
    <>
      <SearchContainer
        setSearchParams={setSearchParams}
        filterJobs={filterJobs}
      />
      <JobsContainer jobs={jobs} />
    </>
  );
};
export default AllJobs;
