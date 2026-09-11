#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/207709cad1b95bd404e94bfeac0e9754bfdcc070b9aba8f0844448f70409b0f6/contract';
import startContract from '../../snapshots/207709cad1b95bd404e94bfeac0e9754bfdcc070b9aba8f0844448f70409b0f6/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/e0c1d1357b6dbe47fec753d5690f2f59fce39144a0fe51048d7743e0c8530e12/contract';
import endContract from '../../snapshots/e0c1d1357b6dbe47fec753d5690f2f59fce39144a0fe51048d7743e0c8530e12/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, lit } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'product',
        column: col('isDeleted', 'bool', {
          notNull: true,
          default: lit(false),
          codecRef: { codecId: 'pg/bool@1' },
        }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
