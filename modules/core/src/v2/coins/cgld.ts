/**
 * @prettier
 */
import { BaseCoin } from '../baseCoin';
import { BitGo } from '../../bitgo';
import { BaseCoin as StaticsBaseCoin } from '@bitgo/statics';
import { AbstractEthLikeCoin } from './abstractEthLikeCoin';
import { Cgld as CgldAccountLib } from '@bitgo/account-lib';

export class Cgld extends AbstractEthLikeCoin {
  protected constructor(bitgo: BitGo, staticsCoin?: Readonly<StaticsBaseCoin>) {
    super(bitgo, staticsCoin);
  }

  static createInstance(bitgo: BitGo, staticsCoin?: Readonly<StaticsBaseCoin>): BaseCoin {
    return new Cgld(bitgo, staticsCoin);
  }

  isValidPub(pub: string): boolean {
    let valid = true;
    try {
      new CgldAccountLib.KeyPair({ pub });
    } catch (e) {
      valid = false;
    }
    return valid;
  }
}
