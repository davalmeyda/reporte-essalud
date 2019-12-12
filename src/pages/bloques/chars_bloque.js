import React from 'react';

import { ResponsiveBar } from '@nivo/bar'


function CharsCompraVenta(props) {

    const data2 = [
        {
            "mes": "Enero",
            "venta": 50,
            "ventaColor": "hsl(298, 70%, 50%)",
            "compra": 130,
            "compraColor": "hsl(279, 70%, 50%)",
        },
        {
            "mes": "Febrero",
            "venta": 40,
            "ventaColor": "hsl(298, 70%, 50%)",
            "compra": 30,
            "compraColor": "hsl(279, 70%, 50%)",
        },
        {
            "mes": "Marzo",
            "venta": 40,
            "ventaColor": "hsl(298, 70%, 50%)",
            "compra": 10,
            "compraColor": "hsl(279, 70%, 50%)",
        },
        {
            "mes": "Abril",
            "venta": 70,
            "ventaColor": "hsl(298, 70%, 50%)",
            "compra": 130,
            "compraColor": "hsl(279, 70%, 50%)",
        },
        {
            "mes": "Mayo",
            "venta": 80,
            "ventaColor": "hsl(298, 70%, 50%)",
            "compra": 100,
            "compraColor": "hsl(279, 70%, 50%)",
        },
        {
            "mes": "Junio",
            "venta": 70,
            "ventaColor": "hsl(298, 70%, 50%)",
            "compra": 10,
            "compraColor": "hsl(279, 70%, 50%)",
        },
    ];

    const MyResponsiveBar = () => (

        <ResponsiveBar
            data={data2}
            keys={['venta', 'compra']}
            indexBy="mes"
            margin={{ top: 10, right: 100, bottom: 30, left: 40 }}
            padding={0.3}
            groupMode="grouped"
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />        
    );

    return (
        <div className='charts-personalizado'>
            <MyResponsiveBar></MyResponsiveBar>
        </div>
    );

}

export default CharsCompraVenta;