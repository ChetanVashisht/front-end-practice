import React from 'react'

export default {
    START: { id: "START", showReplayBtn: false, clickAllowed: true },
    IN_PROGRESS: { id: "IN_PROGRESS", showReplayBtn: false, clickAllowed: true },
    WON: { id: "WON", showReplayBtn: true, clickAllowed: false },
    LOST: { id: "LOST", showReplayBtn: true, clickAllowed: false }
}
