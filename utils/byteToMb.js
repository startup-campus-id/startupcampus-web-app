export const byteToMb = (bytes) => {
  const res = Number(bytes) * 0.000001;
  return res.toFixed(2);
};
