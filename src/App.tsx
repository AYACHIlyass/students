import {QueryClient, QueryClientProvider} from "react-query";
import "./App.css";
import {CustomRoutes} from "./routes/CustomRoutes";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CustomRoutes></CustomRoutes>
        </QueryClientProvider>
    );
}

export default App;
