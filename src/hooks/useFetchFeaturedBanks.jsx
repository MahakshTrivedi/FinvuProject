const useFetchBanks = (setBanks) => {
    const fetchContacts = async () => {
      try {
        const response = await import("../dummydata/featuredBanks.json");
        setBanks(response.banks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    return fetchContacts;
  };
  
  export default useFetchBanks;
  