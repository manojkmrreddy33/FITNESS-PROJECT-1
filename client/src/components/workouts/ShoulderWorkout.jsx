import React from 'react';

const ShoulderWorkout = () => {
  const exercises = [
    {
      name: 'Overhead Press',
      description: 'A compound exercise that works the deltoids, triceps, and upper chest. Use a barbell or dumbbells.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Lateral Raises',
      description: 'An isolation exercise that targets the lateral deltoids for shoulder width and shape.',
      sets: '4 sets of 12-15 reps',
    },
    {
      name: 'Front Raises',
      description: 'An isolation exercise focusing on the anterior deltoids. Can be done with dumbbells or a plate.',
      sets: '3 sets of 12-15 reps',
    },
    {
      name: 'Arnold Press',
      description: 'A variation of the overhead press that engages all heads of the deltoid muscles.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Face Pulls',
      description: 'An exercise that targets the rear deltoids and helps improve posture. Use a cable machine.',
      sets: '4 sets of 12-15 reps',
    },
    {
      name: 'Reverse Flys',
      description: 'A great exercise for the rear deltoids, performed with dumbbells or a machine.',
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
      <p>Here is a workout routine focused on building strong and defined shoulders. Ensure proper form for the best results.</p>
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

export default ShoulderWorkout;
