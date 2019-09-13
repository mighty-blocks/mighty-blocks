/**
 * Returns an action object used to start tracking of the specified identifier.
 *
 * @param  {string} identifier
 * @param  {string} clientId
 * @return {Object}
 */
export function trackIdentifier( identifier, clientId ) {
	return {
		type: 'TRACK_IDENTIFIER',
		payload: {
			identifier,
			clientId,
		},
	};
}

/**
 * Returns an action object used to stop tracking of the specified identifier.
 *
 * @param  {string} identifier
 * @return {Object}
 */
export function untrackIdentifier( identifier ) {
	return {
		type: 'UNTRACK_IDENTIFIER',
		payload: {
			identifier,
		},
	};
}
