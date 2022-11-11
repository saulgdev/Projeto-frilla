import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SettingContext } from "../../contexts/SettingContext";
import { AddServiceSchema } from "../../validations/AddServiceSchema";

import { ModalStyled } from "./styles";
import { ParagrafoErro } from "../ParagraphyError";

export interface iServiceData {
  title: string;
  description: string;
  category: string;
  value: number;
  id: number;
  userId: number;
  contact: string;
}

export const ModalAddService = () => {
  const { setOpenModal, addService } = useContext(SettingContext);

  const { register, handleSubmit,
    formState: { errors }, 
  } = useForm<iServiceData>({
    resolver: yupResolver(AddServiceSchema),
  });

  return (
    <ModalStyled>
      <span>
        <form onSubmit={handleSubmit(addService)}>
          <label>Título</label>
          <input
            type="text"
            placeholder="Digite o título"
            {...register("title")}
          />
          <ParagrafoErro>{errors.title?.message}</ParagrafoErro>

          <label>Descrição</label>
          <input
            type="text"
            placeholder="Digite a descrição"
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
          <ParagrafoErro>{errors.category?.message}</ParagrafoErro>

          <label>Valor</label>
          <input
            type="number"
            placeholder="Digite o valor"
            {...register("value")}
          />
          <ParagrafoErro>{errors.value?.message}</ParagrafoErro>

          <div>
            <button type="submit">Adicionar</button>
            <button onClick={() => setOpenModal(false)}>Cancelar</button>
          </div>
        </form>
      </span>
    </ModalStyled>
  );
};
