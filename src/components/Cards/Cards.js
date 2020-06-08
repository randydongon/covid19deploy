import React from 'react';
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';


const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className="container">
            <div className="row"><div className="confirmed-container ">
                <h4 className="text-center">Infected</h4>
                <div className="text-center counter-infected my-1">
                    <CountUp start={0} end={confirmed.value} separator=',' />

                </div>
                <div>
                    <span>{new Date(lastUpdate).toDateString()}</span><br />
                    <span style={{ color: 'black' }}>Number of infected from
            <strong style={{ color: 'red' }} > COVID-19</strong></span>
                </div>
            </div>
                <div className="recovered-container ">
                    <h4 className="text-center" style={{ color: 'black', }}>Recovered</h4>
                    <div style={{ backgroundColor: 'brown', borderRadius: '0.3rem' }}
                        className="text-center counter-recovered my-1">
                        <CountUp start={0} end={recovered.value} separator=',' />
                    </div>
                    <div>
                        <span>{new Date(lastUpdate).toDateString()}</span><br />
                        <span style={{ color: 'black' }}>Number of recovered from
            <strong style={{ color: '#00b159 ' }} > COVID-19</strong></span>
                    </div>
                </div>
                <div className="deaths-container ">
                    <h4 className="text-center" style={{ color: 'black', }}>Deaths</h4>
                    <div className="text-center counter-deaths my-1">
                        <CountUp start={0} end={deaths.value} separator=',' />

                    </div>
                    <div className="">
                        <span className="text-center">{new Date(lastUpdate).toDateString()}</span><br />
                        <span style={{ color: 'black' }}>Number of deaths from
            <strong style={{ color: '#fe4a49' }} > COVID-19</strong></span>
                    </div>
                </div></div>

        </div>);
}

export default Cards;