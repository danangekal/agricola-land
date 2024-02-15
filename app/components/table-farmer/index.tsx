'use client';
import { Fragment } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  CircularProgress,
  Collapse,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
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

const TableFarmer = () => {
  const {
    collapse,
    dataTable,
    handleClickCollapse,
    handleLoadData,
    isEmpty,
    isMobile,
    isLoadingMore,
    isReachingEnd,
  } = useHooks();

  if (isMobile) {
    return (
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table>
          <TableBody sx={{ bgcolor: '#ffffff' }}>
            {isEmpty ? (
              <TableRow>
                <TableCell align="center">
                  <Typography
                    component="h6"
                    variant="subtitle1"
                    sx={{ fontWeight: 600 }}
                  >
                    {Strings.msg_no_data}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : null}
            {dataTable?.map(({ id, name, birthDate, idCardNumber }: Farmer) => (
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
          {!isEmpty ? (
            <TableBody sx={{ bgcolor: '#ffffff' }}>
              <TableRow>
                <TableCell align="center">
                  {isReachingEnd ? (
                    <Typography
                      component="h6"
                      variant="subtitle1"
                      sx={{ fontWeight: 600 }}
                    >
                      {Strings.msg_end_page}
                    </Typography>
                  ) : (
                    <Button
                      variant="outlined"
                      disabled={isLoadingMore || isReachingEnd}
                      onClick={handleLoadData}
                      sx={{ color: '#00371d' }}
                      fullWidth
                    >
                      {isLoadingMore ? (
                        <CircularProgress size={20} color="success" />
                      ) : (
                        Strings.label_btn_load
                      )}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer sx={{ maxHeight: 880 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ bgcolor: '#eeefe3' }}>
              {Strings.label_col_no}
            </TableCell>
            <TableCell sx={{ bgcolor: '#eeefe3' }}>
              {Strings.label_col_name}
            </TableCell>
            <TableCell sx={{ bgcolor: '#eeefe3' }}>
              {Strings.label_col_id_number}
            </TableCell>
            <TableCell sx={{ bgcolor: '#eeefe3' }}>
              {Strings.label_col_birthdate}
            </TableCell>
            <TableCell sx={{ bgcolor: '#eeefe3' }}>
              {Strings.label_col_action}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor: '#ffffff' }}>
          {isEmpty ? (
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="center">
                <Typography
                  component="h6"
                  variant="subtitle1"
                  sx={{ fontWeight: 600 }}
                >
                  {Strings.msg_no_data}
                </Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ) : null}
          {dataTable?.map(
            ({ id, name, birthDate, idCardNumber }: Farmer, index: number) => (
              <Fragment key={`${index}-${id}`}>
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{idCardNumber}</TableCell>
                  <TableCell>
                    {dayjs(birthDate).format('D MMMM YYYY')}
                  </TableCell>
                  <TableCell>
                    <ActionFarmer id={id} name={name} isMobile={isMobile} />
                  </TableCell>
                </TableRow>
              </Fragment>
            ),
          )}
        </TableBody>
        {!isEmpty ? (
          <TableBody sx={{ bgcolor: '#ffffff' }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="center">
                {isReachingEnd ? (
                  <Typography
                    component="h6"
                    variant="subtitle1"
                    sx={{ fontWeight: 600 }}
                  >
                    {Strings.msg_end_page}
                  </Typography>
                ) : (
                  <Button
                    variant="outlined"
                    disabled={isLoadingMore || isReachingEnd}
                    onClick={handleLoadData}
                    sx={{ color: '#00371d' }}
                    fullWidth
                  >
                    {isLoadingMore ? (
                      <CircularProgress size={20} color="success" />
                    ) : (
                      Strings.label_btn_load
                    )}
                  </Button>
                )}
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        ) : null}
      </Table>
    </TableContainer>
  );
};

export default TableFarmer;
