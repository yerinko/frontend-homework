import moment from 'moment';


export function ToMillisecondsTimeString(ms: number): any {
    return moment.utc(ms).format('mm:ss');
}