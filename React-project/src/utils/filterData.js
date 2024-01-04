function filterData(searchInput, restruants) {
  return restruants.filter((restruant) => {
    if (
      restruant.info.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    ) {
      return restruant;
    }
  });
}
export default filterData;
