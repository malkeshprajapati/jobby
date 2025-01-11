import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;

  h2 {
    text-transform: none;
  }

  & > h5 {
    font-weight: 700;
  }

  .jobs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; /* Add some gap between cards */
    justify-content: center; /* Center cards */
    .job-card {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      padding: 10px;
      margin: 5px;
      border-radius: 10px;
      width: 100%; /* Full width on mobile */
      // max-width: 500px; /* Limit max width for better appearance */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow for better look */
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px); /* Slightly lift the card */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
      }
    }
    .job-detail {
      display: flex;
      justify-content: space-between;
      span:first-child {
        font-weight: bolder;
        margin-right: 10px;
        color: #3b82f6;
      }
      span {
        margin: 10px 0;
      }
    }
  }
  .delete-icon {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    svg {
      cursor: pointer;
      &:hover {
        color: red;
        font-size: 18px;
      }
    }
  }

  @media (min-width: 768px) {
    .job-card {
      max-width: 300px; /* Half width on tablet */
    }
  }

  @media (min-width: 992px) {
    .job-card {
      max-width: 300px; /* Adjust width on desktop */
    }
  }
`;

export default Wrapper;
