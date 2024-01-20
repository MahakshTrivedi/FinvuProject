const useFetchContacts = (setContacts) => {
  const fetchContacts = async () => {
    try {
      const response = await import("../dummydata/contacts.json");
      setContacts(response.contacts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return fetchContacts;
};

export default useFetchContacts;
