import axios from 'axios'

export function getAllVideos() {
    const response = axios.get("http://localhost:3000/dist/static/data/videos.json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "crossDomain": "true"
            }
        })
    return response;
}