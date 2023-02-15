import React, { useContext, useEffect, useState } from "react";
import Card from "../card";
import styled from "styled-components";

import searchContext from "../../context/searchContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

function Grid() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchUrl, setSearchUrl] = useState(
    "https://api.themoviedb.org/3/trending/all/day?api_key=a6a16e4381486feaee7effc6cce4ee7d"
  );
  const { search } = useContext(searchContext);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const link = async () => {
      if (search.trim().length === 0) {
        setSearchUrl(
          "https://api.themoviedb.org/3/trending/all/day?api_key=a6a16e4381486feaee7effc6cce4ee7d"
        );

        const response = await fetch(searchUrl);
        const jsonData = await response.json();
        return jsonData;
      } else {
        setSearchUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=a6a16e4381486feaee7effc6cce4ee7d&language=en-US&query=${search}&page=1&include_adult=false`
        );

        const response = await fetch(searchUrl);
        const jsonData = await response.json();
        return jsonData;
      }
    };

    link().then((data) => {
      setData(data.results);
      setLoading(false);
    });

    return () => {
      clearInterval(link);
    };
  }, [search, searchUrl]);

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        Most Recent Movies
      </h1>

      <Container>
        {data.map((data) => {
          return (
            <>
              {loading ? (
                <div>loading</div>
              ) : (
                <Card
                  uri={`${base_url.concat(data.backdrop_path)}`}
                  heading={data.original_title}
                />
              )}
            </>
          );
        })}
      </Container>
    </>
  );
}

export default Grid;
