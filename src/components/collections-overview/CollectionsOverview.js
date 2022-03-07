import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import Collection from "../collection/Collection";

const CollectionsOverview = ({collections}) => (
    <div className="flex flex-col">
        {
            collections.map(({id, ...otherProps}) =>
                <Collection key={id} {...otherProps} />
            )       
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)