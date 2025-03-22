import React from 'react';

const ForearmsWorkout = () => {
  const exercises = [
    {
      name: 'Wrist Curls',
      description: 'A focused exercise for strengthening the flexor muscles in your forearms.',
      sets: '4 sets of 12-15 reps',
    },
    {
      name: 'Reverse Wrist Curls',
      description: 'Targets the extensor muscles on the top of the forearms.',
      sets: '4 sets of 12-15 reps',
    },
    {
      name: 'Farmer’s Carry',
      description: 'Improves grip strength and forearm endurance by holding heavy weights and walking.',
      sets: '4 sets of 30-45 seconds',
    },
    {
      name: 'Reverse Curls',
      description: 'A compound movement that targets the brachioradialis along with the biceps.',
      sets: '4 sets of 10-12 reps',
    },
    {
      name: 'Plate Pinch',
      description: 'A grip-strengthening exercise performed by pinching two weight plates together.',
      sets: '3 sets of 30 seconds hold',
    },
    {
      name: 'Towel Twist',
      description: 'Mimics wringing out a towel, effectively working the forearms and improving grip.',
      sets: '3 sets of 15 twists per hand',
    },
  ];

  return (
    <section
      style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        margin: '10px auto',
      }}
    >
      <p>Here is a workout routine designed to strengthen your forearms and improve grip strength. Perform each exercise with control for the best results.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {exercises.map((exercise, index) => (
          <div
            key={index}
            style={{
              padding: '15px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p><strong>Sets:</strong> {exercise.sets}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForearmsWorkout;
