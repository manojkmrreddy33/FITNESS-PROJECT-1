import React from "react";

const AboutGym = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Our Gym</h1>
      <p style={styles.intro}>
        Welcome to our state-of-the-art fitness center, where your journey to
        health and wellness begins. Our gym is designed to cater to people of all
        fitness levels, from beginners to athletes. With a focus on personalized
        training and supportive community, we are here to help you achieve your
        fitness goals.
      </p>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is simple: to inspire, motivate, and provide the tools for
          you to lead a healthier and more active life. We believe that fitness
          should be inclusive, fun, and attainable for everyone. Whether you're
          looking to lose weight, build muscle, or increase your overall fitness,
          we are committed to guiding you every step of the way.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>What We Offer</h2>
        <div style={styles.features}>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Top-Notch Equipment</h3>
            <p style={styles.text}>We provide the latest in cardio and strength training equipment to ensure you get the most out of every workout.</p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Personal Training</h3>
            <p style={styles.text}>Our certified trainers will work with you to create a custom fitness plan tailored to your needs and goals.</p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Group Fitness Classes</h3>
            <p style={styles.text}>Join one of our many group classes, including Yoga, Pilates, Zumba, HIIT, and more for a fun and motivating workout.</p>
          </div>
          <div style={styles.feature}>
            <h3 style={styles.featureTitle}>Wellness Guidance</h3>
            <p style={styles.text}>We offer expert advice on nutrition, recovery, and mental well-being to help you achieve a balanced and healthy lifestyle.</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subTitle}>Why Choose Us?</h2>
        <p style={styles.text}>
          Choosing the right gym is a big decision, and we understand that. Here’s why our gym stands out:
        </p>
        <ul style={styles.list}>
          <li>Our gym is equipped with the latest fitness technology and equipment.</li>
          <li>We offer a supportive, non-intimidating environment where everyone is welcome.</li>
          <li>Our experienced trainers are passionate about helping you reach your personal goals.</li>
          <li>We offer flexible membership options to suit your schedule and budget.</li>
          <li>We host community events and challenges to keep you motivated and engaged.</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.subTitle}>Join Us Today!</h2>
        <p style={styles.text}>
          Whether you're just starting your fitness journey or you're looking to take your training to the next level, our gym has everything you need to succeed. Come visit us and take a tour of our facilities. We look forward to helping you achieve your fitness goals!
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    minHeight: "100vh", // Ensures the container stretches fully
    overflowY: "scroll", // Enables vertical scrolling
    marginBottom: "20px", // Adds space at the bottom
    position: "relative", // Allows scroll bar to appear on the right
  },
  title: {
    fontSize: "40px",
    color: "#2C3E50",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  intro: {
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.8",
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    marginTop: "30px",
  },
  subTitle: {
    fontSize: "28px",
    color: "#2C3E50",
    marginBottom: "15px",
    fontWeight: "600",
  },
  text: {
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.8",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  feature: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  featureTitle: {
    fontSize: "22px",
    color: "#16A085",
    marginBottom: "10px",
    fontWeight: "600",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
    color: "#555",
  },
};

export default AboutGym;
