import React from 'react';
import style from './Row.scss';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Curtain from 'components/Curtain';

const Row = ({ data, gridTemplate, highCell, isLoading }) => {
  const renderCells = React.useMemo(() => {
    return data.map((item, index) => {
      const cellProps = {
        key: item.id,
        className: style.cell,
        imgSrc: data[index].preview_image_url,
        videoSrc: data[index].preview_video_url,
        title: item.title,
        subTitle: item.subtitle,
      };

      if (index === highCell && data.length > gridTemplate.length * 2 - 2)
        cellProps.styled = { gridArea: `cell${highCell}` };

      return <Cell {...cellProps}>{item.id}</Cell>;
    });
  }, [data, highCell, gridTemplate]);

  const renderRow = React.useMemo(() => {
    const rowProps = {
      className: style.root,
      style: { gridTemplateColumns: `repeat(${gridTemplate.length}, 1fr)` },
    };

    if (data.length > gridTemplate.length * 2 - 2)
      rowProps.style = {
        ...rowProps.style,
        gridTemplateAreas: `"${gridTemplate.join(' ')}" "${gridTemplate.join(
          ' '
        )}"`,
      };

    return <div {...rowProps}>{renderCells}</div>;
  }, [data, renderCells, gridTemplate]);

  return (
    <>
      <div>{renderRow}</div>
      <Curtain
        shirmaClassName={style.curtain}
        amount={gridTemplate.length}
        isLoading={isLoading}
        delayCurtain={100}
      />
    </>
  );
};

Row.propTypes = {
  data: PropTypes.array,
  gridTemplate: PropTypes.array,
  highCell: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
};

Row.defaultProps = {
  data: [],
  gridTemplate: [],
  highCell: 0,
};

export default React.memo(Row);
