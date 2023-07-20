'use client'
import { useState } from "react";
import NavBar from "../resources/components/ui/NavBar";
import { useStore } from "@/app/resources/context/store";
import Footer from "../resources/components/ui/Footer";


export default function Create() {
    const { settings } = useStore()
    return (
        <main className={`page page-settings ${settings.theme}`}>
            <NavBar />
            <SettingsComponent />
            <Footer />
        </main>
    )
}
// Define settings components
const SecuritySettings = () => <div>Security Settings</div>;
const ProfileSettings = () => <div>Profile Settings</div>;
const AIPartnerSettings = () => <div>AI Partner Settings</div>;
const PaymentMethodsSettings = () => <div>Payment Methods Settings</div>;




const SettingsComponent = () => {
    const [currentSetting, setCurrentSetting] = useState('Profile');

    const renderRightComponent = () => {
        switch(currentSetting) {
            case 'Security':
                return <SecuritySettings />;
            case 'Profile':
                return <ProfileSettings />;
            case 'AI Partner':
                return <AIPartnerSettings />;
            case 'Payment Methods':
                return <PaymentMethodsSettings />;
            default:
                return <div>Select a setting</div>;
        }
    };

    return (
        <div className="component-settings">
            <div className="top-component">
                <button onClick={() => setCurrentSetting('Security')}>Security</button>
                <button onClick={() => setCurrentSetting('Profile')}>Profile</button>
                <button onClick={() => setCurrentSetting('AI Partner')}>AI Partner</button>
                <button onClick={() => setCurrentSetting('Payment Methods')}>Payment Methods</button>
            </div>
            <div className="bottom-component">
                {renderRightComponent()}
            </div>
        </div>
    )
}