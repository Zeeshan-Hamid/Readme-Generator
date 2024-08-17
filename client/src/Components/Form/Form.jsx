import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./form.scss";

const Form = ({ setFormData, setIsSubmitted }) => {
  const [value, setValue] = useState("");
  const [gridType, setGridType] = useState("1-grid");
  const [leet, setLeet] = useState(false);
  const [leetcodeUser, setLeetcodeUser] = useState("");
  const [heatMap, setHeatMap] = useState(true);
  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("code", value);
    if (leet) {
      formData.append("leetcodeUser", leetcodeUser);
    }
    if (heatMap) {
      formData.append("heatmap", heatMap);
    }

    // Merge formData with social links data
    const input = { ...Object.fromEntries(formData), ...formData };
    setFormData(input);
    setIsSubmitted(true);
    console.log(formData);
  };

  const handleGridChange = (e) => {
    setGridType(e.target.value);
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

  return (
    <div className="form">
      <form action="" method="post" onSubmit={handleSubmission}>
        <label>Enter the Banner Image Url</label>
        <input
          type="text"
          name="banner"
          placeholder="Your Image Url"
          autoComplete="false"
        />
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="false"
        />
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          placeholder="Enter your designation"
          autoComplete="false"
        />
        <div className="grid-selection">
          <label>
            <input
              type="radio"
              name="grid"
              value="1-grid"
              checked={gridType === "1-grid"}
              onChange={handleGridChange}
            />
            1-grid
          </label>
          <label>
            <input
              type="radio"
              name="grid"
              value="2-grid"
              checked={gridType === "2-grid"}
              onChange={handleGridChange}
            />
            2-grid
          </label>
        </div>
        {gridType === "1-grid" && (
          <div className="grid-1">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
        )}
        {gridType === "2-grid" && (
          <div className="grid-2">This is the 2-grid content.</div>
        )}

        <div className="leetcodeCard">
          <p>Want to flex your leetcode stats?</p>
          <label>
            <input type="checkbox" name="leetcode" onChange={handleLeet} />
            Yes
          </label>
          {leet && (
            <div className="leetcode-container">
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
                  onChange={handleHeatmap}
                />
                Include heatmap?
              </label>
            </div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
