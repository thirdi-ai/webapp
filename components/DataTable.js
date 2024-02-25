export default function DataTable({ data, onButtonClick, showBtn }) {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div className="w-full relative  flex flex-col ">
      <div className="custom-scrollbar w-full relative overflow-x-scroll">
        <table>
          <thead>
            <tr className="border border-black border-opacity-30">
              {headers.map((header, index) => (
                <th
                  className="text-xs py-2 pl-2 pr-6 min-w-[20px] max-w-[160px] text-start break-words"
                  key={index}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(
              (row, index) =>
                index < 10 && (
                  <tr
                    key={index}
                    className="border border-black border-opacity-30"
                  >
                    {headers.map((header, columnIndex) => (
                      <td
                        className="text-xs py-2 pl-2 pr-6 min-w-[20px] max-w-[160px] text-start break-words"
                        key={columnIndex}
                      >
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      {data.length > 0 && !showBtn && (
        <div className="mt-6">
          <button className="btn block m-auto" onClick={onButtonClick}>
            Confirm Data Upload
          </button>
        </div>
      )}
    </div>
  );
}
