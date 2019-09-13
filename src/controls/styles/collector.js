/**
 * External dependencies
 */
import createEmotion from 'create-emotion';
import { debounce } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { blockNameToClassName } from '../../utils';
import { getBlockStyles, getBlocksWithControls } from './utils';

class StylesCollector extends Component {
	/**
	 * Reference to the DOM node used
	 * to render the stylesheets.
	 */
	node = null;

	/**
	 * Reference to the styles created during
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

		this.debouncedUpdateStyles = debounce( this.updateStyles.bind( this ), 200 );
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
	}

	/**
	 * Lifecycle hook.
	 *
	 * @param  {Object} prevProps
	 * @return {void}
	 */
	componentDidUpdate( prevProps ) {
		const { isDirty } = this.props;
		const { isDirty: prevIsDirty } = prevProps;

		if ( isDirty && ! prevIsDirty ) {
			// This is the first iteration so we need to update
			// the styles as soon as possible.
			this.updateStyles();
		} else if ( isDirty && isDirty === prevIsDirty ) {
			// For the rest of the iterations, we debounce updating
			// because this callback can be invoked many times in
			// a short amount of time.
			this.debouncedUpdateStyles();
		}
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
	 * Updates the styles in the post's meta.
	 *
	 * @return {void}
	 */
	updateStyles() {
		this.emotion.flush();

		this.props.blocks.forEach( ( block ) => {
			const { name, attributes } = block;

			const className = blockNameToClassName( name, attributes.mightyBlocksId );
			const styles = getBlockStyles( {
				...block,
				states: this.props.states,
			}, 'frontend' );

			this.emotion.injectGlobal( {
				[ `.${ className }` ]: styles,
			} );
		} );

		const newStyles = this.emotion.sheet.tags
			.map( ( tag ) => tag.innerText )
			.join( '\n' );

		if (
			( this.lastStyles !== null && this.lastStyles === newStyles ) || // Styles aren't changed since last time.
			( this.lastStyles === null && newStyles === '' ) // Styles are empty which is no-op.
		) {
			return;
		}

		this.props.editPost( {
			meta: {
				_mighty_blocks_styles: newStyles,
			},
		} );

		this.lastStyles = newStyles;
	}

	/**
	 * Renders the component.
	 *
	 * @return {null}
	 */
	render() {
		return null;
	}
}

export default compose(
	withSelect( ( select ) => {
		const { getBlocks } = select( 'core/block-editor' );
		const { isEditedPostDirty } = select( 'core/editor' );
		const { getStates } = select( 'mighty-blocks/states' );

		return {
			blocks: getBlocksWithControls( getBlocks() ),
			states: getStates(),
			isDirty: isEditedPostDirty(),
		};
	} ),

	withDispatch( ( dispatch ) => {
		const { editPost } = dispatch( 'core/editor' );

		return { editPost };
	} )
)( StylesCollector );
