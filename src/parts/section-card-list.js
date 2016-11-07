import React from 'react';
import SectionCardLinks from './section-card-links';
import SectionCardTitle from './section-card-title';

export default function SectionCardList({ title, links, topic, className }) {
  const content = [];
  const optionalClass = className ? `${ className } ` : '';
  if (title) {
    content.push(
      <SectionCardTitle
        key={`section-title-${ topic }`}
        title={title}
      />
    );
  }
  content.push(
    <SectionCardLinks
      key={`section-links-${ topic }`}
      links={links}
    />
  );
  return (
    <div className={`${ optionalClass }sections-card__list sections-card__list-${ topic }`}>
      {content}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardList.propTypes = {
    title: React.PropTypes.string,
    links: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        href: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
      })
    ).isRequired,
    topic: React.PropTypes.string,
    className: React.PropTypes.string,
  };
}
