//src/components/Content/index.js
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import './Content.css'
import fetchData from '../../apis/fetchData'
import SystemValue from "../SystemValue";
import Chart from "../Chart";
import useHandleLogout from '../../hooks/useHandleLogout'


function Content() {
    const [processingSystems, setProcessingSystems] = useState(null)
    const [stattionInfo, setStationInfo] = useState(null)
    const state = useSelector(state => state.loginStateSlice)
    const handleLogout = useHandleLogout()
    useEffect(() => {
        const fetchDataCallback = async () => {
            const res = await fetchData(state.authToken)
            const stationData = res.data
            if (stationData) {
                setProcessingSystems(stationData[0].processingSystems)
                setStationInfo({
                    name: stationData[0].stationName,
                    location: stationData[0].stationAddress
                })
            }
            else {
                alert("There is a error, please log in again!")
                handleLogout()
            }
        }
        fetchDataCallback()
    }, [])

    return (
        <div className="content">
            {stattionInfo && <div className="contentInfo">
                <div className="stationName">{stattionInfo.name}</div>
                <div className="stationLocation">
                        Location: {stattionInfo.location}
                </div>
            </div>}
            <div className="displayFlex">
                <div className="systemValues">
                    {processingSystems && processingSystems.map((system, index) => 
                        <SystemValue key={index} data={system} />)}
                </div>
                {processingSystems && <div className="charts">
                    <Chart processingSystems={processingSystems} 
                        dataKey="waterLevel" barColor="#A0DAA9" />
                    <Chart processingSystems={processingSystems} 
                        dataKey="waterPressure" barColor="#926AA6" />
                    <Chart processingSystems={processingSystems} 
                        dataKey="chlorineConcentration" barColor="#0072B5" />
                </div>}
            </div>
        </div>
    )
}

export default Content