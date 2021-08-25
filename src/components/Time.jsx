import React, { useState } from "react";

function Time(){

    const nowTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(nowTime);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime( newTime );
    }

    // setInterval(updateTime(), 2000);

    return <p className="clock" onClick={updateTime}>{time}</p>;
}

export default Time;