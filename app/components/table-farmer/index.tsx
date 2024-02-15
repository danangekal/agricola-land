'use client';
import { Fragment } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import dayjs from 'dayjs';

import ActionFarmer from '@/app/components/action-farmer';
import Button from '@/app/components/button';
import Strings from '@/app/farmers/strings';
import { Farmer } from '@/app/farmers/types';
import useHooks from './hooks';
import { TableFarmerProps } from './types';

const TableFarmer = ({ data }: TableFarmerProps) => {
  const { collapse, handleClickCollapse, isMobile } = useHooks();

  if (isMobile) {
    return (
      <>
        <Table sx={{ marginTop: 3 }}>
          <TableBody sx={{ bgcolor: '#ffffff' }}>
            {data?.map(({ id, name, birthDate, idCardNumber }: Farmer) => (
              <Fragment key={id}>
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Typography
                        component="h6"
                        variant="subtitle2"
                        sx={{ color: '#111110', paddingY: 1.5 }}
                      >
                        {name}
                      </Typography>
                      <ActionFarmer id={id} name={name} isMobile={isMobile} />
                    </Box>
                    <Box
                      sx={{ display: 'flex' }}
                      onClick={() => handleClickCollapse(id)}
                    >
                      <Typography
                        component="h6"
                        variant="subtitle2"
                        sx={{ color: '#00713B' }}
                      >
                        {Strings.label_collapse}
                      </Typography>
                      {collapse === id ? (
                        <ExpandLess sx={{ color: '#00713B' }} />
                      ) : (
                        <ExpandMoreIcon sx={{ color: '#00713B' }} />
                      )}
                    </Box>
                    <Collapse
                      in={collapse === id}
                      timeout="auto"
                      sx={{ marginTop: 2 }}
                      unmountOnExit
                    >
                      <Grid container spacing={1}>
                        <Grid
                          xs={12}
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Typography
                            component="h6"
                            variant="subtitle1"
                            sx={{ color: '#74766A' }}
                          >
                            {Strings.label_col_id_number}
                          </Typography>
                          <Typography
                            component="h6"
                            variant="subtitle1"
                            sx={{ color: '#74766A' }}
                          >
                            {idCardNumber}
                          </Typography>
                        </Grid>
                        <Grid
                          xs={12}
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Typography
                            component="h6"
                            variant="subtitle1"
                            sx={{ color: '#74766A' }}
                          >
                            {Strings.label_col_birthdate}
                          </Typography>
                          <Typography
                            component="h6"
                            variant="subtitle1"
                            sx={{ color: '#74766A' }}
                          >
                            {dayjs(birthDate).format('D MMMM YYYY')}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
          <TableBody sx={{ bgcolor: '#ffffff' }}>
            <TableRow>
              <TableCell align="center">
                <Button variant="outlined" sx={{ color: '#00371d' }}>
                  {Strings.label_btn_load}
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  }

  return (
    <Table sx={{ marginTop: 3 }}>
      <TableBody>
        <TableRow>
          <TableCell>{Strings.label_col_no}</TableCell>
          <TableCell>{Strings.label_col_name}</TableCell>
          <TableCell>{Strings.label_col_id_number}</TableCell>
          <TableCell>{Strings.label_col_birthdate}</TableCell>
          <TableCell>{Strings.label_col_action}</TableCell>
        </TableRow>
      </TableBody>
      <TableBody sx={{ bgcolor: '#ffffff' }}>
        {data?.map(
          ({ id, name, birthDate, idCardNumber }: Farmer, index: number) => (
            <Fragment key={`${index}-${id}`}>
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{idCardNumber}</TableCell>
                <TableCell>{dayjs(birthDate).format('D MMMM YYYY')}</TableCell>
                <TableCell>
                  <ActionFarmer id={id} name={name} isMobile={isMobile} />
                </TableCell>
              </TableRow>
            </Fragment>
          ),
        )}
      </TableBody>
      <TableBody sx={{ bgcolor: '#ffffff' }}>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell align="right">
            <Button variant="outlined" sx={{ color: '#00371d' }}>
              {Strings.label_btn_load}
            </Button>
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableFarmer;
