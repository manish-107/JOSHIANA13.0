const dbConnect = async () => {
  try {
    console.log("[Database]:Database connected");
  } catch (error) {
    console.log("[Database]: Error while connecting..");
  }
};

export { dbConnect };
