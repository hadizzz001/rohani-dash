import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { AuthGuard } from './auth-guard';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const DashboardLayout = (props:any) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
        <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};
