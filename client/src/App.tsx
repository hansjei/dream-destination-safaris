import { useLocation, useSearch } from 'wouter';
import { TooltipProvider } from '@/components/ui/tooltip';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Layout } from '@/components/SafariLayout';
import Home from '@/pages/Home';
import {About,DestinationIndex,DestinationDetail,ExperienceIndex,ExperienceDetail,SafariIndex,SafariDetail,GuideIndex,GuideDetail,Plan,Contact,Legal,NotFound} from '@/pages/ContentPages';
function Router(){const[location]=useLocation();const query=useSearch();const path=location.replace(/\/+$/,'')||'/';const parts=path.split('/').filter(Boolean);let page;
if(path==='/')page=<Home/>;else if(['/about-us-2','/about-us'].includes(path))page=<About/>;else if(['/make-a-request','/plan-your-trip'].includes(path))page=<Plan/>;else if(path==='/contact')page=<Contact/>;else if(path==='/privacy-policy')page=<Legal/>;else if(path==='/terms-and-conditions')page=<Legal terms/>;else if(parts[0]==='destinations'&&parts.length<=2)page=parts[1]?<DestinationDetail slug={parts[1]}/>:<DestinationIndex/>;else if(parts[0]==='experiences'&&parts.length<=2)page=parts[1]?<ExperienceDetail slug={parts[1]}/>:<ExperienceIndex/>;else if(parts[0]==='safaris'&&parts.length<=2)page=parts[1]?<SafariDetail slug={parts[1]}/>:<SafariIndex/>;else if(parts[0]==='travel-guide'&&parts.length<=2)page=parts[1]?<GuideDetail slug={parts[1]}/>:<GuideIndex/>;else page=<NotFound/>;return <Layout><div key={path+'?'+query}>{page}</div></Layout>}
export default function App(){return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Router/></TooltipProvider></ThemeProvider></ErrorBoundary>}
