import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

/* PRIMARY THEME COLOR (converted oklch → hex) */
const PRIMARY = "#8A7CFF";

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="AI-native robotics and humanoid engineering curriculum."
    >
      {/* HERO SECTION */}
      <header
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: `linear-gradient(135deg, ${PRIMARY}, #1f1b42)`,
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "54px", fontWeight: "bold", marginBottom: "20px" }}>
          Physical AI & Humanoid Robotics
        </h1>
        <p style={{ fontSize: "22px", maxWidth: "850px", margin: "0 auto", lineHeight: "1.6" }}>
      A comprehensive AI-driven robotics program covering humanoid engineering, embodied intelligence, ROS 2 infrastructure, digital-twin simulation, VLA-based perception-action systems, hardware fundamentals, and intelligent motion control.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link
            className="button button--lg"
            style={{ background: PRIMARY, color: "white" }}
            to="/docs/introduction/intro"
          >
            Start Reading →
          </Link>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px", textAlign: "center", color: PRIMARY }}>
          What This Textbook Covers
        </h2>
        <p style={{ fontSize: "20px", lineHeight: "1.7", color: "#444", textAlign: "center" }}>
          This is a complete AI-native engineering curriculum designed for
                 physical AI, humanoid robots, embodied intelligence, ROS 2 programming,
                 digital twin simulations, and Vision-Language-Action (VLA) systems.
                 Each module builds your robotics superpowers step by step.
        </p>
      </section>

      {/* MODULE CARDS */}
      <section style={{ padding: "60px 20px", background: "#f3f2ff" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px", textAlign: "center", color: PRIMARY }}>
          Explore All Modules
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* MODULE 1 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Module 1: ROS 2 Foundations</h3>
            <p style={cardText}>
              Core ROS 2 programming fundamentals: nodes, topics, services, actions, QoS,
              executors, and robotics middleware concepts for building modern robot software.
            </p>
            <Link style={cardBtn} to="/docs/ROS%202%20Core%20Principles/ros2-hands-on">
              Open Module →
            </Link>
          </div>

          {/* MODULE 2 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Module 2: Simulation & Digital Twins</h3>
            <p style={cardText}>
              Learn simulation pipelines, robot models, environments, Gazebo/Isaac workflows,
              sensor simulation, and building digital twins for planning and testing robotics systems.
            </p>
            <Link style={cardBtn} to="/docs/Robot%20Simulation%20Frameworks/module-2-simulation">
              Open Module →
            </Link>
          </div>

          {/* MODULE 3 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Module 3: Hardware Foundations</h3>
            <p style={cardText}>
              Mechanical and electrical fundamentals of robots: motors, actuators, IMUs, microcontrollers,
              sensors, control boards, embedded communication, and hardware-software integration.
            </p>
            <Link style={cardBtn} to="/docs/Fundamentals%20of%20Robotics%20Hardware/module-3-hardware">
              Open Module →
            </Link>
          </div>

          {/* MODULE 4 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Module 4: VLA — Vision, Language, Action</h3>
            <p style={cardText}>
              VLA concepts, multimodal models, perception pipelines, language-to-action grounding,
              agent architectures, sensory fusion, and building intelligent embodied agents.
            </p>
            <Link style={cardBtn} to="/docs/Vision-Language-Action%20Systems/module-4-vla-foundations">
              Open Module →
            </Link>
          </div>

          {/* MODULE 5 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Module 5: Advanced AI & Control</h3>
            <p style={cardText}>
              Reinforcement learning, domain randomization, sim-to-real transfer,
              hierarchical controllers, skill libraries, subagent architectures,
              and motion intelligence systems.
            </p>
            <Link style={cardBtn} to="/docs/Advanced%20AI%20Control%20Mechanisms/module-5-advanced-ai">
              Open Module →
            </Link>
          </div>

          {/* MODULE 6 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Module 6: Designing Humanoid Robots</h3>
            <p style={cardText}>
              Humanoid kinematics, dynamics, URDF/Xacro modeling, biped locomotion,
              gait generation, stability (ZMP/CoM), hand design, manipulators,
              and whole-body coordination.
            </p>
            <Link style={cardBtn} to="/docs/Humanoid%20Robotics%20Engineering/module-6-humanoid-design">
              Open Module →
            </Link>
          </div>

          {/* APPENDIX */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>Appendix</h3>
            <p style={cardText}>
              Glossary, references, research links, documentation sources,
              and essential readings for robotics, AI, and humanoid engineering.
            </p>
            <Link style={cardBtn} to="/docs/Appendix%20&%20Supporting%20Resources/glossary">
              Open Appendix →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ padding: "80px 20px", background: "white" }}>
        <h2 style={{ textAlign: "center", fontSize: "34px", marginBottom: "50px", color: PRIMARY }}>
          AI-Driven Robotics: What Makes This Textbook Unique
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "35px",
          }}
        >
          <div style={featureBox}>
            <h3 style={{ color: PRIMARY }}>AI-Powered Robotics</h3>
            <p>
              Designed for embodied intelligence, multimodal VLA systems, digital twins, real-time perception, and agentic robotics workflows.
            </p>
          </div>

          <div style={featureBox}>
            <h3 style={{ color: PRIMARY }}>Applied Robotics Engineering</h3>
            <p>
              Gain real-world experience through hands-on projects, simulations, and guided engineering exercises.
            </p>
          </div>

          <div style={featureBox}>
            <h3 style={{ color: PRIMARY }}>Industry-Standard Robotics</h3>
            <p>
             Learn with insights from cutting-edge humanoid projects and research-grade robotics platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "90px 20px",
          background: PRIMARY,
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Start Your Robotics Journey
        </h2>
        <p style={{ fontSize: "20px", marginBottom: "40px", color: "#f0eefe" }}>
         Explore the frontier of humanoid robotics and AI. Begin mastering the skills now.
        </p>

        <Link
          className="button button--primary button--lg"
          style={{ background: "white", color: PRIMARY, fontWeight: "bold" }}
          to="/docs/introduction/intro"
        >
          Start Reading →
        </Link>
      </section>
    </Layout>
  );
}

/* ======== STYLES ======== */
const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const cardTitle = {
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const cardText = {
  fontSize: "16px",
  color: "#555",
  marginBottom: "20px",
  lineHeight: "1.5",
};

const cardBtn = {
  textDecoration: "none",
  background: "#8A7CFF",
  padding: "10px 16px",
  color: "white",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: "bold",
};

const featureBox = {
  padding: "25px",
  background: "#f5f2ff",
  borderRadius: "10px",
  textAlign: "left",
};
