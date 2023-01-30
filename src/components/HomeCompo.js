import React from 'react';

const HomeCompo = (props) => {
  const movieImg = props.data?.backdrop_path;
  const movieTitle = props.data?.title;
  const movieRelease = props.data?.release_date;
  const movieDetail = props.data?.overview;

  const trunkateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="Header">
      <div className="Header_box">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieImg}`}
          alt="MOVIE IMG"
          className="Header_box_img"
        />
        <div className="Header_box_contentbox">
          <h1 className="Header_box_contentbox_h1">{movieTitle}</h1>
          <div>
            <button className="Header_box_contentbox_btn">play</button>
            <button className="Header_box_contentbox_btn">watch later</button>
          </div>
          <p className="Header_box_contentbox_p">released : {movieRelease}</p>
          <p className="Header_box_contentbox_detail">
            {trunkateString(movieDetail, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCompo;
