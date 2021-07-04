import React from 'react';

function Timer() {
    const now = Date.now();
    const sec = new Date(now).getSeconds();
    return (
        <p>현제 {sec}초 입니다.</p>
    );
};

export default Timer;