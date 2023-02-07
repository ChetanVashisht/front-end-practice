import sad from './assets/sad.svg'
import smily from './assets/smily.svg'
import lost from './assets/lost.svg'

export default {
    START: { id: "START", showReplayBtn: false, clickAllowed: true, img: sad, runTimer: false },
    IN_PROGRESS: { id: "IN_PROGRESS", showReplayBtn: false, clickAllowed: true, img: sad, runTimer: true },
    WON: { id: "WON", showReplayBtn: true, clickAllowed: false, img: smily, runTimer: false },
    LOST: { id: "LOST", showReplayBtn: true, clickAllowed: false, img: lost, runTimer: false }
}
