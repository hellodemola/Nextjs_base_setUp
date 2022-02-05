import React from 'react';
import TableComp from './TableComp';

const TableCont = () => {
  const resume = [
    {
      id: 1,
      name: 'John Doe',
      email: 'hi@hellodemola.com',
      phone: '+234 809 809 809',
      address: 'Lagos, Nigeria',
      status: 'Active',
      date: '2020-01-01',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'hi@hellodemola.com',
      phone: '+234 809 809 809',
      address: 'Lagos, Nigeria',
      status: 'Active',
      date: '2020-01-01',
    },
  ];

  const data = React.useMemo(
    () => resume.map((res) => ({
      id: res.id,
      name: res.name,
      email: res.email,
      phone: res.phone,
      address: res.address,
      status: res.status,
      date: res.date,
    })),
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Full name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'city',
        accessor: 'address',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Created date',
        accessor: 'date',
      },
    ],
    [],
  );

  return (
    <TableComp data={data} columns={columns} />
  );
};

export default TableCont;
