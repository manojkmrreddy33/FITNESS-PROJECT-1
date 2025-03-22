import React from "react";

const Swimming = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Swimming Tutorial</h1>
      <p style={styles.intro}>
        Swimming is a full-body workout that improves cardiovascular health,
        builds muscle strength, and enhances endurance. This tutorial will
        introduce you to the basics of swimming and provide helpful tips for
        beginners.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Benefits of Swimming</h2>
        <ul style={styles.list}>
          <li>Improves cardiovascular health</li>
          <li>Strengthens muscles and increases flexibility</li>
          <li>Increases endurance and stamina</li>
          <li>Low-impact exercise, great for joint health</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Swimming Tips</h2>
        <ul style={styles.list}>
          <li>Start with warm-up stretches to avoid muscle strain.</li>
          <li>Focus on proper breathing techniques—breathe rhythmically with strokes.</li>
          <li>Alternate between strokes to prevent fatigue and target different muscle groups.</li>
          <li>Ensure good body position in the water—maintain a straight line from head to feet.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Beginner Swimming Plan</h2>
        <p>
          If you're new to swimming, this basic plan will help you gradually
          build your stamina and technique:
        </p>
        <ul style={styles.list}>
          <li>Week 1: Swim for 15-20 minutes, 3 times a week.</li>
          <li>Week 2: Swim for 20-30 minutes, 3-4 times a week.</li>
          <li>Week 3: Swim for 30-40 minutes, 4 times a week.</li>
          <li>Week 4: Increase the duration or intensity based on progress.</li>
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

export default Swimming;
