/**
 * External dependencies
 */
import { Global } from '@emotion/core';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { blockNameToClassName } from '../../utils';
import { getBlockStyles } from './utils';

class EditorStyles extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		styles: {},
	};

	/**
	 * Keeps track of initialization status.
	 *
	 * @type {boolean}
	 */
	isInitialized = false;

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		const { attributes } = this.props;

		if ( attributes.mightyBlocksId ) {
			this.initialize();
		}
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} prevProps
	 * @return {void}
	 */
	componentDidUpdate( prevProps ) {
		const { attributes } = this.props;
		const { attributes: prevAttributes } = prevProps;

		if ( ! this.isInitialized && attributes.mightyBlocksId ) {
			this.initialize();
			return;
		}

		if ( this.isInitialized && attributes !== prevAttributes ) {
			this.applyStyles();
		}
	}

	/**
	 * Performs the initialization.
	 *
	 * @return {void}
	 */
	initialize() {
		this.isInitialized = true;

		this.applyStyles();
	}

	/**
	 * Applies the styles to the block.
	 *
	 * @return {void}
	 */
	applyStyles() {
		const {
			name,
			attributes,
			controls,
			breakpoints,
			states,
		} = this.props;

		const className = blockNameToClassName( name, attributes.mightyBlocksId );

		this.setState( {
			className,
			styles: {
				[ `.${ className }` ]: getBlockStyles( {
					name,
					attributes,
					controls,
					breakpoints,
					states,
				}, 'editor' ),
			},
		} );
	}

	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const { className, styles } = this.state;

		return (
			<Fragment>
				{ this.props.children( {
					className,
				} ) }

				<Global styles={ styles } />
			</Fragment>
		);
	}
}

export default withSelect( ( select, { name } ) => {
	const { getBlockSupport } = select( 'core/blocks' );
	const { getBreakpoints } = select( 'mighty-blocks/breakpoints' );
	const { getStates } = select( 'mighty-blocks/states' );

	return {
		controls: getBlockSupport( name, 'controls', [] ),
		breakpoints: getBreakpoints(),
		states: getStates(),
	};
} )( EditorStyles );
