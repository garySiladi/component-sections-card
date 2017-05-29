import Button from '@economist/component-link-button';
import React from 'react';

export default function SectionCardLink({ buttonClassName, title, buttonProps, prefix }) {
  const { internal, ...cleanedButtonProps } = buttonProps; // eslint-disable-line no-unused-vars
  return (
    <li className={`${ prefix }__list-item`}>
      <Button
        {...cleanedButtonProps}
        className={buttonClassName}
      >
        {title}
      </Button>
    </li>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardLink.propTypes = {
    buttonClassName: React.PropTypes.string,
    buttonProps: React.PropTypes.shape({
      target: React.PropTypes.string,
      unstyled: React.PropTypes.bool,
      href: React.PropTypes.string,
      title: React.PropTypes.string,
    }),
    title: React.PropTypes.string,
    prefix: React.PropTypes.string,
  };
}
