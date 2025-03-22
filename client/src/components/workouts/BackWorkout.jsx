import React from 'react';

const BackWorkout = () => {
  const exercises = [
    {
      name: 'Deadlift',
      description: 'A compound exercise that works the entire back, as well as the legs and core.',
      sets: '4 sets of 6-8 reps',
    },
    {
      name: 'Pull-Ups',
      description: 'A bodyweight exercise targeting the upper back and lats. Use a pull-up bar for this exercise.',
      sets: '3 sets of 8-12 reps',
    },
    {
      name: 'Bent-Over Rows',
      description: 'A free-weight exercise focusing on the middle back and lats. Can be done with a barbell or dumbbells.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Lat Pulldowns',
      description: 'An isolation exercise for the lats using a cable machine.',
      sets: '4 sets of 12-15 reps',
    },
    {
      name: 'Seated Cable Rows',
      description: 'A machine-based exercise that works the middle back and rhomboids.',
      sets: '4 sets of 12-15 reps',
    },
    {
      name: 'T-Bar Rows',
      description: 'A free-weight exercise focusing on the middle back, performed with a T-bar machine or setup.',
      sets: '4 sets of 8-12 reps',
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
      <p>Here is a workout routine designed to build strength and size in your back. Perform each exercise with proper form for optimal results.</p>
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

export default BackWorkout;
