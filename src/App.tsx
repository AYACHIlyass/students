import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Students from "./components/students/Students";
const queryClient = new QueryClient();
function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("base url", baseUrl);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Students></Students>
      </div>
    </QueryClientProvider>
  );
}

export default App;
