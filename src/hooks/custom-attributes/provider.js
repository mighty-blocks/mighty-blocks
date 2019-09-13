/**
 * External dependencies
 */
import nanoid from 'nanoid';
import { isUndefined, isNil } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

class CustomAttributesProvider extends Component {
	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const {
			clientId,
			attributes,
			setAttributes,
			trackIdentifier,
			shouldSetIdentifier,
		} = this.props;

		let { mightyBlocksId } = attributes;

		if ( shouldSetIdentifier ) {
			mightyBlocksId = nanoid();

			setAttributes( {
				mightyBlocksId,
			} );
		}

		if ( mightyBlocksId ) {
			trackIdentifier( mightyBlocksId, clientId );
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillUnmount() {
		const { attributes, untrackIdentifier } = this.props;

		untrackIdentifier( attributes.mightyBlocksId );
	}

	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		return this.props.children;
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const { clientId, attributes } = props;

		const { mightyBlocksId } = attributes;
		const { getIdentifierClientId } = select( 'mighty-blocks/identifiers' );

		const trackedClientId = getIdentifierClientId( mightyBlocksId );
		const isNewBlock = isUndefined( mightyBlocksId );
		const isDuplicatedBlock = ! isUndefined( mightyBlocksId ) && ! isNil( trackedClientId ) && clientId !== trackedClientId;

		return {
			shouldSetIdentifier: isNewBlock || isDuplicatedBlock,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { trackIdentifier, untrackIdentifier } = dispatch( 'mighty-blocks/identifiers' );

		return {
			trackIdentifier,
			untrackIdentifier,
		};
	} )
)( CustomAttributesProvider );
