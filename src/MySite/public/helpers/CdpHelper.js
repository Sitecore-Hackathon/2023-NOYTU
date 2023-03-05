export const boxeverEventCreate = (data, callback) =>
  Boxever.eventCreate(
    {
      ...data,
      browser_id: Boxever.getID(),
      pos: window._boxever_settings.pointOfSale
    },
    callback,
    'json'
  );

export const waitFor = (variable, callback) => {
  const interval = setInterval(() => {
    if (window[variable]) {
      clearInterval(interval);
      callback();
    }
  }, 200);
};
