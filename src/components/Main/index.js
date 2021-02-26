import { QueryClient, QueryClientProvider } from "react-query";
import Meme from "./Meme";

const qc = new QueryClient();

console.log(qc, QueryClientProvider);

const Main = () => (
  <Main>
    <QueryClientProvider client={qc}>
      <Meme />
    </QueryClientProvider>
  </Main>
);

export default Main;
