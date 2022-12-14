import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const PDF = (props) => {
  console.log("pdf" + props.image);
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
};

export default PDF;
