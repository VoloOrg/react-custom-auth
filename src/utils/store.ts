import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'types/store';

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkConfig>();