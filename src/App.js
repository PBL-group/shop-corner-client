import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { request } from 'graphql-request'
import { connect } from 'react-redux';
import { updateCollections } from './redux/shop/shop.actions';
import Home from "./pages/home/Home";
import Seller from "./pages/seller/Seller";
import Checkout from "./pages/checkout/Checkout";
import Category from "./components/categories/Category";
import Products from "./pages/products/Products";
import Layout from "./utils/Layout";
import Error from "./pages/error/Error";
import Profile from "./pages/profile/Profile";
import ProfileDisplay from "./pages/profile/ProfileDisplay";
import ProductDetail from "./pages/products/ProductDetail";
import Authentication from "./pages/authentication/Authentication";
import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.config';
import { setCurrentUser } from './redux/user/user.actions';
import { setUserIdToken } from './redux/user/user.actions';

function App({updateCollections, setCurrentUser, setUserIdToken}) {

	useEffect(() => {
		onAuthStateChanged(auth, currentUser => setCurrentUser(currentUser))

		onAuthStateChanged(auth, async (currentUser) => {
			if(currentUser) {
				const userIdToken = (await currentUser.getIdTokenResult()).token
				return setUserIdToken(userIdToken)
			} else 

			return setUserIdToken(null)
		})

		const fetchCollections = async () => {
			const { collections } = await request(
				'https://api-eu-central-1.graphcms.com/v2/cl08k9ftx42sd01z3elao1129/master' ,
				`
					{
						collections {
							id
							name
							products {
								name
								price
								slug
								images {
									url
								}
								id
							}
							slug
						}
					}
				`
			);

			const convertCollectionsToMaps = collections => {
				const transformedCollections = collections.map(collection => {
					const { name, id, products } = collection;

					return  {
				slug: encodeURI(name.toLowerCase()),
				id,
				name,
				products
					}
				})
		
		return transformedCollections.reduce((accumulator, collection) => {
			accumulator[collection.name.toLowerCase()] = collection
			return accumulator;
		},{})
			}

		const collectionsMap = convertCollectionsToMaps(collections)
		updateCollections(collectionsMap);

		}

		fetchCollections();
	}, [setCurrentUser, setUserIdToken, updateCollections]);  


	return (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='seller' element={<Seller />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='profile' element={<Profile />}>
						<Route path=':id' element={<ProfileDisplay />} />
					</Route>
					<Route path='signin' />
					<Route path='signup' />
					<Route path='auth' element={<Authentication />} />
					<Route path='category' element={<Category />} />
					<Route path="products" element={<Products />} />
					<Route path="product/:id" element={<ProductDetail />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
	);
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
	setCurrentUser: user => dispatch(setCurrentUser(user)),
	setUserIdToken: token => dispatch(setUserIdToken(token))
})

export default connect(null, mapDispatchToProps)(App);
