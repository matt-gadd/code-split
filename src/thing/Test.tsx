import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './test.m.css';

export default create()(() => <div classes={[css.root]}>yay</div>);
