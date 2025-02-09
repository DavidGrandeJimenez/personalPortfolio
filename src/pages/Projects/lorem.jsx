import React from 'react';
import useStore from '../../components/useStore.js';
import { useEffect } from 'react';
import { useState } from 'react';

const Lorem = ({ titulo, descripcion, tecnologias, responsive, idioma, enlace }) => {

    const english = ['Description', 'Technology', 'Languages', 'Link'];
    const spanish = ['Descripción', 'Tecnología', 'Idiomas', 'Enlace'];
    const german = ['Beschreibung', 'Technologie', 'Sprachen', 'Link'];

    const language = useStore((state) => state.language);
    const [arrayLanguage, setArrayLanguage] = useState(english);

    useEffect(() => {
        switch (language) {
            case 'EN': setArrayLanguage(english); break;
            case 'ES': setArrayLanguage(spanish); break;
            case 'DE': setArrayLanguage(german); break;
            default: setArrayLanguage(english); break;
        }
    }, [language]);

    return (
        <div className='loremContainer'>
            <h2>{titulo}</h2>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><strong>{arrayLanguage[0]}:</strong> <p>{descripcion}</p></li>
                <li><strong>{arrayLanguage[1]}: </strong>{tecnologias}</li>
                <li><strong>Responsive:</strong> {responsive}</li>
                <li><strong>{arrayLanguage[2]}:</strong> {idioma}</li>
                <li><strong>{arrayLanguage[3]}:</strong> <a href={enlace} target="_blank" rel="noopener noreferrer">{enlace}</a></li>
            </ul>
        </div>
    );
};

export default Lorem;