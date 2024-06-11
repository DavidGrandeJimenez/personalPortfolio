import React from 'react';

export default function Proyects () {

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px'
    };

    const gridItemStyle = {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px'

    };
    return (
        <div style={gridContainerStyle}>
            <div style={gridItemStyle}>
                <h1>Tu madre</h1>
                <h1>Tu madre</h1>
                <h1>Tu madre</h1>
            </div>
        </div>
    );
};