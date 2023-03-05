import { boxeverEventCreate, waitFor } from './CdpHelper.js';

const thisScript = document.querySelector('#cdpSendEventId');
let cdpData = thisScript.getAttribute('cdp-data');
if (cdpData) {
    cdpData = JSON.parse(cdpData);
    waitFor('Boxever', () => {
        boxeverEventCreate(cdpData, () => { });
    });
}
