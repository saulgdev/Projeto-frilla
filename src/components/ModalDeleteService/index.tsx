import { useContext } from "react";

import { SettingContext } from "../../contexts/SettingContext";
import { ModalStyled } from "./styles";

export const ModalDeleteService = () => {
  const { delService, setOpenModalDelete, deleteServiceApi } =
    useContext(SettingContext);

  return (
    <ModalStyled>
      <span>
        <div>
          <p>Deletar o anuncio abaixo?</p>
          <h2>{delService[0].title}</h2>
          <div>
            <button onClick={() => deleteServiceApi(delService[0].id)}>
              Deletar
            </button>
            <button onClick={() => setOpenModalDelete(false)}>Cancelar</button>
          </div>
        </div>
      </span>
    </ModalStyled>
  );
};
