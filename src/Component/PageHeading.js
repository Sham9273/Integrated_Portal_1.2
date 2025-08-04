// import React from 'react';
// import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BreadcrumbNavWithNotice() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbNameMap = {
    sector: 'Sector',
    app: 'Application',
    details: 'Details',
    contact: 'Contact Us',
    help: 'Help',
  };

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </>
  );
}