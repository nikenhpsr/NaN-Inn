import { Listing, User } from "@prisma/client";

export type SaveListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SaveUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
