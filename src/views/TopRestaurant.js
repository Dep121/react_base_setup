import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import s from './TopRestaurant.module.scss';
import { getRestaurant } from '../services';
import ListItem from '../components/ListItem/ListItem';
// import Collapsible from '../components/Collapsible/Collapsible';
import Collapsible from '../components/Collapsible_V2/Collapsible';

function TopRestaurant() {
  const [topRstr, setTopRstr] = useState({});
  const [otherRstr, setOtherRstr] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);

  useEffect(() => {
    getRestaurant(onGetData);
  }, []);

  const onGetData = (restaurantList) => {
    console.log(restaurantList);
    // start preprocessing
    let topRest = {};
    let otherRest = [];
    restaurantList.map(restaurant => {
      const split = restaurant['Top Ten'].split(' #');
      if (split.length === 2) {
        const [year, rank] = split;
        if (!topRest[year]) topRest[year] = [];
        topRest[year].push({ ...restaurant, rank: parseInt(rank) });
      } else {
        otherRest.push({ ...restaurant });
      }
    });

    Object.keys(topRest).forEach(key => {
      topRest[key].sort((a, b) => (a.rank > b.rank) ? 1 : -1);
      console.log(`${key}: `, topRest[key]);
    });

    console.log(otherRest);
    setTopRstr(topRest);
    setOtherRstr(otherRest);
  }

  return (<div className={s.topRestaurantContainer}>
    <SearchBox />
    <br />
    <div className={s.groupContainer}>
      {
        Object.keys(topRstr).reverse().map((year, i) => {
          return (
            <Collapsible
              key={year}
              heading={`Top Restaurants in year ${year}`}
              open={selectedYear === i}
            >
              {
                topRstr[year].map(rest => {
                  return (
                    <ListItem
                      key={Math.floor(Math.random() * 10001) + 1}
                      heading={rest.Brand}
                      subHeading={rest.Variety}
                      logo={<span dangerouslySetInnerHTML={{__html: '&#x1F3C1;'}}></span>}
                      logoName={rest.Country}
                      rating={rest.Stars}
                    />
                  )
                })
              }
            </Collapsible>
          );
        })
      }
    </div>
  </div>);
}

export default TopRestaurant;