export const byteToMb = (bytes) => {
  const res = Number(bytes) * 0.000001;
  return res.toFixed(2);
};

export const convertName = (string) => {
  const arr = string?.split('-');
  for (var i = 0; i < arr?.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr?.join(' ');
  return str2;
};
