import Table from "../Table/Table";
import { useEffect, useState } from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  // Fetching details from localStorage when the component mounts
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("userform")) || [];
    console.log(details, "local");
    setData([...details]);
  }, []);

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone', accessor: 'phone' },
    { Header: 'Service Quality', accessor: 'serviceQuality' },
    { Header: 'Beverage Quality', accessor: 'beverageQuality' },
    { Header: 'Cleanliness', accessor: 'cleanliness' },
    { Header: 'Overall Rating', accessor: 'overallRating' }
  ];

  // Update the state with the filter value
  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setFilterInput(value);
  };

  return (
    <div className="review">
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search..."}
        style={{ marginBottom: '20px', padding: '8px', borderRadius: '5px', border: '2px solid purple',
         height:'60px',fontSize:'1.5rem' }}
      />
      <Table data={data} columns={columns} filterInput={filterInput} />
    </div>
  );
}

export default SectionTwo;












  