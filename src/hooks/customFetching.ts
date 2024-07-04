// hooks/useFetch.ts
import { useState, useEffect } from 'react';
import { HalamanUtama } from '@/constant/typeTableScan'; // Import interface

const useFetch = (url: string) => {
  const [data, setData] = useState<HalamanUtama[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
