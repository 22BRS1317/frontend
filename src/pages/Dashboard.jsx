import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

const theme = {
  text_primary: "#666",
  background: "#f9f9f9",
  border: "#ddd",
  shadow: "rgba(0, 0, 0, 0.1)",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  padding: 0 1rem;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 1rem;
  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 2rem;
  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 5rem;
  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#name
-excesrice_name
-5 setsX15 reps
-30 kg
-10 min`);

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };
  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await addWorkout(token, { workoutString: workout })
     .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonLoading(false);
      })
     .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <Title>Dashboard</Title>
          <FlexWrap>
            {counts.map((item) => (
              <CountsCard item={item} data={data} />
            ))}
          </FlexWrap>

          <FlexWrap>
            <WeeklyStatCard data={data} />
            <CategoryChart data={data} />
            <AddWorkout
              workout={workout}
              setWorkout={setWorkout}
              addNewWorkout={addNewWorkout}
              buttonLoading={buttonLoading}
            />
          </FlexWrap>

          <Section>
            <Title>Todays Workouts</Title>
            <CardWrapper>
              {todaysWorkouts.map((workout) => (
                <WorkoutCard workout={workout} />
              ))}
            </CardWrapper>
          </Section>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;