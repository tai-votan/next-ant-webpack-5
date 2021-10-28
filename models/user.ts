export interface UserLogin {
  email: string;
  password: string;
}

export interface CurrentUser {
  id: number;
  accountType: number;
  shopId: number;
  recruiterId: number;
  name: string;
  email: string;
  phone: string;
  useMarketplace: boolean;
  avatar: string | null;
  hashCode: string | null;
  refreshToken: string;
  isApprove: boolean;
  timestamp: string;
  token: string;
}
