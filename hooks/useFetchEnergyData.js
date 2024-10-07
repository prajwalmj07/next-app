import { useState, useEffect } from 'react';

const useFetchEnergyData = (selectedMeter, dataType) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/fetch_graph_data/${selectedMeter}/${dataType}?data_per_page=10`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedMeter && dataType) {
      fetchData();
    }
  }, [selectedMeter, dataType]);

  return { data, loading, error };
};

export default useFetchEnergyData;