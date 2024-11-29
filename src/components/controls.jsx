import { __ } from '@wordpress/i18n';
import {
	TextControl,
	FontSizePicker,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';

const PopupTitleControl = ( { value, onChange } ) => {
	return (
		<TextControl
			label={ __( 'Popup Title', 'wc-delhi' ) }
			value={ value }
			onChange={ onChange }
			__nextHasNoMarginBottom
		/>
	);
};

const MessageControl = ( { value, onChange } ) => {
	return (
		<TextareaControl
			label={ __( 'Popup Message', 'wc-delhi' ) }
			value={ value }
			onChange={ onChange }
			__nextHasNoMarginBottom
		/>
	);
};

const DisplayControl = ( { value, onChange } ) => {
	return (
		<ToggleControl
			checked={ value }
			label={ __( 'Enable Popup', 'wc-delhi' ) }
			onChange={ onChange }
			__nextHasNoMarginBottom
		/>
	);
};

const SizeControl = ( { value, onChange } ) => {
	return (
		<FontSizePicker
			fontSizes={ [
				{
					name: __( 'Small', 'wc-delhi' ),
					size: 'small',
					slug: 'small',
				},
				{
					name: __( 'Medium', 'wc-delhi' ),
					size: 'medium',
					slug: 'medium',
				},
				{
					name: __( 'Large', 'wc-delhi' ),
					size: 'large',
					slug: 'large',
				},
				{
					name: __( 'Extra Large', 'wc-delhi' ),
					size: 'x-large',
					slug: 'x-large',
				},
			] }
			value={ value }
			onChange={ onChange }
			disableCustomFontSizes={ true }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
		/>
	);
};

export { MessageControl, DisplayControl, SizeControl, PopupTitleControl };
