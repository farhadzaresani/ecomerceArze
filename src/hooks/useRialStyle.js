const useRialStyle = (amount) => {
  const response = Number(amount)?.toLocaleString("fa-IR");
  return response;
};

export default useRialStyle;
