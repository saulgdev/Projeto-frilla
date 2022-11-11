import React, { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export interface iHomeContextProps {
  children: React.ReactNode;
}

export interface iHome {
  openModal: boolean;
  IdModal: number | null;
  setIdModal: React.Dispatch<React.SetStateAction<number | null>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setdataWorks?: React.Dispatch<React.SetStateAction<never[]>>;
  setdataFilter?: React.Dispatch<React.SetStateAction<never[]>>;
  setFilter?: React.Dispatch<React.SetStateAction<never[]>> | any;
  dataWorks: iWorks[];
  dataFilter: iWorks[];
  filterCategory: (Category: string) => void;
}

interface iWorks {
  dataWorks: iWorks[];
  title: string;
  contact: string;
  description: string;
  value: number;
  id: string;
  category: string;
}

export const HomeContext = createContext<iHome>({} as iHome);

const HomeProvider = ({ children }: iHomeContextProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [IdModal, setIdModal] = useState<number | null>(null);
  const [dataWorks, setdataWorks] = useState([]);
  const [dataFilter, setdataFilter] = useState(dataWorks);
  const [filter, setFilter] = useState("todas");

  useEffect(() => {
    api.get("/works").then((res) => {
      setdataWorks(res.data);
      filterCategory();
    });
  }, [dataWorks]);

  const filterCategory = () => {
    if (filter === "todas") {
      const categoryFilter = dataWorks.filter(
        (elem: any) => elem.category !== ""
      );
      setdataFilter(categoryFilter);
    } else {
      const categoryFilter = dataWorks.filter(
        (elem: any) => elem.category === filter
      );
      setdataFilter(categoryFilter);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        setIdModal,
        IdModal,
        dataWorks,
        filterCategory,
        dataFilter,
        openModal,
        setOpenModal,
        setFilter,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
