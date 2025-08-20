import React, { useState, useRef, useEffect } from 'react';
import { InputBase, Popper, Paper, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

const items = [
  'Webmail', 'IHRMS', 'eMulazim', 'APAR', 'Asset Management',
  'Help Desk', 'Visitor Management', 'Project Management',
  'CAKES', 'Corporate Learning & Development Platform',
  'CDAC Website', 'Intranet Portal'
];

const SearchComponent = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);

  const [activeCard, setActiveCard] = useState('');

  const handleSearchClick = () => {
    setShowSearch(prev => !prev);
    setSearchTerm('');
    setFilteredItems([]);
    setActiveIndex(-1);
  };

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredItems([]);
      setActiveIndex(-1);
      return;
    }

    const filtered = items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    setActiveIndex(filtered.length > 0 ? 0 : -1);
  };

  const handleKeyDown = (e) => {
    if (filteredItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % filteredItems.length);
    }
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0) {
        handleResultClick(filteredItems[activeIndex]);
      }
    }
  };

  const handleResultClick = (item) => {
    setActiveCard(item);
    const elementId = item.toLowerCase().replace(/\s+/g, '-');
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setShowSearch(false);
      setSearchTerm('');
      setFilteredItems([]);
      setActiveIndex(-1);
      setTimeout(() => setActiveCard(''), 3000);
    }
  };

  return (
    <>
      {/* {!showSearch && (
        <SearchIcon
          onClick={handleSearchClick}
          sx={{
            color: 'text.secondary',
            fontSize: 24,
            cursor: 'pointer',
            marginLeft: isMobile ? 0 : 2,
          }}
        />
      )} */}

      {/* {!isMobile && showSearch && (
        <div style={{ position: 'relative' }}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(240, 240, 240, 0.9)',
              padding: '2px 12px',
              borderRadius: 16,
              boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)',
              maxWidth: 400,
              marginLeft: 20,
              marginRight: 20,
              position: 'relative',
            }}
          >
            <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 18 }} />

            <InputBase
              inputRef={inputRef}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
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

          <Popper
            open={filteredItems.length > 0}
            anchorEl={inputRef.current}
            placement="bottom-start"
            style={{ zIndex: 9999 }}
          >
            <Paper sx={{ mt: 1, width: inputRef.current?.offsetWidth || 300 }}>
              <List dense>
                {filteredItems.map((item, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handleResultClick(item)}
                    sx={{
                      backgroundColor: index === activeIndex ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Popper>
        </div>
      )} */}
      {!isMobile && (
        <div style={{ position: 'relative' }}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(240, 240, 240, 0.9)',
              padding: '2px 12px',
              borderRadius: 16,
              boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1)',
              maxWidth: 400,
              //marginLeft: 20,
              marginRight: 20,
              position: 'relative',
            }}
          >
            <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 18 }} />

            <InputBase
              inputRef={inputRef}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              sx={{
                flex: 1,
                fontSize: '0.85rem',
                color: 'text.primary',
                '&:focus': { outline: 'none' },
              }}
            />

            {/* You can keep this close icon if you want to clear input */}
            {/* <CloseIcon
              onClick={() => {
                setSearchTerm('');
                setFilteredItems([]);
                setActiveIndex(-1);
              }}
              sx={{
                color: '#f44336',
                fontSize: 20,
                cursor: 'pointer',
                ml: 1,
              }}
            /> */}
          </motion.div>

          <Popper
            open={filteredItems.length > 0}
            anchorEl={inputRef.current}
            placement="bottom-start"
            style={{ zIndex: 9999 }}
          >
            <Paper sx={{ mt: 1, width: inputRef.current?.offsetWidth || 300 }}>
              <List dense>
                {filteredItems.map((item, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => handleResultClick(item)}
                    sx={{
                      backgroundColor: index === activeIndex ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Popper>
        </div>
      )}

    </>
  );
};

export default SearchComponent;