import { __ } from '@wordpress/i18n';
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalHeading as Heading,
	Button,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';

import { MessageControl, DisplayControl, SizeControl, PopupTitleControl } from './controls';

import { useSettings } from '../hooks';
import { Notices } from './notices';

//The Panel component is a perfect fit for this use case, as it creates a container with an optional header and accepts a PanelBody component that you can collapse.

const SettingsTitle = () => {
	return (
		<Heading level={ 1 }>
			{ __( 'WC Delhi Popup Settings', 'wc-delhi' ) }
		</Heading>
	);
};

//Basic Panels
const SaveButton = ( { onClick } ) => {
	return (
		<Button variant="primary" onClick={ onClick } __next40pxDefaultSize>
			{ __( 'Save', 'wc-delhi' ) }
		</Button>
	);
};

//Basic Panels view
// const SettingsPage = () => {
//     return (
//         <Panel>
//             <PanelBody>
//                 <PanelRow>
//                     <div>Placeholder for message control</div>
//                 </PanelRow>
//                 <PanelRow>
//                     <div>Placeholder for display control</div>
//                 </PanelRow>
//             </PanelBody>
//             <PanelBody
//                 title={ __( 'Appearance', 'wc-delhi' ) }
//                 initialOpen={ false }
//             >
//                 <PanelRow>
//                     <div>Placeholder for size control</div>
//                 </PanelRow>
//             </PanelBody>
//         </Panel>
//    );
// };

const SettingsPage = () => {
	const {
        title,
		setTitle,
		message,
		setMessage,
		display,
		setDisplay,
		size,
		setSize,
		saveSettings,
	} = useSettings();
    console.log(useSettings());
	return (
		<>
			<SettingsTitle />
			<Notices />
			<Panel>
				<PanelBody>
                    <PanelRow>
						<PopupTitleControl
							value={ title }
							onChange={ ( value ) => setTitle( value ) }
						/>
					</PanelRow>
					<PanelRow>
						<MessageControl
							value={ message }
							onChange={ ( value ) => setMessage( value ) }
						/>
					</PanelRow>
					<PanelRow>
						<DisplayControl
							value={ display }
							onChange={ ( value ) => setDisplay( value ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Appearance', 'wc-delhi' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<SizeControl
							value={ size }
							onChange={ ( value ) => setSize( value ) }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
			<SaveButton onClick={ saveSettings } />
		</>
	);
};

export { SettingsPage };
