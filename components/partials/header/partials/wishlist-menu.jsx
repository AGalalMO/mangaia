import React from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/alink';

function User ( props ) {
    const { wishlist } = props;

    return (
        <ALink href="/auth/signin" className="wishlist-link" title="Login">
            <i className="icon-user"></i>
        </ALink>
    );
}



export default User