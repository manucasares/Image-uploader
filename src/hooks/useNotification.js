import { useState, useEffect, useRef } from 'react';

const notificationTime = 2500;
const animationTime = 750;

export const useNotification = () => {
   
    const [ showNotification, setShowNotification ] = useState( false );
    const notificationRef = useRef();

    useEffect(() => {

        // Si no hay ref retornamos
        if ( !notificationRef.current ) return;

        const notificationClasslist = notificationRef.current.classList;

        // Iniciamos fadeIn
        notificationClasslist.add( 'fadeIn' );

        // Iniciamos fadeOut animación
        setTimeout(() => {
            notificationClasslist.remove( 'fadeIn' );
            notificationClasslist.add( 'fadeOut' );
        }, notificationTime );

        // Cuando termine la animación sacamos el fadeOut y sacamos la animación
        setTimeout( () => {
            setShowNotification( false );
        }, notificationTime + animationTime );
        
    }, [ showNotification, notificationRef ] );
       
    return [ notificationRef, showNotification, setShowNotification ];
}