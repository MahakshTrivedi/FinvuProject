const searchHelper = async ({ pageNumber, searchText, pageSize }) => {
  try {
    const response = await import("../dummydata/banks.json");
    const banks = response.banks;
    const startIndex = (pageNumber - 1) * pageSize;
    if (searchText === "") {
      const hasMore = startIndex + pageSize < banks.length;
      return {
        result: banks.slice(startIndex, startIndex + pageSize),
        hasMore,
      };
    } else {
      const matchingBanks = banks.filter((bank) => bank.toLowerCase().includes(searchText.toLowerCase()));
      const hasMore = startIndex + pageSize < matchingBanks.length;
      return {
        result: matchingBanks.slice(startIndex, startIndex + pageSize),
        hasMore,
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default searchHelper;
