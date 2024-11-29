import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { store as noticesStore } from '@wordpress/notices';
import { useEffect, useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

const useSettings = () => {
	const [ title, setTitle ] = useState();
	const [ message, setMessage ] = useState();
	const [ display, setDisplay ] = useState();
	const [ size, setSize ] = useState();

	const { createSuccessNotice } = useDispatch( noticesStore );

	useEffect( () => {
		apiFetch( { path: '/wp/v2/settings' } ).then( ( settings ) => {
			setTitle( settings.wc_delhi_popup.title );
			setMessage( settings.wc_delhi_popup.message );
			setDisplay( settings.wc_delhi_popup.display );
			setSize( settings.wc_delhi_popup.size );
		} );
	}, [] );

	const saveSettings = () => {
		apiFetch( {
			path: '/wp/v2/settings',
			method: 'POST',
			data: {
				wc_delhi_popup: {
					title,
					message,
					display,
					size,
				},
			},
		} ).then( () => {
			createSuccessNotice(
				__( 'Settings saved.', 'wc-delhi' )
			);
		} );
	};
	return {
		title,
		setTitle,
		message,
		setMessage,
		display,
		setDisplay,
		size,
		setSize,
		saveSettings,
	};
};

export default useSettings;
