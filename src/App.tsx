import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Students from "./components/students/Students";
import {Stack} from "@mui/material";
const queryClient = new QueryClient();
function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("base url", baseUrl);
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Students></Students>
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
