export interface TzProvider {
  /**
   *
   * @param address Tezos address you want to get the balance for (eg tz1...)
   */
  getBalance(address: string): Promise<number>;

  /**
   *
   * @param address Tezos address you want to get the delegate for (eg tz1...)
   */
  getDelegate(address: string): Promise<string | null>;
}