import React, { useEffect } from 'react';

export const FacebookPage: React.FC = () => {
  useEffect(() => {
    // This useEffect hook will run after the component is mounted
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
    script.nonce = "1gwOqK2w";
    document.body.appendChild(script);

    return () => {
      // This will clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fb-page" 
      data-tabs="timeline,events,messages"
      data-href="https://www.facebook.com/"
      data-width="380"
      data-hide-cover="false"
    ></div>
  );
};

