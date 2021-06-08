export default class Service {

    get = async (url) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        var response;

        await fetch(process.env.REACT_APP_API_URL + url, requestOptions)
            .then(res => { response = res.json() })

        return response;
    }

    post = async (url, body) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        var response;

        await fetch(process.env.REACT_APP_API_URL + url, requestOptions)
            .then(res => { response = res.json() })

        return response;
    }

    put = async (url, body) => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        var response;

        await fetch(process.env.REACT_APP_API_URL + url, requestOptions)
            .then(res => { response = res.json() })

        return response;
    }

    delete = async (url) => {

        const requestOptions = {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json' },
        };

        var response;

        await fetch(process.env.REACT_APP_API_URL + url, requestOptions)
            .then(res => { response = res.json() })

        return response;
    }
}