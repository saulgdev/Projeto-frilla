import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
import { LoadContext } from "./LoadContext";
import { UserContext } from "./UserContext";

interface iSettingContextProps {
  children: React.ReactNode;
}

export interface iServiceData {
  title: string;
  description: string;
  category: string;
  value: number;
  id: number;
  userId: number;
  contact: string;
}

interface iSettingContext {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModalEdit: boolean;
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  openModalDelete: boolean;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  addService: (data: iServiceData) => void;
  mySerivice: iServiceData[];
  setMyService: React.Dispatch<React.SetStateAction<iServiceData[]>>;
  deleteService: (id: number) => void;
  editService: (id: number) => void;
  delService: iServiceData[];
  setDelService: React.Dispatch<React.SetStateAction<iServiceData[]>>;
  render: string;
  setRender: React.Dispatch<React.SetStateAction<string>>;
  deleteServiceApi: (id: number) => void;
  editServiceApi: (data: iServiceData) => void;
  editServ: iServiceData[];
  setEditServ: React.Dispatch<React.SetStateAction<iServiceData[]>>;
}

export const SettingContext = createContext({} as iSettingContext);

const SettingProvider = ({ children }: iSettingContextProps) => {
  const { user } = useContext(UserContext);
  const { setLoad } = useContext(LoadContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [render, setRender] = useState<string>("");
  const [mySerivice, setMyService] = useState<iServiceData[]>(
    [] as iServiceData[]
  );
  const [delService, setDelService] = useState<iServiceData[]>(
    [] as iServiceData[]
  );
  const [editServ, setEditServ] = useState<iServiceData[]>(
    [] as iServiceData[]
  );

  useEffect(() => {
    const renderMyService = async () => {
      const { data } = await api.get<iServiceData[]>("/works");
      const result = data.filter(
        (elem) => elem.userId === Number(localStorage.getItem("@id"))
      );
      setMyService(result);
    };
    renderMyService();
  }, [render, user]);

  const addService = async (data: iServiceData) => {
    const newData = {
      title: data.title,
      description: data.description,
      category: data.category,
      value: Number(data.value),
      userId: Number(localStorage.getItem("@id")),
      contact: user?.type,
    };
    setLoad(true);
    try {
      const response = await api.post("/works", newData);
      toast.success("Serviço cadastrado com sucesso!");
      setOpenModal(false);
      setRender(response.data.id);
    } catch {
      toast.error("Não foi possível cadastrar um novo serviço");
    } finally {
      setLoad(false);
    }
  };

  const deleteService = (id: number) => {
    setOpenModalDelete(true);
    const result = mySerivice.filter((elem) => elem.id === id);
    setDelService(result);
  };

  const deleteServiceApi = async (id: number) => {
    setLoad(true);
    try {
      await api.delete(`/works/${id}`);
      toast.success("Serviço deletado com sucesso!");
      setOpenModalDelete(false);
      setRender(`${id}`);
    } catch {
      toast.error("Não foi possível deletar o serviço");
    } finally {
      setLoad(false);
    }
  };

  const editService = (id: number) => {
    setOpenModalEdit(true);
    const result = mySerivice.filter((elem) => elem.id === id);
    setEditServ(result);
  };

  const editServiceApi = async (data: iServiceData) => {
    setLoad(true);
    try {
      const response = await api.patch(`/works/${editServ[0].id}`, data);
      toast.success("Serviço editado com sucesso!");
      setOpenModalEdit(false);
      setRender(
        `E${response.data.id}${response.data.title}${response.data.category}`
      );
    } catch {
      toast.error("Não foi possível editar o serviço");
    } finally {
      setLoad(false);
    }
  };

  return (
    <SettingContext.Provider
      value={{
        openModal,
        setOpenModal,
        addService,
        openModalEdit,
        setOpenModalEdit,
        openModalDelete,
        setOpenModalDelete,
        mySerivice,
        setMyService,
        deleteService,
        editService,
        delService,
        setDelService,
        render,
        setRender,
        deleteServiceApi,
        editServiceApi,
        editServ,
        setEditServ,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
