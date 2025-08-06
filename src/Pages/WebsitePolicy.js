// import React from 'react';
import { useEffect } from "react";


const WebsitePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div style={{ maxWidth: 800, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, textAlign: 'justify' }}>
            <h1>Website Policy</h1>
            <p>
                This is the official website of the Centre for Development of Advanced Computing (C-DAC), an autonomous scientific society under the Ministry of Electronics and Information Technology, Government of India. The website has been designed, developed, and is maintained by C-DAC.
                The objective of this site is to provide accurate, comprehensive, and reliable information about C-DAC and its various groups and divisions. It has been developed for the benefit of the general public, stakeholders, and partner organizations.
                Efforts have been made to ensure that the information on this site is up-to-date and accessible. Hyperlinks to various Indian Government portals and websites are provided for broader reference. The content on this website is the result of collaborative contributions from different departments and divisions within C-DAC.
                We are committed to continuously enhancing the website in terms of content coverage, user experience, and technological upgrades.
            </p>

            {/* <h2>1. Privacy</h2>
        <p>
            We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for details on how we collect, use, and safeguard your data.
        </p>

        <h2>2. Use of Content</h2>
        <p>
            All content on this website, including text, graphics, logos, and images, is the property of the website owner and is protected by applicable copyright laws. You may not reproduce, distribute, or use any content without prior written permission.
        </p>

        <h2>3. User Conduct</h2>
        <p>
            You agree not to use this website for any unlawful purpose or in any way that may harm the website or its users. Harassment, spamming, or posting offensive material is strictly prohibited.
        </p>

        <h2>4. External Links</h2>
        <p>
            This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.
        </p>

        <h2>5. Changes to Policy</h2>
        <p>
            We reserve the right to update or modify this policy at any time. Changes will be posted on this page.
        </p>

        <h2>6. Contact Us</h2>
        <p>
            If you have any questions about this policy, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p> */}
        </div>
    );
}

export default WebsitePolicy; 