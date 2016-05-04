# Problem

ember-cable websocket seems to be disconnecting and connecting.

Websocket should not be doing this?

# Reproduce

1.  Clone this repo
2.  `rails s --bind 127.0.0.1` in chatapi
3.  `ember serve --proxy=http://127.0.0.1:3000` in chatfront
4.  Visit http://localhost:4200/

# What you see

In chrome console, `connect connect disconnect connect connect disconnect` pattern.

    ember.debug.js:6440DEBUG: -------------------------------
    ember.debug.js:6440DEBUG: Ember      : 2.5.1
    ember.debug.js:6440DEBUG: Ember Data : 2.5.2
    ember.debug.js:6440DEBUG: jQuery     : 2.2.3
    ember.debug.js:6440DEBUG: -------------------------------
    2ember.debug.js:6440 DEBUG: connected()
    ember.debug.js:6440 DEBUG: disconnected()
    2ember.debug.js:6440 DEBUG: connected()
    ember.debug.js:6440 DEBUG: disconnected()
    2ember.debug.js:6440 DEBUG: connected()
    ember.debug.js:6440 DEBUG: disconnected()
    ember.debug.js:6440 DEBUG: connected()

In rails server, repeated connections:

    MsgChannel is streaming from MsgChannel
    Started GET "/mysocket" for 127.0.0.1 at 2016-05-03 18:58:11 -0700
    Started GET "/mysocket" [WebSocket] for 127.0.0.1 at 2016-05-03 18:58:11 -0700
    Successfully upgraded to WebSocket (REQUEST_METHOD: GET, HTTP_CONNECTION: Upgrade, HTTP_UPGRADE: websocket)
    MsgChannel is transmitting the subscription confirmation
    MsgChannel is streaming from MsgChannel
    Finished "/mysocket" [WebSocket] for 127.0.0.1 at 2016-05-03 18:58:21 -0700
    MsgChannel stopped streaming from MsgChannel
    Started GET "/mysocket" for 127.0.0.1 at 2016-05-03 18:58:22 -0700
    Started GET "/mysocket" [WebSocket] for 127.0.0.1 at 2016-05-03 18:58:22 -0700
    Successfully upgraded to WebSocket (REQUEST_METHOD: GET, HTTP_CONNECTION: Upgrade, HTTP_UPGRADE: websocket)
    MsgChannel is transmitting the subscription confirmation


