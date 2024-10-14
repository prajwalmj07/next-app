import { useState, useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { dataPerPageState, shouldFetchDataState } from '../lib/atoms';

const useFetchEnergyData = (selectedMeter, dataType) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dataPerPage = useRecoilValue(dataPerPageState);
  const shouldFetchData = useRecoilValue(shouldFetchDataState);
  const resetShouldFetchData = useResetRecoilState(shouldFetchDataState);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/fetch_graph_data/${selectedMeter}/${dataType}?data_per_page=${dataPerPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        resetShouldFetchData();
      }
    };

    // Fetch data when selectedMeter changes or shouldFetchData is true
    if (selectedMeter && dataType && (shouldFetchData || data === null)) {
      fetchData();
    }
  }, [selectedMeter, dataType, dataPerPage, shouldFetchData, resetShouldFetchData]);

  return { data, loading, error };
};

export default useFetchEnergyData;