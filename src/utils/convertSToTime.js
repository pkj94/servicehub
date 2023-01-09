export const convertSToTime = (s) => {
    if (!s) return 'N/A';
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    return parseInt(hrs) + (parseInt(hrs) > 1 ? ' hrs ' : ' hr ') + parseInt(mins) + ' min';
};