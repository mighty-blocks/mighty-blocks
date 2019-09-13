/**
 * Internal dependencies
 */
import { getCSSGradient } from './utils';

/**
 * Renders the preview of the gradient
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function Preview( props ) {
	const {
		backgroundGradientType,
		backgroundGradientAngle,
		backgroundGradientStartColor,
		backgroundGradientStopColor,
		backgroundGradientStartPosition,
		backgroundGradientStopPosition,
	} = props.values;

	return (
		<span className="mighty-blocks-background-gradient-control__preview">
			<span
				className="mighty-blocks-background-gradient-control__preview-inner"
				style={ {
					backgroundImage: getCSSGradient( {
						type: backgroundGradientType,
						angle: backgroundGradientAngle,
						startColor: backgroundGradientStartColor,
						stopColor: backgroundGradientStopColor,
						startPosition: backgroundGradientStartPosition,
						stopPosition: backgroundGradientStopPosition,
					} ),
				} }
			></span>
		</span>
	);
}

export default Preview;
