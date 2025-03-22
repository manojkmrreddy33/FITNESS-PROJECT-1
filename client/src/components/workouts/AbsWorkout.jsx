import React from 'react';

const AbsWorkout = () => {
  const exercises = [
    {
      name: 'Plank',
      description: 'A core stabilization exercise that strengthens the abs and lower back.',
      sets: '3 sets of 30-60 seconds',
    },
    {
      name: 'Crunches',
      description: 'A classic ab exercise that targets the upper abdominal muscles.',
      sets: '3 sets of 15-20 reps',
    },
    {
      name: 'Bicycle Crunches',
      description: 'An effective exercise that works both the upper and lower abs along with obliques.',
      sets: '3 sets of 20 reps per side',
    },
    {
      name: 'Leg Raises',
      description: 'Targets the lower abdominal muscles, great for building strength and definition.',
      sets: '3 sets of 12-15 reps',
    },
    {
      name: 'Russian Twists',
      description: 'A twisting movement that focuses on the obliques and improves core rotation.',
      sets: '3 sets of 15-20 reps per side',
    },
    {
      name: 'Mountain Climbers',
      description: 'A dynamic exercise that builds core strength while burning calories.',
      sets: '3 sets of 30 seconds',
    },
    {
      name: 'Hanging Leg Raises',
      description: 'A challenging movement that strengthens the lower abs and hip flexors.',
      sets: '3 sets of 10-12 reps',
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
      <p>Here’s a comprehensive abs workout routine to help strengthen and define your core. Consistency and proper form are key to achieving results.</p>
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

export default AbsWorkout;
