import React from 'react';
import List from './section-card-list.js';

export default class SectionsCardWrapper extends React.Component {
  render() {
    let content = [];
    let joinContent = [];
    const children = this.props.children;
    React.Children.forEach(children, (child, key) => {
      if (child.type === List) {
        const contentSwitch =
          (<List
            key={key}
            topic={child.props.topic}
            links={child.props.links}
            title={child.props.title}
           />);
        if (child.props.join) {
          joinContent.push(contentSwitch);
        } else {
          content.push(contentSwitch);
        }
      }
    });
    return (
      <nav role="nav" className="sections-card">
        <div className="sections-card__wrapper">
          <div className="sections-card__menu">
            {joinContent[0] ?
              <div className="sections-card__list-column-wrap">
                {joinContent}
              </div> :
            null}
            {content}
          </div>
        </div>
      </nav>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  SectionsCardWrapper.propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.arrayOf(React.PropTypes.node),
    ]),
  };
}
