import { useContext } from "react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { BsWhatsapp } from 'react-icons/bs';

import { HomeContext } from "../../contexts/HomeContext";

import { ModalStyled } from "./styles";

const ModalSeeMore = () => {
  const { setOpenModal, IdModal, dataWorks } = useContext(HomeContext);

  let WorkFiltered = dataWorks.filter(
    (ele) => Number(ele.id) === Number(IdModal)
  );

  return (
    <ModalStyled>
      <span>
        <h2>{WorkFiltered[0].title}</h2>
        <button onClick={() => setOpenModal(false)}>
          <SmallCloseIcon />
        </button>
        <p>{WorkFiltered[0].description}</p>
        <div>
          <strong><BsWhatsapp /></strong> 
          <a href={`https://wa.me/+${WorkFiltered[0]?.contact}?text=Óla, gostaria de contratar o seu serviço`} target="_blank" rel="noreferrer"> Clique aqui</a>
        </div>
      </span>
    </ModalStyled>
  );
};

export default ModalSeeMore;
