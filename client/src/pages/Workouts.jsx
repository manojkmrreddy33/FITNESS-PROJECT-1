import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WorkoutCard from "../components/cards/WorkoutCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { getWorkouts } from "../api";
import { CircularProgress, Button, Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";

const Container = styled.div` flex: 1; height: 100%; display: flex; justify-content: center; padding: 22px 0px; overflow-y: scroll; `;
const Wrapper = styled.div` flex: 1; max-width: 1600px; display: flex; gap: 22px; padding: 0px 16px; `;
const Left = styled.div` flex: 0.3; padding: 18px; border: 1px solid #ccc; border-radius: 14px; background: #f9f9f9; `;
const Right = styled.div` flex: 1; `;
const Section = styled.div` display: flex; flex-direction: column; padding: 16px; gap: 12px; `;
const SecTitle = styled.div` font-size: 20px; font-weight: bold; color: #333; `;

const Workouts = () => {
  const dispatch = useDispatch();
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [planType, setPlanType] = useState("Bro Split");
  const [weeklyPlan, setWeeklyPlan] = useState({});

  const defaultWorkouts = {
    "Bro Split": {
      Monday: "Chest",
      Tuesday: "Back",
      Wednesday: "Shoulders",
      Thursday: "Biceps",
      Friday: "Triceps",
      Saturday: "Legs",
      Sunday: "Rest",
    },
    "Push-Pull-Legs": {
      Monday: "Chest, Shoulders, Triceps",
      Tuesday: "Back, Biceps",
      Wednesday: "Legs",
      Thursday: "Chest, Shoulders, Triceps",
      Friday: "Back, Biceps",
      Saturday: "Legs",
      Sunday: "Rest",
    },
    "Upper-Lower": {
      Monday: "Upper Body (Chest, Shoulders, Triceps, Back, Biceps)",
      Tuesday: "Rest",
      Wednesday: "Lower Body (Quads, Hamstrings, Calves)",
      Thursday: "Rest",
      Friday: "Upper Body",
      Saturday: "Lower Body",
      Sunday: "Rest",
    },
  };

  useEffect(() => {
    setWeeklyPlan(defaultWorkouts[planType]);
  }, [planType]);

  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, date ? `?date=${date}` : "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      setLoading(false);
    });
  };

  useEffect(() => { getTodaysWorkout(); }, [date]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Section>
            <SecTitle>Select Date</SecTitle>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)} />
            </LocalizationProvider>
          </Section>

          <Section>
            <SecTitle>Workout Plan</SecTitle>
            <Select value={planType} onChange={(e) => setPlanType(e.target.value)} fullWidth>
              <MenuItem value="Bro Split">Bro Split</MenuItem>
              <MenuItem value="Push-Pull-Legs">Push-Pull-Legs</MenuItem>
              <MenuItem value="Upper-Lower">Upper-Lower</MenuItem>
            </Select>
          </Section>

          <Section>
            <SecTitle>Weekly Plan</SecTitle>
            {Object.entries(weeklyPlan).map(([day, workout]) => (
              <p key={day}><strong>{day}:</strong> {workout}</p>
            ))}
          </Section>

          <Button variant="contained" color="primary" fullWidth onClick={getTodaysWorkout}>
            Add Workout
          </Button>
        </Left>

        <Right>
          <Section>
            <SecTitle>Today's Workout</SecTitle>
            {loading ? <CircularProgress /> : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {todaysWorkouts.map((workout) => (
                  <WorkoutCard key={workout.id} workout={workout} />
                ))}
              </div>
            )}
          </Section>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Workouts;
