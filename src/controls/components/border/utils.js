/**
 * External dependencies
 */
import { upperFirst } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Icon } from '../../../components/icons';
import {
	BORDER_SIDE_ALL,
	BORDER_SIDE_TOP,
	BORDER_SIDE_RIGHT,
	BORDER_SIDE_BOTTOM,
	BORDER_SIDE_LEFT,

	BORDER_STYLE_SOLID,
	BORDER_STYLE_HIDDEN,
	BORDER_STYLE_DOTTED,
	BORDER_STYLE_DASHED,
	BORDER_STYLE_DOUBLE,
	BORDER_STYLE_GROOVE,
	BORDER_STYLE_OUTSET,
	BORDER_STYLE_INSET,
	BORDER_STYLE_RIDGE,
	BORDER_STYLE_NONE,
} from './constants';

/**
 * Returns a qualified attribute identifier.
 *
 * @param  {string} side
 * @param  {string} property
 * @return {string}
 */
export function createSideAttributeIdentifier( side, property ) {
	return `border${ upperFirst( side ) }${ upperFirst( property ) }`;
}

/**
 * Extracts the values or accessor for the given side.
 *
 * @param  {Object} items
 * @param  {string} side
 * @return {Object}
 */
export function getValuesOrAccessorsBySide( items, side ) {
	return [
		'width',
		'style',
		'color',
	].reduce( ( memo, property ) => {
		memo[ property ] = items[ createSideAttributeIdentifier( side, property ) ];

		return memo;
	}, {} );
}

/**
 * Returns a list of the available sides as tabs.
 *
 * @return {Object[]}
 */
export function getSideTabs() {
	return [
		{
			name: BORDER_SIDE_ALL,
			title: <Icon icon="side-all" />,
			className: 'mighty-blocks-control__tab',
		},
		{
			name: BORDER_SIDE_TOP,
			title: <Icon icon="side-top" />,
			className: 'mighty-blocks-control__tab',
		},
		{
			name: BORDER_SIDE_RIGHT,
			title: <Icon icon="side-right" />,
			className: 'mighty-blocks-control__tab',
		},
		{
			name: BORDER_SIDE_BOTTOM,
			title: <Icon icon="side-bottom" />,
			className: 'mighty-blocks-control__tab',
		},
		{
			name: BORDER_SIDE_LEFT,
			title: <Icon icon="side-left" />,
			className: 'mighty-blocks-control__tab',
		},
	];
}

/**
 * Returns a list of border style options.
 *
 * @return {Object[]}
 */
export function getStyleOptions() {
	return [
		{ value: BORDER_STYLE_SOLID, label: __( 'Solid', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_HIDDEN, label: __( 'Hidden', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_DOTTED, label: __( 'Dotted', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_DASHED, label: __( 'Dashed', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_DOUBLE, label: __( 'Double', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_GROOVE, label: __( 'Groove', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_OUTSET, label: __( 'Outset', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_INSET, label: __( 'Inset', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_RIDGE, label: __( 'Ridge', 'mighty-blocks' ) },
		{ value: BORDER_STYLE_NONE, label: __( 'None', 'mighty-blocks' ) },
	];
}
