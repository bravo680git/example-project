//src/components/SystemValue/index.js
import './SystemValue.css'

function SystemValue({data}) {

    return (
        <div className="systemValue">
            <div className="systemName">{data.processingSystemName}</div>
            <div className="values">
                <div>Water level: {data.waterLevel} m</div>
                <div>Water Pressure: {data.waterPressure} pa</div>
                <div>
                    Chlorine concentration: 
                    {data.chlorineConcentration}%
                </div>
            </div>
        </div>
    )
}

export default SystemValue