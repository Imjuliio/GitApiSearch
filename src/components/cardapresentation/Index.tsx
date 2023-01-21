import styled from "styled-components";
import * as N from './structure'
import { TopArea } from "../UserData/TopArea";
import LinksArea from "../UserData/LinksArea";
import { StartArea } from "../UserData/StartArea";
import { UserDataProps } from "../../types";

export const Index = ({ user }: UserDataProps) => {
  return (
    <div>
   
     <N.Container>
     <N.Pfp src={user.pfp} alt={user.name} />

     <N.SideArea>
       <TopArea
            username={user.username}
           bio={user.bio}
           name={user.name}
           joinedAt={user.joinedAt}
           pfp={user.pfp}
         />

         <StartArea
           repos={user.repos}
           followers={user.followers}
           following={user.following}
         />

         <LinksArea links={user.links}/>
       </N.SideArea> 
     </N.Container>
    </div>
  );
};



