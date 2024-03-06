import React from 'react';

function Sidebar() {
    const toggleSidebar = () => {
        const mySidebar = document.getElementById("mySidebar");
        mySidebar.stytle.display = mySidebar.style.display === 'block' ? 'none' : 'block';
    };

    return (


        <button onClick = {toggleSidebar}>Toggle Sidebar </button>

    );
}