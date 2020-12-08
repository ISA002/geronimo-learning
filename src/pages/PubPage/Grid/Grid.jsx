import React from 'react';
import style from './Grid.scss';
import Row from './Row';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { loadingFinishedSelector } from 'models/preloader/selectors';
import WaypointAnimate from 'components/WaypointAnimate';
import classnames from 'classnames';
import { toDetailSelector } from 'models/common/selectors';

const Grid = ({ columns, collection, isLoaded }) => {
  const [grid, setGrid] = React.useState([]);
  const loading = useSelector(loadingFinishedSelector);
  const toDetail = useSelector(toDetailSelector);

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

  const getRandom = React.useCallback(
    (amount, except) => {
      let randomColumn = Math.floor(Math.random() * amount);

      if (randomColumn === except) {
        const oherRandomColumn = Math.floor(Math.random() * columns - 1) + 1;
        randomColumn += oherRandomColumn;
      }

      return randomColumn % amount;
    },
    [columns]
  );

  const renderRows = React.useMemo(() => {
    const gridTemplate = Array.from({ length: columns }, (_, i) => `cell${i}`);

    let prevRandom = 0;

    return grid.map((rowList, index) => {
      let randomPlace = getRandom(columns, prevRandom);

      if (index === 0) {
        randomPlace = 0;
      } else {
        prevRandom = randomPlace;
      }

      console.log(toDetail);

      return (
        <WaypointAnimate
          className={classnames(style.visible, {
            [style.pageTransition]: toDetail,
          })}
          bottomOffset="15%"
          key={rowList[0].id}
        >
          {waypointVisible => (
            <Row
              data={rowList}
              gridTemplate={gridTemplate}
              highCell={randomPlace}
              isLoading={
                index === 0
                  ? loading && isLoaded
                  : waypointVisible && loading && isLoaded
              }
            />
          )}
        </WaypointAnimate>
      );
    });
  }, [grid, columns, getRandom, loading, isLoaded, toDetail]);

  return <div className={style.root}>{renderRows}</div>;
};

Grid.propTypes = {
  columns: PropTypes.number,
  collection: PropTypes.array,
  isLoaded: PropTypes.bool.isRequired,
};

Grid.defaultProps = {
  columns: 3,
  collection: [],
};

export default React.memo(Grid);
