import React from 'react';
import ReactDOM from 'react-dom';

import { FunModuleOne } from './components';

const App = () => {
  return(
    <React.Fragment>
      <FunModuleOne />
    </React.Fragment>
  )
}


ReactDOM.render(App, document.getElementById('root'))
