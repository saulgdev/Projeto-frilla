import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

import imgHome from "../../assets/img/imgHome.png";

import ModalSeeMore from "../../components/ModalSeeMore";
import { LinkSettingStyled, NavStyled } from "../../components/Nav/styles";

import { HomeContext } from "../../contexts/HomeContext";
import { UserContext } from "../../contexts/UserContext";

import { ContainerHome, HomeStyled, HomeTitle, BtnsFilter } from "./styles";

export const Home = () => {
  const navigate = useNavigate();
  const { userLogout, user } = useContext(UserContext);
  const { setFilter, dataFilter, openModal, setOpenModal, setIdModal } =
    useContext(HomeContext);

  useEffect(() => {
    setFilter("todas");
  }, [setFilter]);

  function HandleClickModal(Target: any) {
    const ID = Target.id;
    setOpenModal(true);
    setIdModal(ID);
  }

  return (
    <>
      <ContainerHome>
        <NavStyled>
          <h1>frilla</h1>
          <div>
            {user ? (
              <>
                <p>{user.name}</p>
                <ChevronRightIcon />
                <LinkSettingStyled to="/setting">
                  Configurações<span></span>
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
              </>
            ) : (
              <>
                <LinkSettingStyled to="/login">
                  Login<span></span>
                </LinkSettingStyled>
                <ChevronRightIcon />
                <LinkSettingStyled to="/register">
                  Criar conta<span></span>
                </LinkSettingStyled>
              </>
            )}
          </div>
        </NavStyled>

        <HomeTitle>
          <img src={imgHome} alt="imagem Home" />

          <div>
            <h1>
              Bem-vindos à <span>Nova Era do Trabalho</span>
            </h1>
            <p>
              Conectamos os melhores talentos independentes com as melhores
              empresas
            </p>
          </div>
        </HomeTitle>

        <BtnsFilter>
          <ul>
            <li>
              <button onClick={() => setFilter("todas")}>Todos</button>
            </li>
            <li>
              <button onClick={() => setFilter("tech")}>Tech</button>
            </li>
            <li>
              <button onClick={() => setFilter("reforco")}>Reforço</button>
            </li>
            <li>
              <button onClick={() => setFilter("design")}>Design</button>
            </li>
            <li>
              <button onClick={() => setFilter("financas")}>Finanças</button>
            </li>
            <li>
              <button onClick={() => setFilter("eletrica")}>Eletrica</button>
            </li>
          </ul>
        </BtnsFilter>

        {openModal && <ModalSeeMore />}

        <HomeStyled>
          <ul>
            {dataFilter.map((elem) => (
              <li key={elem.id}>
                <h2>{elem.title}</h2>
                <span>{elem.category}</span>
                <p>{elem.description}</p>
                <strong>
                  {elem.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  onClick={(event) => HandleClickModal(event.target)}
                  id={elem.id}
                >
                  Ver mais
                </button>
              </li>
            ))}
          </ul>
        </HomeStyled>
      </ContainerHome>
    </>
  );
};
