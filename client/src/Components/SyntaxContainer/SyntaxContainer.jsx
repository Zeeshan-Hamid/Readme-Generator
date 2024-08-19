import "./syntaxContainer.scss";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const SyntaxContainer = ({ isSubmitted, formData }) => {
  const generateCodeOutput = () => {
    const outputParts = [];

    if (formData.banner) {
      outputParts.push(`<p align="center">
        <img src="${formData.banner}" height="200"/>
        </p><hr>`);
    }

    if (formData.name) {
      outputParts.push(
        `<h1 align="center">Hi <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30px">, this is ${formData.name}</h1>`
      );
    }

    if (formData.position) {
      outputParts.push(`<h3 align="center">${formData.position}</h3>`);
    }

    if (formData.code) {
      outputParts.push(`<p align="center">${formData.code}</p>`);
    }

    if (formData.leetcodeUser) {
      let leetCodeBadges = formData.badges
        ? `<p align="center">
            <a href="https://leetcode.com/${formData.leetcodeUser}/" target="_blank"><img align="center" src="https://leetcode.com/static/images/badges/2024/gif/2024-02.gif" alt="jyot" height="100" width="100" /></a>
            <a href="https://leetcode.com/${formData.leetcodeUser}/" target="_blank"><img align="center" src="https://leetcode.com/static/images/badges/2024/gif/2024-03.gif" alt="jyot" height="100" width="100" /></a>
            <a href="https://leetcode.com/${formData.leetcodeUser}/" target="_blank"><img align="center" src="https://assets.leetcode.com/static_assets/marketing/2024-200.gif" alt="jyot" height="100" width="100" /></a>
            <a href="https://leetcode.com/${formData.leetcodeUser}/" target="_blank"><img align="center" src="https://assets.leetcode.com/static_assets/marketing/2024-100.gif" alt="jyot" height="100" width="100" /></a>
          </p>`
        : "";

      outputParts.push(`${leetCodeBadges}<p align="center">
        <img align="top" flex-grow="1" src="https://leetcard.jacoblin.cool/${
          formData.leetcodeUser
        }?theme=dark&font=Nunito${formData.heatmap ? "&ext=heatmap" : ""}" />  
      </p></hr>`);
    }

    if (formData.icons && formData.icons.length) {
      outputParts.push(`<p align="center"><h2>Languages and Tools I know</h2></br>
        <img src="https://skillicons.dev/icons?i=${formData.icons.join(
          ","
        )}" alt="icons" />
      </p>`);
    }

    return outputParts.join("\n").trim();
  };

  const copyCodeToClipboard = () => {
    const code = generateCodeOutput();
    navigator.clipboard.writeText(code).then(
      () => {
        toast.success("Code copied to clipboard!");
      },
      (err) => {
        toast.error("Failed to copy code.");
        console.error("Failed to copy code: ", err);
      }
    );
  };

  const downloadCodeFile = () => {
    const code = generateCodeOutput();
    const blob = new Blob([code], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ReadMe.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="syntax-container">
      {isSubmitted && (
        <>
          <SyntaxHighlighter language="jsx" style={materialDark}>
            {generateCodeOutput()}
          </SyntaxHighlighter>
          <div className="button-group">
            <button onClick={copyCodeToClipboard} className="copy-button">
              Copy Code
            </button>
            <button onClick={downloadCodeFile} className="download-button">
              Download Code
            </button>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default SyntaxContainer;
