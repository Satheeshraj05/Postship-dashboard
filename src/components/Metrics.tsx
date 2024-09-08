import React from 'react';
import { Card, Button, Select } from '@shopify/polaris';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { SmilePlus, Eye } from 'lucide-react';
import styles from './Metrics.module.css'; // Adjust path as needed

const Metrics = () => {
    const timeOptions = [
        { label: 'Lifetime', value: 'lifetime' },
        { label: 'Last Week', value: 'lastWeek' },
        { label: 'Last Month', value: 'lastMonth' },
        { label: 'Last Year', value: 'lastYear' },
        { label: 'Customize Time Line', value: 'custom' },
    ];

    const shipmentData = [
        { name: 'Delivered', value: 200, color: '#FFB200' },
        { name: 'Out for delivery', value: 80, color: '#00A3FF' },
        { name: 'Intransit', value: 60, color: '#00C48C' },
        { name: 'Pending', value: 40, color: '#FF8042' },
        { name: 'Exception', value: 4, color: '#FF0000' },
    ];

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: any) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize={12}
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                <h2 style={{ margin: '0', fontSize: '20px' }}>Instant Dive into Your Performance Metrics</h2>
                <Select
                    options={timeOptions}
                    onChange={() => { }}
                    value="lifetime"
                    label="Time Period"
                    labelHidden
                />
            </div>
            <Card>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                        <div style={{ width: '40%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom:"20px" }}>
                                <h3 style={{ margin: '0' }}><b>Shipment Updates</b></h3>
                                <p style={{ margin: '0' }}>Total Orders: 384</p>
                            </div>
                            <div className={styles.buttonWrapper}>
                                {shipmentData.map((status) => (
                                    <div key={status.name} className={styles.buttonContainer}>
                                        <Button
                                            onClick={() => { /* Handle button click */ }}
                                            size="slim"
                                        >
                                            {status.name}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={shipmentData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={70}
                                        innerRadius={35}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {shipmentData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className={styles.customLegend}>
                                {shipmentData.map((status) => (
                                    <div key={status.name} className={styles.legendItem}>
                                        <div className={styles.legendColor} style={{ backgroundColor: status.color }}></div>
                                        <span className={styles.legendLabel}>{status.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ width: '50%', backgroundColor: '#a69b63', padding: '10px', borderRadius: '8px' }}>
                            <h3 style={{ margin: '0 0 5px 0' }}><b>Star Facts about your store(s)</b></h3>
                            <ul style={{ listStyleType: 'none', padding: 0, margin: '0' }}>
                                <li style={{ marginBottom: '5px' }}>There are 8 shipments that have been out for delivery for more than 3 days</li>
                                <li style={{ marginBottom: '5px' }}>There are 5 shipments in exception right now</li>
                                <li>The maximum time in transit is 6 days</li>
                            </ul>
                            <Button>Check Orders Page</Button>
                        </div>
                        <div style={{ width: '30%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <h3 style={{ margin: '0 0 5px 0' }}>Tracking Page Views vs Orders</h3>
                            <p style={{ margin: '0 0 10px 0' }}>Understand user engagement patterns and optimize your tracking page for enhanced customer experience.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <div className={styles.orderBox}>
                                    <div className={styles.textContainer}>
                                        <h4 className={styles.title}>Orders</h4>
                                        <p className={styles.value}>80</p>
                                    </div>
                                    <SmilePlus size={24} />
                                </div>
                                <div className={styles.viewBox}>
                                    <div className={styles.textContainer}>
                                        <h4 className={styles.title}>Tracking Page Views</h4>
                                        <p className={styles.value}>44</p>
                                    </div>
                                    <Eye size={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Card>
    );
};

export default Metrics;
