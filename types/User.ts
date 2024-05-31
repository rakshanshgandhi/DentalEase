export interface User {
    id: string;
    firstName: string | null;
    lastName: string | null; 
    emailAddresses: { id: string; emailAddress: string }[]; // Assuming email address is always available
    primaryEmailAddressId: string;
    publicMetadata: {
      role: string;
    };
  }
  