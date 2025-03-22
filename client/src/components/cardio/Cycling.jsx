import React from "react";

const Cycling = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cycling Tutorial</h1>
      <p style={styles.intro}>
        Cycling is a great way to improve cardiovascular fitness, increase leg
        strength, and enjoy the outdoors. This tutorial will help you get
        started and provide tips for cycling efficiently.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Benefits of Cycling</h2>
        <ul style={styles.list}>
          <li>Improves cardiovascular health</li>
          <li>Strengthens leg muscles</li>
          <li>Burns calories and fat</li>
          <li>Reduces stress and boosts mental health</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Cycling Tips</h2>
        <ul style={styles.list}>
          <li>Ensure your bike is properly adjusted to fit your body.</li>
          <li>Wear a helmet for safety.</li>
          <li>Start with shorter rides and gradually increase your distance.</li>
          <li>Use a gear appropriate for your speed and the terrain.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Beginner Cycling Plan</h2>
        <p>
          If you're new to cycling, follow this basic plan to build endurance:
        </p>
        <ul style={styles.list}>
          <li>Week 1: Cycle for 20-30 minutes, 3 times a week.</li>
          <li>Week 2: Cycle for 30-40 minutes, 3-4 times a week.</li>
          <li>Week 3: Cycle for 40-50 minutes, 4 times a week.</li>
          <li>Week 4: Increase duration or speed based on your progress.</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    textAlign: "left", // Align text to the left
  },
  title: {
    fontSize: "36px",
    color: "#4CAF50",
  },
  intro: {
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.6",
  },
  section: {
    marginTop: "20px",
  },
  subTitle: {
    fontSize: "24px",
    color: "#333",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
    color: "#555",
  },
};

export default Cycling;
