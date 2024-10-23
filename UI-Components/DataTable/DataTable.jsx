import { useState } from 'react';
import users from './data/users.json';

export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(8);
  const [itemSizePerPage, setItemSizePerPage] = useState(5);

  const handlePageSizeChange = (event) => {
    setItemSizePerPage(event.target.value);
    setTotalPage(
      Math.round(users.length / event.target.value)
    );
  }

  const handlePagePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  const handlePageNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {[
              { label: 'ID', key: 'id' },
              { label: 'Name', key: 'name' },
              { label: 'Age', key: 'age' },
              { label: 'Occupation', key: 'occupation' },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.slice((currentPage - 1) * itemSizePerPage, currentPage * itemSizePerPage).map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
        <div>
            <select value={itemSizePerPage} onChange={handlePageSizeChange}>
              <option value={5}>Show 5</option>
              <option value={10}>Show 10</option>
              <option value={20}>Show 20</option>
            </select>{' '}
            <button onClick={handlePagePrev} disabled={currentPage === 1}>Prev</button> {' '}
            <span>Page {currentPage} of {totalPage}</span> {' '}
            <button onClick={handlePageNext} disabled={currentPage === totalPage}>Next</button>
          </div>
      </table>
    </div>
  );
}
