import React from 'react';
import { useRecoilState } from 'recoil';
import { dataPerPageState } from '../lib/atoms';

const DataPerPageInput = () => {
  const [dataPerPage, setDataPerPage] = useRecoilState(dataPerPageState);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setDataPerPage(value);
    }
  };

  return (
    <input
      type="number"
      min="1"
      max="100"
      value={dataPerPage}
      onChange={handleChange}
      className="border border-gray-300 rounded-md p-2 w-20 text-center"
    />
  );
};

export default DataPerPageInput;