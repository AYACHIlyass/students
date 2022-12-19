import {QueryClient, QueryClientProvider} from "react-query";
import "./App.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/AppRouter";


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    );
}

export default App;
