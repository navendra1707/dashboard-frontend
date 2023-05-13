import { Provider } from "react-redux";
import IntensityCountry from "./components/IntensityCountry";
import store from "./state/store";
import GetCommonData from "./getCommonData";
import { Stack } from "@mui/material";
import LikelihoodRegion from "./components/LikelihoodRegion";
import EndYearRelevance from "./components/EndYearRelevance";
import AvgRelevance from "./components/AvgRelevance";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Stack
        direction={'row'}
        gap={1}
        alignItems={'center'}
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        <IntensityCountry />
        <LikelihoodRegion />
        <GetCommonData />
        <EndYearRelevance />
        <AvgRelevance />
      </Stack>
    </Provider>
  );
}

export default App;
