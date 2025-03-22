import React, { useState } from 'react';
import chest from './muscles/chest.jpg';
import shoulder from './muscles/shoulder.jpg';
import triceps from './muscles/tricpes.jpg';
import back from './muscles/back.jpg';
import biceps from './muscles/biceps.jpg';
import forearms from './muscles/forearms.jpg';
import legs from './muscles/legs.jpg';
import abs from './muscles/abs.jpg';

import running from './cardio/running.jpg';
import cycling from './cardio/cycling.jpg';
import swimming from './cardio/swiming.jpg';
import rowing from './cardio/rowing.jpg';
import walking from './cardio/walking.jpg';

import ChestWorkout from '../components/workouts/ChestWorkout';
import BackWorkout from '../components/workouts/BackWorkout';
import TricepsWorkout from '../components/workouts/TricepsWorkout';
import ShoulderWorkout from '../components/workouts/ShoulderWorkout';
import BicepsWorkout from '../components/workouts/BicepsWorkout';
import ForearmsWorkout from '../components/workouts/ForearmsWorkout';
import LegsWorkout from '../components/workouts/LegsWorkout';
import AbsWorkout from '../components/workouts/AbsWorkout';

import Running from '../components/cardio/Running';
import Cycling from '../components/cardio/Cycling';
import Swimming from '../components/cardio/Swimming';
import Rowing from '../components/cardio/Rowing';
import Walking from '../components/cardio/Walking';


const muscleImages = {
  weightTraining: {
    Chest: chest,
    Shoulders: shoulder,
    Triceps: triceps,
    Back: back,
    Biceps: biceps,
    Forearms: forearms,
    Legs: legs,
    Abs: abs,
  },
  cardio: {
    Running: running,
    Cycling: cycling,
    Swimming: swimming,
    Rowing: rowing,
    Walking: walking,
  },
};

const TutorialSection = () => {
  const [selectedWorkout, setSelectedWorkout] = useState('weightTraining');
  const [selectedMuscle, setSelectedMuscle] = useState('');

  const workoutTypes = Object.keys(muscleImages);

  const handleWorkoutChange = (event) => {
    setSelectedWorkout(event.target.value);
    setSelectedMuscle(''); // Reset selected muscle when workout type changes
  };

  const handleMuscleChange = (muscle) => {
    setSelectedMuscle(muscle);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        maxWidth: '100%',
        overflowY: 'auto',
      }}
    >
      <h2>Select Workout Type</h2>
      {/* Dropdown for selecting workout type */}
      <select
        value={selectedWorkout}
        onChange={handleWorkoutChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
        aria-label="Select a workout type"
      >
        {workoutTypes.map((type) => (
          <option key={type} value={type}>
            {type === 'weightTraining' ? 'Weight Training' : 'Cardio'}
          </option>
        ))}
      </select>
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth:"1200px",
        }}
      > <h2>Select a Muscle Group</h2>
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
          }}
        >
          
          {Object.entries(muscleImages[selectedWorkout]).map(([muscle, image]) => (
            <button
              key={muscle}
              onClick={() => handleMuscleChange(muscle)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                backgroundColor: '#fff',
                width: '200px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <img
                src={image}
                alt={muscle}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{muscle}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Display selected workout and muscle */}
      {selectedMuscle && (
        <article
          style={{
            marginTop: '20px',
            textAlign: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            width: '80%',
          }}
        > 
          <h3>
            {selectedWorkout === 'weightTraining' ? 'Weight Training' : 'Cardio'} - {selectedMuscle}
          </h3>
          {selectedMuscle === 'Chest' && <ChestWorkout />}
          {selectedMuscle === 'Back' && <BackWorkout/>}
          {selectedMuscle === 'Triceps' && <TricepsWorkout/>}
          {selectedMuscle === 'Shoulders' && <ShoulderWorkout/>}
          {selectedMuscle === 'Biceps' && <BicepsWorkout/>}
          {selectedMuscle === 'Forearms' && <ForearmsWorkout/>}
          {selectedMuscle === 'Legs' && <LegsWorkout/>}
          {selectedMuscle === 'Abs' && <AbsWorkout/>}
          {selectedMuscle === 'Running' && <Running/>}
          {selectedMuscle === 'Walking' && <Walking/>}
          {selectedMuscle === 'Swimming' && <Swimming/>}
          {selectedMuscle === 'Cycling' && <Cycling/>}
          {selectedMuscle === 'Rowing' && <Rowing/>}


          
        </article>
      )}
    </section>
  );
};

export default TutorialSection;
