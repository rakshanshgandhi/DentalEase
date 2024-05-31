export interface User {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmailAddressId: string;
  emailAddresses: { id: string; emailAddress: string }[];
  publicMetadata: {
    role: string;
  };
}
