
const url = 'https://covid.mathdro.id/api'

export const fetchDailyData = async (country) => {
    let changeUrl = url;
    if (country) { changeUrl = `${url}/countries/${country}`; }

    try {

        const resAPI = await fetch(changeUrl);
        const resJSON = await resAPI.json();

        return resJSON;

    } catch (error) {
        console.log(error)
    }
}

export const fetchChartData = async () => {
    try {
        const resAPI = await fetch(`${url}/daily`);
        const resJSON = await resAPI.json();

        const data = resJSON.map((item) =>
            ({
                confirmed: item.confirmed.total,
                deaths: item.deaths.total,
                lastUpdate: item.reportDate,
            }))

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const resAPI = await fetch(`${url}/countries`);
        const resJSON = await resAPI.json();

        const r = { randy: resJSON.countries }

        return r.randy.map(item => item.name)
    } catch (error) {
        console.log(error)
    }
}
