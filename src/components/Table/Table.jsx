import React from 'react';
import { useTable, useGlobalFilter } from 'react-table';

// Global Filter Component
const GlobalFilter = ({
 setGlobalFilter,
  filterInput
}) => {
  return (
    <input
      value={filterInput || ""}
      onChange={(e) => {
        setGlobalFilter(e.target.value || undefined); // Setting undefined to remove the filter entirely
      }}
      placeholder={`Search...`}
      style={{
        marginBottom: '10px',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid purple',
      }}
    />
  );
};

function Table({ data, columns, filterInput }) {
  // Table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter // Using the useGlobalFilter hook
  );

  React.useEffect(() => {
    setGlobalFilter(filterInput);
  }, [filterInput, setGlobalFilter]);

  return (
    <div>
      <table {...getTableProps()} style={{ border: 'solid 1px blue', width: '100%', borderRadius: '5px', borderColor: 'purple' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  style={{
                   background: 'white',
                    color: 'purple',
                    fontWeight: 'bold',
                    padding: '8px',
                    borderRadius: '5px',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} style={{ borderBottom: 'solid 1px purple', borderRadius: '5px' }}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    style={{
                      padding: '8px',
                      border: 'solid 1px purple',
                      background: 'white',
                      borderRadius: '5px',
                      borderColor: 'purple',
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
    </div>
  );
}

export default Table;
