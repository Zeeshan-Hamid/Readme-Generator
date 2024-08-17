import "./syntaxContainer.scss";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      </p>`);
    }

    if (formData.icons && formData.icons.length) {
      outputParts.push(`<p align="center">
        <img src="https://skillicons.dev/icons?i=${formData.icons.join(
          ","
        )}" alt="icons" />
      </p>`);
    }

    return outputParts.join("\n").trim();
  };

  return (
    <div className="syntax-container">
      {isSubmitted && (
        <SyntaxHighlighter language="jsx" style={dark}>
          {generateCodeOutput()}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default SyntaxContainer;
