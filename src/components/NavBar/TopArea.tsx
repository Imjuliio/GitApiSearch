import { useContext, useEffect, useState, useRef } from "react";
import * as N from './structure' 
import Logo from '../../Assets/images/095584094849485.png'
import { ThemeContext } from "../../contexts/ThemeContext";
import { TopAreaProps, UserProps } from "../../types";
import Aboutintegration from '../cardapresentation/Aboutintegration'
import { joinedDate } from "../../utils/formatter";
import Modal from '../../components/cardapresentation/modalopen'
export const TopArea = ({ setUser }: TopAreaProps) => {
  const { changeTheme, lightMode } = useContext(ThemeContext);
  const [empty, setEmpty] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [inputUser] = useState("octocat");

  function hadleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      setEmpty(true);
      setUser(null);
      return;
    }

    setEmpty(false);
    fetchUser(usernameRef.current.value);
  }

  async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (response.status != 200) {
      setNotFound(true);
      setUser(null);
      return;
    }

    setNotFound(false);

    const user: UserProps = {
      pfp: data.avatar_url,
      name: data.name,
      joinedAt: joinedDate(data.created_at),
      username: data.login,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      links: {
        location: data.location,
        twitter: data.twitter_username,
        company: data.company,
        blog: data.blog,
      },
    };
    console.log(data);

    setUser(user);
  }

  useEffect(()=> {
    fetchUser(inputUser)
  },[inputUser])

  return (
    <N.Container>
    <N.Contant>
       <img src={Logo} />
   </N.Contant>
      <N.InputArea
        onSubmit={(e) => {
          e.preventDefault();
          hadleSubmit();
        }}
      >
      <Modal/>
      <Aboutintegration />
        <N.Input
          ref={usernameRef}
          name="username"
          id="username"
          type="text"
          placeholder="Snykov"
        />
        {/* {empty && <N.Warn></N.Warn>}
        {notFound && <N.Warn></N.Warn>} */}
       
        <N.SubmitBtn type="submit">Search</N.SubmitBtn>
       
      </N.InputArea>  
      </N.Container>
  );
};

