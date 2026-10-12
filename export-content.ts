import { allRoutes, destinations, experiences, journeys, guides, BRAND } from './client/src/content';
import { writeFileSync } from 'node:fs';
writeFileSync('/home/ubuntu/dream-safari/qa/content.json',JSON.stringify({allRoutes,destinations,experiences,journeys,guides,BRAND},null,2));
console.log(`Exported ${allRoutes.length} routes`);
