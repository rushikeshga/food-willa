import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [networkStatus, setNetworkStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline", function() {
            setNetworkStatus(false);
          });
          window.addEventListener("online", function() {
            setNetworkStatus(true);
          });
    },[]);

    return networkStatus;
}

export default useOnlineStatus;