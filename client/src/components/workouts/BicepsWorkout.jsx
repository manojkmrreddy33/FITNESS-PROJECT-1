import React from 'react';

const BicepsWorkout = () => {
  const exercises = [
    {
      name: 'Barbell Curl',
      description: 'A classic biceps exercise that focuses on overall size and strength using a barbell.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Dumbbell Curl',
      description: 'An essential exercise to isolate each bicep for balanced strength development.',
      sets: '4 sets of 10-12 reps',
    },
    {
      name: 'Hammer Curl',
      description: 'Targets the brachialis muscle, giving the biceps a thicker appearance.',
      sets: '4 sets of 10-12 reps',
    },
    {
      name: 'Concentration Curl',
      description: 'An isolation exercise that focuses on peak bicep contraction.',
      sets: '4 sets of 10-15 reps',
    },
    {
      name: 'Preacher Curl',
      description: 'A controlled exercise performed on a preacher bench for maximum bicep isolation.',
      sets: '4 sets of 10-12 reps',
    },
    {
      name: 'Cable Bicep Curl',
      description: 'Performed on a cable machine for constant tension on the biceps throughout the movement.',
      sets: '4 sets of 12-15 reps',
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
      <p>Here is a workout routine designed to build bicep strength and size. Focus on controlled movements for maximum engagement.</p>
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

export default BicepsWorkout;
