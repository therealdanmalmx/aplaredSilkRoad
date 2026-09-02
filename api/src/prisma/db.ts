import postgres from '@prisma/orm-postgres/runtime';
import 'dotenv/config';
import type { Contract } from './contract.d';
import contractJson from './contract.json' with { type: 'json' };

const url = process.env['DATABASE_URL'];
if (!url) throw new Error('DATABASE_URL is not set');

export const db = postgres<Contract>({
  contractJson,
  url: process.env['DATABASE_URL']!,
});


