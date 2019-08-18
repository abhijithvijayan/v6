import React from 'react';

import HeaderLink from './HeaderLink';

const HeaderLinksHolder = ({ links: { github, external } }) => {
    return (
        <div>
            {github ? <HeaderLink url={github} title="Github" icon="fab fa-github" /> : null}
            {external ? <HeaderLink url={external} title="External" icon="fas fa-external-link-alt" /> : null}
        </div>
    );
};

export default HeaderLinksHolder;
