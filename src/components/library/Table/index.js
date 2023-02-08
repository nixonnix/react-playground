import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./index.css";

/**
 * Table
 *
 * Custom column rendering - Should be able to render components and elements as well
 * in the columns along with text - DONE
 *
 * Features
 * Sticky header - Done
 * filter - Done
 * Sorting - Done
 * Field Grouping - Done
 * Pagination
 *
 *
 * Data scenarios
 * Sync Data
 * Async data - Loading and Data
 * No data
 */

// columns: [{field:'id', title:'Id'}, {field:'firstName', title:'First Name'},{field:'lastName', title:'Last Name'}]
// data: [{id: '1', firstName: 'Jack', lastName: "Daniells"}, {id: '3', firstName: 'Jim', lastName: "Bim"}]
function ascendinSort(arr, field) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.sort((a, b) => {
    if (!isNaN(+a[field]) && !isNaN(+b[field])) {
      return a[field] - b[field];
    }
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });
}
function descendingSort(arr, field) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.sort((a, b) => {
    if (!isNaN(+a[field]) && !isNaN(+b[field])) {
      return b[field] - a[field];
    }
    if (a[field] < b[field]) {
      return 1;
    }
    if (a[field] > b[field]) {
      return -1;
    }
    return 0;
  });
}

function debounce(fn, delay) {
  let isCalled;
  return function (...args) {
    if (isCalled) clearTimeout(isCalled);
    isCalled = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

const Input = ({ value, onChange, type, hasError, errorMsg }) => {
  return (
    <div>
      <input type={type} onChange={onChange} value={value} />
      {hasError && <span>{errorMsg || "Error!!!!"}</span>}
    </div>
  );
};

const Table = ({ columns, data }) => {
  const [tableData, setTableData] = useState([...data] || []);
  const [customData, setCustomData] = useState([...data] || []);
  const [sortType, setSortType] = useState({ field: "", type: "" });
  const [filterText, setFilterText] = useState("");

  console.log("in -- ");

  const onFilterInputChange = (val) => {
    const filteredData = customData.filter((each) => {
      let str = "";
      for (let key in each) {
        str = str + "," + each[key].toLowerCase();
      }
      return str.includes(val.toLowerCase());
    });
    setTableData(filteredData);
  };
  const debouncedChange = useCallback(debounce(onFilterInputChange, 500), [
    customData,
  ]);

  const onChange = (e) => {
    setFilterText(e.target.value);
    debouncedChange(e.target.value);
  };

  const sortIt = (field) => {
    setSortType((prev) => {
      return {
        ...prev,
        field,
        type:
          prev.type === "" || prev.type === "descending"
            ? "ascending"
            : "descending",
      };
    });
  };

  useEffect(() => {
    const sortedData = sortType.type
      ? sortType.type === "ascending"
        ? ascendinSort([...tableData], sortType.field)
        : descendingSort([...tableData], sortType.field)
      : tableData;
    setTableData(sortedData);
  }, [sortType]);

  useEffect(() => {
    const hasCombine = columns.some((col) => col.combine);
    if (hasCombine) {
      const op = [];
      data.forEach((row) => {
        let item = { ...row };
        columns.forEach((col) => {
          if (Array.isArray(col.combine) && col.combine.length > 0) {
            item[col.field] = col.combine.reduce(
              (acc, curr) => acc + " " + row[curr],
              ""
            );
          }
        });
        op.push(item);
      });
      setTableData(op);
      setCustomData(op);
    }
  }, [columns, data]);

  return (
    <div className="table-wrapper">
      <div>
        <Input value={filterText} onChange={onChange} type="text" />
      </div>
      <div>
        <table className="lib-table">
          <thead>
            <tr className="lib-tr">
              {columns.map((head) => (
                <th className="lib-th" key={head.title}>
                  <div>{head.title}</div>
                  <div onClick={() => sortIt(head.field)}>
                    {(sortType.type === "" ||
                      sortType.type === "descending") && <span>^</span>}
                    {sortType.type === "ascending" && (
                      <span className="rotate-arrow">^</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => {
              return (
                <tr className="lib-tr" key={row.id}>
                  {columns.map((cell) => {
                    let Component;
                    let data = row[cell.field];
                    if (cell.render && typeof cell.render === "function") {
                      Component = cell.render;
                    }
                    return (
                      <td className="lib-td" key={[cell.field]}>
                        {Component ? <Component data={data} /> : data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
