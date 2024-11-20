import { Outlet } from 'react-router-dom';
import './App.css';
import AppHeader from './Components/AppHeader/AppHeader';
import UserContext from './Utils/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './Store/Store';

function App() {
  var Defaultuser = useContext(UserContext);
  const [user,setUser] = useState(Defaultuser);
  useEffect(()=>{
    var changedUser = {logInUser:"Rushi"};
    setUser(changedUser);
  },[])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{logInUser:user.logInUser,setUser}}>
      <div>
        <AppHeader />
        <Outlet />
      </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
