import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./form.scss";
import IconSelector from "../FormIcons/IconSelector";

const Form = ({ setFormData, setIsSubmitted, formData }) => {
  const [value, setValue] = useState(formData.code || "");
  const [leet, setLeet] = useState(formData.leetcodeUser || false);
  const [leetcodeUser, setLeetcodeUser] = useState(formData.leetcodeUser || "");
  const [heatMap, setHeatMap] = useState(formData.heatmap || false);
  const [badges, setBadges] = useState(formData.badges || false);

  const handleSubmission = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      banner: e.target.banner.value,
      name: e.target.name.value,
      position: e.target.position.value,
      code: value,
      icons: formData.icons || [],
      leetcodeUser: leet ? leetcodeUser : "",
      heatmap: leet ? heatMap : false,
      badges: leet ? badges : false,
    };

    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setIsSubmitted(true);
    console.log(updatedFormData);
  };

  const handleLeet = (e) => {
    setLeet(e.target.checked);
  };

  const handleLeetcodeUserChange = (e) => {
    setLeetcodeUser(e.target.value);
  };

  const handleHeatmap = (e) => {
    setHeatMap(e.target.checked);
  };

  const handleBadges = (e) => {
    setBadges(e.target.checked);
  };

  return (
    <div className="form">
      <form action="" method="post" onSubmit={handleSubmission}>
        <div className="form-heading">
          <h1>Lets Get Started</h1>
        </div>
        <div className="form-inputs">
          <input
            type="text"
            name="banner"
            placeholder="Banner Image Url"
            autoComplete="false"
            defaultValue={formData.banner}
          />

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="false"
            defaultValue={formData.name}
          />

          <input
            type="text"
            name="position"
            placeholder="Enter your designation"
            autoComplete="false"
            defaultValue={formData.position}
          />
        </div>

        <div className="text-editor">
          <h2>Tell the World About Yourself</h2>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            style={{ height: "100px" }}
          />
        </div>

        <div className="leetcode-card">
          <h2>Want to flex your leetcode stats?</h2>
          <div class="checkbox-wrapper-10">
            <input
              class="tgl tgl-flip"
              id="cb5"
              type="checkbox"
              name="leetcode"
              onChange={handleLeet}
            />
            <label
              class="tgl-btn"
              data-tg-off="Yeah!"
              data-tg-on="Nope!"
              for="cb5"></label>
          </div>

          <div
            className={
              leet ? "leetcode-container active" : "leetcode-container"
            }>
            <input
              type="text"
              name="leetcode-user"
              placeholder="Enter your leetcode username"
              value={leetcodeUser}
              onChange={handleLeetcodeUserChange}
            />
            <label>
              <input
                type="checkbox"
                name="heatmap"
                checked={heatMap}
                onChange={handleHeatmap}
              />
              Include heatmap?
            </label>
            <label>
              <input
                type="checkbox"
                name="badges"
                checked={badges}
                onChange={handleBadges}
              />
              Include Badges?
            </label>
          </div>
        </div>

        <div className="skills">
          <IconSelector formData={formData} setFormData={setFormData} />
        </div>

        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;


