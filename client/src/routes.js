import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Authentication from './pages/authentication'
import Overview from './pages/overview'

export default () => {
  return (
    <Switch>
      <Route path='/' component={Overview} exact />
      <Route path='/login' component={Authentication} />
      <Route path='/register' component={Authentication}/>
      {/* <Route path='/profiles/:slug/favorites' component={UserProfile} />
      <Route path='/profiles/:slug' component={UserProfile} />
      <Route path='/settings' component={Settings} />
      <Route path='/feed' component={YourFeed} />
      <Route path='/tags/:slug' component={TagFeed} />
      <Route path='/login' component={Authentication}/>
      <Route path='/register' component={Authentication}/>
      <Route path='/articles/new' component={CreateArticle} />
      <Route path='/articles/:slug/edit' component={EditArticle} />
      <Route path='/articles/:slug' component={Article}/> */}
    </Switch>
  )
}
