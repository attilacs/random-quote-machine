import { QueryClient, QueryClientProvider } from "react-query";
import QuotePage from "./components/QuotePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QuotePage />
    </QueryClientProvider>
  );
};

export default App;
