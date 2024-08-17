import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = ({ setSocialLinks }) => {
  const [socialLinks, setLocalSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    threads: "",
  });

  const handleCheckboxChange = (platform) => {
    setLocalSocialLinks((prev) => {
      const newLinks = { ...prev, [platform]: prev[platform] ? "" : "checked" };
      setSocialLinks(newLinks); // Pass the updated links to parent
      return newLinks;
    });
  };

  const handleInputChange = (e, platform) => {
    const newLink = e.target.value;
    setLocalSocialLinks((prev) => {
      const updatedLinks = { ...prev, [platform]: newLink };
      setSocialLinks(updatedLinks); // Pass the updated links to parent
      return updatedLinks;
    });
  };

  return (
    <div className="socials">
      <p>Connect your social media:</p>
      <div className="social-checkboxes">
        <label>
          <input
            type="checkbox"
            checked={!!socialLinks.facebook}
            onChange={() => handleCheckboxChange("facebook")}
          />
          <FaFacebook /> Facebook
        </label>
        {socialLinks.facebook && (
          <input
            type="text"
            placeholder="Enter your Facebook profile link"
            value={
              socialLinks.facebook !== "checked" ? socialLinks.facebook : ""
            }
            onChange={(e) => handleInputChange(e, "facebook")}
          />
        )}

        <label>
          <input
            type="checkbox"
            checked={!!socialLinks.twitter}
            onChange={() => handleCheckboxChange("twitter")}
          />
          <FaTwitter /> Twitter
        </label>
        {socialLinks.twitter && (
          <input
            type="text"
            placeholder="Enter your Twitter profile link"
            value={socialLinks.twitter !== "checked" ? socialLinks.twitter : ""}
            onChange={(e) => handleInputChange(e, "twitter")}
          />
        )}

        <label>
          <input
            type="checkbox"
            checked={!!socialLinks.instagram}
            onChange={() => handleCheckboxChange("instagram")}
          />
          <FaInstagram /> Instagram
        </label>
        {socialLinks.instagram && (
          <input
            type="text"
            placeholder="Enter your Instagram profile link"
            value={
              socialLinks.instagram !== "checked" ? socialLinks.instagram : ""
            }
            onChange={(e) => handleInputChange(e, "instagram")}
          />
        )}

        <label>
          <input
            type="checkbox"
            checked={!!socialLinks.linkedin}
            onChange={() => handleCheckboxChange("linkedin")}
          />
          <FaLinkedin /> LinkedIn
        </label>
        {socialLinks.linkedin && (
          <input
            type="text"
            placeholder="Enter your LinkedIn profile link"
            value={
              socialLinks.linkedin !== "checked" ? socialLinks.linkedin : ""
            }
            onChange={(e) => handleInputChange(e, "linkedin")}
          />
        )}

        <label>
          <input
            type="checkbox"
            checked={!!socialLinks.threads}
            onChange={() => handleCheckboxChange("threads")}
          />
          <FaLinkedin /> Threads
        </label>
        {socialLinks.threads && (
          <input
            type="text"
            placeholder="Enter your Threads profile link"
            value={socialLinks.threads !== "checked" ? socialLinks.threads : ""}
            onChange={(e) => handleInputChange(e, "threads")}
          />
        )}
      </div>
    </div>
  );
};

export default Socials;
