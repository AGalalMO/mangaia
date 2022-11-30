import React from "react";
import { connect } from "react-redux";

import ALink from "~/src/components/features/alink";

function WishlistMenu(props) {
  const { wishlist } = props;

  return (
    <ALink href="/shop/wishlist" className="wishlist-link" title="Wishlist">
      <i className="icon-heart-o"></i>
    </ALink>
  );
}

function mapStateToProps(state) {
  return {
    wishlist: [],
  };
}

export default connect(mapStateToProps, {})(WishlistMenu);
