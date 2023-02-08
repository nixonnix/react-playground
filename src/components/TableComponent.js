import React from "react";
import Table from "./library/Table";

const CustomComp = ({ data }) => {
  return (
    <div style={{ color: "rgb(13 124 2)", fontWeight: "bold" }}>{data}</div>
  );
};

const columns = [
  {
    field: "id",
    title: "Id",
    render: ({ data }) => <CustomComp data={data} />,
  },
  { field: "firstName", title: "First Name" },
  { field: "lastName", title: "Last Name" },
  {
    field: "fullName",
    title: "Full Name",
    combine: ["firstName", "id", "lastName"],
  },
];

const data = [
  { id: "1", firstName: "Jack", lastName: "Daniells" },
  { id: "2", firstName: "Jim", lastName: "Bim" },
  { id: "3", firstName: "Glen", lastName: "Fiditch" },
  { id: "4", firstName: "Amrut", lastName: "Amalgam" },
  { id: "5", firstName: "Amrut", lastName: "Fusion" },
  { id: "6", firstName: "Black", lastName: "Dog" },
  { id: "7", firstName: "Vat", lastName: "69" },
  { id: "8", firstName: "Amarula", lastName: "Amarula" },
  { id: "9", firstName: "Gentleman", lastName: "Jack" },
  { id: "10", firstName: "Jack", lastName: "John" },
  { id: "11", firstName: "Jimpson", lastName: "Jimpson" },
  { id: "12", firstName: "Old", lastName: "Monk" },
  { id: "13", firstName: "Pernoud", lastName: "Pru" },
  { id: "14", firstName: "Yager", lastName: "Maester" },
  { id: "15", firstName: "Black &", lastName: "White" },
];

const TableComponent = () => {
  return <Table columns={columns} data={data} />;
};

export default TableComponent;
