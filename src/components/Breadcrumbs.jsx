import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <Link to="/">Home</Link>
        {items.map((item, index) => (
          <Fragment key={index}>
            <span>&gt;</span>
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
