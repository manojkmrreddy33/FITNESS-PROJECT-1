import React from "react";

const Rowing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Rowing Tutorial</h1>
      <p style={styles.intro}>
        Rowing is a full-body workout that engages both your upper and lower
        body, improving cardiovascular health, building strength, and enhancing
        endurance. This tutorial will provide you with the basics of rowing and
        tips for beginners.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Benefits of Rowing</h2>
        <ul style={styles.list}>
          <li>Improves cardiovascular health</li>
          <li>Strengthens upper body, core, and legs</li>
          <li>Increases stamina and endurance</li>
          <li>Low-impact exercise, reducing joint stress</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Rowing Tips</h2>
        <ul style={styles.list}>
          <li>Start with proper form: sit upright, keep your back straight, and engage your core.</li>
          <li>Use your legs first to push off, then engage your core and pull with your arms.</li>
          <li>Maintain a smooth and consistent stroke rhythm.</li>
          <li>Start with short sessions and gradually increase intensity and duration.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Beginner Rowing Plan</h2>
        <p>
          If you're new to rowing, this plan will help you build strength and
          endurance over the course of four weeks:
        </p>
        <ul style={styles.list}>
          <li>Week 1: Row for 10-15 minutes, 3 times a week.</li>
          <li>Week 2: Row for 15-20 minutes, 3-4 times a week.</li>
          <li>Week 3: Row for 20-30 minutes, 4 times a week.</li>
          <li>Week 4: Increase intensity or duration based on progress.</li>
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

export default Rowing;
