import { useEffect, useState } from "react";

function WebsocketStreaming() {
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const websocket = new WebSocket("ws://localhost:8000/ws");
        websocket.onopen = () => {
            console.log("WebSocket connected");
            setWs(websocket);
            websocket.send("Connected");
        };
        websocket.onmessage = (event) => {
            console.log("WebSocket message received:", event.data);
        };
        return () => {
            websocket.close();
        };
    }, []);

    return (
        <div>
            <p>Hello world</p>
        </div>
    );
}

export default WebsocketStreaming;
