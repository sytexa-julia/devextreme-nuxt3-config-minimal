import config from 'devextreme/core/config'
import {licenseKey} from "~/devextreme-license";

export default defineNuxtPlugin((app) => {
    config({
        licenseKey: licenseKey
    })
})