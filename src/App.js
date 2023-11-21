// App.js
import React from 'react';
import AppRouter from './AppRouter';
import NavigationSidebar from './NavigationSidebar';

function App() {
  return (
    <div className="app">
      <NavigationSidebar />
      <AppRouter />
    </div>
  );
}
export default App;