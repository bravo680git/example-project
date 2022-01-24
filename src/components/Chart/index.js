//src/components/Chart/index.js
import {
    ResponsiveContainer,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
} from 'recharts'
import './Chart.css'

function Chart({ processingSystems, dataKey, barColor = "#413ea0" }) {
    const labelText = dataKey === "waterLevel" ?
        "Water level" :
        (dataKey === "waterPressure" ?
            "Water Pressure" : "Chlorine Concentraition")
    const data = processingSystems.map(system => ({
        name: system.processingSystemName,
        [dataKey]: system[dataKey]
    }))

    return (
        <div className="barChart">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey={dataKey} barSize={50} fill={barColor} />
                </BarChart>
            </ResponsiveContainer>
            <div style={{
                textAlign:"center",
                fontSize:"20px"
            }}> {labelText} </div>
        </div>
    )
}

export default Chart