
import { ThemeContextProvider} from "./contexts/ThemeContext"
import {TopArea} from "./components/NavBar/TopArea";
import { useState } from "react";
import { UserProps } from "./types";
import { Index } from "./components/cardapresentation/Index";

function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }

  return (
    <ThemeContextProvider>
    
      <TopArea setUser={setUserData} />
      {user && <Index user={user} />}
  
  </ThemeContextProvider>
  );
}



export default App