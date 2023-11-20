'use client'

import React, { useEffect, useState } from 'react';
import { Table } from "./components/Table";
import { getProductSoldData } from "@/services/api/api";

const data = [
  {
    "id": 1,
    "type": 3,
    "date": "2022-02-03T23:51:59.000Z",
    "description": "DESENVOLVEDOR FULL STACK",
    "value": 50000,
    "seller": "CAROLINA MACHADO"
  },
];

export default function SubmitFilePage() {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProductSoldData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Table of Products Sold</h1>
      <Table data={data} />
    </main>
  );
}
