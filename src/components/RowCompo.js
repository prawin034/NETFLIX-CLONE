import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieCompo from './MovieCompo';
const RowCompo = ({ title, fetchUrl, rowID }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchUrl]);

  const sliderRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const sliderLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  return (
    <div className="Row">
      <h1 className="Row_h1"> {title} </h1>

      <p className="Row_arrowbox">
        <MdChevronLeft
          onClick={sliderLeft}
          className="Row_arrowbox_arrow"
          size={30}
        />
        <MdChevronRight
          onClick={sliderRight}
          className="Row_arrowbox_arrow"
          size={30}
        />
      </p>
      <div className="Row_imgbox" id={'slider' + rowID}>
        {movies.map((item, id) => (
          <MovieCompo item={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default RowCompo;
