import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { WalletProvider } from '@/contexts/WalletContext';

import Home from '@/pages/home';
import Packs from '@/pages/packs';
import Marketplace from '@/pages/marketplace';
import Contests from '@/pages/contests';
import Events from '@/pages/events';
import Profile from '@/pages/profile';
import Login from '@/pages/login';
import Register from '@/pages/register';
import HowItWorks from '@/pages/how-it-works';
import Terms from '@/pages/terms';
import Privacy from '@/pages/privacy';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/packs" component={Packs} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/contests" component={Contests} />
      <Route path="/events" component={Events} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WalletProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </WalletProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
