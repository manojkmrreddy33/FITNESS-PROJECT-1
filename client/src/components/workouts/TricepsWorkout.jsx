import React from 'react';

const TricepsWorkout = () => {
  const exercises = [
    {
      name: 'Close-Grip Bench Press',
      description: 'A compound exercise that emphasizes the triceps while also engaging the chest and shoulders.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Tricep Dips',
      description: 'A bodyweight exercise that targets the triceps and can be intensified with added weights.',
      sets: '4 sets of 10-15 reps',
    },
    {
      name: 'Overhead Tricep Extension',
      description: 'An isolation exercise that stretches and works the long head of the triceps.',
      sets: '3 sets of 12-15 reps',
    },
    {
      name: 'Cable Tricep Pushdown',
      description: 'A great exercise to target the lateral head of the triceps using a cable machine.',
      sets: '4 sets of 12-15 reps',
    },
    {
      name: 'Skull Crushers',
      description: 'An isolation exercise performed with a barbell or dumbbells, targeting all three heads of the triceps.',
      sets: '4 sets of 10-12 reps',
    },
    {
      name: 'Kickbacks',
      description: 'An isolation exercise focusing on the triceps, performed with dumbbells for precision.',
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
      <p>Here is a workout routine focused on building strong and defined triceps. Perform each exercise with proper form for optimal results.</p>
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

export default TricepsWorkout;
