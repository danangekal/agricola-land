import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

const useHooks = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [collapse, setCollapse] = useState(0);
  const handleClickCollapse = (id: number) => {
    if (id === collapse) {
      setCollapse(0);
    } else {
      setCollapse(id);
    }
  };

  return { collapse, handleClickCollapse, isMobile };
};

export default useHooks;
