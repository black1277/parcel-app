class PackData {
  static userDataKey = 'userData'
  static setData(key, val) {
    let data
    if (!localStorage.getItem(PackData.userDataKey)){
      data = { [key]: val }
    } else {
      let strData = localStorage.getItem(PackData.userDataKey)
      data = JSON.parse(strData)
      data[key] = val
    }
    try {
      localStorage.setItem(PackData.userDataKey, JSON.stringify(data));
    } catch (error) {
      console.log('Error! localStorage not complete!');
    }
  }
  static getData(key) {
    const storedData = localStorage.getItem(PackData.userDataKey);
    if (!storedData) return false;

    try {
      const data = JSON.parse(storedData);
      return key in data ? data[key] : false;
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      return false;
    }
  }
}

export default PackData