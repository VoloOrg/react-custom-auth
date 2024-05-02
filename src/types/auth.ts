import { Profile } from 'store/types';

export type LoginCredentials = Pick<Profile, 'email'> & { password: string }