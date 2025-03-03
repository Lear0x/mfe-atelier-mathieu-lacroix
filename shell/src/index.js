import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const Header = React.lazy(() => import('header/Header'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
    <h2>Bienvenue sur l'application Shell</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
