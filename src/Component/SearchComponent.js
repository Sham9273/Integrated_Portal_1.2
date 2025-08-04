import React, { useState } from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';


const SearchComponent = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch((prev) => !prev);
    };

    return (
        <>
            {/* Always visible Search Icon on mobile, toggle for larger screens */}
            {/* <SearchIcon
                onClick={handleSearchClick}
                sx={{
                    color: 'text.secondary',
                    fontSize: 24,
                    cursor: 'pointer',
                    marginLeft: isMobile ? 0 : 2,
                }}
            /> */}

            {!showSearch && (
                <SearchIcon
                    onClick={handleSearchClick}
                    sx={{
                        color: 'text.secondary',
                        fontSize: 24,
                        cursor: 'pointer',
                        marginLeft: isMobile ? 0 : 2,
                    }}
                />
            )}

            {/* Center - Search (Show only if not mobile and toggled on) */}
            {!isMobile && showSearch && (
                // <motion.div
                //   whileHover={{ scale: 1.03 }}
                //   style={{
                //     display: 'flex',
                //     alignItems: 'center',
                //     backgroundColor: 'rgba(240, 240, 240, 0.9)',
                //     padding: '4px 16px',
                //     borderRadius: 20,
                //     boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)',
                //     flex: 1,
                //     maxWidth: 400,
                //     marginLeft: 20,
                //     marginRight: 20,
                //   }}
                // >
                //   <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 18 }} />

                //   <InputBase
                //     placeholder="Search…"
                //     inputProps={{ 'aria-label': 'search' }}
                //     sx={{
                //       flex: 1,
                //       fontSize: '0.85rem',
                //       color: 'text.primary',
                //       '&:focus': { outline: 'none' },
                //     }}
                //   />
                // </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgba(240, 240, 240, 0.9)',
                        padding: '4px 16px',
                        borderRadius: 20,
                        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)',
                        flex: 1,
                        maxWidth: 400,
                        marginLeft: 20,
                        marginRight: 20,
                    }}
                >
                    <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 18 }} />

                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            flex: 1,
                            fontSize: '0.85rem',
                            color: 'text.primary',
                            '&:focus': { outline: 'none' },
                        }}
                    />

                    <CloseIcon
                        onClick={handleSearchClick}
                        sx={{
                            color: '#f44336',
                            fontSize: 20,
                            cursor: 'pointer',
                            ml: 1,
                        }}
                    />
                </motion.div>

            )}
        </>
    );
};

export default SearchComponent;
