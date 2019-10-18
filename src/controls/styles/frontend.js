/**
 * External dependencies
 */
import createEmotion from 'create-emotion';
import { debounce } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { blockNameToClassName } from '../../utils';
import { getBlockStyles } from './utils';

class FrontendStyles extends Component {
	/**
	 * Reference to DOM node that renders
	 * the stylesheets.
	 *
	 * @type {Node}
	 */
	node = null;

	/**
	 * Reference to the styles collected during
	 * the last iteration.
	 *
	 * @type {string}
	 */
	lastStyles = null;

	/**
	 * Constructor.
	 *
	 * @return {void}
	 */
	constructor() {
		super( ...arguments );

		this.debouncedCompile = debounce( this.compile.bind( this ), 200 );
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		this.node = document.createElement( 'div' );

		this.emotion = createEmotion( {
			container: this.node,
			speedy: false,
		} );

		this.lastStyles = this.props.attributes.mightyBlocksStyles || null;

		this.compile();
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentDidUpdate() {
		this.debouncedCompile();
	}

	/**
	 * Lifecycle hook.
	 *
	 * @return {void}
	 */
	componentWillDestroy() {
		this.emotion.flush();

		this.emotion = null;
		this.node = null;
	}

	/**
	 * Compile the styles.
	 *
	 * @return {void}
	 */
	compile() {
		const {
			name,
			attributes,
			setStyles,
		} = this.props;

		// Clear already generated styles.
		this.emotion.flush();

		const className = blockNameToClassName( name, attributes.mightyBlocksId );
		const styles = getBlockStyles( this.props, 'frontend' );

		// Compile the styles.
		this.emotion.injectGlobal( {
			[ `.${ className }` ]: styles,
		} );

		// Collect the styles.
		const newStyles = this.emotion.sheet.tags
			.map( ( tag ) => tag.innerText )
			.join( '\n' );

		const stylesAreSame = this.lastStyles !== null && this.lastStyles === newStyles;
		const stylesAreEmpty = this.lastStyles === null && newStyles === '';

		if ( stylesAreSame || stylesAreEmpty ) {
			return;
		}

		setStyles( newStyles );

		this.lastStyles = newStyles;
	}

	/**
	 * Render the component.
	 *
	 * @return {null}
	 */
	render() {
		return null;
	}
}

export default compose( [
	withSelect( ( select, { name } ) => {
		const { getBlockSupport } = select( 'core/blocks' );
		const { getStates } = select( 'mighty-blocks/states' );
		const { getBreakpoints } = select( 'mighty-blocks/breakpoints' );

		return {
			controls: getBlockSupport( name, 'controls', [] ),
			breakpoints: getBreakpoints(),
			states: getStates(),
		};
	} ),

	withDispatch( ( dispatch, { clientId } ) => {
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );

		return {
			setStyles( styles ) {
				updateBlockAttributes( clientId, {
					mightyBlocksStyles: styles,
				} );
			},
		};
	} ),
] )( FrontendStyles );
