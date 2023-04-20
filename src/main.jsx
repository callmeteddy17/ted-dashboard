import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerLicense } from '@syncfusion/ej2/base';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense(
  'Mgo+DSMBaFt+QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQlliTn5Wd0xiUH5feHw=;Mgo+DSMBPh8sVXJ1S0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpScUVmWHZfeXVWT2g=;ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0JjXH5XcX1UQGFU;MTc0NjExMEAzMjMxMmUzMTJlMzMzNVB1WTl4ZVl1Ym1RREl0dVlld3E4RGliMmZYUUhUclpDNk1Yc3lUdGdlakk9;MTc0NjExMUAzMjMxMmUzMTJlMzMzNWFZZ3I5Y2c2R1k0T00xWk9mQmN2OTcweXN3YUY0b0g5d2g1TDRYSk90aGs9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckRkWXpfeXVcRGReWQ==;MTc0NjExM0AzMjMxMmUzMTJlMzMzNU50b1Fwb1JabnR3aGRYWUhLTFpYVVdyYjNKZGVqZ0NIZ2lQb0dZOXY1Tm89;MTc0NjExNEAzMjMxMmUzMTJlMzMzNVNTWmNDbGIwdTlOWlo2S1IvcjBpeWVKTHEvdExwQXdqc0tzTWQ3TkQwZTg9;Mgo+DSMBMAY9C3t2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0JjXH5XcX1WRWdU;MTc0NjExNkAzMjMxMmUzMTJlMzMzNWZLWTErSDhDUVF2RVZlcFQ5RGhJTmZnelN2bWFQbjUzamsyZ3l4SDVjcUE9;MTc0NjExN0AzMjMxMmUzMTJlMzMzNU9xckJnU25ERHNUZjJWMXFqYjh4bCtYaC9ESTVHUHNOU1M1cVVTV1Q2ZEE9;MTc0NjExOEAzMjMxMmUzMTJlMzMzNU50b1Fwb1JabnR3aGRYWUhLTFpYVVdyYjNKZGVqZ0NIZ2lQb0dZOXY1Tm89'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
