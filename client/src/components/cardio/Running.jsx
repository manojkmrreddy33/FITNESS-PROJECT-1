import React from "react";

const Running = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cardio Running Tutorial</h1>
      <p style={styles.intro}>
        Cardio running is an excellent way to improve cardiovascular health,
        burn fat, and increase stamina. Whether you're a beginner or an
        experienced runner, this tutorial will guide you through the basics.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Benefits of Cardio Running</h2>
        <ul style={styles.list}>
          <li>Improves heart health</li>
          <li>Burns calories and fat</li>
          <li>Increases lung capacity</li>
          <li>Improves mental health and mood</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Cardio Running Tips</h2>
        <ul style={styles.list}>
          <li>Start with a warm-up, such as walking or light jogging.</li>
          <li>Keep a consistent pace that challenges you without overexerting.</li>
          <li>Stay hydrated and wear proper running shoes.</li>
          <li>Focus on your posture: keep your back straight and shoulders relaxed.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Beginner Running Plan</h2>
        <p>
          If you're just starting out, follow this basic plan to build your
          running stamina:
        </p>
        <ul style={styles.list}>
          <li>Week 1: Jog for 15-20 minutes, 3 times a week.</li>
          <li>Week 2: Jog for 20-30 minutes, 3-4 times a week.</li>
          <li>Week 3: Jog for 30-40 minutes, 4 times a week.</li>
          <li>Week 4: Increase duration or intensity based on your progress.</li>
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

export default Running;
