Request a connection to websocket. Curl only speaks http, so the upgrade is all we can do.

    curl -i -N -H "Connection: Upgrade" -H "Upgrade: websocket" -H "Host: localhost:3000/cable" -H "Origin: http://localhost:3000" localhost:3000/mysocket
