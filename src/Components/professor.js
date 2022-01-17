import "./professor.css";
import Professor_Content from "./professorcontent";
import image1 from "../image/jseph bigun.jpg";
import image2 from "../image/kevin bowyer.jpg";
import image3 from "../image/mark nixon.jpg";
import image4 from "../image/sharath pankanti.jpg";
import image5 from "../image/xilin chen.jpg";
import image6 from "../image/yashsuhi yagi.jpg";
const Professor = () => {
  return (
    <>
      <div className="container">
        <div class="title">
          <div class="left_border"></div>
          <p class="mid_para">CURRENT DISTINGUISHED LECTURERS</p>
          <div class="right_border"></div>
        </div>
        <div className="content">
          {/* <div class="content_1">
            <div class="picture">
              <img src={image} class="img1" />
            </div>
            <div class="writing-part">
              <p>
                <b>{name}</b>
              </p>
              <p>{branch}</p>
              <p>{university_name}</p>
              <p>{university_address}</p>
              <p>{email}</p>
              <p class="Research_field">
                <b>Research Field</b>: Cluster analysis, Visualization, Cluster
                validity, Streaming clustering
              </p>

              <div class="lower_part">
                <p class="topic">
                  <b>Lecture Topic 1:</b>How big is too big? Clustering in BIG
                  DATA with the Fantastic 4 (abstract)
                </p>
                <p class="topic">
                  <b>Lecture Topic 2:</b>How big is too big? Clustering in BIG
                  DATA with the Fantastic 4 (abstract)
                </p>
                <p class="topic">
                  <b>Lecture Topic 3:</b>How big is too big? Clustering in BIG
                  DATA with the Fantastic 4 (abstract)
                </p>
              </div>
              <div class="margin"></div>
            </div>
          </div> */}
          <Professor_Content
            name="James C. Bezdek (2019-2021)"
            branch="Computing and Information Systems"
            university_name="University of Melbourne"
            university_address="usa milton"
            email="email: jcbezdek@gmail.com"
            image={image1}
          />

          <Professor_Content
            name="James C. Bezdek (2019-2021)"
            branch="Computing and Information Systems"
            university_name="University of Melbourne"
            university_address="usa milton"
            email="email: jcbezdek@gmail.com"
            image={image1}
          />
        </div>
      </div>
    </>
  );
};
export default Professor;
