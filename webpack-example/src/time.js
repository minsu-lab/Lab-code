import moment from 'moment';

export function currentTime() {
    return moment().format("H:m:s");
}