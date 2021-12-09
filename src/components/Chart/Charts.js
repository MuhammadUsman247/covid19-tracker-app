import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import Chart from 'chart.js/auto';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = ({ data, country}) => {
    const [dailyData, setDailyData] = useState(null);

    useEffect(() => {
        async function fetchDailyDataAPI() {
          let fetchedData = await fetchDailyData();      
        //   console.log('Data in chart',fetchedData.length);
          setDailyData (fetchedData);
        }
        fetchDailyDataAPI()
      }, []);

    console.log('Daily Data',dailyData);
    
    const lineChart = (
        dailyData!=null?(
        <Line 
            data={{
                labels:dailyData.map(({ date }) => date),
                datasets:[{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true
                },{
                    data: dailyData.map(({ deaths })=> deaths ),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                }]
            }}
        />
        ):null
    );

    const barChart = (
        data?(
            <Bar 
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        labels:'People',
                        backgroundColor:[
                            'rgb(0,0,255,0.5)',
                            'rgb(0,255,0,0.5)',
                            'rgb(255,0,0,0.5)',
                        ],
                        data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true,text:`Current state in ${country}`}
                }}
            />
        ):null
    );
    return (
        <div className={styles.container}>
            {country&&country!=='global'?barChart:lineChart}
        </div>
    )
}

export default Charts;