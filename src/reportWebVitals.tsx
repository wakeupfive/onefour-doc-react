import { ReportHandler } from 'web-vitals'

type OnPerfEntry =  ReportHandler & Function

const reportWebVitals = (onPerfEntry: OnPerfEntry) => {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  })
}

export default reportWebVitals
