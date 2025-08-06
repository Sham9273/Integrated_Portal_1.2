import React, { useEffect, useRef } from "react";

const AutoSubmitRedirect = () => {
  const formRef = useRef(null);
  const [redirectURL, setRedirectURL] = React.useState(null);

  useEffect(() => {
    // Fetch redirection URL from backend
    fetch("http://localhost:8080/Demo2") // adjust as needed
      .then((res) => res.json())
      .then((data) => {
        setRedirectURL(data.redirectionURL);
      })
      .catch((err) => console.error("Error fetching redirect URL", err));
  }, []);

  useEffect(() => {
    if (redirectURL && formRef.current) {
      formRef.current.submit();
    }
  }, [redirectURL]);

  return (
    <div>
      {redirectURL ? (
        <form
          ref={formRef}
          action={redirectURL}
          method="post"
          name="ResponsePost"
          autoComplete="off"
        >
          <div>Redirecting . . .</div>

          {/* Optional hidden inputs if needed */}
          {/* <input type="hidden" name="token" value="..." />
          <input type="hidden" name="key" value="..." /> */}

        </form>
      ) : (
        <div>Preparing redirect...</div>
      )}
    </div>
  );
};

export default AutoSubmitRedirect;
