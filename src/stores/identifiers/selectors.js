/**
 * Returns the `clientId` value associated with the specified identifier.
 *
 * @param  {Object} state
 * @param  {string} identifier
 * @return {?string}
 */
export const getIdentifierClientId = ( state, identifier ) => state.items[ identifier ] || null;
