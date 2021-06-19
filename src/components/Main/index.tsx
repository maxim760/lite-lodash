import React from "react";
import "./main.css";
import { categories, res } from "../../consts/categories";
import Highlight from "react-highlight.js"

export const Main = ({}) => {
  const [isShowAlertCopy, setIsShowAlertCopy] = React.useState(false);

  const onCopyCode = (text: string) => () => {
    console.log("do")
    navigator.clipboard.writeText(text)
    console.log("posle")
    setTimeout(() => {
      setIsShowAlertCopy(false);
    }, 3000);
    setIsShowAlertCopy(true);
  };

  return (
    <>
      {isShowAlertCopy && <div className="alert">✔ Copied to clipboard!</div>}
      <div className="main">
        {categories.map(({ title, items }, i) => (
          <div className="main__category" key={i}>
            <h1 className="main__category-name">“{title}” Methods </h1>
            {items.map(({ name, function: fn }, idx) => {
              const fnText = `const ${name} = ${fn}`
              return (
                <div className="main__function" id={name} key={idx}>
                  <div className="main__function-name">{name}</div>
                  <div className="main__example">
                    <button
                      className="copy"
                      onClick={onCopyCode(fnText)}
                    >
                      Copy
                    </button>
                    <Highlight language="javascript">
                      <code className="code__function">
                        <p>{fnText}</p>
                      </code>
                    </Highlight>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};
