/* eslint-disable react/prop-types */
const LogoVectors = (props) => {
  const viewBox = `0 0 ${props.width} ${props.height}`;

  return (
    <div style={{ paddingTop: `${props.paddingTop}` }}>
      <svg
        width={props.width}
        height={props.height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={props.path} fill={props.fill} />
      </svg>
    </div>
  );
};

export default LogoVectors;
