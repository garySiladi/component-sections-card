import React from 'react';
import List from './section-card-list.js';

export default function SectionsCardWrapper(props) {
  let content = [];
  let joinContent = [];
  const { children, className } = props;
  const optionalClass = className ? `${ className } ` : '';
  React.Children.forEach(children, (child, key) => {
    if (child.type === List) {
      const contentSwitch =
        (<List
          key={key}
          topic={child.props.topic}
          links={child.props.links}
          title={child.props.title}
          className={child.props.className}
         />);
      if (child.props.join) {
        joinContent.push(contentSwitch);
      } else {
        content.push(contentSwitch);
      }
    }
  });
  return (
    <nav role="nav" className={`${ optionalClass }sections-card`}>
      <div className={`${ optionalClass }sections-card__wrapper`}>
        <div className={`${ optionalClass }sections-card__menu`}>
          {joinContent[0] ?
            <div className="sections-card__list sections-card__list-column-wrap">
              {joinContent}
            </div> :
          null}
          {content}
        </div>
      </div>
    </nav>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionsCardWrapper.propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.arrayOf(React.PropTypes.node),
    ]),
    className: React.PropTypes.string,
  };
}
