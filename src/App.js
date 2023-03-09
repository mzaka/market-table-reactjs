import React from "react";
import Table, { SelectColumnFilter, AvatarCell } from "./Table";

const getData = () => {
  const data = [
    {
      name: "SPZ",
      asset: "Spizer",
      imgUrl: "https://dummyimage.com/600x400/f2f2f2/000000&text=S",
      price: "$23,418.23",
      change: "+0.45%",
      volume: "15,426.98M",
      marketCap: "$45,418.23",
      type: "Crypto",
    },
    {
      name: "CDS",
      asset: "Cadisa",
      imgUrl: "https://dummyimage.com/600x400/f2f2f2/000000&text=C",
      price: "$412",
      change: "+0.21%",
      volume: "5,915.54M",
      marketCap: "$204,418.23",
      type: "Stock",
    },
    {
      name: "DEQ",
      asset: "Dequear",
      imgUrl: "https://dummyimage.com/600x400/f2f2f2/000000&text=D",
      price: "$23,418.23",
      change: "-1.23%",
      volume: "24,111.98M",
      marketCap: "$68,418.23",
      type: "Crypto",
    },
    {
      name: "FOL",
      asset: "Folrez",
      imgUrl: "https://dummyimage.com/600x400/f2f2f2/000000&text=F",
      price: "$23,418.23",
      change: "+2.15%",
      volume: "55,426.98M",
      marketCap: "$45,418.23",
      type: "Crypto",
    },
    {
      name: "PCV",
      asset: "Pacview",
      imgUrl: "https://dummyimage.com/600x400/f2f2f2/000000&text=P",
      price: "$23,418.23",
      change: "+0.25%",
      volume: "15,426.98M",
      marketCap: "$45,418.23",
      type: "Crypto",
    },
    {
      name: "XER",
      asset: "Xequear",
      imgUrl: "https://dummyimage.com/600x400/f2f2f2/000000&text=X",
      price: "$803",
      change: "+0.15%",
      volume: "19,426.98M",
      marketCap: "$45,418.23",
      type: "Stock",
    },
    {
      name: "POO",
      asset: "Poochies",
      imgUrl: "https://dummyimage.com/600x400/f2f2f2/000000&text=P",
      price: "$23,418.23",
      change: "-3.35%",
      volume: "95,426.98M",
      marketCap: "$49,418.23",
      type: "Crypto",
    },
  ];
  return [...data];
};

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Assets",
        accessor: "asset",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        name: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Change",
        accessor: "change",
      },
      {
        Header: "24h Volume",
        accessor: "volume",
      },
      {
        Header: "Market Cap",
        accessor: "marketCap",
      },
      {
        Header: "Type",
        accessor: "type",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Market</h1>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
