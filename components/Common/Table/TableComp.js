import { useTable } from 'react-table';

const TableComp = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <table
      {...getTableProps()}
      style={{
        width: '100%', margin: '2em 0', boxSizing: 'border-box', border: '2px solid #FCFCFD',
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 0.001em rgba(132, 132, 132, 0.1)',
                  backgroundColor: '#FCFCFD',
                  fontWeight: '500',
                  padding: '1em',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '1em',
                    borderTop: 'solid 0.001em rgba(132, 132, 132, 0.1)',
                    borderBottom: 'solid 0.001em rgba(132, 132, 132, 0.1)',
                    fontWeight: '500',
                    color: '#4D4D4D',
                    // textTransform: 'capitalize',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComp;
