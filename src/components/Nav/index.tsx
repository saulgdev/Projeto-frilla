import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { UserContext } from "../../contexts/UserContext";

import { LinkSettingStyled, NavStyled } from "./styles";

export const Nav = () => {
  const navigate = useNavigate();
  const { userLogout, user } = useContext(UserContext);

  return (
    <NavStyled>
      <h1>frilla</h1>
      <div>
        {user && <p>{user.name}</p>}
        <ChevronRightIcon />
        <LinkSettingStyled to="/">
          Início<span></span>
        </LinkSettingStyled>
        <ChevronRightIcon />
        <button
          onClick={() => {
            userLogout();
            navigate("/");
          }}
        >
          Sair<span></span>
        </button>
      </div>
    </NavStyled>
  );
};
