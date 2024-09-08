import React from 'react';
import { Layout, TextContainer, Banner, Button } from '@shopify/polaris';

const Header = () => {
    return (
        <Layout>
            <Layout.Section>
                <TextContainer>
                    <h1><b>Welcome, John Mathew!</b></h1>
                </TextContainer>
            </Layout.Section>
            <Layout.Section>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '20px 0' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', borderRadius: '10px', backgroundColor: '#F9FAFB' }}>
                            <Banner>
                                <p>Order Sync Successful! Your order records from the last 30 days have been successfully synced.</p>
                                <Button>Explore Your Orders</Button>
                            </Banner>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', borderRadius: '10px', backgroundColor: '#FEF3C7' }}>
                            <Banner>
                                <p>Customize Customer Notification: Take your email experience: Set the sender email and choose notification triggers.</p>
                                <Button>Configure Notifications</Button>
                            </Banner>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', borderRadius: '10px', backgroundColor: '#DBEAFE' }}>
                            <Banner>
                                <p>Your tracking link has been generated. Include the link to your store’s navigation menu.</p>
                                <Button>Copy Link</Button>
                            </Banner>
                        </div>
                    </div>
                </div>
            </Layout.Section>
        </Layout>
    );
};

export default Header;
