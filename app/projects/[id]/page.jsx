import React from "react";
import { SingleProject } from "../../lib/singleProject";

const SingleProduct = async ({ params }) => {
  const project = await SingleProject(params.id);
  console.log(project);
  return (
    <div className="container">
      {project && (
        <div key={project.id}>
          <h1>{project.title}</h1>
          <h1>{project.tech}</h1>
          <img src={project.img} alt="" />
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
