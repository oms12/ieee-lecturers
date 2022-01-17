const Professor_Content = ({
  name,
  branch,
  university_name,
  university_address,
  email,
  image,
}) => {
  return (
    <div class="content_1">
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
            <b>Lecture Topic 1:</b>How big is too big? Clustering in BIG DATA
            with the Fantastic 4 (abstract)
          </p>
          <p class="topic">
            <b>Lecture Topic 2:</b>How big is too big? Clustering in BIG DATA
            with the Fantastic 4 (abstract)
          </p>
          <p class="topic">
            <b>Lecture Topic 3:</b>How big is too big? Clustering in BIG DATA
            with the Fantastic 4 (abstract)
          </p>
        </div>
        <div class="margin"></div>
      </div>
    </div>
  );
};

export default Professor_Content;
