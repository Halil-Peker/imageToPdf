import React, { useState } from "react";
import Pdf from "react-to-pdf";
import { jsPDF } from "jspdf";
const ref = React.createRef();

function Post() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [postSubmitted, setPostSubmitted] = useState(false);

  const onChangeImage = (e) => {
    setImage(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const submitPost = (e) => {
    const doc = new jsPDF();
    console.log(image);
    // doc.setFontSize(40);
    doc.addImage(image, 15, 40, 180,0);
    doc.save("output.pdf");
  };

  return (
    <>
      <div className="container"  style={{backgroundColor:"#2c75ff" , width:"600px"}} >
        <div className="jumbotron mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="well well-sm">
                <form className="form-horizontal" method="post">
                  <fieldset>
                    <legend className="text-center header">Add new Post</legend>
                    <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                        <i className="fa fa-user bigicon"></i>
                      </span>
                      <input
                        onChange={(e) => onChangeTitle(e)}
                        name="title"
                        type="text"
                        placeholder="Post Title"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <span className="col-md-1 col-md-offset-2 text-center">
                        <i className="fa fa-user bigicon"></i>
                      </span>
                      <input
                        onChange={(e) => onChangeImage(e)}
                        name="image"
                        type="text"
                        placeholder="https://"
                        className="form-control"
                      />
                    </div>
                    {/* <img src={image}  style={{height:"300px"}}/> */}
                    <div className="form-group">
                      <button
                        type="button"
                        onClick={(e) => submitPost(e)}
                        className="btn btn-primary btn-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {postSubmitted && (
        <>
          <div className="Post" ref={ref}>
            <h1>{title}</h1>
            <img src={image} alt={title} />
          </div>
          <Pdf targetRef={ref} filename="post.pdf" x={0.5} y={0.5} scale={0.8}>
            {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
          </Pdf>
        </>
      )}
      <div style={{marginLeft:"100px"}}>
        <a style={{fontSize:"40px"}}> Yandaki Gibi gözükecektir =</a>
      <img src={image}  style={{height:"400px" , marginLeft:"70px"}}/>

      </div>
    </>
  );
}

export default Post;
