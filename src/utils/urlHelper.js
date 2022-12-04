export const QS = (data) => {
    if(data) return Object.keys(data).map(key => key + '=' + data[key]).join('&');
    else return '';
  }