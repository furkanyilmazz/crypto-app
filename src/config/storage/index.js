import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
  size: 10000,
  storageBackend: AsyncStorage,
  enableCache: true,
  sync: {},
});

export default storage;
