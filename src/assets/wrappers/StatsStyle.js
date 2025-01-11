import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const StatCard = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 30%;
  max-width: 30%;
  text-align: center;
`;

export const StatTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const StatValue = styled.p`
  font-size: 2rem;
  margin: 0;
  color: #007bff;
`;
