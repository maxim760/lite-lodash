import React from "react";
import "./main.css";
import { useCopyToClipboard } from "react-use";
import { categories } from "../../consts/categories";
import Highlight from "react-highlight.js"

export const Main = ({}) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [isShowAlert, setIsShowAlert] = React.useState(false);

  const onCopyCode = (text: string) => () => {
    copyToClipboard(text);
    setTimeout(() => {
      setIsShowAlert(false);
    }, 3000);
    setIsShowAlert(true);
  };

  return (
    <>
      {isShowAlert && <div className="alert">✔ Copied to clipboard!</div>}
      <div className="main">
        {categories.map(({ title, items }, i) => (
          <div className="main__category" key={i}>
            <h1 className="main__category-name">“{title}” Methods </h1>
            {items.map((item, idx) => {
              const functStr = item.function.toString();
              return (
                <div className="main__function" id={item.name} key={idx}>
                  <div className="main__function-name">{item.name}</div>
                  <div className="main__example">
                    <p
                      role="button"
                      className="copy"
                      onClick={onCopyCode(`const ${item.name} = ${functStr}`)}
                    >
                      Copy
                    </p>

                    <Highlight language="javascript">
                      <code className=" code__function">
                        <p>
                          const {item.name} {"= "}
                          {functStr}
                        </p>
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
