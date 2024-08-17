import "./syntaxContainer.scss";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const SyntaxContainer = ({ isSubmitted, formData }) => {
  const generateCodeOutput = () => {
    const bannerOutput = formData.banner
      ? `<p align="center">
        <img src="${formData.banner}" height="200"/>
        </p><hr>`
      : "";
    const nameOutput = formData.name
      ? `<h1  align="center">Hi <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30px">, this is ${formData.name}</h1>`
      : "";
    const postionOutput = formData.position
      ? `<h3 align="center">${formData.position}</h3>`
      : "";
    const quillContentOutput = formData.code
      ? `<p align="center">${formData.code} </p>`
      : "";
    const leetCodeOutput = formData.leetcodeUser
      ? `<p align="center">
  <a href="https://leetcode.com/${
    formData.leetcodeUser
  }/" target="_blank"><img align="center" src="https://leetcode.com/static/images/badges/2024/gif/2024-02.gif" alt="jyot" height="100" width="100" /></a>
  <a href="https://leetcode.com/${
    formData.leetcodeUser
  }/" target="_blank"><img align="center" src="https://leetcode.com/static/images/badges/2024/gif/2024-03.gif" alt="jyot" height="100" width="100" /></a>
  <a href="https://leetcode.com/${
    formData.leetcodeUser
  }/" target="_blank"><img align="center" src="https://assets.leetcode.com/static_assets/marketing/2024-200.gif" alt="jyot" height="100" width="100" /></a>
  <a href="https://leetcode.com/${
    formData.leetcodeUser
  }/" target="_blank"><img align="center" src="https://assets.leetcode.com/static_assets/marketing/2024-100.gif" alt="jyot" height="100" width="100" /></a>
</p>
<p align="center">
  <img  align=top flex-grow=1 src="https://leetcard.jacoblin.cool/${
    formData.leetcodeUser
  }?theme=dark&font=Nunito${formData.heatmap ? "&ext=heatmap" : ""}" />  
</p>`
      : "";

    return `${bannerOutput}\n${nameOutput}\n${postionOutput}\n${leetCodeOutput}\n${quillContentOutput}`.trim();
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
