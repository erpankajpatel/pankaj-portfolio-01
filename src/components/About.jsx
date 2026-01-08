import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { summary, personal } = portfolioData;

  return (
    <section
      id="about"
      style={{
        padding: "clamp(3rem, 6vw, 5rem) 2rem",
        background: "var(--bg-secondary)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: "4rem" }}>
          About
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "1",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                background: "var(--bg-card)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <picture>
                <source
                  srcSet={`${
                    personal.photo?.replace(".jpg", ".webp") ||
                    "/Pankaj-photo.webp"
                  } 1x, ${
                    personal.photo?.replace(".jpg", "@2x.webp") ||
                    "/Pankaj-photo@2x.webp"
                  } 2x`}
                  type="image/webp"
                />
                <img
                  src={personal.photo || "/Pankaj-photo.jpg"}
                  alt={personal.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div style="
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: var(--bg-secondary);
                        color: var(--text-muted);
                        font-size: 1.5rem;
                      ">
                        📷
                      </div>
                    `;
                  }}
                />
              </picture>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: "1.8",
              color: "var(--text-secondary)",
              fontWeight: 400,
            }}
          >
            <p>{summary}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
