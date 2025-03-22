import React from 'react';

const ChestWorkout = () => {
  const exercises = [
    {
      name: 'Barbell Bench Press',
      description: 'A classic chest exercise that targets the entire chest area. Perform with a barbell to build strength and size.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Dumbbell Chest Press',
      description: 'A great alternative to the barbell bench press, helping to isolate each side of the chest.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Push-ups',
      description: 'A bodyweight exercise that helps build chest strength and endurance.',
      sets: '3 sets of 15-20 reps',
    },
    {
      name: 'Incline Dumbbell Press',
      description: 'Targets the upper chest area, performed at an inclined angle using dumbbells.',
      sets: '4 sets of 8-12 reps',
    },
    {
      name: 'Chest Dips',
      description: 'An advanced exercise that focuses on building the lower part of the chest.',
      sets: '3 sets of 10-15 reps',
    },
    {
      name: 'Cable Chest Fly',
      description: 'A great isolation movement to stretch and squeeze the chest, emphasizing the inner part of the chest.',
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
      <p>Here is a workout routine focused on building chest strength and size. Perform each exercise with proper form for the best results.</p>
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

export default ChestWorkout;
