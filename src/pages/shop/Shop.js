import React from 'react'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({ match }) => {
    return (
        <>
            <Route component={CollectionsOverview} exact path={`${match.path}`} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </>
    )
}

export default ShopPage