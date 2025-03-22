import React from "react";

const Walking = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Walking Tutorial</h1>
      <p style={styles.intro}>
        Walking is one of the simplest and most effective forms of exercise.
        It's great for improving cardiovascular health, enhancing mood, and
        staying fit. This tutorial will guide you through the basics of walking
        as a fitness routine.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Benefits of Walking</h2>
        <ul style={styles.list}>
          <li>Improves cardiovascular health</li>
          <li>Helps maintain a healthy weight</li>
          <li>Boosts mood and mental health</li>
          <li>Improves joint health and flexibility</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Walking Tips</h2>
        <ul style={styles.list}>
          <li>Maintain good posture—stand tall and keep your shoulders relaxed.</li>
          <li>Wear comfortable shoes with good support.</li>
          <li>Start with a warm-up walk before increasing your pace.</li>
          <li>Focus on your breathing to avoid fatigue.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Beginner Walking Plan</h2>
        <p>
          If you're just getting started with walking, follow this beginner's
          plan to build your stamina and establish a regular walking routine:
        </p>
        <ul style={styles.list}>
          <li>Week 1: Walk for 20-30 minutes, 3 times a week.</li>
          <li>Week 2: Walk for 30-40 minutes, 3-4 times a week.</li>
          <li>Week 3: Walk for 40-50 minutes, 4 times a week.</li>
          <li>Week 4: Increase walking time or speed based on your progress.</li>
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

export default Walking;
