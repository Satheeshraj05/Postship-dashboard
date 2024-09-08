import React, { useState } from 'react';
import { Card, Button, TextField, Select } from '@shopify/polaris';
import { Star, Camera, BarChart2, Grid } from 'lucide-react';

// Define a simple palette of colors
const colorPalette = ['#F82888', '#FF6347', '#32CD32', '#4682B4', '#FFD700'];

const FunctionalityCustomization = () => {
    const [accentColor, setAccentColor] = useState('#F82888');
    const [textColor, setTextColor] = useState('#37101D');
    const [backgroundColor, setBackgroundColor] = useState('#FEEAFA');

    // Function to render color swatches
    const renderColorPalette = (currentColor: string, setColor: React.Dispatch<React.SetStateAction<string>>) => (
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {colorPalette.map((color, index) => (
                <div
                    key={index}
                    onClick={() => setColor(color)}
                    style={{
                        backgroundColor: color,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: currentColor === color ? '2px solid black' : '2px solid transparent',
                        cursor: 'pointer'
                    }}
                />
            ))}
        </div>
    );

    return (
        <div className="container" style={{ width: '100%', padding: '20px' }}>
            {/* Header */}
            <h2 className="custom-header" style={{ textAlign: 'left', marginBottom: '20px' }}><b>Discover the Heart of Our Functionality</b></h2>

            {/* Row 1 */}
            <div className="custom-card-wrapper" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                    <Card>
                        <div className="custom-card-content">
                            <h3 className="text-xl font-semibold mb-4">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h3>
                            <p className="mb-4">Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>

                            <div className="color-input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <TextField 
                                    label="Accent Color" 
                                    value={accentColor} 
                                    onChange={(value) => setAccentColor(value)}
                                    autoComplete="off"
                                />
                                {/* Render color palette for accent color */}
                                {renderColorPalette(accentColor, setAccentColor)}
                            </div>

                            <div className="color-input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                                <TextField 
                                    label="Text Color" 
                                    value={textColor} 
                                    onChange={(value) => setTextColor(value)}
                                    autoComplete="off"
                                />
                                {/* Render color palette for text color */}
                                {renderColorPalette(textColor, setTextColor)}
                            </div>

                            <div className="color-input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                                <TextField 
                                    label="Background Color" 
                                    value={backgroundColor} 
                                    onChange={(value) => setBackgroundColor(value)}
                                    autoComplete="off"
                                />
                                {/* Render color palette for background color */}
                                {renderColorPalette(backgroundColor, setBackgroundColor)}
                            </div>

                            <div className="mt-6 flex justify-between">
                                <br />
                                <Button>Preview</Button>
                                <Button>Apply Colors</Button>
                            </div>
                        </div>
                    </Card>
                </div>

                <div style={{ flex: 1 }}>
                    <Card>
                        <div className="custom-card-content">
                            <h3 className="text-xl font-semibold mb-4">Exclusive Onboarding Support for High-Volume Brands</h3>
                            <p className="mb-4">Unlock personalized guidance from a one-on-one onboarding call to streamline your experience.</p>
                            <Button>Schedule a Call</Button><br />
                            <h3 className="text-xl font-semibold mt-6 mb-4">Explore Our Integrated Ecosystem</h3>
                            <p className="mb-4">Discover a variety of popular integrations tailored for your convenience.</p>
                            <div className="flex justify-center space-x-4 mb-4">
                                <Star size={24} />
                                <Camera size={24} />
                                <BarChart2 size={24} />
                                <Grid size={24} />
                            </div>
                            <Button>Explore Integrations</Button>
                        </div>
                    </Card>
                </div>

                <div style={{ flex: 1 }}>
                    <Card>
                        <div className="custom-card-content">
                            <h3 className="text-xl font-semibold mb-4">Seamlessly Integrate Custom HTML Elements</h3>
                            <p className="mb-4">Unleash creativity with our Custom HTML feature. Add titles, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
                            <Select
                                label="HTML Link"
                                options={[
                                    {label: 'None', value: 'none'},
                                    {label: 'Custom', value: 'custom'},
                                ]}
                                onChange={() => {}}
                            />
                            <div className="mt-6 flex justify-between">
                                <br />
                                <Button>Preview</Button>
                                <Button>Apply Changes</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FunctionalityCustomization;
