import {QueryClient, QueryClientProvider} from "react-query";
import "./App.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/AppRouter";
import {FullPageSpinner} from "./components/shared/fullPageSpinner/FullPageSpinner";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <FullPageSpinner/>
        </QueryClientProvider>
    );
}

export default App;
