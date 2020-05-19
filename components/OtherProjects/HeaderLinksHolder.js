import React from 'react';

import HeaderLink from './HeaderLink';

const HeaderLinksHolder = ({links: {github, external}}) => {
  return (
    <div>
      {github ? <HeaderLink url={github} title="Github" icon="github" /> : null}
      {external ? (
        <HeaderLink url={external} title="External" icon="external-link" />
      ) : null}
    </div>
  );
};

export default HeaderLinksHolder;
