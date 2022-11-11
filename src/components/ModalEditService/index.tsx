import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SettingContext } from "../../contexts/SettingContext";
import { iServiceData } from "../ModalAddService";

import { ModalStyled } from "./styles";
import { ParagrafoErro } from "../ParagraphyError";
import { EditModalSchema } from "./../../validations/EditModalSchema";

export const ModalEditService = () => {
  const { setOpenModalEdit, editServ, editServiceApi } =
    useContext(SettingContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iServiceData>({
    resolver: yupResolver(EditModalSchema),
  });

  return (
    <ModalStyled>
      <span>
        <form onSubmit={handleSubmit(editServiceApi)}>
          <label>Título</label>
          <input
            type="text"
            placeholder={editServ[0].title}
            {...register("title")}
          />
          <ParagrafoErro>{errors.title?.message}</ParagrafoErro>

          <label>Descrição</label>
          <input
            type="text"
            placeholder={editServ[0].description}
            {...register("description")}
          />
          <ParagrafoErro>{errors.description?.message}</ParagrafoErro>

          <label>Categoria</label>
          <select {...register("category")}>
            <option value="">Selecione</option>
            <option value="tech">Tech</option>
            <option value="reforco">Reforço</option>
            <option value="design">Design</option>
            <option value="financas">Finanças</option>
            <option value="eletrica">Eletrica</option>
          </select>

          <label>Valor</label>
          <input
            type="number"
            placeholder={`${editServ[0].value}`}
            {...register("value")}
          />
          <ParagrafoErro>{errors.value?.message}</ParagrafoErro>

          <div>
            <button type="submit">Editar</button>
            <button onClick={() => setOpenModalEdit(false)}>Cancelar</button>
          </div>
        </form>
      </span>
    </ModalStyled>
  );
};
