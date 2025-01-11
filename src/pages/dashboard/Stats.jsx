import React from "react";
import { useSelector } from "react-redux";
import {
  StatsContainer,
  StatCard,
  StatTitle,
  StatValue,
} from "../../assets/wrappers/StatsStyle";

const JobStats = () => {
  const { allJobs } = useSelector((state) => state.job);

  // Function to calculate statistics
  const calculateStats = (jobs) => {
    const jobTypeCounts = jobs.reduce((acc, job) => {
      acc[job.jobType] = (acc[job.jobType] || 0) + 1;
      return acc;
    }, {});

    const jobStatusCounts = jobs.reduce((acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    }, {});

    const jobLocationCounts = jobs.reduce((acc, job) => {
      acc[job.jobLocation] = (acc[job.JobLocation] || 0) + 1;
      return acc;
    }, {});

    const jobCompanyCounts = jobs.reduce((acc, job) => {
      acc[job.company] = (acc[job.Company] || 0) + 1;
      return acc;
    }, {});

    return {
      jobTypeCounts,
      jobStatusCounts,
      jobLocationCounts,
      jobCompanyCounts,
    };
  };

  const stats = calculateStats(allJobs);

  return (
    <StatsContainer>
      <StatCard>
        <StatTitle>Full-time Jobs</StatTitle>
        <StatValue>{stats?.jobTypeCounts["full-time"]}</StatValue>
      </StatCard>
      <StatCard>
        <StatTitle>Part-time Jobs</StatTitle>
        <StatValue>{stats?.jobTypeCounts["part-time"]}</StatValue>
      </StatCard>
      <StatCard>
        <StatTitle>Remote Jobs</StatTitle>
        <StatValue>{stats?.jobTypeCounts["remote"]}</StatValue>
      </StatCard>
      <StatCard>
        <StatTitle>Pending Jobs</StatTitle>
        <StatValue>{stats?.jobStatusCounts["pending"]}</StatValue>
      </StatCard>
      <StatCard>
        <StatTitle>Interview Jobs</StatTitle>
        <StatValue>{stats?.jobStatusCounts["interview"]}</StatValue>
      </StatCard>
      <StatCard>
        <StatTitle>Declined Jobs</StatTitle>
        <StatValue>{stats?.jobStatusCounts["declined"]}</StatValue>
      </StatCard>
      {/* Add more StatCards for other stats */}
    </StatsContainer>
  );
};

export default JobStats;
