/**
 * Internal dependencies
 */
import './styles/editor.scss';
import './controls';
import { registerStores } from './stores';
import { registerHooks } from './hooks';
import { registerFormats } from './formats';

/**
 * Poof! Blocks everywhere...
 */
registerStores();
registerHooks();
registerFormats();
