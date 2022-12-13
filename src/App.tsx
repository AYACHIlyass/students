import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import StudentsList from "./components/studentsList/StudentsList";
import {Stack} from "@mui/material";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <StudentsList></StudentsList>
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
