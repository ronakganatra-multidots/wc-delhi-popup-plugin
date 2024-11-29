import './index.scss';
import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

//Creating a separate SettingsPage component for better organization.
import { SettingsPage } from './components';


//Moving this component to a separate file for better organization.
// const SettingsPage = () => {
//     return <div>Placeholder for settings page</div>;
// };

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

domReady( () => {
    const root = createRoot(
        document.getElementById( 'wc-delhi-popup-settings' )
    );

    root.render( <SettingsPage /> );
} );