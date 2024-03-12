export default function SpreadsheetComponent({ data }) {
  const headers = Object.keys(data[0]);
  return (
    <div className="overflow-x-auto text-[12px] custom-scrollbar">
      <table className="border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th
                key={header}
                className={`px-3 py-[9px] ${
                  index == 0 ? "min-w-[40px] max-w-[50px] " : "min-w-[90px] max-w-[200px]"
                }  text-start`}
              >
                {header.length > 12 ? header.slice(0, 12) + "..." : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td
                  key={header}
                  className={`min-w-[30px] max-w-[240px] px-3 py-[9px] border-b ${
                    index == 0 ? "bg-white-500 text-center" : "bg-white-smoke"
                  } border-grey-600`}
                >
                  {row[header].length > 10
                    ? row[header].slice(0, 9) + "..."
                    : row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
