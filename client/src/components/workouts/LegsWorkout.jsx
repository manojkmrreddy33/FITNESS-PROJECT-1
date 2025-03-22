import React from 'react';

const LegsWorkout = () => {
  const exercises = [
    {
      name: 'Squats',
      description: 'A foundational lower-body exercise that targets the quadriceps, hamstrings, and glutes.',
      sets: '4 sets of 10-12 reps',
    },
    {
      name: 'Lunges',
      description: 'A unilateral movement that improves balance and strengthens the legs and glutes.',
      sets: '3 sets of 12-15 reps per leg',
    },
    {
      name: 'Deadlifts',
      description: 'A compound movement that targets the hamstrings, glutes, and lower back.',
      sets: '4 sets of 8-10 reps',
    },
    {
      name: 'Leg Press',
      description: 'An effective machine-based exercise to build strength in the quads and hamstrings.',
      sets: '4 sets of 10-12 reps',
    },
    {
      name: 'Calf Raises',
      description: 'Focuses on building the calf muscles, improving ankle stability and strength.',
      sets: '3 sets of 15-20 reps',
    },
    {
      name: 'Step-Ups',
      description: 'A functional exercise that strengthens the quads, hamstrings, and glutes.',
      sets: '3 sets of 12-15 reps per leg',
    },
    {
      name: 'Bulgarian Split Squats',
      description: 'A challenging unilateral exercise that targets the quads, hamstrings, and glutes.',
      sets: '3 sets of 8-10 reps per leg',
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
      <p>Here is a workout routine tailored to build strength and endurance in your legs. Focus on form to maximize results and prevent injuries.</p>
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

export default LegsWorkout;
