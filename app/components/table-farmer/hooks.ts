import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import useSWRInfinite from 'swr/infinite';

import { fetcherGetJson } from '@/app/lib/fetcher';

const useHooks = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [collapse, setCollapse] = useState(0);
  const { data, isLoading, setSize, size } = useSWRInfinite(
    (index) => `/api/farmers?page=${index + 1}`,
    fetcherGetJson,
  );
  const pageSize = 10;
  const dataTable = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize);
  const handleClickCollapse = (id: number) => {
    if (id === collapse) {
      setCollapse(0);
    } else {
      setCollapse(id);
    }
  };
  const handleLoadData = () => setSize(size + 1);

  return {
    collapse,
    dataTable,
    handleClickCollapse,
    handleLoadData,
    isMobile,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
  };
};

export default useHooks;
