import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaMedium,
  FaStackOverflow,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const { personal } = portfolioData;
  const { social } = personal;

  const socialLinks = [
    { icon: FaGithub, url: social.github, label: "GitHub" },
    { icon: FaLinkedin, url: social.linkedin, label: "LinkedIn" },
    { icon: FaTwitter, url: social.twitter, label: "Twitter" },
    { icon: FaMedium, url: social.medium, label: "Medium" },
    {
      icon: FaStackOverflow,
      url: social.stackoverflow,
      label: "StackOverflow",
    },
    { icon: FaGlobe, url: personal.website, label: "Website" },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(3rem, 6vw, 5rem) 1.5rem",
        background: "var(--bg-primary)",
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
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          About & Contact
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "3rem",
            alignItems: "start",
            width: "100%",
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
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "1",
                borderRadius: "var(--radius, 8px)",
                overflow: "hidden",
                background: "var(--bg-card)",
                boxShadow: "var(--shadow-sm)",
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

          {/* Right Column - Intro, Social Icons, and Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Intro/About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {Array.isArray(personal.tagline) ? (
                personal.tagline.map((paragraph, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.125rem)",
                      color: "var(--text-secondary)",
                      marginBottom: "1rem",
                      lineHeight: "1.7",
                      fontWeight: 400,
                    }}
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    color: "var(--text-secondary)",
                    lineHeight: "1.7",
                    fontWeight: 400,
                  }}
                >
                  {personal.tagline}
                </p>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: "flex",
                gap: "1.25rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, opacity: 0.7 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--text-primary)",
                    transition: "all 0.3s ease",
                    opacity: 0.8,
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                paddingTop: "2rem",
                borderTop: "1px solid var(--border-color)",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              <p>
                <a
                  href={`mailto:${personal.email}`}
                  style={{
                    color: "var(--text-primary)",
                    textDecoration: "none",
                  }}
                >
                  {personal.email}
                </a>
              </p>
              <p style={{ marginTop: "0.5rem" }}>{personal.location}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
