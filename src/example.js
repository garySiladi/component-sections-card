import React from 'react';
import SectionsCard from './index';
import sectionsCardData from './context';

export default (
  <SectionsCard.Main className="superclassname">
    <SectionsCard.List
      className="supercomponent__sections"
      links={sectionsCardData.sections}
      title="Sections"
      topic="sections"
    />
    <SectionsCard.List
      className="supercomponent__media"
      links={sectionsCardData.media}
      title="Media"
      topic="media"
    />
    <SectionsCard.List
      className="supercomponent__blogs"
      links={sectionsCardData.blogs}
      title="Blogs"
      topic="blogs"
    />
  </SectionsCard.Main>
);
