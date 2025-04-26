import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import InvestorPage from '@/pages/InvestorPage';
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

// Removed duplicate Router function

function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/InvestorPage" component={InvestorPage} />
            <Route path="/:rest*" component={NotFound} />
        </Switch>
    );
}

function App() {
    const [loading, setLoading] = useState(true);
    
    // Prevent scrolling during loading
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [loading]);

    return (
        <>
            {loading && <Loader onFinished={() => setLoading(false)} />}
            <div style={{ display: loading ? 'none' : 'block' }}>
                <Router />
                <Toaster />
            </div>
        </>
    );
}

export default App;
