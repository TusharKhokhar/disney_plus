import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import ViewAllMovies from '../components/Movies/ViewAllMovies'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'

const Router = (props) => {
    return (
        <>
            <Switch>
                <Route path='/' exact>
                    <LandingPage />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/viewallmovies'>
                    <ViewAllMovies />
                </Route>
                <Route path='*'>
                    <PageNotFound />
                </Route>
            </Switch>
        </>
    )

}

export default Router