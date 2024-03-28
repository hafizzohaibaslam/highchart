import React, { useEffect, useState } from 'react'
import Table from './Table';


import { db, getDocs, addDoc, collection } from "./firebase";


const columns = [ 
    {
      Header: 'Team Name',
      accessor: 'clubName', // accessor is the key from data
      Cell: ({ cell: { value } }) => (
        <img src={value} alt="Shirt" style={{ width: '40px', height: '40px' }} />
      )
    },
    {
      Header: 'Sponsor Name',
      accessor: 'sponsorName',
    },
    {
      Header: 'Main Category',
      accessor: 'mainCategory',
    },
    {
      Header: 'Sub Category',
      accessor: 'subCategory',
    },
    {
      Header: 'Shirt',
      accessor: 'shirtImage',
      // Custom cell renderer for the shirt image
      Cell: ({ cell: { value } }) => (
        <img src={value} alt="Shirt" style={{ width: '60px', height: '60px' }} />
      )
    },
  ];

  


  



function TableMain() {

  const [clubsData, setClubsData] = useState([]);


  console.log("club data", clubsData)

  useEffect(() => {
    const collectionRef = collection(db, 'clubs');


    const fetchData = async () => {
      const querySnapshot = await getDocs(collectionRef);
      const clubs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setClubsData(clubs);
    };

    fetchData();


  }, []);


  return (
    <div className="App">
      <Table columns={columns} data={clubsData} />
    </div>
  )
}

export default TableMain