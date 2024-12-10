import { ThemedLayoutV2 } from '@refinedev/antd';
import React from 'react';
import Header from './header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={() => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Replace with your logo's path */}
          <img
            src="/DealSource.jpg"
            alt="Custom Logo"
            style={{ height: 20, marginRight: 8 }} // Adjust height and margin as needed
          />
        </div>
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;