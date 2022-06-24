const clearify = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    // @ts-ignore
    return obj.map((v) => clearify(v));
  } else {
    const keys = Object.keys(obj);
    const newObject: T = { ...obj };
    keys.forEach((key) => {
      if (typeof obj[key] === 'undefined') {
        delete newObject[key];
      }
    });
    return newObject;
  }
};

export default clearify;
