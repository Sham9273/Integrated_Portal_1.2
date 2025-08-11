import React from 'react';
import { Button } from '@mui/material';
import BaseLocal from '../URLS/BaseLocal';
import EpramaanUrlforLogout from '../URLS/EpramaanUrlforLogout';
import { useState } from 'react';

const Logout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogout = async () => {
        try {
            // const res = await fetch('http://localhost:8080/Logout2', {
            const res = await fetch(BaseLocal + 'Logout2', {
                method: 'GET',
                credentials: 'include',
            });


            const result = await res.json();

            // Step 1: Parse inner JSON
            let innerDataObj = {};
            if (result.data) {
                innerDataObj = JSON.parse(result.data); // removes \ by parsing the string
            }

            // Step 2: Modify if needed (e.g., delete a field inside)
            delete innerDataObj.logoutUrl; // if present

            // Step 3: Re-stringify cleanly (without \)
            const cleanedStringifiedData = JSON.stringify(innerDataObj);

            // Step 4: Submit only the inner data
            const form = document.createElement('form');
            form.method = 'POST';
            // form.action = 'https://epstg.meripehchaan.gov.in/openid/jwt/processOIDCSLORequest.do';
            // form.action = 'https://localhost:8081/openid/jwt/processOIDCSLORequest.do';

            form.action = EpramaanUrlforLogout;

            const textarea = document.createElement('textarea');
            textarea.name = 'data';
            textarea.style.display = 'none';
            textarea.value = cleanedStringifiedData;

            form.appendChild(textarea);
            document.body.appendChild(form);
            form.submit();

            setIsAuthenticated(false);


        } catch (error) {
            console.error("Logout failed:", error);
            alert("Logout failed. Check console for details.");
        }
    };

    return (
        // <Button variant="contained" size='small' onClick={handleLogout}>
        //     Logout
        // </Button>

        <>
            <Button
                variant="contained"
                size="small"
                onClick={handleLogout}
                sx={{
                    backgroundColor: "#d32f2f",       // red shade
                    color: "#fff",                    // white text
                    textTransform: "none",            // normal case
                    fontWeight: "bold",
                    borderRadius: "8px",              // rounded corners
                    padding: "4px 12px",
                    boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
                    "&:hover": {
                        backgroundColor: "#b71c1c",     // darker red on hover
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                    },
                }}
            >
                Logout
            </Button>

        </>
    );
};

export default Logout;
