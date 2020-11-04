import React from 'react';
import style from './Grid.scss';
import Row from './Row';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import WaypointAnimate from 'components/WaypointAnimate';

const Grid = ({ columns, collection }) => {
  const [grid, setGrid] = React.useState([]);
  const loading = useSelector(loadingFinishedSelector);

  React.useEffect(() => {
    setGrid(
      collection.reduce(
        (acc, que) => {
          if (acc[acc.length - 1].length === columns * 2 - 1) {
            acc.push([]);
          }

          acc[acc.length - 1].push(que);
          return acc;
        },
        [[]]
      )
    );
  }, [collection, columns]);

  const getRandom = React.useCallback((amount, except) => {
    let randomColumn = Math.floor(Math.random() * amount);

    if (randomColumn === except) {
      const array = [-1, 1];
      const oherRandomColumn = Math.floor(Math.random() * 2);
      randomColumn += array[oherRandomColumn];
    }

    return Math.abs(randomColumn % amount);
  }, []);

  const renderRows = React.useMemo(() => {
    const template = Array(columns).fill('.');
    let prevRandom = 0;

    return grid.map((rowList, index) => {
      const gridTemplate = template;
      let randomPlace = getRandom(columns, prevRandom);

      if (index === 0) {
        randomPlace = 0;
      } else {
        prevRandom = randomPlace;
      }

      gridTemplate[randomPlace] = `cell${randomPlace}`;

      return (
        <WaypointAnimate
          className={style.visible}
          bottomOffset="15%"
          key={rowList[0].id}
        >
          {waypointVisible => (
            <Row
              data={rowList}
              gridTemplate={gridTemplate}
              highCell={randomPlace}
              isLoading={index === 0 ? loading : waypointVisible && loading}
            />
          )}
        </WaypointAnimate>
      );
    });
  }, [grid, columns, getRandom, loading]);

  return <div className={style.root}>{renderRows}</div>;
};

Grid.propTypes = {
  columns: PropTypes.number,
  collection: PropTypes.any,
};

Grid.defaultProps = {
  columns: 3,
  collection: [],
};

export default React.memo(Grid);
